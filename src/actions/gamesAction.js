import axios from 'axios';
import { popularGamesURL, upcomingGamesURL, newGamesURL } from '../api';

// ACTION CREATOR

export const loadGames = () => async (dispatch) => {
  // FETCH AXIOS
  const popularGames = await axios.get(popularGamesURL());
  const upcomingGames = await axios.get(upcomingGamesURL());
  const newGames = await axios.get(newGamesURL());
  dispatch({
    type: 'FETCH_GAMES',
    payload: {
      popularGames: popularGames.data.results,
      upcomingGames: upcomingGames.data.results,
      newGames: newGames.data.results,
    },
  });
};
