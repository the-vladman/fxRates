import DateHelper from "./helpers/dates";
const apiHost = process.env.REACT_APP_API_HOST
  ? process.env.REACT_APP_API_HOST
  : "http://data.fixer.io/api";
const apiKey = process.env.REACT_APP_API_KEY
  ? process.env.REACT_APP_API_KEY
  : "key";


// getHistoric for dayRange
const getHistoric = async (fares, add, dayRange) => {
  const todayDate = new Date(fares.date);
  for (let index = 1; index < dayRange; index++) {
    let dayString = DateHelper.getDayLess(todayDate, index);
    let ratesByDay = await getFxRatesByDate(dayString);
    let obj = { ...ratesByDay.rates, date: ratesByDay.date };
    add(obj);
  }
};

// get FxRates by date
const getFxRatesByDate = async date => {
  try {
    const response = await fetch(`${apiHost}/${date}?access_key=${apiKey}`);
    if (response.status !== 200) {
      const error = { message: "Error" };
      throw error;
    }
    const json = await response.json();
    if (json.error) {
      throw json.error.info;
    }
    return json;
  } catch (error) {
    throw error;
  }
};

// get latest FxRates
const getLatest = async (setData, add) => {
  try {
    const response = await fetch(`${apiHost}/latest?access_key=${apiKey}`);
    if (response.status !== 200) {
      const error = { message: "Error" };
      throw error;
    }
    const json = await response.json();
    if (json.error) {
      throw json.error.info;
    }
    setData(json);
    getHistoric(json, add, 15);
  } catch (error) {
    throw error;
  }
};

export default {
  getLatest
};
