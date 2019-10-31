const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        mylist: [...state.mylist, action.payload],
      };

    case 'DELETE_FAVORITE':
      return {
        ...state,
        mylist: state.mylist.filter((items) => items.id !== action.payload),
      };

    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };

    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };

    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };

    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        // busqueda del source dentro del estado inicial, primero busca en trends y despues en originals y si no lo encuentra devuele un arreglo vacio
        playing: state.trends.find((item) => item.id === Number(action.payload)) ||
        state.original.find((item) => item.id === Number(action.pyload)) ||
        [],
      };

    default:
      return state;
  }
};

export default reducer;
