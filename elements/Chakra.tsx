import * as React from 'react'
import { GetServerSideProps } from 'next'
import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager
} from '@chakra-ui/react'

type Props = {
  cookies: any
  children: React.ReactNode
}

export const Chakra = ({ cookies, children }: Props) => {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManager(cookies)
      : localStorageManager

  return (
    <ChakraProvider colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  )
}

export const getServerSideProps = ({ req }: any) => {
  return {
    props: {
      cookies: req.headers.cookie ?? ''
    }
  }
}
