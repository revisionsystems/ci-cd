const utc = new Date();
const fs = require('fs');

const path = "package.json"
const versionPath = ".version";

if (fs.existsSync(path)) {
    const fileBuffer = fs.readFileSync(path);
    const jsonRaw = fileBuffer.toString('utf8');
    const packageJson = JSON.parse(jsonRaw);
    const versionToWrite = `${packageJson.version}.${utc.getFullYear()}.${utc.getMonth() + 1}.${utc.getDate()}.${utc.getHours()}.${utc.getMinutes()}.${utc.getSeconds()}`;
    fs.writeFileSync(versionPath, versionToWrite);
    console.log(`Success: New version is -> ${versionToWrite}`)
} else {
   console.error("No package.json exists.");
   process.exit(1);
}
