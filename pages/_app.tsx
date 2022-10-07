import { AppProps } from 'next/app'
import '../styles/globals.css'

const App: React.FC = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App;
