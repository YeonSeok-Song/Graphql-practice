//쿼리 => 데이터베이스에서는 문제와 같음
//그래서 그 쿼리에 대한 해결책을 제시 그게 resolver 임.
//어떤 사용자가 네임 쿼리를 보내면 그게 대한 결과를 전달하는 함수

import {getMovie, getMovies, getSuggestions} from "./db"

// const YeonSeok = {
//   name: "Yeonseok",
//   age: 18,
//   gender: "female"
// };

const resolvers = {
    Query: {
      movies: (_, {rating, limit}) => getMovies(rating, limit),
      movie: (_, {id}) => getMovie(id),
      suggestions: (_, {id}) => getSuggestions(id)
    }
  };

export default resolvers;