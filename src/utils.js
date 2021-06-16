const {units} = require('./constants');

const areGibibytes = (value) => {
  return value.toString().endsWith(units.Gib)
};

const areMebibytes = (value) => {
  return value.toString().endsWith(units.MiB)
};

const getGibValue = (value) => {
  return parseInt(value.replace(units.Gib).trim());
};

const getMibValue = (value) => {
  return parseInt(value.replace(units.MiB).trim());
};

const convertGibToGB = (value) => {

};

const convertMibtoMB = (value) => {

}

