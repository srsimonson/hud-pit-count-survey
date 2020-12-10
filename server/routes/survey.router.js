const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
    let sqlText = `SELECT question.question_id, question.question_header, question.question_text, question.response_type, json_agg(response.description) 
    AS dropdown_option FROM question
    JOIN response ON question.question_id = response.question_id
    GROUP BY question.question_id
    ORDER BY question.question_id ASC;`;
    pool.query(sqlText)
    .then(result => {
        res.send(result.rows);
    })
    .catch(error => {
        console.log('ERROR with GET in survey.router', error);
        res.sendStatus(500);
    })
});

router.get('/all', rejectUnauthenticated, (req, res) => {
    let sqlText = (req.user.admin === true) ? 
    `SELECT * FROM "user"
    JOIN survey ON "user".id=survey.user_id
    ORDER BY survey_id ASC;`
    :
     `SELECT * FROM "user"
    JOIN survey ON "user".id=survey.user_id
    WHERE "user_id"=${req.user.id}
    ORDER BY survey_id ASC;`;
    pool.query(sqlText)
    .then(result => {
        res.send(result.rows);
    })
    .catch(error => {
        console.log('ERROR with GET in survey.router', error);
        res.sendStatus(500);
    })
});

router.post('/', rejectUnauthenticated, (req, res) => {
    let user_id = req.body.user_id;
    // let surveyAnswer = req.body.survey_q1;
    console.log('req.body:', req.body);
    
    let sqlText = `INSERT INTO survey (user_id, survey_q1, survey_q2, survey_q3, survey_q4, survey_q5, survey_q6, survey_q7, survey_q8, survey_q9, survey_q10, survey_q11, survey_q12, survey_q13, survey_q14, survey_q15, survey_q16, survey_q17, survey_q18, survey_q19, survey_q20, survey_q21, survey_q22, survey_q23, survey_q24, survey_q25, survey_q26, survey_q27, survey_q28, survey_q29, survey_q30, survey_q31, survey_q32)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33);`;
    // let sqlText;
    // let insertText;
    // let valuesText;
    // for (let i=1; i<34; i++) {
    //     if (!i === 33) {
    //         insertText = 
    //         sqlText = `INSERT INTO survey (user_id, survey_q${i}) VALUES ($${i});`
    //     } else {
    //         sqlText = `INSERT INTO survey (user_id, survey_q32) VALUES ($33);`
    //     }
    // }

    // let x
    // for (let i=0; i<33; i++) {
    //     x = `req.body.survey_q${i}`
    //     let q
    //     x = q.replace(/"/g, ``);
    //     console.log('hi');
    // }
    

    pool.query(sqlText, [user_id, req.body.survey_q1, req.body.survey_q2, req.body.survey_q3, req.body.survey_q4, req.body.survey_q5, req.body.survey_q6, req.body.survey_q7, req.body.survey_q8, req.body.survey_q9, req.body.survey_q10, req.body.survey_q11, req.body.survey_q12, req.body.survey_q13, req.body.survey_q14, req.body.survey_q15, req.body.survey_q16, req.body.survey_q17, req.body.survey_q18, req.body.survey_q19, req.body.survey_q20, req.body.survey_q21, req.body.survey_q22, req.body.survey_q23, req.body.survey_q24, req.body.survey_q25, req.body.survey_q26, req.body.survey_q27, req.body.survey_q28, req.body.survey_q29, req.body.survey_q30, req.body.survey_q31, req.body.survey_q32,])

    .then(result => {
        // res.send(result.rows);
        res.sendStatus(200)
    })
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    console.log('req.params', req.params);
    let sqlText = `DELETE FROM survey WHERE survey_id = $1;`;
    pool.query(sqlText, [req.params.id])
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