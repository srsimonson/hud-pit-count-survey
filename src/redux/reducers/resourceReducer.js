const resourceReducer = (state = [], action) => {
    switch (action.type) {
      case "SET_RESOURCE":
        return action.payload;
    //   case "UPDATE_ANSWER":
    //     return [];
       default:
        return state;
    }
  };
  
  export default resourceReducer;

//   const manageAnswerReducer = (state = [], action) => {
//     switch (action.type) {
//       case "SET_ANSWER": // should this be SET_ANSWER or SAVE_ANSWER? both are working...
//         return action.payload;
//       case "REMOVE_ANSWER": // should this be DELETE_ANSWER or REMOVE_ANSWER?
//         return [];
//       default:
//         return state;
//     }
//   };
  
//   export default manageAnswerReducer;