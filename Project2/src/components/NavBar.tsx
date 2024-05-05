import { MovieObject } from '@/types/movie'
import SearchForm from './SearchForm'

const NavBar = ({ movies }: { movies: MovieObject[] }) => {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-2 rounded bg-[#5B38D2] p-3 text-primary md:flex-row">
      <h1 className="pl-2 text-2xl font-bold">🍿 usePopcorn</h1>
      <SearchForm />
      <p>Found {movies.length} results</p>
    </div>
  )
}
export default NavBar
