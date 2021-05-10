import * as React from 'react'
import Link from 'next/link'
import {
  Box,
  Flex,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  IconButton,
  DrawerBody,
  List,
  ListItem,
  Text
} from '@chakra-ui/react'
import { IoIosMenu } from 'react-icons/io'

export const Header = (): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(true)

  const handleClose = () => setIsOpen(false)
  const handleOpen = () => setIsOpen(true)

  return (
    <Box as="header">
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
          <DrawerContent pt={8}>
            <DrawerCloseButton />
            <DrawerBody>
              <nav>
                <List spacing={3}>
                  <ListItem>
                    <Link href="/">
                      <a>
                        <Text>Home</Text>
                      </a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="/about">
                      <a>About</a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="/note">
                      <a>Note</a>
                    </Link>
                  </ListItem>
                </List>
              </nav>
            </DrawerBody>
          </DrawerContent>
          menu
        </Drawer>
      </Flex>
    </Box>
  )
}
