import Flashcard from '@/components/Flashcard'

export type flashcard = { front: string; back: string }

const Flashcards = () => {
  const flashcards: flashcard[] = [
    {
      front: 'Front content',
      back: 'Back content'
    },
    {
      front: 'Front content',
      back: 'Back content'
    },
    {
      front: 'Front content',
      back: 'Back content'
    },
    {
      front: 'Front content',
      back: 'Back content'
    },
    {
      front: 'Front content',
      back: 'Back content'
    },
    {
      front: 'Front content',
      back: 'Back content'
    },
    {
      front: 'Front content',
      back: 'Back content'
    },
    {
      front: 'Front content',
      back: 'Back content'
    }
  ]

  return (
    <div className="flex-center grid h-full min-h-svh w-full flex-row flex-wrap items-center justify-center gap-2">
      <div className="flex-center grid h-full w-full flex-row flex-wrap items-center justify-center gap-2">
        {flashcards.map((f) => (
          <Flashcard key={f.front} front={f.front} back={f.back} />
        ))}
      </div>
    </div>
  )
}
export default Flashcards
