import LoadingSpinner from '@/components/LoadingSpinner'
import { useEffect, useState } from 'react'
import AddBillPerson from '@/components/BillSplittingComponents/AddBillPerson'
import BillPersonList from '@/components/BillSplittingComponents/BillPersonList'
import SplitBillField from '@/components/BillSplittingComponents/SplitBillField'
import { useQuery } from '@tanstack/react-query'
import { fetchRandomUser } from '@/lib/async-functions'
import { ApiResponse } from '@/types/RandomPersonResult'
import { ruuid } from '@/types/generic'

export type Person = {
  name: string
  owe: number
  img: string
  open?: boolean
  id: ruuid
}

const BillSplitting = () => {
  const { data, isLoading } = useQuery<ApiResponse>({
    queryKey: ['Random Person'],
    queryFn: fetchRandomUser
  })

  const [people, setPeople] = useState<Person[]>([])

  useEffect(() => {
    if (data?.results) {
      const newPerson: Person = {
        name: data.results[0].name.first || 'Name',
        owe: Math.floor(Math.random() * 21) - 10,
        img: 'https://i.pravatar.cc/200',
        open: false,
        id: crypto.randomUUID()
      }
      setPeople([newPerson])
    }
  }, [data])

  const openPerson: Person | undefined = people.filter(
    (p) => p.open === true
  )[0]

  const handleClickPerson = (id: ruuid, open: boolean) => {
    setPeople((prevPeople) =>
      prevPeople.map((prevPerson) =>
        open === false
          ? { ...prevPerson, open: false }
          : prevPerson.id === id
            ? { ...prevPerson, open: true }
            : { ...prevPerson, open: false }
      )
    )
  }

  const handleAddPerson = (person: Person) => {
    setPeople((prevPeople) => prevPeople.concat(person))
  }

  const handleSplitBill = (person: Person, result: number) => {
    setPeople((prevPeople) =>
      prevPeople.map((prevPerson) =>
        prevPerson.id === person.id
          ? { ...prevPerson, owe: result, open: false }
          : prevPerson
      )
    )
  }

  if (isLoading) return <LoadingSpinner />

  return (
    <div className="flex flex-row items-start justify-start gap-4 p-12">
      <div className="flex flex-col items-end justify-start gap-2">
        <BillPersonList people={people} handleClickPerson={handleClickPerson} />
        <AddBillPerson handleAddPerson={handleAddPerson} />
      </div>
      <div>
        {openPerson && (
          <SplitBillField
            person={openPerson}
            handleSplitBill={handleSplitBill}
          />
        )}
      </div>
    </div>
  )
}
export default BillSplitting
