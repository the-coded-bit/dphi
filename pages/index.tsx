import Head from 'next/head'
import { Banner, Navbar, StatsBanner } from '../components'


export default function Home() {
  return (
    <main >
      <Head>
        <title>Dphi - Hackathon</title>
        <meta name="description" content="Dphi hackathon, where students participate in AI/ML hackathons" />
        <link rel="icon" href="/favico.ico" />
      </Head>
      <section style={{height: '100vh', display: 'flex', flexDirection: 'column'}}>
        <Navbar />
        <Banner />
        <StatsBanner />
      </section>

      <footer>Cards will be displayed here!!</footer>

    </main>
  )
}
