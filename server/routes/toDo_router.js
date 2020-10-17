const { resolveNaptr } = require('dns');
const express = require ('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  console.log('in get');
  res.sendStatus(200);
});


module.exports = router;