export default function (req, res, next) {
  //spa for the page
  const paths = ["/dashboard"];

  if (paths.includes(req.originalUrl)) {
    res.spa = true;
  }

  next && next.call && next();
}
