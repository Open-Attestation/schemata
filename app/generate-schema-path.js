/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..", "src");
const excludedFiles = ["draft-06-schema.json"];

const schemataPath = [];
const run = (currentPath) => {
  const matches = [];
  const currentDirectory = path.resolve(root, currentPath);
  const files = fs.readdirSync(currentDirectory).filter((name) => !(name === "__generated__" || name === "__schema__"));
  for (const file of files) {
    const stats = fs.statSync(path.resolve(currentDirectory, file));
    if (stats.isDirectory()) {
      run(path.join(currentPath, file));
    } else if (stats.isFile() && file.endsWith(".json") && !excludedFiles.includes(file)) {
      matches.push(file);
    }
  }
  if (matches.length > 0) {
    const paths = currentPath.split("/");
    schemataPath.push({ tld: paths[0], path: currentPath, files: matches });
  }
};

run("");
fs.writeFileSync(path.resolve("src", "schemas.json"), JSON.stringify(schemataPath, undefined, 2));
