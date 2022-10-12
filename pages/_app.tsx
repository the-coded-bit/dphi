import { AppProps } from 'next/app'
import { ContestContextProvider } from '../contexts';
import '../styles/globals.css'
import {Toaster} from 'react-hot-toast';

const App: React.FC = ({ Component, pageProps }: AppProps) => {
  return <ContestContextProvider>
    <Toaster position='top-right'/>
    <Component {...pageProps} />
  </ContestContextProvider>
}

export default App;
