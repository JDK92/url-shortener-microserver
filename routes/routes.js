const { Router } = require("express");

const {
  checkHttp,
  checkShortUrl
} = require('../middlewares/middlewares');

const {
  getIndex,
  postShortUrl,
  getShortUrl
} = require('../controllers/controller');


const router = Router();

router.get('/', getIndex);
router.get('/api/shorturl/:id', checkShortUrl, getShortUrl);

router.post('/api/shorturl', checkHttp, postShortUrl);


module.exports = router;