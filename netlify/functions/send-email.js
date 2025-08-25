const sgMail = require("@sendgrid/mail");
exports.handler = async (event, context) => {
  sgMail.setApiKey(process.env.NETLIFY_EMAILS_PROVIDER_API_KEY);

  let data; // Declare 'data' at the top to have function-wide scope

  console.log("Received event body:", event.body); // Check what's in the body

  if (!event.body) {
    console.error("No event body!");
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "No event body" }),
    };
  }

  try {
    data = JSON.parse(event.body); // Now 'data' is assigned and can be used throughout the function
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Invalid JSON input",
        error: error.message,
      }),
    };
  }

  // Ensure required fields are present for sending an email
  if (!data.to || !data.from || !data.templateId) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Required email data fields are missing",
      }),
    };
  }

  const msg = {
    to: data.to,
    from: data.from,
    templateId: data.templateId, // Ensure this ID matches the template you created
    dynamic_template_data: data.dynamic_template_data, // The dynamic data for the placeholders in the template
  };
  if (data.reply_to) {
    msg.reply_to = data.reply_to;
  }

  try {
    console.log("Sending email with message:", msg);
    await sgMail.send(msg);
    console.log("Email sent");
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: error.code || 500, // Fallback to 500 if error.code is not a number
      body: JSON.stringify({ error: error.message }),
    };
  }
};
