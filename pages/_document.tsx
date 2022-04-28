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
                    {<link rel="stylesheet"
                           href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.1/css/all.min.css"
                           integrity="sha512-gMjQeDaELJ0ryCI+FtItusU9MkAifCZcGq789FrzkiM49D8lbDhoaUaIX4ASU187wofMNlgBJ4ckbrXM9sE6Pg=="
                           crossOrigin="anonymous" />}
                    {<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                          rel="stylesheet"
                          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                          crossOrigin="anonymous"/>}
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
