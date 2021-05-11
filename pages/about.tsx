import { Grid, List, ListItem, Heading, Text } from '@chakra-ui/react'
import { Container } from '../components'

const About = () => {
  return (
    <Container>
      <Heading as="h1">About Me</Heading>
      <Text mt={[4]}>
        My name is Takuya and I'm a motivated developer based in Toronoto. Other
        than working as a developer, I have published some npm packages to help
        me write better code.
      </Text>
      <Text mt={[4]}>
        I enjoy riding my sport motorcycle, playing video games, baseball and
        coding.
      </Text>

      <Heading as="h2" size="md" mt={[12]}>
        Technologies I have been using
      </Heading>
      <Grid
        as={List}
        templateColumns={[
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          'repeat(4, 1fr)',
          'repeat(5, 1fr)'
        ]}
        mt={[4]}
        gap={2}
      >
        <ListItem>JavaScript</ListItem>
        <ListItem>TypeScript</ListItem>
        <ListItem>Next.js</ListItem>
        <ListItem>Gatsby.js</ListItem>
        <ListItem>Node.js</ListItem>
        <ListItem>GraphQL</ListItem>
        <ListItem>MongoDB</ListItem>
        <ListItem>Jest</ListItem>
        <ListItem>Cypress</ListItem>
      </Grid>

      <Heading as="h2" size="md" mt={[12]}>
        Favorite npm packages
      </Heading>
      <Grid
        as={List}
        templateColumns={[
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          'repeat(4, 1fr)',
          'repeat(5, 1fr)'
        ]}
        mt={[4]}
        gap={2}
      >
        <ListItem>Fp-Ts</ListItem>
        <ListItem>Ramda</ListItem>
        <ListItem>Fts-Utils</ListItem>
      </Grid>

      <Heading as="h2" size="md" mt={[12]}>
        Favorite tools
      </Heading>
      <Grid
        as={List}
        templateColumns={[
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          'repeat(4, 1fr)',
          'repeat(5, 1fr)'
        ]}
        mt={[4]}
        gap={2}
      >
        <ListItem>Neovim</ListItem>
        <ListItem>Iterm2</ListItem>
        <ListItem>Kinesis Advantage2</ListItem>
      </Grid>
    </Container>
  )
}

export default About
