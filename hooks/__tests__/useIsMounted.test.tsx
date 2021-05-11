import { render } from 'test-utils'
import { useIsMounted } from '../useIsMounted'

const init = 'initial render'
const second = 'not initial render'

const TestComponent = () => {
  const isMounted = useIsMounted()
  return <div data-testid="test">{isMounted ? second : init}</div>
}

test('should return false on first render then return true when it rendered again', () => {
  const { rerender, getByTestId } = render(<TestComponent />)

  expect(getByTestId('test')).toHaveTextContent(init)
  rerender(<TestComponent />)
  expect(getByTestId('test')).toHaveTextContent(second)
})
