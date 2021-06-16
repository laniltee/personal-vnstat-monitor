const express = require("express");

const { getYesterdayValues, getTodayValues } = require("./utils/vnstatUtils");
const { convertValuesToBytes } = require("./utils/numberUtils");

const app = express();

app.listen(8083, async () => {
  console.log("VNSTAT Monitor Running");
  try {
    const yesterdayData = convertValuesToBytes(await getYesterdayValues());
    const todayData = convertValuesToBytes(await getTodayValues());

    console.log("-----------------------------------");
    console.log(yesterdayData);
    console.log("-----------------------------------");
    console.log(todayData);
  } catch (e) {
    console.error(e);
  }
});
