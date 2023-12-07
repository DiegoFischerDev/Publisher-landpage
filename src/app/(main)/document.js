import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
            <script src="https://publisheranalytics.ai/publisher-sdk"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                document.addEventListener('DOMContentLoaded', function() {
                  var accountCode = "abdev";
                  var userId = "83068";
                  var sdk = new PublisherAnalyticsSDK(accountCode, userId);
                  sdk.setupExperiments();
                });
              `,
            }}
          ></script>
         
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