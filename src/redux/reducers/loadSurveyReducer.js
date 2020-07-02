const loadSurveyReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SURVEY':
            return action.payload;
        case 'SET_ALL_SURVEYS':
            return action.payload;
        default:
            return state;
    }
}

export default loadSurveyReducer;
