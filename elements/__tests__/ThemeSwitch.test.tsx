import * as Chakra from '@chakra-ui/react'
import { ThemeSwitch } from '../ThemeSwitch'
import { render } from '../../utils/test-utils'

beforeEach(jest.clearAllMocks)

const spy = jest.spyOn(Chakra, 'useColorMode')

const renderer = (theme, val) => {
  spy.mockImplementation(() => ({
    toggleColorMode: jest.fn(),
    colorMode: theme
  }))
  const { getByTestId } = render(<ThemeSwitch />)

  expect(getByTestId('switch-label').firstChild.checked).toBe(val)
}

test('should be checked when theme is light', () => {
  renderer('light', true)
})

test('should be unchecked when theme is dark', () => {
  renderer('dark', false)
})
