import React from 'react'
import { useTheme } from 'next-themes'

const Index = () => {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <div>
      <h1>Hi! I'm Takuya Hirata</h1>
    </div>
  )
}

export default Index
