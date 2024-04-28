import { Link } from 'react-router-dom'

const Destinations = [
  {
    name: 'List Maker',
    path: '/listmaker'
  },
  {
    name: 'Flashcards',
    path: '/flashcards'
  },
  {
    name: 'Accordions',
    path: '/accordionshowcase'
  },
  {
    name: 'Bill Tipping',
    path: '/billtipping'
  }
]

const Home = () => {
  return (
    <div className="flex-center h-full min-h-svh w-full flex-col gap-4">
      {Destinations.map((d) => (
        <Link
          key={d.path}
          className="bg-foreground p-4 text-2xl font-bold"
          to={d.path}
        >
          {d.name}
        </Link>
      ))}
    </div>
  )
}
export default Home
