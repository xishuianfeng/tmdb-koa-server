const globalConst = require('../globalConst/globalConst');
const axios = require('axios');

//评分最高
const getTopRated = (page) => {
  return new Promise((resolve, reject) => {
    axios.get(globalConst.tmdbUrl + 'movie/top_rated', {
      params: {
        api_key: globalConst.apiKey,
        language: 'zh-cn',
        page,
        region: 'cn'
      },
    }).then((res) => {
      resolve(res.data);
    }).catch((error) => {
      reject(error);
    });
  })
}

//最流行的
const getPopular = (page) => {
  return new Promise((resolve, reject) => {
    axios.get(globalConst.tmdbUrl + 'movie/popular', {
      params: {
        api_key: globalConst.apiKey,
        language: 'zh-cn',
        page,
        region: 'cn'
      },
    }).then((res) => {
      resolve(res.data);
    }).catch((error) => {
      reject(error);
    });
  })
}

//即将到来
const getUpcoming = (page) => {
  return new Promise((resolve, reject) => {
    axios.get(globalConst.tmdbUrl + 'movie/upcoming', {
      params: {
        api_key: globalConst.apiKey,
        language: 'zh-cn',
        page,
        region: 'cn'
      },
    }).then((res) => {
      resolve(res.data);
    }).catch((error) => {
      reject(error);
    });
  })
}

const getMovieList = {
  getTopRated,
  getPopular,
  getUpcoming
};

module.exports = getMovieList;