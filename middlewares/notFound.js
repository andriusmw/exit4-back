const notFound = (req, res, next) => {
    res.status(404).send({ status: "error", message: "Not found" });
  };
  
  module.exports = notFound;
  