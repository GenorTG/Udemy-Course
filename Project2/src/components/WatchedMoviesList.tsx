import { MovieObject } from '@/types/movie'
import { Button } from './ui/button'
import { DeleteIcon } from 'lucide-react'

const tempWatchedData = [
  {
    imdbID: 'tt1375666',
    Title: 'Inception',
    Year: '2010',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10
  },
  {
    imdbID: 'tt0088763',
    Title: 'Back to the Future',
    Year: '1985',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9
  }
]

type WatchedMoviesProps = {
  watchedMovies: MovieObject[]
}

const WatchedMoviesList = ({ watchedMovies }: WatchedMoviesProps) => {
  watchedMovies = tempWatchedData

  return (
    <div>
      <div className="flex flex-col gap-4 rounded-t bg-primary-foreground p-4">
        <h1 className="text-2xl font-bold">MOVIES YOU WATCHED</h1>
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p>🎞️ X movies</p>
          <p>⭐ Ratings</p>
          <p>🌟 Your Ratings</p>
          <p>Watch Time</p>
        </div>
      </div>
      <div className="flex w-full flex-col gap-2">
        {watchedMovies.map((m) => (
          <li
            key={m.imdbID}
            className="flex cursor-pointer flex-row items-center justify-start gap-8 border-b border-primary p-4 transition-all ease-in-out  hover:bg-card hover:text-primary"
          >
            <img width={80} src={m.Poster} alt={`${m.Title} poster`} />
            <div className="flex w-full flex-col gap-4">
              <h3>{m.Title}</h3>
              <div className="flex w-full flex-col items-center justify-between gap-2 md:flex-row md:pr-10">
                <p>⭐ {m.imdbRating}</p>
                <p>🌟 {m.userRating}</p>
                <p>⌛ {m.runtime}</p>
                <Button
                  className="m-0 bg-transparent p-0 hover:m-0 hover:bg-transparent hover:p-0"
                  onClick={() => console.log('delete movie from list')}
                >
                  <DeleteIcon
                    className="text-destructive hover:text-primary"
                    size={30}
                  />
                </Button>
              </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  )
}
export default WatchedMoviesList
