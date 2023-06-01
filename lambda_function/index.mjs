import sgMail from "@sendgrid/mail";

export const handler = async (event) => {
  const { to, from, subject, text } = JSON.parse(event.body);

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to,
    from,
    subject,
    text,
  };

  try {
    await sgMail.send(msg);
    return {
      statusCode: 200,
      body: JSON.stringify({ status: "Email sent" }),
    };
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
    return {
      statusCode: 500,
      body: JSON.stringify({ status: "Error", message: error.toString() }),
    };
  }
};
