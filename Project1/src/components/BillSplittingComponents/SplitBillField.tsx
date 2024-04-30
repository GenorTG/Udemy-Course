import GenericButton from '@/components/GenericButton'
import { Person } from '@/containers/BillSplitting'
import { useState } from 'react'

type SplitBillFieldProps = {
  person: Person
  handleSplitBill: (person: Person, result: number) => void
}

const SplitBillField = ({ person, handleSplitBill }: SplitBillFieldProps) => {
  const [bill, setBill] = useState<number>()
  const [yourExpense, setYourExpense] = useState<number>()
  const [whoPays, setWhoPays] = useState<number>(0)

  const friendExpense = (bill && yourExpense && bill - yourExpense) || 0
  const result =
    whoPays === 0 ? person.owe + friendExpense : person.owe - friendExpense

  return (
    <div className="flex w-[360px] flex-col gap-4 rounded bg-orange-100 p-4 text-black">
      <div className="flex min-w-[300px] flex-row justify-between gap-2">
        <p>💰 Bill Value</p>
        <input
          className="w-20 rounded bg-white px-2 py-1 text-center focus-within:outline-none"
          type="text"
          value={bill}
          onChange={(e) => {
            if (isNaN(Number(e.target.value))) return
            setBill(Number(e.target.value))
          }}
        />
      </div>
      <div className="flex min-w-[300px] flex-row justify-between gap-2">
        <p>🧐 Your expense</p>
        <input
          className="w-20 rounded bg-white px-2 py-1 text-center focus-within:outline-none"
          type="text"
          value={yourExpense}
          onChange={(e) => {
            if (isNaN(Number(e.target.value))) return
            setYourExpense(Number(e.target.value))
          }}
        />
      </div>
      <div className="flex min-w-[300px] flex-row justify-between gap-2">
        <p>{`🥴 ${person?.name || 'John'}'s expense`}</p>
        <input
          className="w-20 rounded bg-gray-100 px-2 py-1 text-center focus-within:outline-none"
          type="text"
          disabled
          value={friendExpense}
        />
      </div>
      <div className="flex min-w-[300px] flex-row justify-between gap-2">
        <p>💸 Who is paying the bill?</p>

        <select
          className="w-20 rounded bg-white px-2 py-1 text-center"
          value={whoPays}
          onChange={(e) => setWhoPays(Number(e.target.value))}
        >
          <option value="0">You</option>
          <option value="1">Them</option>
        </select>
      </div>
      <div className="flex w-full justify-end">
        <GenericButton
          onClick={() => {
            handleSplitBill(person, result)
          }}
        >
          <p className="px-2 py-1">Split it!</p>
        </GenericButton>
      </div>
    </div>
  )
}
export default SplitBillField
