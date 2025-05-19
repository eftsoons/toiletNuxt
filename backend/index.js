const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const TelegramBot = require("node-telegram-bot-api");

const { createTransport } = require("nodemailer");

const app = express();

app.use(express.json());
app.use(cors());

const token = process.env.TELEGRAM_BOT_TOKEN;
const email = process.env.EMAIL;
const token_email = process.env.TOKEN_EMAIL;
const toemail = process.env.TO_EMAIL;
const host = process.env.HOST;
const admin = JSON.parse(process.env.ADMIN_ID);

const bot = new TelegramBot(token);

const transporter = createTransport({
  host: host,
  port: 587,
  secure: false,
  auth: {
    user: email,
    pass: token_email,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

app.post("/regist_zakaz", async (req, res) => {
  const full_name = req.body.full_name;
  const region = req.body.region;
  const location = req.body.location;
  const street = req.body.street;
  const number = req.body.number;
  const setdataactive1 = req.body.setdataactive1;
  const setdataactive2 = req.body.setdataactive2;
  const setdataactive3 = req.body.setdataactive3;
  const setdataactive4 = req.body.setdataactive4;
  const remoteness = req.body.remoteness;

  const text = `Заказ:\nИмя: ${full_name}\nРегион: ${region}\nНаселенный пункт: ${location}\nУлица: ${street}\nТелефон: ${number}\nУдаленность: ${remoteness}\nВозможность подъезда воровайки: ${
    setdataactive1 == 1 ? "Да" : "Нет"
  }\nНужна ли копка ямы/установка септика: ${
    setdataactive2 == 1 ? "Да" : "Нет"
  }\nНужно ли подготавливать местность: ${
    setdataactive3 == 1 ? "Да" : "Нет"
  }\nНужно ли подключение к электричеству: ${
    setdataactive4 == 1 ? "Да" : "Нет"
  }`;

  for (let i = 0; i < admin.length; i++) {
    await bot.sendMessage(admin[i], text).catch(() => {});
  }

  transporter.sendMail({
    from: email,
    to: toemail,
    subject: "Заказ",
    text: text,
  });

  res.send("ok");
});

app.post("/regist_call", async (req, res) => {
  const full_name = req.body.full_name;
  const number = req.body.number;

  const text = `Звонок:\nИмя: ${full_name}\nТелефон: ${number}`;

  for (let i = 0; i < admin.length; i++) {
    await bot.sendMessage(admin[i], text).catch(() => {});
  }

  transporter.sendMail({
    from: email,
    to: toemail,
    subject: "Звонок",
    text: text,
  });

  res.send("ok");
});

app.listen(5012, () => {
  console.log("server start");
});
