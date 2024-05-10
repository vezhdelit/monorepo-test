import { Bot, webhookCallback } from "grammy";

const token = process.env.BOT_TOKEN;
if (!token) throw new Error("BOT_TOKEN is unset");

const bot = new Bot("7198756818:AAGIRl5svb0Yl8zxZSZIfAY8f408t0VIL2o");

bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));

bot.on("message", (ctx) => ctx.reply("Got another message!"));

bot.start();

export default webhookCallback(bot, "std/http");
