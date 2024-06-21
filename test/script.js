import { lookupSICCode } from "sic-code-list";

async function fetchSICCode() {
  try {
    const data = await lookupSICCode("100");
    console.log(data[0]);
  } catch (error) {
    console.error(error);
  }
}

fetchSICCode();
