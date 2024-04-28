import { Link, Outlet, useLocation } from 'react-router-dom'

const App = () => {
  const { pathname } = useLocation()

  return (
    <div className="h-full min-h-svh text-background">
      <div
        className="absolute h-svh w-full bg-black"
        data-testid="background-div"
      >
        {/*static background*/}
      </div>
      {pathname != '/' && (
        <Link
          to={'/'}
          className="absolute left-0 top-0 z-10 border-2 border-primary bg-foreground p-2"
        >
          Return Home
        </Link>
      )}
      <div className="relative h-full min-h-svh w-full">
        <Outlet />
      </div>
    </div>
  )
}
export default App
