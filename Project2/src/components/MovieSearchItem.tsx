import { MovieObject } from '@/types/movie'

type MovieProps = {
  movie: MovieObject
}

const MovieSearchItem = ({ movie }: MovieProps) => {
  return (
    <li className=" flex cursor-pointer flex-row items-center justify-start gap-8 border-b border-primary p-4  transition-all ease-in-out hover:bg-card hover:text-primary">
      <img width={80} src={movie.Poster} alt={`${movie.Title} poster`} />
      <div className="flex flex-col gap-4">
        <h3>{movie.Title}</h3>
        <div>
          <p>
            <span>🗓</span>
            <span>{movie.Year}</span>
          </p>
        </div>
      </div>
    </li>
  )
}
export default MovieSearchItem
