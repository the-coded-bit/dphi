import { AppProps } from 'next/app'
import { ContestContextProvider } from '../contexts';
import '../styles/globals.css'

const App: React.FC = ({ Component, pageProps }: AppProps) => {
  return <ContestContextProvider>
    <Component {...pageProps} />
  </ContestContextProvider>
}

export default App;
