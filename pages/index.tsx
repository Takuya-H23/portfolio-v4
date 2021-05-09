import React from 'react'
import { useTheme } from 'next-themes'
import { Container } from '../components'

const Index = () => {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Container>
      <h1>Hi! I'm Takuya Hirata</h1>
      <button
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      >
        Toggle
      </button>
    </Container>
  )
}

export default Index
