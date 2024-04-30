import { Person } from '@/containers/BillSplitting'
import BillPerson from './BillPerson'
import { ruuid } from 'types/generic'

type BillPersonListTypes = {
  people: Person[]
  handleClickPerson: (id: ruuid, open: boolean) => void
}

const BillPersonList = ({ people, handleClickPerson }: BillPersonListTypes) => {
  return (
    <div
      id="persons container"
      className="flex w-[380px] flex-col gap-2 rounded"
    >
      {people.map((p) => (
        <BillPerson
          key={p.id}
          name={p.name}
          owe={p.owe}
          img={p.img}
          open={p.open}
          id={p.id}
          handleClickPerson={handleClickPerson}
        />
      ))}
    </div>
  )
}
export default BillPersonList
