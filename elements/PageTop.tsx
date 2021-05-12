import * as React from 'react'
import { Heading, Text } from '@chakra-ui/react'

type Props = {
  heading: React.RreactNode
  paragraphs?: string[]
}

export const PageTop = ({ heading, paragraphs }) => (
  <>
    <Heading as="h1">{heading}</Heading>
    {paragraphs
      ? paragraphs.map((paragraph, idx) => (
          <Text mt={[4]} key={idx}>
            {paragraph}
          </Text>
        ))
      : null}
  </>
)
