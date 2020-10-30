/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..", "src");

const schemataPath = [];
const run = currentPath => {
  const matches = [];
  const currentDirectory = path.resolve(root, currentPath);
  const files = fs.readdirSync(currentDirectory).filter(name => name !== "__generated__");
  for (const file of files) {
    const stats = fs.statSync(path.resolve(currentDirectory, file));
    if (stats.isDirectory()) {
      run(path.join(currentPath, file));
    } else if (stats.isFile() && file.endsWith(".json")) {
      matches.push(file);
    }
  }
  if (matches.length > 0) {
    schemataPath.push({ path: currentPath, files: matches });
  }
};

run("");
fs.writeFileSync(path.resolve("src", "schemas.json"), JSON.stringify(schemataPath, undefined, 2));
