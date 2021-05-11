import * as React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { Navigation } from './Navigation'
import { Logo } from '../elements'

export const Header = (): JSX.Element => {
  return (
    <Box as="header">
      <Flex justify="space-between" alignItems="center">
        <Logo />
        <Navigation />
      </Flex>
    </Box>
  )
}
