import { Grid, List, ListItem, Heading } from '@chakra-ui/react'
import { Container } from '../components'
import { PageTop } from '../elements'

const About = () => {
  return (
    <Container>
      <PageTop
        heading="About Me"
        paragraphs={[
          "My name is Takuya and I'm a motivated developer based in Toronto. Other than working as a developer, I have published some npm packages to help me write better code.",
          'I enjoy riding sport motorcycles, playing video games, baseball and coding.'
        ]}
      />
      <Heading as="h2" size="md" mt={[12]}>
        Favourite Technologies
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
        <ListItem>Node.js</ListItem>
        <ListItem>GraphQL</ListItem>
        <ListItem>MongoDB</ListItem>
        <ListItem>Jest</ListItem>
        <ListItem>Cypress</ListItem>
      </Grid>

      <Heading as="h2" size="md" mt={[12]}>
        Favourite NPM Packages
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
        Favourite Tools
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
      <Heading as="h2" size="md" mt={[12]}>
        Links
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
        <ListItem>Github</ListItem>
        <ListItem>NPM</ListItem>
        <ListItem>LinkedIn</ListItem>
        <ListItem>Twitter</ListItem>
      </Grid>
    </Container>
  )
}

export default About
