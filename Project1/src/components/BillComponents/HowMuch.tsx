import { ServiceScoreData } from 'containers/BillTipping'

type HowMuchProps = {
  data: ServiceScoreData
  handleAmountChange: (amount: number) => void
}

const HowMuch = ({ data, handleAmountChange }: HowMuchProps) => {
  return (
    <div className="flex-center flex-row gap-2">
      <p>How much is the bill?</p>

      <input
        className="w-fit min-w-10 rounded bg-background p-1 text-center text-primary"
        type="text"
        placeholder="Specify the amount"
        value={data.amount}
        onChange={(e) => {
          if (isNaN(Number(e.target.value))) return
          handleAmountChange(Number(e.target.value))
        }}
      />
    </div>
  )
}
export default HowMuch
