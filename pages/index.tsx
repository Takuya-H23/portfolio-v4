import React from 'react'
import { useTheme } from 'next-themes'
import { Container } from '../components'
import styles from '../styles/logo.module.css'

const Index = () => {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Container>
      <div>contents</div>
    </Container>
  )
}

export default Index
