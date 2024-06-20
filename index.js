import fs from "fs";
import csv from "csv-parser";

// Read CSV file and return the data as an array of objects
function readCSV(filename) {
  let data = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream(filename)
      .pipe(csv())
      .on("data", (row) => {
        data.push(row);
      })
      .on("end", () => {
        resolve(data);
      })
      .on("error", reject);
  });
}

async function lookupSICCode(sicCode) {
  try {
    const data = await readCSV("../node_modules/sic-code-list/data.csv");
    return data.filter((row) => row["SIC Code"] === sicCode);
  } catch (error) {
    console.error(error);
  }
}

export { lookupSICCode };
