import type { AppProps } from 'next/app'
import { Chakra } from '../elements'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Component {...pageProps} />
    </Chakra>
  )
}

export { getServerSideProps } from '../elements'

export default MyApp
