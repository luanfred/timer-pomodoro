import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { UserProfileProvider } from '../context/UserProfileContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProfileProvider>
      <Component {...pageProps} />
    </UserProfileProvider>
  )
}

