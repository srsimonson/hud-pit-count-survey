CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "admin" BOOL DEFAULT FALSE
);

CREATE TABLE "survey" (
  "survey_id" SERIAL PRIMARY KEY,
  "user_id" INT REFERENCES "user",
  "resource_id" INT REFERENCES "resource",
  "survey_location" VARCHAR(50),
  "survey_date" VARCHAR(50),
  "survey_time" VARCHAR(10),
  "survey_county" VARCHAR(50),
  "survey_coc" VARCHAR(50),
  "survey_consent" BOOL,
  "survey_q1"  VARCHAR(50),
  "survey_q2" VARCHAR(6),
  "survey_q3" INT,
  "survey_q4" VARCHAR(5),
  "survey_q5" VARCHAR(50),
  "survey_q6" VARCHAR(6),
  "survey_q7" INT,
  "survey_q8" VARCHAR(6),
  "survey_q9" VARCHAR(50),
  "survey_q10" VARCHAR(50),
  "survey_q11" VARCHAR(6),
  "survey_q12" VARCHAR(6),
  "survey_q13" VARCHAR(6),
  "survey_q14" VARCHAR(6),
  "survey_q15" VARCHAR(6),
  "survey_q16" VARCHAR(50),
  "survey_q17" VARCHAR(50),
  "survey_q17a" VARCHAR(50),
  "survey_q18a" VARCHAR(6),
  "survey_q18b" VARCHAR(6),
  "survey_q18c" VARCHAR(6),
  "survey_q18d" VARCHAR(6),
  "survey_q18e" VARCHAR(6),
  "survey_q19" VARCHAR(6),
  "survey_q20" VARCHAR(6),
  "survey_q21" VARCHAR(6)
);

CREATE TABLE "resource" (
  "resource_id" SERIAL PRIMARY KEY,
  "resource_county" VARCHAR(50),
  "resource_name" VARCHAR(50),
  "resource_phone" VARCHAR(10),
  "resource_location" VARCHAR(50)
);

CREATE TABLE "question" (
  "question_id" SERIAL PRIMARY KEY,
  "question_text" VARCHAR(200),
  "response_type" VARCHAR(100)
);

CREATE TABLE "response" (
  "response_id" SERIAL PRIMARY KEY,
  "question_id" INT REFERENCES "question",
  "description" VARCHAR(50)
);

INSERT INTO "question" ("question_text", "response_type") 
VALUES ('Location:', 'text'), 
('Date:', 'date'),
('Time:', 'time'),
('County:', 'text'),
('CoC:', 'text'),
('County:', 'text'),
('Can I have about 10 minutes of your time?', 'dropdown'),
('Where are you sleeping tonight?', 'dropdown'),
('Did another volunteer or survey worker already ask you these same questions about where you are staying tonight?', 'dropdown');
-- Completed through #2

INSERT INTO response (question_id, description)
VALUES 
(1, null),
(2, null),
(3, null),
(4, null),
(5, null),
(6, null),
(7, 'YES'),
(7, 'NO'),
(8, 'Street or sidewalk'),
(8, 'Vehicle (car, van, RV, truck)'),
(8, 'Park'),
(8, 'Abondoned building'),
(8, 'Bus, train station, airport'),
(8, 'Under bridge/overpass'),
(8, 'Woods or outdoor encampment'),
(8, 'Other'),
(8, 'Emergency Shelter'),
(8, 'Transitional Housing'),
(8, 'Motel/hotel'),
(8, 'House or apartment'),
(8, 'Jail, hospital, treatment program'),
(9, 'YES'),
(9, 'NO');
-- Completed through #2

SELECT * FROM question
JOIN response ON question.question_id = response.question_id
--GROUP BY question.question_id;
ORDER BY question.question_id ASC;

SELECT question.question_id, question.question_text, json_agg(response.description) AS test FROM question
JOIN response ON question.question_id = response.question_id
GROUP BY question.question_id
ORDER BY question.question_id ASC;

SELECT question.question_id, question_text FROM question
JOIN response ON question.question_id = response.question_id
--GROUP BY question.question_id
ORDER BY question.question_id ASC;

SELECT * FROM question
JOIN response ON question.question_id = response.question_id
ORDER BY question.question_id ASC;