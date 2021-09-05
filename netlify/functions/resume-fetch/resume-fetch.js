const fetch = require("node-fetch");

const handler = async function () {
  try {
    const response = await fetch(
      "https://github.com/Exaphis/resume/releases/download/v1/resume.pdf"
    );
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText };
    }
    const data = await response.buffer();
    const data_str = data.toString();
    return {
      statusCode: 200,
      body: data_str,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "filename=Kevin Wu Resume.pdf",
      },
    };
  } catch (error) {
    // output to netlify function log
    console.log(error);
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: "Failed to fetch.",
    };
  }
};

module.exports = { handler };