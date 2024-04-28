import React, { useEffect, useState } from 'react'
import Adder from 'components/Adder'
import ListItem from 'components/ListItem'
import Stats from 'components/Stats'
import { MdExpandLess, MdExpandMore } from 'react-icons/md'
import Header from 'components/Header'

export type ListItemType = {
  type: 'number' | 'weight'
  amount: number
  name: string
  id: `${string}-${string}-${string}-${string}-${string}`
  done: boolean
  order: number
}

const ListMaker = () => {
  const [items, setItems] = useState<ListItemType[]>([])
  const [isSortOpen, setIsSortOpen] = useState(false)
  const [sortReverse, setSortReverse] = useState(false)
  const [criteria, setCriteria] = useState('order')

  const handleAdd = (item: ListItemType) => {
    setItems((prevItems) => [...prevItems, item])
  }

  const handleRemove = (item: ListItemType) => {
    const newItems = items.filter((i) => i !== item)
    setItems(newItems)
  }

  const sortItems = (criteria: string) => {
    const sortedItems = [...items]

    switch (criteria) {
      case 'type':
        sortedItems.sort((a, b) => (a.type > b.type ? 1 : -1))
        break
      case 'amount':
        sortedItems.sort((a, b) => a.amount - b.amount)
        break
      case 'order':
        sortedItems.sort((a, b) => a.order - b.order)
        break
    }

    if (sortReverse) sortedItems.reverse()

    setItems(sortedItems)
  }

  useEffect(() => {
    sortItems(criteria)
  }, [sortReverse])

  const handleClearList = () => {
    const confirmed = window.confirm('Are you sure you want to reset the list?')

    if (confirmed) setItems([])
  }

  return (
    <div className="flex-center h-full w-full flex-col">
      <Header />
      <Adder handleAdd={handleAdd} />
      <div className="flex flex-col justify-between">
        <div className="flex min-h-40 flex-row flex-wrap items-start justify-center gap-4 p-4 transition-all duration-200">
          {items.map((item) => (
            <ListItem key={item.id} item={item} handleRemove={handleRemove} />
          ))}
        </div>
        <div className="flex-center flex-col gap-4 ">
          <div className="flex-center flex-row gap-2">
            <button
              className="flex-center flex-row gap-2 rounded border-2 border-primary px-2 py-1 text-xl font-bold transition-all duration-300 hover:bg-primary hover:text-background"
              onClick={() => setIsSortOpen((s) => !s)}
            >
              <p>Sort by {criteria}</p>
            </button>
            <button
              type="button"
              className="flex-center flex-row gap-2 rounded border-2 border-primary px-2 py-1 text-xl font-bold transition-all duration-300 hover:bg-primary hover:text-background"
              onClick={() => {
                setSortReverse((s) => !s)
              }}
            >
              {' '}
              {sortReverse ? (
                <MdExpandLess size={30} />
              ) : (
                <MdExpandMore size={30} />
              )}
            </button>
            {isSortOpen && (
              <ul className="absolute flex -translate-y-24 flex-col gap-2 rounded bg-background p-1">
                <li>
                  <button
                    onClick={() => {
                      sortItems('order')
                      setCriteria('order')
                      setIsSortOpen((s) => !s)
                    }}
                    type="button"
                    className="flex-center w-full rounded border-2 border-none border-primary bg-foreground px-2 py-1 font-bold outline-none hover:bg-primary hover:text-background"
                  >
                    Input order
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      sortItems('type')
                      setCriteria('type')
                      setIsSortOpen((s) => !s)
                    }}
                    type="button"
                    className="flex-center w-full rounded border-2 border-none border-primary bg-foreground px-2 py-1 font-bold outline-none hover:bg-primary hover:text-background"
                  >
                    Type
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      sortItems('amount')
                      setCriteria('amount')
                      setIsSortOpen((s) => !s)
                    }}
                    type="button"
                    className="flex-center w-full rounded border-2 border-none border-primary bg-foreground px-2 py-1 font-bold outline-none hover:bg-primary hover:text-background"
                  >
                    Amount
                  </button>
                </li>
              </ul>
            )}
          </div>
          <div className="relative bottom-0">
            <Stats items={items} />
          </div>

          {items.length > 0 && (
            <button
              type="button"
              className="flex-center w-fit rounded border-2 border-none border-primary bg-foreground px-2 py-1 font-bold outline-none hover:bg-primary hover:text-background"
              onClick={() => handleClearList()}
            >
              Clear the list
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ListMaker
