import { ListItemType } from 'containers/ListMaker'
import { useEffect, useState } from 'react'

type AdderProps = {
  handleAdd: (i: ListItemType) => void
}

const Adder = ({ handleAdd }: AdderProps) => {
  const numerical: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const weight: number[] = [100, 250, 500, 750, 1000, 1500, 2000]

  const [content, setContent] = useState('')
  const [itemCounter, setItemCounter] = useState<number>(1)
  const [type, setType] = useState<number[]>(numerical)
  const [amount, setAmount] = useState<number>(1)

  useEffect(() => {
    setAmount(type[0]) // This will update amount whenever type changes
  }, [type])

  const createItem = () => {
    const item: ListItemType = {
      name: content,
      amount: amount,
      type: `${type[0] === 1 ? 'number' : 'weight'}`,
      id: crypto.randomUUID(),
      done: false,
      order: itemCounter
    }
    setItemCounter((s) => s + 1)
    setContent('')
    return item
  }

  return (
    <div className="flex-center w-full bg-foreground p-4 text-xl">
      <div className="item flex-center w-fit flex-col items-start justify-center gap-6">
        <div className="item flex w-full flex-row items-start justify-between gap-6">
          <button
            className=" w-40 rounded border-2 border-primary px-2 py-1 font-bold hover:bg-primary hover:text-background"
            onClick={() => {
              setType((s) => (s[0] === numerical[0] ? weight : numerical))
            }}
          >
            {type[0] === 1 ? 'Amount' : 'Weight'}
          </button>
          <select
            className="w-26 rounded border-2 border-primary bg-foreground px-2 py-1 font-bold hover:bg-primary hover:text-background"
            onChange={(e) => setAmount(Number(e.target.value))}
          >
            {type.map((num) => (
              <option key={num} value={num}>
                {num % 50 ? num : `${num}g`}
              </option>
            ))}
          </select>
        </div>
        <form
          className="flex-center flex-row gap-2"
          onSubmit={(e) => {
            e.preventDefault()
            const item = createItem()
            handleAdd(item)
          }}
        >
          {' '}
          <input
            onInput={(e) =>
              setContent(() => (e.target as HTMLInputElement).value)
            }
            value={content}
            type="text"
            className="w-full rounded border-none bg-background p-2 text-center font-bold text-primary outline-none focus-within:border-none focus-within:outline-none"
            placeholder="What do you need?"
          ></input>
          <button
            type="submit"
            className="flex-center w-20 rounded border-2 border-primary px-2 py-1 font-bold hover:bg-primary hover:text-background"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  )
}
export default Adder
