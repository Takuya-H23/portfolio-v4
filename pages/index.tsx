import React from 'react'
import { Container } from '../components'
import { PageTop } from '../elements'

const Index = () => {
  return (
    <Container>
      <PageTop
        heading="Hi! I'm Takuya"
        paragraphs={[
          'Welcome to my portfolio stie/playground! I built this application using Next.js, Chakra UI and MongoDB. Feel free to explore and contact me!'
        ]}
      />
    </Container>
  )
}

export default Index
