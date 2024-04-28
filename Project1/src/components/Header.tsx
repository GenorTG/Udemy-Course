import { FaPenAlt } from 'react-icons/fa'

const Header = () => {
  return (
    <div className=" flex-center w-full gap-4 border-4 border-card bg-primary p-4 text-4xl font-bold">
      <FaPenAlt size={50} className="animate-pulse hover:animate-shake" />
      <p>List Maker</p>
    </div>
  )
}
export default Header
