import * as React from 'react'

export const useIsInitialRender = () => {
  const ref = React.useRef(false)
  React.useEffect(() => {
    ref.current = true
  }, [])

  return ref.current
}
