const Url = require('../models/model');

const getIndex = (req, res) => {
  res.sendFile(process.cwd() + '/views/index.html');
};

const postShortUrl = async (req, res) => {
  const currentIndex = await Url.countDocuments();
  const original_url = req.body.url;
  const short_url = currentIndex + 1;

  const url = new Url({ original_url, short_url });
  await url.save();

  res.json({ original_url, short_url });
};

const getShortUrl = async (req, res) => {
  const short_url = parseInt(req.params.id);
  const { original_url } = await Url.findOne({short_url});

  res.redirect(original_url);
}


module.exports = {
  getIndex,
  postShortUrl,
  getShortUrl
}