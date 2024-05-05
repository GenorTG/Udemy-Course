import { MovieObject } from '@/types/movie'
import StarRating from './StarRating'

type MovieDetailsProps = {
  movie: MovieObject
}

function MovieDetails({ movie }: MovieDetailsProps) {
  return (
    <div className="flex-center w-full flex-row gap-6 overflow-hidden rounded-t bg-primary-foreground">
      <img src={movie.Poster} alt="img" className="w-full basis-2/4" />
      <div className="flex h-full basis-3/4 flex-col items-start justify-between gap-4 px-2 py-4">
        <h1 className="text-2xl font-bold">{movie.Title}</h1>
        <p>
          {movie.Year} • {movie.runtime} min
        </p>
        <p>Details genre stuff</p>

        <StarRating
          maxRating={5}
          size={25}
          messages={['Shit', 'Bleh', 'Meh', 'Ok', 'Great!']}
        />
      </div>
    </div>
  )
}
export default MovieDetails
