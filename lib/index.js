const consoles = require("./consoles");
const fs = require("fs");
const path = require("path");
const copyDir = require("./utils/copy-dir");

module.exports = function createNextApp(opts) {
  const projectName = opts.projectName;

  // no project name -> exit
  if (!projectName) {
    console.log(consoles.missingProjectName());
    process.exit(1);
  }
  // project already exist -> exit
  if (fs.existsSync(projectName) && projectName !== ".") {
    console.log(consoles.alreadyExists(projectName));
    process.exit(1);
  }

  const projectPath = (opts.projectPath = process.cwd() + "/" + projectName);

  let templatePath = path.resolve(__dirname, "../scaffolds/aelf");

  copyDir({
    templatePath: templatePath,
    projectPath: projectPath,
    projectName: projectName,
  }).catch(function (err) {
    throw err;
  });
};
