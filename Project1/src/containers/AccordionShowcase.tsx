import CustomAccordion from '@/components/CustomAccordion'
import { useState } from 'react'

type AccordionContent = {
  title: string
  body: string
}

const RandomAccordions: AccordionContent[] = [
  {
    title: 'Accordion title 1',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    title: 'Accordion title 2',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    title: 'Accordion title 3',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    title: 'Accordion title 4',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    title: 'Accordion title 5',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
]

const AccordionShowcase = () => {
  const [accordions, setAccordions] = useState(
    RandomAccordions.map((a, i) => {
      return {
        title: a.title,
        body: a.body,
        id: i,
        expanded: false
      }
    })
  )

  const handleClick = (id: number) => {
    setAccordions((prevAccordions) => {
      return prevAccordions.map((accordion) => {
        if (accordion.id === id) {
          // If the clicked accordion, set expanded to true
          return { ...accordion, expanded: true }
        } else {
          // For all other accordions, set expanded to false
          return { ...accordion, expanded: false }
        }
      })
    })
  }

  return (
    <div className="flex-center h-full min-h-svh w-full flex-col gap-4 p-8">
      {accordions.map((a) => (
        <CustomAccordion
          key={a.title}
          title={a.title}
          body={a.body}
          expanded={a.expanded}
          handleClick={handleClick}
          id={a.id}
        />
      ))}
    </div>
  )
}
export default AccordionShowcase
