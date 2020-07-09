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