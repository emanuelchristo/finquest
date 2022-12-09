const bot_id = process.env.bot_id;
const chat_id = process.env.chat_id;

const makePostRequest = async (url, details) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(details),
  });
  return await response.json();
};

export const sendMessage = async (text, parse_mode) => {
  const endpoint = `https://api.telegram.org/bot${bot_id}/sendMessage`;
  await makePostRequest(endpoint, {
    text,
    parse_mode,
    chat_id,
  });
};
