const handleError = (error, req, res, next) => {
    console.error(error);
  
    res.statusCode = error.statusCode || 500;
    res.send({ status: "error", message: error.message });
  };
  
  module.exports = handleError;
  