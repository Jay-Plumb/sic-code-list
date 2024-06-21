async function loadData() {
  try {
    // Adjust the path as necessary to match your project structure
    const module = await import("./data.json", { assert: { type: "json" } });
    const data = module.default;
    return data;
  } catch (error) {
    console.error("Failed to load data.json with type 'json':", error);
  }
}

async function lookupSICCode(sicCodes) {
  try {
    const data = await loadData();
    const matchingResults = data.filter((row) =>
      sicCodes.includes(+row["sicCode"])
    );
    return matchingResults;
  } catch (error) {
    console.error(error);
  }
}

export { lookupSICCode };
