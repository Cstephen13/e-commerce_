import { AppProps } from 'next/app'
import '../global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'

const App = ({ Component, pageProps }: AppProps) => {
    // Aditional props
    // Aditional layout
    // Manejar errores - componentDidCatch
    return (
        <>
            <Component {...pageProps} />
        </>
    )
}

export default App
