import { UploadManager, Configuration, FileApi } from "../src";
import fetch from "node-fetch";
import randomGen from "random-seed";
import * as buffer from "buffer";
import streamEqual from "stream-equal";
import { Readable } from "stream"; // Node.js only.
import { ReadableWebToNodeStream } from "readable-web-to-node-stream";

if (process.env.UPLOAD_SECRET_API_KEY === undefined) {
  throw new Error("Expected env var: UPLOAD_SECRET_API_KEY");
}
if (process.env.UPLOAD_ACCOUNT_ID === undefined) {
  throw new Error("Expected env var: UPLOAD_ACCOUNT_ID");
}
const accountId = process.env.UPLOAD_ACCOUNT_ID;

const configuration = new Configuration({
  fetchApi: fetch as any,
  apiKey: process.env.UPLOAD_SECRET_API_KEY // e.g. "secret_xxxxx"
});

const uploadManager = new UploadManager(configuration);
const fileApi = new FileApi(configuration);

function createPseudoRandomStream(sizeInBytes: number): NodeJS.ReadableStream {
  const generator = randomGen.create("my-seed");

  let producedSize = 0;
  return new Readable({
    read(readSize) {
      let shouldEnd = false;

      if (producedSize + readSize >= sizeInBytes) {
        readSize = sizeInBytes - producedSize;
        shouldEnd = true;
      }

      producedSize += readSize;
      this.push(generator.string(readSize));

      if (shouldEnd) {
        this.push(null);
      }
    }
  });
}

async function testStreamingUpload(expectedSize: number): Promise<void> {
  const expectedData = (): NodeJS.ReadableStream => createPseudoRandomStream(expectedSize);
  const uploadedFile = await uploadManager.upload({
    accountId,
    data: expectedData(),
    size: expectedSize
  });
  const fileDetails = await fileApi.getFileDetails({ accountId, filePath: uploadedFile.filePath });
  const actualData = await (await fileApi.downloadFile({ accountId, filePath: uploadedFile.filePath })).stream();
  const actualSize = fileDetails.size;
  const streamsAreEqual = await streamEqual(new ReadableWebToNodeStream(actualData) as any, expectedData() as any);
  expect(actualSize).toEqual(expectedSize);
  expect(streamsAreEqual).toEqual(true);
}

describe("UploadManager", () => {
  test("upload a string", async () => {
    const expectedData = "Example Data";
    const expectedMime = "text/plain";
    const uploadedFile = await uploadManager.upload({
      accountId,
      data: expectedData
    });
    const fileDetails = await fileApi.getFileDetails({ accountId, filePath: uploadedFile.filePath });
    const actualData = await (await fileApi.downloadFile({ accountId, filePath: uploadedFile.filePath })).text();
    const actualMime = fileDetails.mime;
    expect(actualData).toEqual(expectedData);
    expect(actualMime).toEqual(expectedMime);
  });

  test("upload a BLOB", async () => {
    const expectedData = JSON.stringify({ someValue: 42 });
    const expectedMime = "application/json";
    const uploadedFile = await uploadManager.upload({
      accountId,
      data: new buffer.Blob([expectedData], { type: expectedMime })
    });
    const fileDetails = await fileApi.getFileDetails({ accountId, filePath: uploadedFile.filePath });
    const actualData = await (await fileApi.downloadFile({ accountId, filePath: uploadedFile.filePath })).text();
    const actualMime = fileDetails.mime;
    expect(actualData).toEqual(expectedData);
    expect(actualMime).toEqual(expectedMime);
  });

  test("upload a buffer", async () => {
    const expectedData = "Example Data";
    const expectedMime = "application/octet-stream";
    const uploadedFile = await uploadManager.upload({
      accountId,
      data: Buffer.from(expectedData, "utf8")
    });
    const fileDetails = await fileApi.getFileDetails({ accountId, filePath: uploadedFile.filePath });
    const actualData = await (await fileApi.downloadFile({ accountId, filePath: uploadedFile.filePath })).text();
    const actualMime = fileDetails.mime;
    expect(actualData).toEqual(expectedData);
    expect(actualMime).toEqual(expectedMime);
  });

  test("upload a buffer (override MIME)", async () => {
    const expectedData = "Example Data";
    const expectedMime = "text/plain";
    const uploadedFile = await uploadManager.upload({
      accountId,
      data: Buffer.from(expectedData, "utf8"),
      mime: expectedMime
    });
    const fileDetails = await fileApi.getFileDetails({ accountId, filePath: uploadedFile.filePath });
    const actualData = await (await fileApi.downloadFile({ accountId, filePath: uploadedFile.filePath })).text();
    const actualMime = fileDetails.mime;
    expect(actualData).toEqual(expectedData);
    expect(actualMime).toEqual(expectedMime);
  });

  test(
    "upload a small stream",
    async () => {
      await testStreamingUpload(Math.pow(1024, 2) * 2); // 2MB
    },
    10 * 60 * 1000
  );

  test(
    "upload a large stream",
    async () => {
      await testStreamingUpload(Math.pow(1024, 2) * 500); // 500MB
    },
    10 * 60 * 1000
  );
});
