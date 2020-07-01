const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    let sqlText = `SELECT * FROM question;`;
    pool.query(sqlText)
    .then(result => {
        res.send(result.rows);
        res.sendStatus(200);
    })
    .catch(error => {
        console.log('ERROR with GET in survey.router', error);
        res.sendStatus(500);
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;