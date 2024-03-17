import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render(): JSX.Element {
    return (
      <Html lang="ja" dir="ltr">
        <Head>
          {/* ファビコン等の設定 */}
          <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#3e92a3" />
          <meta name="msapplication-TileColor" content="#00aba9" />
          <meta name="theme-color" content="#3e92a3" />

          {/* Google Fonts の読み込み */}
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+JP:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
