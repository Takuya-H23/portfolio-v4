import React from 'react'
import { useTheme } from 'next-themes'

const Index = () => {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <div>
      <h1>Hi! I'm Takuya Hirata</h1>
      <button
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      >
        Toggle
      </button>
    </div>
  )
}

export default Index
