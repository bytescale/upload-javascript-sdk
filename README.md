# Upload JavaScript SDK

---

Full Documentation: **[Upload JavaScript SDK Docs](https://upload.io/docs/upload-sdk/javascript)**

---

This version:

- [`upload-js-full`](https://github.com/upload-io/upload-js-full)
  - Includes support for all [Upload API](https://upload.io/docs/upload-api) endpoints.
  - Node.js + Browsers

Alternative versions:

- [`upload-js`](https://github.com/upload-io/upload-js)
  - Includes support for file uploads only.
  - Browsers only.

## Installation

```bash
npm install upload-js-full
```

Additional step for Node.js:

```bash
npm install node-fetch
```

## Basic Usage

```javascript
import { FolderApi } from "upload-js-full";

const folderApi = new FolderApi(new Configuration({
  fetchApi: require("node-fetch"), // Node.js only.
  apiKey: "YOUR_UPLOAD_API_KEY"
}));

const folders = await folderApi.listFolderChildren({
  accountId: "YOUR_UPLOAD_ACCOUNT_ID",
  folderPath: "/"
});

// Result: { children: [ {...} ] }
console.log(folders);
```

## Documentation

Please see **[Upload JavaScript SDK](https://upload.io/docs/upload-sdk/javascript)** for detailed docs.

## License

[MIT](LICENSE)
