import { combineReducers } from 'redux';
import gamesReducer from './gamesReducer';

const initialState = {
  name: '',
  isLogged: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

const rootReducer = combineReducers({
  games: gamesReducer,
  user: userReducer,
});

export default rootReducer;
