import logo from '@/assets/logo.svg'
import { globalStyles } from '@/styles/global'
import { Container, Header } from '@/styles/pages/app'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import Link from 'next/link'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href={'/'} as="image">
          <Image src={logo} priority={false} alt="" />
        </Link>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
