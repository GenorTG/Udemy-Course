import GenericButton from '@/components/GenericButton'
import LoadingSpinner from '@/components/LoadingSpinner'
import { Person } from '@/containers/BillSplitting'
import { cn } from '@/lib/utils'
import { Suspense } from 'react'
import { ruuid } from 'types/generic'

type BillPersonProps = Person & {
  handleClickPerson: (id: ruuid, open: boolean) => void
}

const BillPerson = ({
  name,
  owe,
  img,
  open,
  id,
  handleClickPerson
}: BillPersonProps) => {
  const infoState = {
    textStyle:
      owe === 0
        ? 'text-black'
        : owe > 0
          ? 'text-green-700'
          : 'text-destructive',
    message:
      owe === 0
        ? `You and ${name} are even`
        : owe > 0
          ? `${name} owes you $${owe}`
          : `You owe ${name} $${Math.abs(owe)}`
  }

  return (
    <div className="flex min-h-24 items-center justify-start  gap-4 rounded bg-background px-2 py-1 transition-all duration-100 hover:bg-orange-100">
      <Suspense fallback={<LoadingSpinner />}>
        <img
          width={60}
          height={60}
          className="flex-1 rounded-full"
          src={img}
          alt="img"
        />
      </Suspense>
      <div className="flex w-full flex-col items-start justify-start gap-2">
        <h1 className="text-xl font-bold text-primary">{name}</h1>
        <p className={cn('text-base', infoState.textStyle)}>
          {infoState.message}
        </p>
      </div>
      <div className="flex flex-1 justify-end">
        <GenericButton onClick={() => handleClickPerson(id, !open)}>
          <div
            className={cn(
              'rounded px-2 py-1 transition-all duration-200 ease-in-out',
              `${open ? 'rounded bg-foreground text-primary  hover:bg-primary hover:text-foreground' : ''}`
            )}
          >
            {open ? 'Close' : 'Select'}
          </div>
        </GenericButton>
      </div>
    </div>
  )
}
export default BillPerson
