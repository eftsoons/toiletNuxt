const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const TelegramBot = require("node-telegram-bot-api");

const app = express();

app.use(express.json());
app.use(cors());

const token = process.env.TELEGRAM_BOT_TOKEN;

const bot = new TelegramBot(token);

app.post("/regist_zakaz", async (req, res) => {
  const full_name = req.body.full_name;
  const region = req.body.region;
  const location = req.body.location;
  const street = req.body.street;
  const number = req.body.number;

  await bot.sendMessage(
    1619511344,
    `Заказ:\nИмя: ${full_name}\nРегион: ${region}\nНаселенный пункт: ${location}\nУлица: ${street}\nТелефон: ${number}`
  );

  res.send("ok");
});

app.post("/regist_call", async (req, res) => {
  const full_name = req.body.full_name;
  const number = req.body.number;

  await bot.sendMessage(
    1619511344,
    `Звонок:\nИмя: ${full_name}\nТелефон: ${number}`
  );

  res.send("ok");
});

app.listen(5012, () => {
  console.log("server start");
});
