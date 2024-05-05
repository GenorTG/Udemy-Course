import { Outlet } from 'react-router-dom'
import { ModeToggle } from './components/mode-toggle'

const App = () => {
  return (
    <div className="h-full min-h-svh">
      <div className="absolute right-0 z-10 h-fit w-fit p-2">
        <ModeToggle />
      </div>
      <div
        className="absolute h-svh w-full bg-background"
        data-testid="background-div"
      >
        {/*static background*/}
      </div>
      <div className="relative h-full w-full">
        <Outlet />
      </div>
    </div>
  )
}
export default App
