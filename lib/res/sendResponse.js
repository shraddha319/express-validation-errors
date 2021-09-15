const formatResponse = (payload) => ({ success: true, data: payload });

const formatError = (payload) => ({ success: false, error: payload });

const sendReponse = ({ res, payload, statusCode = 200, override = {} }) => {
  const data =
    statusCode < 300 ? formatResponse(payload) : formatError(payload);
  return res.status(statusCode).json({ ...data, ...override });
};

module.exports = sendReponse;
