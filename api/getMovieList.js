import axios from "axios";
import globalConst from '../globalConst/globalConst'

//评分最高
const getTopRated = (page) => {
  return new Promise((resolve, reject) => {
    let results
    axios.get(globalConst.tmdbUrl + 'movie/top_rated', {
      params: {
        api_key: globalConst.apiKey,
        language: 'zh-cn',
        page,
        region: 'cn'
      },
    }).then((res) => {
      results = res.data
    })
    resolve(results)
  })
}

//最流行的
const getPopular = (page) => {
  return new Promise((resolve, reject) => {
    let results
    axios.get(globalConst.tmdbUrl + 'movie/popular', {
      params: {
        api_key: globalConst.apiKey,
        language: 'zh-cn',
        page,
        region: 'cn'
      },
    }).then((res) => {
      results = res.data
    })
    resolve(results)
  })
}

//即将到来
const getUpcoming = (page) => {
  return new Promise((resolve, reject) => {
    let results
    axios.get(globalConst.tmdbUrl + 'movie/upcoming', {
      params: {
        api_key: globalConst.apiKey,
        language: 'zh-cn',
        page,
        region: 'cn'
      },
    }).then((res) => {
      results = res.data
    })
    resolve(results)
  })
}

const getMovieList = {
  getTopRated,
  getPopular,
  getUpcoming
}

export default getMovieList