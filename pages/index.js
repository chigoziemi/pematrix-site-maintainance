import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Pematrix Technologies!" />
        <p className="description">
          Our site is currently under construction <code>We will be back before you know it!</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
