const { resolveNaptr } = require('dns');
const express = require ('express');
const { idleCount } = require('../modules/pool');
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
  let taskInput = req.body.taskName
  let queryText = `INSERT INTO "to-do" ("taskName") VALUES ('${taskInput}');`
  pool.query(queryText).then((result) => {
    console.log(result);
    res.sendStatus(200);
  }).catch((error) => {
    console.log('error in post', error);
    res.sendStatus(500);
  });
});

router.delete('/:id', (req, res) => {
  let taskID = req.params.id;
  let queryText = `DELETE FROM "to-do" WHERE "id" = ${req.params.id};`
  pool.query(queryText).then((result) => {
    console.log(result);
    res.sendStatus(200);    
  }).catch((error) => {
    console.log('error in DELETE', error);
    res.sendStatus(500);    
  });
});


module.exports = router;