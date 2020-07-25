import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import loadSurvey from './loadSurveyReducer';
import manageAnswerReducer from './manageAnswerReducer';
import resourceReducer from './resourceReducer';

const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  loadSurvey,
  manageAnswerReducer,
  resourceReducer
});

export default rootReducer;
