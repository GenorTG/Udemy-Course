import { cn } from 'lib/utils'

type AccordionProps = {
  title: string
  body: string
  id: number
  expanded: boolean
  handleClick: (id: number) => void
}

const CustomAccordion = ({
  title,
  body,
  id,
  expanded,
  handleClick
}: AccordionProps) => {
  return (
    <div
      className="flex cursor-pointer flex-col items-start justify-start"
      onClick={() => handleClick(id)}
    >
      <h1 className="w-full border-2 border-secondary p-4 text-center text-2xl font-bold text-secondary">
        {title}
      </h1>
      <p
        className={cn(
          'origin-top py-2 transition-all ease-out',
          `${expanded ? 'h-full scale-y-100 duration-500' : 'h-0 scale-y-0 duration-0'}`
        )}
      >
        {body}
      </p>
    </div>
  )
}
export default CustomAccordion
