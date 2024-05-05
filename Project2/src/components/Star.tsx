import { StarIcon } from 'lucide-react'
import { Button } from './ui/button'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface StarTypes {
  hovered: boolean
  color?: string
  fill?: string
  rating: number
  value: number
  children?: ReactNode
  onClick: (value: number) => void
  handleHover: (value: number) => void
  size?: number
}

const Star = ({
  children,
  onClick,
  hovered,
  handleHover,
  value,
  rating,
  color = 'text-white',
  fill = 'fill-white',
  size = 6
}: StarTypes) => {
  const thresholdReached: (val: number) => boolean = (val: number) => {
    return val <= rating
  }

  return (
    <Button className="m-0 bg-transparent p-0 hover:m-0 hover:bg-transparent hover:p-0">
      <StarIcon
        size={size}
        onMouseEnter={() => handleHover(value)}
        onClick={() => onClick(value)}
        className={cn(
          'transition-all ease-in-out',
          color,
          thresholdReached(value) && fill,
          hovered && fill
        )}
      />
      {children}
    </Button>
  )
}
export default Star
