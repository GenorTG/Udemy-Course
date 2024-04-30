import { ListItemType } from '@/containers/ListMaker'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { FaDeleteLeft } from 'react-icons/fa6'
import { IoRadioButtonOffSharp, IoRadioButtonOn } from 'react-icons/io5'

type ListItemProps = {
  item: ListItemType
  handleRemove: (item: ListItemType) => void
}

const ListItem = ({ item, handleRemove }: ListItemProps) => {
  const [done, setDone] = useState<boolean>(false)

  return (
    <div
      className={cn(
        'flex-center animate-fadein flex-row gap-4 rounded border-2 border-primary bg-foreground px-2 py-1 text-2xl text-primary transition-all duration-200',
        `${done && 'bg-primary text-background'}`
      )}
    >
      <button type="button" onClick={() => setDone((s) => !s)}>
        {done ? <IoRadioButtonOn /> : <IoRadioButtonOffSharp />}
      </button>

      <p>{`${item.type === 'weight' ? `${item.amount >= 1000 ? `${item.amount / 1000}kg` : `${item.amount}g`}` : `${item.amount}`} ${item.name}`}</p>
      <button onClick={() => handleRemove(item)}>
        <FaDeleteLeft size={30} className=" hover:text-background" />
      </button>
    </div>
  )
}
export default ListItem
