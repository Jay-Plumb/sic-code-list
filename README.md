## Installation

```npm
npm i sic-code-list
```

## Usage

Pass in an SIC code such as `100` and retrieve the `sicCode`, `office` and `industry`:

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
    "sicCode": "100",
    "office": "Industrial Applications and Services",
    "industry": "AGRICULTURAL PRODUCTION-CROPS"
  }
]
```
