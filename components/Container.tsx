import { Box, useTheme } from '@chakra-ui/react'
import { Header } from './Header'
type Props = {
  children: React.ReactNode
}

export const Container = ({ children }: Props) => {
  const { breakpoints } = useTheme()

  return (
    <Box w={breakpoints.xl} maxW={'95%'} mx="auto" py={[4]}>
      <Header />
      {children}
    </Box>
  )
}
