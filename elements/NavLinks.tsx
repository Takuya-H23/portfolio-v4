import Link from 'next/link'
import { List, ListItem } from '@chakra-ui/react'

type Route = {
  URL: string
  LABEL: string
}

type Props = {
  routes: Route[]
}

export const NavLinks = ({ routes }: Props) => (
  <nav>
    <List spacing={[3]}>
      {routes.map(({ URL, LABEL }) => (
        <ListItem key={LABEL}>
          <Link href={URL}>
            <a>{LABEL}</a>
          </Link>
        </ListItem>
      ))}
    </List>
  </nav>
)
