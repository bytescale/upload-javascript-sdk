# Upload JavaScript SDK

The Upload JavaScript SDK allows you to quickly integrate your application with [Upload.io](https://upload.io).

Effortlessly upload, optimize, transform, and host your digital media assets.

## Versions

There are two actively maintained JavaScript SDKs:

| Package          | Repository                                                    | Browsers | Node.js | File Uploads | [All Endpoints](https://upload.io/docs/upload-api) | Size |
| ---------------- | ------------------------------------------------------------- | -------- | ------- | ------------ | -------------------------------------------------- | ---- |
| `upload-js-full` | (this repository)                                             | ✅       | ✅      | ✅           | ✅                                                 | 13KB |
| `upload-js`      | [upload-io/upload-js](https://github.com/upload-io/upload-js) | ✅       | ❌      | ✅           | ❌                                                 | 6KB  |

(Pick the version that best suits your feature and package size requirements.)

## Installation

```bash
npm install upload-js-full
```

Additional step for Node.js:

```bash
npm install node-fetch
```

## Full Documentation

**[Upload JavaScript SDK Full Documentation »](https://upload.io/docs/upload-sdk/javascript/full)**

## Quick Guide

- [Upload a File](#upload-a-file)
- [Download a File](#download-a-file)
- [Process a File](#process-a-file)
- [Get File Details](#get-file-details)
- [List Folder](#list-folder)
- **[See All Methods »](https://upload.io/docs/upload-sdk/javascript)**

### Upload a File

```javascript
import * as Upload from "upload-js-full";
import fetch from "node-fetch"; // Node.js only.

const uploadManager = new Upload.UploadManager(
  new Upload.Configuration({
    fetchApi: fetch,
    apiKey: "YOUR_UPLOAD_API_KEY" // e.g. "secret_xxxxx"
  })
);

uploadManager
  .upload({
    accountId: "YOUR_UPLOAD_ACCOUNT_ID", // e.g. "W142hJk"
    // Supported types for 'data' field:
    // - String
    // - Blob
    // - File (i.e. from a DOM file input element)
    // - Buffer
    // - ReadableStream (Node.js), e.g. fs.createReadStream("file.txt")
    data: "Example Data"
  })
  .then(
    uploadedFile => console.log(uploadedFile),
    error => console.error(error)
  );
```

### Download a File

```javascript
import * as Upload from "upload-js-full";
import fetch from "node-fetch"; // Node.js only.

const fileApi = new Upload.FileApi(
  new Upload.Configuration({
    fetchApi: fetch,
    apiKey: "YOUR_UPLOAD_API_KEY" // e.g. "secret_xxxxx"
  })
);

fileApi
  .downloadFile({
    accountId: "YOUR_UPLOAD_ACCOUNT_ID", // e.g. "W142hJk"
    filePath: "/uploads/2022/12/25/hello_world.txt"
  })
  .then(response => response.text()) // .text() | .json() | .blob() | .stream()
  .then(
    fileContents => console.log(fileContents),
    error => console.error(error)
  );
```

**Note:** you can also download files using: `https://upcdn.io/{accountId}/raw/{filePath}`

### Process a File

```javascript
import * as Upload from "upload-js-full";
import fetch from "node-fetch"; // Node.js only.

const fileApi = new Upload.FileApi(
  new Upload.Configuration({
    fetchApi: fetch,
    apiKey: "YOUR_UPLOAD_API_KEY" // e.g. "secret_xxxxx"
  })
);

fileApi
  .processFile({
    accountId: "YOUR_UPLOAD_ACCOUNT_ID", // e.g. "W142hJk"
    filePath: "/uploads/2022/12/25/image.jpg",
    transformation: "thumbnail" // Create transformations here: https://upload.io/dashboard/transformations
  })
  .then(response => response.stream()) // .text() | .json() | .blob() | .stream()
  .then(
    imageByteStream =>
      new Promise((resolve, reject) => {
        const writer = fs.createWriteStream("image-thumbnail.jpg");
        writer.on("close", resolve);
        writer.on("error", reject);
        imageByteStream.pipe(writer);
      })
  )
  .then(
    () => console.log("Thumbnail saved to 'image-thumbnail.jpg'"),
    error => console.error(error)
  );
```

**Note:** you can also process files using: `https://upcdn.io/{accountId}/{transformation}/{filePath}`

### Get File Details

```javascript
import * as Upload from "upload-js-full";
import fetch from "node-fetch"; // Node.js only.

const fileApi = new Upload.FileApi(
  new Upload.Configuration({
    fetchApi: fetch,
    apiKey: "YOUR_UPLOAD_API_KEY" // e.g. "secret_xxxxx"
  })
);

fileApi
  .getFileDetails({
    accountId: "YOUR_UPLOAD_ACCOUNT_ID", // e.g. "W142hJk"
    filePath: "/uploads/2022/12/25/image.jpg"
  })
  .then(
    fileDetails => console.log(fileDetails),
    error => console.error(error)
  );
```

### List Folder

```javascript
import * as Upload from "upload-js-full";
import fetch from "node-fetch"; // Node.js only.

const folderApi = new Upload.FolderApi(
  new Upload.Configuration({
    fetchApi: fetch,
    apiKey: "YOUR_UPLOAD_API_KEY" // e.g. "secret_xxxxx"
  })
);

folderApi
  .listFolder({
    accountId: "YOUR_UPLOAD_ACCOUNT_ID", // e.g. "W142hJk"
    folderPath: "/",
    recursive: false
  })
  .then(
    // Note: operation is paginated, see 'result.cursor' and 'params.cursor'.
    result => console.log(`Items in folder: ${result.items.length}`),
    error => console.error(error)
  );
```

## License

[MIT](LICENSE)
