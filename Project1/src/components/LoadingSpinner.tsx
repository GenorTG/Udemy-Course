import ClipLoader from 'react-spinners/ClipLoader'

const LoadingSpinner = () => {
  return (
    <div className="flex-center h-svh w-svw">
      <ClipLoader
        color="text-primary bg-primary"
        loading={true}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}
export default LoadingSpinner
