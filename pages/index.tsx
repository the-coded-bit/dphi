import Head from 'next/head'
import { Banner, Navbar, StatsBanner, WhyAICard } from '../components'
import { StatType } from '../types';
import { WhyAIConsts } from '../utils';




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
      {/* why to participate in ai challenges section */}
      <section>
        <h1>Why Participate in <span style={{color: '#44924c'}}>AI Challenges?</span></h1>
        <div style={{margin: '4.5rem 10rem 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.188rem'}}>
          {
            WhyAIConsts.map(({heading, subHeading, icon}: StatType) =>(
              <WhyAICard heading={heading} subHeading={subHeading} icon={icon}/>
            ))
          }
        </div>
         
      </section>

      <footer>Cards will be displayed here!!</footer>

    </main>
  )
}
