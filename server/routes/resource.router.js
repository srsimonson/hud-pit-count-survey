const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    let sqlText = `SELECT * FROM resource
    ORDER BY resource_target ASC;`;
    pool.query(sqlText)
    .then(result => {
        res.send(result.rows);
    })
    .catch(error => {
        console.log('ERROR with GET in survey.router', error);
        res.sendStatus(500);
    })
});

/**
 * POST route template
 */
// router.post('/', (req, res) => {

// });

module.exports = router;