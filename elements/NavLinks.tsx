import Link from 'next/link'
import { List, ListItem } from '@chakra-ui/react'

type Route = {
  URL: string
  LABEL: string
}

type Props = {
  routes: Route[]
  handleClose: () => void
}

export const NavLinks = ({ routes, handleClose }: Props) => (
  <nav>
    <List spacing={[3]}>
      {routes.map(({ URL, LABEL }) => (
        <ListItem onClick={handleClose} key={LABEL}>
          <Link href={URL}>
            <a>{LABEL}</a>
          </Link>
        </ListItem>
      ))}
    </List>
  </nav>
)
