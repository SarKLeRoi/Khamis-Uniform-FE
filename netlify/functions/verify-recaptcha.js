const axios = require("axios");
require("dotenv").config();

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { token } = JSON.parse(event.body);
    const googleResponse = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      {},
      {
        params: {
          secret: process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY,
          response: token,
        },
      }
    );

    if (googleResponse.data.success) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          success: true,
          message: "Captcha verification passed",
        }),
      };
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          message: "Captcha verification failed",
          errors: googleResponse.data["error-codes"],
        }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: "Server error",
        error: error.message,
      }),
    };
  }
};
