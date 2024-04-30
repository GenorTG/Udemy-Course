import { ListItemType } from '@/containers/ListMaker'

type StatsProps = {
  items: ListItemType[]
}

const Stats = ({ items }: StatsProps) => {
  return (
    <div>{`You have ${
      items.length > 0
        ? items.length > 1
          ? `${items.length} items in your shopping list`
          : '1 item in your shopping list'
        : 'nothing in your shopping list'
    }`}</div>
  )
}
export default Stats
