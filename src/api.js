// BASE URL
const API_URL = 'https://api.rawg.io/api/';

// VARIABLES FOR API ENDPOINTS
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// CURRENT day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYearDate = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYearDate = `${currentYear + 1}-${currentMonth}-${currentDay}`;
getCurrentMonth();

// POPULAR GAMES
const POPULAR_GAMES = `games?dates=${lastYearDate},${currentDate}&ordering=-rating&page_size=10`;

// UPCOMING GAMES
const UPCOMING_GAMES = `games?dates=${currentDate},${nextYearDate}&ordering=-added&page_size=10`;

// NEW GAMES
const NEW_GAMES = `games?dates=${lastYearDate},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${API_URL}${POPULAR_GAMES}`;
export const upcomingGamesURL = () => `${API_URL}${UPCOMING_GAMES}`;
export const newGamesURL = () => `${API_URL}${NEW_GAMES}`;
