const Url = require('../models/model');

const checkHttp = (req, res, next) => {
  const httpRule = /^https?\:\/\//i;
  const url = req.body.url;
  
  if (!httpRule.test(url)) {
    return res.json({ error: "invalid url" });
  }

  next();
};

const checkShortUrl = async (req, res, next) => {

  const short_url = parseInt(req.params.id);
  const url = await Url.findOne({ short_url });

  if (!url) {
    return res.json({
      status: 404,
      msg: "Not found / registered",
      body: null
    });
  }

  res.locals.url = url.original_url;
  next();
}


module.exports = {
  checkHttp,
  checkShortUrl
}