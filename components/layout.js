import Head from "next/head";
import Link from "next/link";

export default function Layout({ children, home, name }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {home || (
        <header>
          <Link href="/">
            <a>Back to Home . . . . . . .</a>
          </Link>
          {name}
        </header>
      )}
      <main>{children}</main>
    </>
  );
}
