import GenericButton from '@/components/GenericButton'
import { Person } from '@/containers/BillSplitting'
import { cn } from '@/lib/utils'
import { useState } from 'react'

type AddBillPersonTypes = {
  handleAddPerson: (person: Person) => void
}

const AddBillPerson = ({ handleAddPerson }: AddBillPersonTypes) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [person, setPerson] = useState<Person>({
    name: '',
    owe: 0,
    img: '',
    id: crypto.randomUUID()
  })

  const handleSubmit = () => {
    const updateId = async () => {
      setPerson((prevPerson) => ({
        ...prevPerson,
        id: crypto.randomUUID()
      }))
    }

    updateId().then(() => handleAddPerson(person))
  }

  return (
    <div className="flex w-full flex-col items-end justify-end gap-4 text-black transition-all duration-200 ease-in-out">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}
        action=""
        className={cn(
          'flex w-full flex-col items-end gap-4 rounded bg-orange-100 object-contain p-4',
          isExpanded ? 'visible' : 'hidden'
        )}
      >
        <div className="flex w-full flex-row justify-between">
          <div>{`🧑‍🤝‍🧑 Friend's Name`}</div>
          <input
            type="text"
            className="w-40 rounded bg-white px-2 py-1 text-center focus-within:outline-none"
            value={person.name}
            onChange={(e) => {
              if (!isNaN(Number(e.target.value))) return
              setPerson((p) => ({ ...p, name: e.target.value }))
            }}
          />
        </div>{' '}
        <div className="flex w-full flex-row justify-between">
          <p>{`📷 Image URL`}</p>
          <input
            type="text"
            className="w-40 rounded bg-white px-2 py-1 text-center focus-within:outline-none"
            value={person.img}
            disabled
            onChange={(e) => {
              if (!isNaN(Number(e.target.value))) return
              setPerson((p) => ({ ...p, image: e.target.value }))
            }}
          />
        </div>
        <GenericButton
          onClick={() => {
            if (person.name != '') {
              handleSubmit()
              setPerson((p) => ({ ...p, name: '' }))
              setIsExpanded((s) => !s)
            }
          }}
        >
          <p className="w-20 px-2 py-1">Add</p>
        </GenericButton>
      </form>

      <GenericButton
        onClick={() => {
          setIsExpanded((s) => !s)
          const radomizer = Math.floor(Math.random() * 10000)
          const img = `https://i.pravatar.cc/200?u=${radomizer}`
          setPerson((p) => ({ ...p, img }))
        }}
      >
        <p className="px-2 py-1">{isExpanded ? 'Close' : 'Add friend'}</p>
      </GenericButton>
    </div>
  )
}
export default AddBillPerson
