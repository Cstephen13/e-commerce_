import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/** FavIcon */}
                    {/** WebFont */}
                    {/** stylesheets */}
                    {/** scripts */}
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                          rel="stylesheet"
                          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                          crossOrigin="anonymous"/>
                </Head>
                <body className="my-body-class">
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
