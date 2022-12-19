# Upload JavaScript SDK

---

Full Documentation: **[Upload JavaScript SDK Docs »](https://upload.io/docs/upload-sdk/javascript)**

---

JavaScript client library for the [Upload API](https://upload.io/docs/upload-api) (includes all endpoints, whereas the original [Upload.js](https://github.com/upload-io/upload-js) library does not).

Supports Node.js + modern browsers.

## Installation

```bash
npm install upload-js-full
```

Additional step for Node.js:

```bash
npm install node-fetch
```

## Usage

- [Upload](#upload)
- [Get File Details](#get-file-details)
- [List Folder Children](#list-folder-children)
- **[See All Methods »](https://upload.io/docs/upload-sdk/javascript)**

### Upload

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
    // - Buffer
    // - ReadableStream (Node.js)
    data: "Example Data"
  })
  .then(
    uploadedFile => console.log(uploadedFile),
    error => console.error(error)
  );
```

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
    folders => console.log(folders),
    error => console.error(error)
  );
```

## Full Documentation

**[Upload JavaScript SDK Docs »](https://upload.io/docs/upload-sdk/javascript)**

## License

[MIT](LICENSE)
