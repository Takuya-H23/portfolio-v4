import React from 'react'
import { Heading, Text } from '@chakra-ui/react'
import { Container } from '../components'

const Index = () => {
  return (
    <Container>
      <Heading as="h1" mb={[2]}>
        Hi! I'm Takuya
      </Heading>
      <Text>
        Welcome to my portfolio stie/playground! I built this application using
        Next.js, Chakra UI and MongoDB. Feel free to explore and contact me!
      </Text>
    </Container>
  )
}

export default Index
