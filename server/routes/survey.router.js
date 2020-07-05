const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    // let sqlText = `SELECT * FROM question
    // // JOIN response ON question.question_id = response.question_id;
    // // `
    // let sqlText = `SELECT question.question_id, question.question_text, json_agg(response.description) AS test FROM question
    // JOIN response ON question.question_id = response.question_id
    // GROUP BY question.question_id
    // ORDER BY question.question_id ASC;`
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

router.get('/all', (req, res) => {
    let sqlText = `SELECT * FROM survey;`;
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

router.post('/', (req, res) => {
    let user_id = req.body.user_id;
    let surveyAnswer = req.body.surveyAnswer;
    console.log('req.body:', req.body);
    
    let sqlText = `INSERT INTO survey (user_id, survey_q1)
    VALUES ($1, $2);`;
    pool.query(sqlText, [user_id, surveyAnswer])
    .then(result => {
        res.send(result.rows);
        res.sendStatus(200);
    })
});

router.delete('/:id', (req, res) => {
    let id = req.params.id
    let sqlText = `DELETE FROM survey WHERE survey_id = $1;`;
    console.log('req.params.id', id);
    pool.query(sqlText, [id])
    .then((result) => {
        console.log('result:', result.rows);
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('DELETE ERROR', error);
        res.sendStatus(500);
    })
})

module.exports = router;