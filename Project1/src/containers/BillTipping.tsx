import HowMuch from '@/components/BillComponents/HowMuch'
import ResetTipButton from '@/components/BillComponents/ResetTipButton'
import ServiceScore from '@/components/BillComponents/ServiceScore'
import TipResult from '@/components/BillComponents/TipResult'
import { useState } from 'react'

export type ServiceScoreData = {
  amount: number
  score1: number
  score2: number
}

const BillTipping = () => {
  const [data, setData] = useState<ServiceScoreData>({
    amount: 0,
    score1: 0,
    score2: 0
  })

  const handleAmountChange = (newAmount: number) => {
    setData((oldData) => ({ ...oldData, amount: newAmount }))
  }

  const handleScoreChange = (newScore: number, person: number) => {
    person === 1
      ? setData((oldData) => ({ ...oldData, score1: newScore }))
      : setData((oldData) => ({ ...oldData, score2: newScore }))
  }

  const reset = () => {
    setData({
      amount: 0,
      score1: 0,
      score2: 0
    })
  }

  let altered: boolean = false
  if (data.amount != 0 || data.score1 != 0 || data.score2 != 0) altered = true

  return (
    <div className="flex-center h-full min-h-svh w-full flex-col gap-2 p-2">
      <HowMuch data={data} handleAmountChange={handleAmountChange} />
      <ServiceScore
        data={data}
        handleScoreChange={handleScoreChange}
        person={1}
      />
      <ServiceScore
        data={data}
        handleScoreChange={handleScoreChange}
        person={2}
      />
      <TipResult data={data} />
      <ResetTipButton active={altered} handleReset={reset} />
    </div>
  )
}
export default BillTipping
