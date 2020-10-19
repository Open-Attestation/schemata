/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const mkdirp = require("mkdirp");

const quicktype = path.join(process.cwd(), "node_modules", ".bin", "quicktype");

const generate = ({ path, rootTypeName }) => {
  console.log(`Creating types from src/${path}/schema.json`);
  mkdirp.sync(`src/__generated__/${path}`);
  execSync(
    `${quicktype} -s schema -o src/__generated__/${path}/schema.ts -t ${rootTypeName} --just-types src/${path}/schema.json --no-date-times
`
  );
};

if (fs.existsSync(quicktype) && process.env.npm_config_production !== "true") {
  generate({ path: "sg/gov/tech/geekout/1.0", rootTypeName: "Geekout" });
} else {
  console.log("Not running quicktype");
}