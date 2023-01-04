import type { AppProps } from 'next/app'
import GlobalProvider from '@/hooks'
import Template from '@/components/templates/Default'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  if (router.pathname === '_error') return <Component {...pageProps} />

  return (
    <GlobalProvider>
      <Template>
        <Component {...pageProps} />
      </Template>
    </GlobalProvider>
  )
}
