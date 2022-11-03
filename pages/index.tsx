import { InferGetServerSidePropsType } from 'next';
import { Banner, Challenges, Navbar, StatsBanner, WhyAICard } from '../components'
import { Page } from '../Layout';
import { LayoutProps, StatType, IChallenge } from '../types';
import { getHackathons, WhyAIConsts } from '../utils';

const pageProps: LayoutProps = {
  title: 'Dphi - Hackathon',
  description: 'Dphi hackathon, where students participate in AI/ML hackathons',
}

export default function Home({ d }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const data: IChallenge[] = JSON.parse(d);

  return (
    <Page {...pageProps}>
      <section style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <Banner />
        <StatsBanner />
      </section>
      {/* why to participate in ai challenges section */}
      <section>
        <h1>Why Participate in <span style={{ color: '#44924c' }}>AI Challenges?</span></h1>
        <div style={{ margin: '4.5rem 10rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.188rem' }}>
          {
            WhyAIConsts.map(({ heading, subHeading, icon }: StatType) => (
              <WhyAICard heading={heading} subHeading={subHeading} icon={icon} key={heading} />
            ))
          }
        </div>

      </section>

      <footer>
        <Challenges data={data}/>
      </footer>
    </Page>
  )
}

export async function getServerSideProps() {
  // fetch all the hackthons from firebase
  const data: IChallenge[] = await getHackathons();
  const d = JSON.stringify(data);
  console.log(d);

  return {
    props: { d }
  };
}
