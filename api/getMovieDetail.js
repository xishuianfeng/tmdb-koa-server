const globalConst = require('../globalConst/globalConst');
const axios = require('axios');

const getMovieDetail = (id) => {
  return new Promise((resolve, reject) => {
    axios.get(globalConst.tmdbUrl + 'movie/' + id, {
      params: {
        api_key: globalConst.apiKey,
        language: 'zh-cn',
      },
    }).then((res) => {
      resolve(res.data);
    }).catch((error) => {
      reject(error);
    })
  })
}

module.exports = getMovieDetail

