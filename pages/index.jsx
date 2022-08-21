import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <div>
      <Head>
        <title>MacOs</title>
        <meta
          name="description"
          content="MacOs Web built to experience OSX in web."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="https://raw.githubusercontent.com/codedgar/Puppertino/master/src/js/actions.js"></Script>

      <div className="coming-soon">Coming Soon</div>
    </div>
  );
}
