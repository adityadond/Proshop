const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};
const errorHandler = (err, req, res, next) => {
  // sometimes the error may not have a status code
  // if it doesn't, we'll set it to 500
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  // res.status(statusCode);
  // return a json object with the error message
  // and the stack trace (in development mode only)

  //check for mongoose bad object id
  if (err.name === "CastError" && err.kind === "ObjectId") {
    message: "Resource not found";
    statusCode = 404;
  }
  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notFound, errorHandler };
