import { AppProps } from 'next/app'
import '../global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'
import CartProvider from "../store/Cart";
import { SessionProvider } from "next-auth/react"


const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
    return (
        <SessionProvider session={session}>
        <CartProvider>
            <Component {...pageProps} />
        </CartProvider>
        </SessionProvider>
    )
}

export default App
