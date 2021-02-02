import Document, { Html, Head, Main, NextScript } from 'next/document';
// runs on the server. So restart server.
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
