import { render, screen } from 'lib/test-utils'
import App from 'App'

describe('App', () => {
  it('renders App, checks visibility, and verifies background element', () => {
    const { container } = render(<App />)
    expect(container.firstChild).toBeInTheDocument()

    const backgroundDiv = screen.getByTestId('background-div')
    expect(backgroundDiv).toBeVisible()
  })
})
