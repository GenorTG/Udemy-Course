import { useRouteError } from 'react-router-dom'

interface RouteError {
  statusText: string
  message: string
}

export default function ErrorPage() {
  const error = useRouteError() as RouteError
  console.error(error)

  return (
    <div
      id="error-page"
      className="flex-center h-full min-h-svh w-full flex-col bg-foreground text-2xl text-background text-destructive"
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="p-4 text-primary">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
