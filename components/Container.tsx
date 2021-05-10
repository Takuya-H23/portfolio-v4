import * as React from 'react'
import {
  Box,
  Flex,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  IconButton,
  DrawerBody
} from '@chakra-ui/react'
import { IoIosMenu, IoMdClose } from 'react-icons/io'

type Props = {
  children: React.ReactNode
}

export const Container = ({ children }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleClose = () => setIsOpen(false)
  const handleOpen = () => setIsOpen(true)

  return (
    <div>
      <Box as="header" p={[4]}>
        <Flex justify="space-between" alignItems="center">
          <div>Takua Hirata</div>
          <IconButton
            onClick={handleOpen}
            aria-label="Open menu"
            icon={<IoIosMenu />}
          />
          <Drawer
            isOpen={isOpen}
            onClose={handleClose}
            placement="right"
            closeOnEsc
            closeOnOverlayClick
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody> menu</DrawerBody>
            </DrawerContent>
            menu
          </Drawer>
        </Flex>
      </Box>
      {children}
    </div>
  )
}
