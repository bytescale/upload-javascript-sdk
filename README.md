# Upload JavaScript SDK

---

Documentation: **[Upload JavaScript SDK Docs](https://upload.io/docs/upload-sdk/javascript)**

---

**`upload-js-full`  is the _full_ JavaScript SDK for Upload.io**

Alternative versions:

- [`upload-js`](https://github.com/upload-io/upload-js): lightweight browser-only version.

## Installation

For browsers:

```bash
npm install upload-js-full
```

For Node.js:

```bash
npm install upload-js-full node-fetch
```

## Usage

```javascript
import { FoldersApi } from "upload-js-full";

const foldersApi = new FoldersApi(new Configuration({
  fetchApi: require("node-fetch") // Node.js only.
}));

const folders = await foldersApi.listFolderChildren({
  accountId: "YOUR_ACCOUNT_ID",
  folderPath: "/"
});

// Result: { children: [ {...} ] }
console.log(folders);
```

## Documentation

Please see **[Upload JavaScript SDK](https://upload.io/docs/upload-sdk/javascript)** for detailed docs.

## License

[MIT](LICENSE)
