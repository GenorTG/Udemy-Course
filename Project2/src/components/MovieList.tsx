import { MovieObject } from '@/types/movie'
import MovieSearchItem from './MovieSearchItem'

const MovieList = ({ movies }: { movies: MovieObject[] }) => {
  return (
    <div className="flex flex-col rounded object-contain">
      {movies.map((m) => (
        <MovieSearchItem movie={m} key={m.imdbID} />
      ))}
    </div>
  )
}
export default MovieList
