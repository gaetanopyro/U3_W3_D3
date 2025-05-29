import { ADD_THE_COMPANY } from "../action";

const initialState = {
  favourites: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_THE_COMPANY:
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: [...state.favourites.content, action.payload],
        },
      };
    default:
      console.log("DEFAULT");
      return state;
  }
};
export default mainReducer;
