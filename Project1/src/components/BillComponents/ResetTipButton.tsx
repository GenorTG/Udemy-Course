type ResetTipButtonTypes = {
  active: boolean
  handleReset: () => void
}

const ResetTipButton = ({ active, handleReset }: ResetTipButtonTypes) => {
  if (!active) return
  return (
    <button
      type="button"
      className="tex-xl relative bottom-0 rounded bg-primary p-2 text-background"
      onClick={handleReset}
    >
      Reset
    </button>
  )
}
export default ResetTipButton
