# 📉 Amazon Price Tracker

A simple Node.js CLI tool that monitors the price of a product on [Amazon.in](https://www.amazon.in) and sends an email alert when the price drops below your desired threshold.   
Built using **Nightmare.js** for web scraping and **SendGrid** for email notifications.

---

## 🚀 Features

- ✅ Headless scraping with Nightmare.js
- ✅ Monitors product prices on Amazon
- ✅ Sends email alerts via SendGrid
- ✅ Easy CLI usage with custom URL and threshold
- ✅ Graceful error handling and alerting

---

## 🛠️ Tech Stack

- [Node.js](https://nodejs.org/)
- [Nightmare.js](https://www.npmjs.com/package/nightmare)
- [SendGrid](https://sendgrid.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## 📦 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/YOUR_USERNAME/amazon-price-tracker.git
cd amazon-price-tracker
```
2. **Install dependencies:**

```bash
npm install
```

3. **Set up environment variables:**

Create a .env file in the root directory:

```env
SENDGRID_API_KEY=your_sendgrid_api_key
```
🔐 Note: The SENDGRID_FROM email must be verified in SendGrid.

🧪 Usage
```bash
node index.js "<amazon_product_url>" <threshold_price>
```
🔁 Example:
```bash
node index.js "https://www.amazon.in/dp/B0CS5XW6TN" 85000
```
If the price drops below ₹85,000, you'll receive an email alert!

---

## 🚧 Limitations
-Amazon frequently changes its HTML structure; scraping selectors may break.
-Scraping too often may result in bot detection or blocks.
-Designed for personal/educational use only — respect website TOS.

