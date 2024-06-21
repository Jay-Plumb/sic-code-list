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

async function lookupSICCode(sicCode) {
  try {
    const data = await loadData();
    return data.filter((row) => row["sicCode"] === sicCode);
  } catch (error) {
    console.error(error);
  }
}

export { lookupSICCode };
