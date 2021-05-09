import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="author" content="Takuya Hirata" />
        </Head>
        <body className="bg-bg-primary dark:bg-bg-d-primary text-text-primary dark:text-text-d-primary">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
