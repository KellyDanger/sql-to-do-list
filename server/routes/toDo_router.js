const { resolveNaptr } = require('dns');
const express = require ('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  console.log('in get');
  let queryText = `SELECT * FROM "to-do";`;
  pool.query(queryText).then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('error in get', error);
    res.sendStatus(500)  
  });
});

router.post('/', (req, res) => {
  console.log('in post');
  let queryText = `INSERT INTO "to-do" ("taskName") VALUES ('Laundry');`
  pool.query(queryText).then((result) => {
    console.log(result);
    res.sendStatus(200);
  }).catch((error) => {
    console.log('error in post', error);
    res.sendStatus(500);
  });
});


module.exports = router;