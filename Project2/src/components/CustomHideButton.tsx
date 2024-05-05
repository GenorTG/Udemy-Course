import { MinusCircle, PlusCircle } from 'lucide-react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

type CustomHideButtonProps = {
  handleClick: () => void
  state: boolean
}

const CustomHideButton = ({ handleClick, state }: CustomHideButtonProps) => {
  return (
    <Button
      onClick={handleClick}
      className={cn(
        'absolute left-auto right-0 top-0 m-0 h-fit  rounded-l-full rounded-br-full rounded-tr bg-transparent p-1'
      )}
    >
      {state ? (
        <MinusCircle size={20} className="rounded-full bg-muted text-primary" />
      ) : (
        <PlusCircle size={20} className="rounded-full bg-muted text-primary" />
      )}
    </Button>
  )
}
export default CustomHideButton
