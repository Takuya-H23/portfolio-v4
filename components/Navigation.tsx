import * as React from 'react'
import Link from 'next/link'
import { Box, Flex } from '@chakra-ui/react'
import { IoIosMenu } from 'react-icons/io'
import { NavLinks, Drawer, ThemeSwitch } from '../elements'
import { ROUTES } from '../utils/constants'

export const Navigation = () => {
  return (
    <Drawer>
      <NavLinks routes={ROUTES} />
      <Box mt={8}>
        <ThemeSwitch />
      </Box>
    </Drawer>
  )
}
