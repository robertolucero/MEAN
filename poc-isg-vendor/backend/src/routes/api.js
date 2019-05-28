import express from 'express'

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World - API !!');
});

router.route('/token').get((req, res) => {
  const response = {
    Bearer: 'dummyBearerToken',
    ExpireIn: '2019-12-31'
  };
  res.status(200).json(response);
});

module.exports = router;
