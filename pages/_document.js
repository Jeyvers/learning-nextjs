import Document, { Html, Head, Main, NextScript } from 'next/document';

// This is the default index.html page with all meta tags we use. It's called custom document and can be edited using this format if you need a major change in your index html presentation. Editing this document is not usually neccessary.
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
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
