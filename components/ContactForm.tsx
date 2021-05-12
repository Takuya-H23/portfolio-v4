import * as React from 'react'
import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Text
} from '@chakra-ui/react'

export const ContactForm = () => {
  const [state, setState] = React.useState(false)
  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault()
          console.log('here')
        }}
      >
        <FormControl id="name" isInvalid={state} isRequired>
          <FormLabel>Name</FormLabel>
          <Input type="text" />
          <Box>
            {state ? (
              <FormErrorMessage>Error</FormErrorMessage>
            ) : (
              <Box h="29px" />
            )}
          </Box>
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" />
          <FormErrorMessage>Error</FormErrorMessage>
        </FormControl>
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => setState(cur => !cur)} type="button">
        Toggle
      </button>
    </>
  )
}
