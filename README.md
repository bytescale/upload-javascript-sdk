# Upload JavaScript SDK

---

Documentation: **[Upload JavaScript SDK Docs](https://upload.io/docs/upload-sdk/javascript)**

---

This version:

- [`upload-js-full`](https://github.com/upload-io/upload-js-full)
  - Functionality: Methods for all [Upload API](https://upload.io/docs/upload-api) endpoints.
  - Size: 15KB
  - Environments: Browser + Node.js.

Alternative versions:

- [`upload-js`](https://github.com/upload-io/upload-js)
  - Functionality: File upload methods only.
  - Size: 6KB
  - Environments: Browser only.

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
