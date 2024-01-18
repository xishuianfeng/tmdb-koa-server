import globalConst from '../globalConst/globalConst'
import axios from 'axios'

const getMovieDetail = (id) => {
  return new Promise((resolve, reject) => {
    let results
    axios.get(globalConst.tmdbUrl + 'movie/' + id, {
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

export default getMovieDetail