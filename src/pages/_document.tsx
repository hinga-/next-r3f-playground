import { Nav } from 'components/Nav'
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render(): JSX.Element {
    const { pageProps } = this.props.__NEXT_DATA__.props
    return (
      <Html lang="ja">
        <Head>
          <meta name="format-detection" content="telephone=no" />
        </Head>
        <body className={ pageProps.isDark ? 'dark' : 'light' }>
          <Nav />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
