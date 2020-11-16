const initialState = {
  popularGames: [],
  newGames: [],
  upcomingGames: [],
  searched: [],
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GAMES':
      return {
        ...state,
        popularGames: action.payload.popularGames,
        upcomingGames: action.payload.upcomingGames,
        newGames: action.payload.newGames,
      };
    default:
      return { ...state };
  }
};

// ACTION CREATORS
const fetchGames = () => {
  return {
    type: 'FETCH_GAMES',
  };
};

export default gamesReducer;
