import { ServiceScoreData } from 'containers/BillTipping'

type ServiceScoreProps = {
  data: ServiceScoreData
  person: number
  handleScoreChange: (newScore: number, person: number) => void
}

const ServiceScore = ({
  data,
  person,
  handleScoreChange
}: ServiceScoreProps) => {
  return (
    <div className="flex-center flex-row gap-2">
      <p>
        {person === 1
          ? 'How did you like the service?'
          : 'How did your friend like the service?'}
      </p>
      <select
        value={person === 1 ? data.score1 : data.score2}
        className="text-20 rounded bg-foreground p-2"
        onChange={(e) => handleScoreChange(Number(e.target.value), person)}
      >
        {Array.from({ length: 21 }).map((_, i) => (
          <option key={i} value={i * 5}>
            {i * 5}
          </option>
        ))}
      </select>
    </div>
  )
}
export default ServiceScore
