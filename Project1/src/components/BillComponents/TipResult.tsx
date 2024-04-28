import { ServiceScoreData } from 'containers/BillTipping'

const TipResult = ({ data }: { data: ServiceScoreData }) => {
  let result: string = ''

  if (data.amount === 0) {
    result = 'Specify the amount to see how much you should tip'
  } else {
    const tip = (data.score1 + data.score2) / 2
    result = `You pay $${data.amount + tip} ($${data.amount} + $${tip} tip)`
  }

  return <div>{result}</div>
}
export default TipResult
