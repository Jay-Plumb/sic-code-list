Standard industrial classification SIC code list in accordance to the SEC

## Installation

```npm
npm i sic-code-list
```

## Usage

Pass in an SIC code as an array of codes and retrieve the content:

```js
import { lookupSICCode } from "sic-code-list";

async function fetchSICContent() {
  try {
    const data = await lookupSICCode([100, 200]);
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
    "sicCode": 100,
    "office": "Industrial Applications and Services",
    "industry": "AGRICULTURAL PRODUCTION-CROPS"
  }
]
```
