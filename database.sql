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
  "survey_q1" VARCHAR(50),
  "survey_q2" VARCHAR(50),
  "survey_q3" VARCHAR(10),
  "survey_q4" VARCHAR(50),
  "survey_q5" VARCHAR(50),
  "survey_q6" BOOL,
  "survey_q7"  VARCHAR(50),
  "survey_q8" VARCHAR(6),
  "survey_q9" INT,
  "survey_q10" VARCHAR(5),
  "survey_q11" VARCHAR(50),
  "survey_q12" VARCHAR(6),
  "survey_q13" INT,
  "survey_q14" VARCHAR(6),
  "survey_q15" VARCHAR(50),
  "survey_q16" VARCHAR(50),
  "survey_q17" VARCHAR(6),
  "survey_q18" VARCHAR(6),
  "survey_q19" VARCHAR(6),
  "survey_q20" VARCHAR(6),
  "survey_q21" VARCHAR(6),
  "survey_q22" VARCHAR(50),
  "survey_q23" VARCHAR(50),
  "survey_q24" VARCHAR(50),
  "survey_q25" VARCHAR(6),
  "survey_q26" VARCHAR(6),
  "survey_q27" VARCHAR(6),
  "survey_q28" VARCHAR(6),
  "survey_q29" VARCHAR(6),
  "survey_q30" VARCHAR(6),
  "survey_q31" VARCHAR(6),
  "survey_q32" VARCHAR(6)
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
  "question_header" VARCHAR(100),
  "question_text" VARCHAR(200),
  "response_type" VARCHAR(100)
);

CREATE TABLE "response" (
  "response_id" SERIAL PRIMARY KEY,
  "question_id" INT REFERENCES "question",
  "description" VARCHAR(50)
);

INSERT INTO "question" ("question_header", "question_text", "response_type") 
VALUES ('Survey Data','Location:', 'text'), 
('Survey Data','Date:', 'date'),
('Survey Data','Time:', 'time'),
('Survey Data','County:', 'text'),
('Survey Data','CoC:', 'text'),
('Consent', 'Can I have about 10 minutes of your time?', 'dropdown'),
('Homeless Status', 'Where are you sleeping tonight?', 'dropdown'),
('Homeless Status', 'Did another volunteer or survey worker already ask you these same questions about where you are staying tonight?', 'dropdown'),
('Family Status', 'Including yourself, how many adults and children are there in your household, who are sleeping in the same location with you tonight?', 'text'),
('Initials', 'What are your initials?', 'text'),
('Family Status', 'How is the person(s) you are staying with related to you?', 'dropdown'),
('Family Status', 'Just to confirm, are you staying with these people here, in this location, tonight?', 'dropdown'),
('Age', 'How old are you?', 'number'),
('Identity', 'Are you Hispanic or Latino?', 'dropdown'),
('Identity', 'What is your race?', 'text'),
('Identity', 'What is your gender?', 'dropdown'),
('Veteran Status', 'Have you served in the United States Armed Forces (Army, Navy, Air Force, Marine Corps, or Coast Guard)?', 'dropdown'),
('Veteran Status', 'Were you ever called into active duty as a member of the National Guard or as a Reservist?', 'dropdown'),
('Veteran Status', 'Have you ever received health care or benefits from a Veterans Administration medical center?', 'dropdown'),
('Benefits', 'Do you receive any disability benefits such as Social Security Income, Social Security Disability Income, or Veteran''s Disability Benefits?', 'dropdown'),
('Homeless Status', 'Is this the first time you have been homeless?', 'dropdown'),
('Homeless Status', 'How long have you been homeless this time? Only include time spent staying in shelters and/or the streets.', 'text'),
('Homeless Status', 'Including this time, how many times have you been homeless in the past 3 years, that is, since July 2017? Was it 4 or more times or less than 4 times?', 'text'),
('Homeless Status', 'If you add up all the times you have been homeless in the past 3 years, how long have you been homeless?', 'text'),
('MI/CD/Disability Status', 'Do you drink alcoholic beverages or use drugs (illegal prescription for non-medical reasons)?', 'dropdown'),
('MI/CD/Disability Status', 'Do you have psychiatric or emotional conditions such as depression or schizophrenia?', 'dropdown'),
('MI/CD/Disability Status', 'Do you have a physical disability? This could include something that substantially limits one or more basic physical activities such as walking, climbing stairs, reaching, lifting, or carrying?', 'dropdown'),
('MI/CD/Disability Status', 'Do any of the situations we just discussed keep you from holding a job or living in stable housing?', 'dropdown'),
('MI/CD/Disability Status', 'Which ones keep you from holding a job or living in stable housing?', 'dropdown'),
('MI/CD/Disability Status', 'Have you ever received special education services for an extended period of time?', 'dropdown'),
('MI/CD/Disability Status', 'Do you have AIDS or an HIV-related illness?', 'dropdown'),
('DV Status', 'Are you experiencing homelessness because you are currently fleeing domestic violence, dating violence, sexual assault, or stalking?', 'dropdown')
;


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

INSERT INTO survey (user_id, survey_location)
VALUES ('1', 'test 2');

DELETE FROM survey WHERE survey_id = 1;