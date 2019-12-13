const INITIAL_STATE = {
  sectionId: 0
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TRANSITION_TO_SECTION":
      return {
        ...state,
        sectionId: action.sectionId
      };
    default:
      return state;
  }
};
