import * as React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { Navigation } from './Navigation'

export const Header = (): JSX.Element => {
  return (
    <Box as="header">
      <Flex justify="space-between" alignItems="center">
        <div>Takua Hirata</div>
        <Navigation />
      </Flex>
    </Box>
  )
}
