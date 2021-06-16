const { units } = require("../constants");

const areGibibytes = (value) => {
  return value.toString().endsWith(units.Gib);
};

const areMebibytes = (value) => {
  return value.toString().endsWith(units.MiB);
};

const getGibValue = (value) => {
  return parseInt(value.replace(units.Gib).trim());
};

const getMibValue = (value) => {
  return parseInt(value.replace(units.MiB).trim());
};

const roundOffValue = (value, decimalPlaces = 2) => {
  return value.toFixed(decimalPlaces);
};

const convertGibToGB = (value) => {
  return roundOffValue(value * 1.07374)
    .toString()
    .concat(" ")
    .concat(units.GB);
};

const convertMibtoMB = (value) => {
  return roundOffValue(value * 1.04858)
    .toString()
    .concat(" ")
    .concat(units.MB);
};

const convertIbToB = (value) => {
  if (areMebibytes(value)) {
    return convertMibtoMB(getMibValue(value));
  } else if (areGibibytes(value)) {
    return convertGibToGB(getGibValue(value));
  }
  return null;
};

const convertValuesToBytes = (dataRow) => ({
  received: convertIbToB(dataRow.received),
  sent: convertIbToB(dataRow.sent),
  total: convertIbToB(dataRow.total),
});

module.exports = {
  convertValuesToBytes,
};
