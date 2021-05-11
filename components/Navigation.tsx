import * as React from 'react'
import { Box } from '@chakra-ui/react'
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
