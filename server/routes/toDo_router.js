const { resolveNaptr } = require('dns');
const express = require ('express');
const { idleCount } = require('../modules/pool');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  console.log('in get');
  let queryText = `SELECT * FROM "to-do" ORDER BY "id";`;
  pool.query(queryText).then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('error in get', error);
    res.sendStatus(500)  
  });
});//end GET route

router.post('/add/:name', (req, res) => {
  console.log('in post');
  let taskInput = req.params.name;
  let queryText = `INSERT INTO "to-do" ("taskName") VALUES ($1);`;
  pool.query(queryText, [taskInput]).then((result) => {
    console.log(result);
    res.sendStatus(200);
  }).catch((error) => {
    console.log('error in post', error);
    res.sendStatus(500);
  });
});//end POST route

router.delete('/:id', (req, res) => {
  let taskId = req.params.id;
  let queryText = `DELETE FROM "to-do" WHERE "id" = $1;`;
  pool.query(queryText, [taskId]).then((result) => {
    console.log(result);
    res.sendStatus(200);    
  }).catch((error) => {
    console.log('error in DELETE', error);
    res.sendStatus(500);    
  });
});//end Delete route

router.put('/completed/:id', (req, res) => {
  let taskId = req.params.id;
  let completedYet = req.body.taskStatus;
  let queryText = `UPDATE "to-do" SET "completed" = ${completedYet} WHERE "id" = $1;`;
  pool.query(queryText, [taskId]).then((result) => {
    console.log(result);
    res.sendStatus(200);    
  }).catch((error) => {
    console.log('error in put', error);
    res.sendStatus(500);
  });
});//end PUT route


module.exports = router;