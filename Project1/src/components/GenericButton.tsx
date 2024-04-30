import { ReactNode } from 'react'

type GenericButtonProps = {
  children?: ReactNode
  onClick: () => void
}

const GenericButton = ({ children, onClick }: GenericButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-fit rounded bg-primary text-black transition-all duration-200 ease-in-out hover:bg-foreground hover:text-primary"
    >
      {children}
    </button>
  )
}
export default GenericButton
