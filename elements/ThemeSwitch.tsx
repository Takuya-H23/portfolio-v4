import * as React from 'react'
import { useColorMode, HStack, Switch } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { useIsMounted } from '../hooks'

const isLight = (theme: 'light' | 'dark'): boolean => theme === 'light'

export const ThemeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode()
  const [isChecked, setIsChecked] = React.useState(isLight(colorMode))
  const isMounted = useIsMounted()

  const handleChange = () => setIsChecked(cur => !cur)

  React.useEffect(() => {
    if (isMounted) {
      toggleColorMode()
    }
  }, [isChecked])

  return (
    <HStack>
      <MoonIcon />
      <Switch
        size="md"
        isChecked={isChecked}
        onChange={handleChange}
        aria-label="Toggle theme"
        data-testid="switch-label"
      />
      <SunIcon />
    </HStack>
  )
}
