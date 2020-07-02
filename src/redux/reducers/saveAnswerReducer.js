const saveAnswerReducer = (state = [], action) => {
    switch (action.type) {
      case "SAVE_ANSWER":
        return action.payload;
      case "DELETE_ANSWER":
        return [];
      default:
        return state;
    }
  };
  
  export default saveAnswerReducer;