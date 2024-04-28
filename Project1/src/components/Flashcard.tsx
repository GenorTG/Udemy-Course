import { flashcard } from 'containers/Flashcards'
import { cn } from 'lib/utils'
import { useState } from 'react'

const Flashcard = ({ front, back }: flashcard) => {
  const [flipped, setFlipped] = useState(false)
  const [animation, setAnimation] = useState('')

  const handleFlip = async (et: HTMLButtonElement) => {
    et.disabled = true
    // if (isFlipping) return
    // setIsFlipping(true)
    setAnimation('animate-fadeout duration-200')
    setTimeout(() => {
      setFlipped((f) => !f)
      setAnimation('animate-fadein duration-200')
    }, 150)
    setTimeout(() => {
      //   setIsFlipping(false)

      et.disabled = false
    }, 150)
  }

  return (
    <button
      disabled={false}
      className={cn(
        'flex-center h-20 w-40 rounded px-8 py-4 text-2xl font-bold',
        animation,
        `${flipped ? 'bg-foreground text-background' : 'bg-background text-primary'}`
      )}
      type="button"
      onClick={(e) => handleFlip(e.target as HTMLButtonElement)}
    >
      {flipped ? `${back}` : `${front}`}
    </button>
  )
}
export default Flashcard
