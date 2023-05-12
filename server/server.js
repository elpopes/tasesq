require("dotenv").config();
const express = require("express");
const sgMail = require("@sendgrid/mail");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post("/send-email", (req, res) => {
  const { to, from, subject, text } = req.body;

  const msg = {
    to,
    from,
    subject,
    text,
  };

  sgMail
    .send(msg)
    .then(() => {
      res.json({ status: "Email sent" });
    })
    .catch((error) => {
      console.error(error);
      if (error.response) {
        console.error(error.response.body);
      }
      res.status(500).json({ status: "Error", message: error });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
