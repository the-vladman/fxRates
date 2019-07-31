/* Date Helper */

const removeDays = (date, days) => {
    var result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
}
const addZero = (number) => number < 10 ? `0${number}`: number;

const getYear = (day) => day.getFullYear();

const getMonth = (day) => addZero(day.getMonth() + 1);

const getDay = (day) => addZero(day.getDate());

const getDayLess = (day, days) => {
    const dayLess = removeDays(day, days);
    const dayLessString = `${getYear(dayLess)}-${getMonth(dayLess)}-${getDay(dayLess)}`;
    return dayLessString
}

  export default {
    getDayLess
  }