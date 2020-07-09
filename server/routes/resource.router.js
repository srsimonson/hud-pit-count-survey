const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    let sqlText = `SELECT * FROM resource
    ORDER BY resource_name ASC;`;
    pool.query(sqlText)
    .then(result => {
        res.send(result.rows);
    })
    .catch(error => {
        console.log('ERROR with GET in survey.router', error);
        res.sendStatus(500);
    })
});

router.put('/:id', (req, res) => {
    console.log('req.body:', req.body);
    console.log('req.params:', req.params);
    
    let sqlText = `UPDATE resource 
    SET resource_target='${req.body.resource_target}',
    resource_name='${req.body.resource_name}',
    resource_phone='${req.body.resource_phone}',
    resource_location='${req.body.resource_location}'
    WHERE resource_id=${req.params.id};`;
    pool.query(sqlText)
    .then(result => {
        res.sendStatus(200)
    })
    .catch(error => {
        console.log('ERROR with PUT from resource.router.js', error);
        res.sendStatus(500);
    })
  })

module.exports = router;