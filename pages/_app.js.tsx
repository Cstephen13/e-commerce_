import { AppProps } from 'next/app'
import '../global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'
import CartProvider from "../store/Cart";

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <CartProvider>
            <Component {...pageProps} />
        </CartProvider>
    )
}

export default App
