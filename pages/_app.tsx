import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'
import '../styles/Navbar.scss'
import '../styles/Hero.scss'
import '../styles/PortfolioItem.scss'
import '../styles/Bio.scss'
import '../styles/Footer.scss'
import '../styles/Modal.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
