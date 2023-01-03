# Upload JavaScript SDK (Full Version)

---

Documentation: **[Upload JavaScript SDK (Full Version) »](https://upload.io/docs/upload-sdk/javascript/full)**

---

Welcome to the [Upload JavaScript SDK (Full Version)](https://upload.io/docs/upload-sdk/javascript/full) for the [Upload API](https://upload.io/docs/upload-api).

Versions Explained:

- Full Version (this package): `upload-js-full` (supports: browsers, Node.js, file uploads & other operations).
- Minimal Version: [`upload-js`](https://github.com/upload-io/upload-js) (supports: browsers only, file uploads only).

## Installation

```bash
npm install upload-js-full
```

Additional step for Node.js:

```bash
npm install node-fetch
```

## Usage

- [Upload a File](#upload-a-file)
- [Download a File](#download-a-file)
- [Process a File](#process-a-file)
- [Get File Details](#get-file-details)
- [List Folder Children](#list-folder-children)
- **[See All Methods »](https://upload.io/docs/upload-sdk/javascript)**

### Upload a File

```javascript
import Upload from "upload-js-full";
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
import Upload from "upload-js-full";
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
import Upload from "upload-js-full";
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
import Upload from "upload-js-full";
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

### List Folder Children

```javascript
import Upload from "upload-js-full";
import fetch from "node-fetch"; // Node.js only.

const folderApi = new Upload.FolderApi(
  new Upload.Configuration({
    fetchApi: fetch,
    apiKey: "YOUR_UPLOAD_API_KEY" // e.g. "secret_xxxxx"
  })
);

folderApi
  .listFolderChildren({
    accountId: "YOUR_UPLOAD_ACCOUNT_ID", // e.g. "W142hJk"
    folderPath: "/"
  })
  .then(
    // Note: operation is paginated, see 'result.cursor' and 'params.cursor'.
    result => console.log(`Items in folder: ${result.children.length}`),
    error => console.error(error)
  );
```

## Documentation

Please see: **[Upload JavaScript SDK Docs »](https://upload.io/docs/upload-sdk/javascript)**

## License

[MIT](LICENSE)
