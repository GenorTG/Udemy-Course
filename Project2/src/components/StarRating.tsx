import { cn } from '@/lib/utils'
import Star from './Star'
import { useState } from 'react'

interface StarRatingProps {
  colorStyles?: string
  fillStyles?: string
  maxRating?: number
  minRating?: number
  className?: string
  starContainerStyles?: string
  size?: number
  messages?: string[]
}

const StarRating = ({
  colorStyles = 'text-yellow-500',
  fillStyles = 'fill-yellow-500',
  className,
  starContainerStyles,
  maxRating = 5,
  minRating = 1,
  size,
  messages
}: StarRatingProps) => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  const handleClick = (score: number) => {
    setRating(score)
  }

  const handleHover = (score: number) => {
    setHover(score)
  }

  return (
    <div
      className={cn('flex flex-col items-center gap-4 md:flex-row', className)}
    >
      <div
        className={cn('flex gap-1', starContainerStyles)}
        onMouseLeave={() => setHover(0)}
      >
        {Array.from({ length: maxRating || 5 }, (_, i) => (
          <Star
            hovered={minRating + i <= hover}
            handleHover={handleHover}
            rating={hover || rating}
            value={minRating + i}
            onClick={handleClick}
            key={i}
            color={colorStyles}
            fill={fillStyles}
            size={size}
          ></Star>
        ))}
      </div>
      <p className={cn('', colorStyles)}>
        {messages && messages.length === maxRating
          ? (hover && messages[hover - 1]) || messages[rating - 1]
          : hover || rating || ''}
      </p>
    </div>
  )
}
export default StarRating
