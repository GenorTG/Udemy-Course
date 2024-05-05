import CustomHideButton from '@/components/CustomHideButton'
import { ReactNode, useState } from 'react'

const Box = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="relative h-full w-full rounded bg-secondary">
      <CustomHideButton
        state={isOpen}
        handleClick={() => setIsOpen((s) => !s)}
      />
      {isOpen && children}
    </div>
  )
}
export default Box
