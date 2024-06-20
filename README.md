## Insallation

```npm
npm i sic-code-list
```

## Usage

Pass in an SIC code such as `100` and retrieve the `SIC Code`, `Office` and `Industry Title`:

```js
import { lookupSICCode } from "sic-code-list";

async function fetchSICContent() {
  try {
    const data = await lookupSICCode("100");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchSICContent();
```

Response:

```json
[
  {
    "SIC Code": "100",
    "Office": "Industrial Applications and Services",
    "Industry Title": "AGRICULTURAL PRODUCTION-CROPS"
  }
]
```
