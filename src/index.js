const express = require("express");
const exphbs = require("express-handlebars");

const { getYesterdayValues, getTodayValues } = require("./utils/vnstatUtils");
const { convertValuesToBytes } = require("./utils/numberUtils");

const app = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/", async function (req, res) {
  try {
    const yesterdayData = convertValuesToBytes(await getYesterdayValues());
    const todayData = convertValuesToBytes(await getTodayValues());
    res.render("home", {
      yesterdayReceived: yesterdayData.received,
      yesterdaySent: yesterdayData.sent,
      yesterdayTotal: yesterdayData.total,
      todayReceived: todayData.received,
      todaySent: todayData.sent,
      todayTotal: todayData.total,
    });
  } catch (e) {
    console.error(e);
  }
});

app.listen(8083, async () => {
  console.log("VNSTAT Monitor Running");
});
