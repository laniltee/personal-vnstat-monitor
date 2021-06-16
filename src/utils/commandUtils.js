const { exec } = require("child_process");

const getVnstatOutput = () => {
  return new Promise((resolve, reject) => {
    exec("vnstat", (error, stdout, stderr) => {
      if (error) {
        reject(error);
      }
      if (stderr) {
        reject(stderr);
      }
      resolve(stdout);
    });
  });
};

module.exports = {
  getVnstatOutput,
};
