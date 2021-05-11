import { render } from '@testing-library/react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme()

function AllTheProviders({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

const customRender = (ui: any, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

export { customRender as render }
