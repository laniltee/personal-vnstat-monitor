const { days, networkInterfaces } = require("../constants");
const { getVnstatOutput } = require("../utils/commandUtils");

const splitInterfaceData = (output, interfaceId) => {
  return output.split(interfaceId)[1].split(":")[1];
};

const getYesterdayData = (interfaceData) => {
  return interfaceData.split(days.yesterday)[1].split(days.today)[0].trim();
};

const getTodayData = (interfaceData) => {
  return interfaceData.split(days.today)[1].trim();
};

const mapDataRowForValues = (dataRow) => {
  const values = dataRow.split("/").map((value) => value.trim());
  return {
    received: values[0],
    sent: values[1],
    total: values[2],
  };
};

const getTodayValues = async () => {
  const vnStatOutput = await getVnstatOutput();
  const wifiInterfaceData = splitInterfaceData(
    vnStatOutput,
    networkInterfaces.wireless
  );
  return mapDataRowForValues(getTodayData(wifiInterfaceData));
};

const getYesterdayValues = async () => {
  const vnStatOutput = await getVnstatOutput();
  const wifiInterfaceData = splitInterfaceData(
    vnStatOutput,
    networkInterfaces.wireless
  );
  return mapDataRowForValues(getYesterdayData(wifiInterfaceData));
};

module.exports = {
  getTodayValues,
  getYesterdayValues,
};
