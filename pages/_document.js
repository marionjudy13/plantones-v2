import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,900;1,100&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body class="bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
