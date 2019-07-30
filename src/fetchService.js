import DateHelper from "./helpers/dates";
const apiHost = process.env.REACT_APP_API_HOST
  ? process.env.REACT_APP_API_HOST
  : "http://data.fixer.io/api";
const apiKey = process.env.REACT_APP_API_KEY
  ? process.env.REACT_APP_API_KEY
  : "key";


// simulate a Response for API
const getLatestStatic = async (setData, add) => {
  try {
    const fares = {
      success: true,
      timestamp: 1564252266,
      base: "EUR",
      date: "2019-07-10",
      rates: {
        AED: 4.094531,
        AFN: 89.18058,
        ALL: 122.021216,
        AMD: 530.589014,
        ANG: 1.989503,
        AOA: 387.551423,
        ARS: 48.152879,
        AUD: 1.612605,
        AWG: 2.006554,
        AZN: 1.900698,
        BAM: 1.95829,
        BBD: 2.250462,
        BDT: 94.136403,
        BGN: 1.959627,
        BHD: 0.420289,
        BIF: 2057.832407,
        BMD: 1.114752,
        BND: 1.5057,
        BOB: 7.701656,
        BRL: 4.209532,
        BSD: 1.114585,
        BTC: 0.000113,
        BTN: 76.822143,
        BWP: 11.908942,
        BYN: 2.260165,
        BYR: 21849.141484,
        BZD: 2.246616,
        CAD: 1.470414,
        CDF: 1857.177429,
        CHF: 1.10764,
        CLF: 0.028086,
        CLP: 774.970143,
        CNY: 7.668607,
        COP: 3610.124729,
        CRC: 639.538908,
        CUC: 1.114752,
        CUP: 29.540931,
        CVE: 110.862537,
        CZK: 25.6179,
        DJF: 198.114185,
        DKK: 7.48066,
        DOP: 56.930829,
        DZD: 133.425119,
        EGP: 18.458628,
        ERN: 16.721681,
        ETB: 32.383986,
        EUR: 1,
        FJD: 2.405082,
        FKP: 0.896919,
        GBP: 0.900369,
        GEL: 3.266659,
        GGP: 0.900827,
        GHS: 5.986654,
        GIP: 0.896919,
        GMD: 55.738002,
        GNF: 10283.588671,
        GTQ: 8.548644,
        GYD: 232.56002,
        HKD: 8.716414,
        HNL: 27.479073,
        HRK: 7.39443,
        HTG: 105.212579,
        HUF: 327.603784,
        IDR: 15607.309958,
        ILS: 3.925879,
        IMP: 0.900827,
        INR: 76.762262,
        IQD: 1326.555019,
        IRR: 46936.638259,
        ISK: 135.944451,
        JEP: 0.900827,
        JMD: 150.581146,
        JOD: 0.790403,
        JPY: 121.14573,
        KES: 115.722846,
        KGS: 77.756306,
        KHR: 4553.762787,
        KMF: 493.222502,
        KPW: 1003.294692,
        KRW: 1320.145622,
        KWD: 0.339446,
        KYD: 0.928868,
        KZT: 429.191139,
        LAK: 9691.65529,
        LBP: 1681.046581,
        LKR: 196.408601,
        LRD: 225.040627,
        LSL: 15.930233,
        LTL: 3.291574,
        LVL: 0.674303,
        LYD: 1.56485,
        MAD: 10.712884,
        MDL: 19.643609,
        MGA: 4033.173544,
        MKD: 61.577836,
        MMK: 1683.108906,
        MNT: 2950.191477,
        MOP: 8.976152,
        MRO: 397.966891,
        MUR: 40.075761,
        MVR: 17.223342,
        MWK: 836.625631,
        MXN: 21.229121,
        MYR: 4.591707,
        MZN: 68.830413,
        NAD: 15.930228,
        NGN: 401.311145,
        NIO: 37.348348,
        NOK: 9.715961,
        NPR: 122.840153,
        NZD: 1.679876,
        OMR: 0.429141,
        PAB: 1.114696,
        PEN: 3.680076,
        PGK: 3.762331,
        PHP: 56.83568,
        PKR: 179.475472,
        PLN: 4.279032,
        PYG: 6701.834404,
        QAR: 4.058855,
        RON: 4.730901,
        RSD: 117.952338,
        RUB: 70.619963,
        RWF: 1019.998187,
        SAR: 4.180771,
        SBD: 9.18389,
        SCR: 15.227929,
        SDG: 50.279226,
        SEK: 10.592267,
        SGD: 1.526657,
        SHP: 1.47248,
        SLL: 10172.113441,
        SOS: 646.556605,
        SRD: 8.313864,
        STD: 24034.936287,
        SVC: 9.753245,
        SYP: 574.097716,
        SZL: 15.93022,
        THB: 34.348304,
        TJS: 10.523672,
        TMT: 3.901632,
        TND: 3.213277,
        TOP: 2.544872,
        TRY: 6.322767,
        TTD: 7.551276,
        TWD: 34.664374,
        TZS: 2564.268346,
        UAH: 28.295795,
        UGX: 4118.284891,
        USD: 1.114752,
        UYU: 37.723621,
        UZS: 9664.901223,
        VEF: 11.133591,
        VND: 25875.068753,
        VUV: 127.940097,
        WST: 2.972691,
        XAF: 656.823502,
        XAG: 0.068037,
        XAU: 0.000786,
        XCD: 3.012674,
        XDR: 0.80941,
        XOF: 657.704119,
        XPF: 119.95134,
        YER: 279.13794,
        ZAR: 15.936835,
        ZMK: 10034.110757,
        ZMW: 14.383688,
        ZWL: 358.95018
      }
    };
    setData(fares);
  } catch (error) {
    throw error;
  }
};

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
  getLatestStatic,
  getLatest
};