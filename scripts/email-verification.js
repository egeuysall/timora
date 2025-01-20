/*
const nodemailer = require("nodemailer");

function generateCode() {
    // Generate a random number between 0 (inclusive) and 1 (exclusive)
    const randomNumber = Math.random();
  
    // Scale the number to the range of 6-digit numbers (100000 to 999999)
    const scaledNumber = randomNumber * (999999 - 100000 + 1) + 100000;
  
    // Round down to the nearest integer to get a 6-digit whole number
    const sixDigitNumber = Math.floor(scaledNumber);
  
    return sixDigitNumber;
}

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Timora</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');

        /* Reset styles for consistency */
        html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            background-color: #fff;
        }

        body {
            font-family: 'Inter', sans-serif;
            color: #121212;
        }

        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }

        .header {
            text-align: center;
            padding: 20px;
            background-color: #121212;
            color: #ebebeb;
        }

        .header img {
            max-width: 150px;
            height: auto;
            margin-bottom: 10px;
        }

        .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 700;
        }

        .body {
            padding: 24px;
            text-align: center;
        }

        .body h2 {
            margin-top: 0;
            font-size: 20px;
            font-weight: 600;
            color: #121212;
        }

        .body p {
            font-size: 16px;
            line-height: 1.6;
            color: #ababab;
        }

        .code-block {
            font-family: 'JetBrains Mono', monospace;
            background-color: #f7f7f7;
            border: 1px solid #ababab;
            border-radius: 6px;
            padding: 12px;
            font-size: 20px;
            font-weight: bold;
            color: #121212;
            display: inline-block;
            margin: 20px 0;
        }

        .quote-section {
            margin: 30px 0;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        .quote-section h3 {
            margin: 0;
            font-size: 18px;
            font-weight: 600;
            color: #121212;
        }

        .quote-section p {
            margin-top: 10px;
            font-size: 16px;
            font-style: italic;
            color: #ababab;
        }

        .footer {
            text-align: center;
            padding: 16px;
            background-color: #f8f8f8;
            color: #ababab;
            font-size: 14px;
        }

        .footer a {
            color: #121212;
            text-decoration: none;
            font-weight: 600;
        }

        .footer a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <img src="https://i.postimg.cc/x1NL6SzK/IMG-3158.png" alt="Timora Logo">
            <h1>Welcome to Timora</h1>
        </div>

        <!-- Body -->
        <div class="body">
            <h2>Your Journey to Productivity Begins!</h2>
            <p>Use the 6-digit code below to complete your setup and start maximizing your focus.</p>
            <div class="code-block">${generateCode()}</div>
            <div class="quote-section">
                <h3>Quote of the Day</h3>
                <p>"The key is not to prioritize what's on your schedule, but to schedule your priorities." – Stephen Covey</p>
            </div>
            <p>Timora helps you stay productive, track your progress, and find motivation through quotes and gamified rewards.</p>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>&copy; 2025 Timora. All rights reserved.</p>
            <p>Need help? Visit our <a href="#https://support.google.com/">Support Center</a>.</p>
        </div>
    </div>
</body>
</html>`;

async function sendEmail() {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "ahmetegeuysal@gmail.com",
            pass: "lrnb btfx emyx aegs",
        },
    });

    let mailOptions = {
        from: '"Ege Uysal" <ahmetegeuysal@gmail.com>',
        to: "egeuysal54@gmail.com",
        subject: "Your Timora Verification Code",
        html: `${html}`,
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log("Email sent: " + info.response);
    } catch (error) {
        console.error("Error sending email: ", error);
    }
}

sendEmail();
*/