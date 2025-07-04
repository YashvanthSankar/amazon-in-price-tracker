require("dotenv").config();

const nightmare = require("nightmare")();
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const url = process.argv[2];
const thresholdPrice = parseFloat(process.argv[3]);

checkPrice();

async function checkPrice() {
    try{
        const priceString = await nightmare
            .goto(url)
            .wait("span.a-price-whole")
            .evaluate(() => {
            return document.querySelector("span.a-price-whole").innerText;
            })
            .end();

        const priceNum = parseFloat(priceString.replace(/,/g, ""));

        if (priceNum < thresholdPrice) {
            sendEmail(
            "Amazon-IN Price Alert",
            `The price of the product at ${url} has dropped below your threshold price of ₹${thresholdPrice}. The current price is ₹${priceNum}.`
            );
        }
    } catch (error) {
    console.error("Error checking price:", error);
    sendEmail(
        "Amazon-IN Price Tracker Error",
        `An error occurred while checking the price of the product at ${url}. Error: ${error.message}`
    );
    }

function sendEmail(subject, body) {
  const email = {
    to: "sweetcolden1@freethecookies.com",
    from: "captainingenious333@gmail.com",
    subject: subject,
    text: body,
    html: body,
  };

  return sgMail.send(email);
}
