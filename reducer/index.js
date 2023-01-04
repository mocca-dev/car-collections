function appReducer(state, action) {
  switch (action.type) {
    case 'HIDE_FOOTER':
      return { ...state, showFooter: false };
    case 'SHOW_FOOTER':
      return { ...state, showFooter: true };
    default:
      return state;
  }
}

export default appReducer;
