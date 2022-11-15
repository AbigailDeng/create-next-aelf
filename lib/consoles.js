const chalk = require("chalk");
const output = require("./utils/output");

const program = {
  name: "create-next-aelf",
};

exports.help = function () {
  return `
    Only ${chalk.green("<project-directory>")} is required.
    If you have any problems, do not hesitate to file an issue:
      ${chalk.cyan(
        "https://github.com/AElfProject/aelf-boilerplate/issues/new"
      )}
  `;
};

// no project name
exports.missingProjectName = function () {
  return `
Please specify the project directory:
  ${chalk.cyan(program.name)} ${chalk.green("<project-directory>")}
For example:
  ${chalk.cyan(program.name)} ${chalk.green("my-next-app")}
Run ${chalk.cyan(`${program.name} --help`)} to see all options.
`;
};

// project already exist
exports.alreadyExists = function (projectName) {
  return `
Uh oh! Looks like there's already a directory called ${chalk.red(
    projectName
  )}. Please try a different name or delete that folder.`;
};

exports.copying = function (projectName) {
  return `
Creating ${chalk.bold(chalk.green(projectName))}...
`;
};
