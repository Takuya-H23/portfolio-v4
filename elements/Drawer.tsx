import * as React from 'react'
import {
  Drawer as ChakraDrawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  IconButton,
  DrawerBody,
  useDisclosure
} from '@chakra-ui/react'
import { IoIosMenu } from 'react-icons/io'

type Props = {
  children: React.ReactNode
}

export const Drawer = ({ children }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton
        onClick={onOpen}
        aria-label="Open menu"
        icon={<IoIosMenu />}
      />
      <ChakraDrawer
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
        closeOnEsc
        closeOnOverlayClick
      >
        <DrawerOverlay />
        <DrawerContent pt={8}>
          <DrawerCloseButton />
          <DrawerBody>{children}</DrawerBody>
        </DrawerContent>
      </ChakraDrawer>
    </>
  )
}
