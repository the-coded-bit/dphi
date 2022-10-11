import Image from 'next/image';
import { Banner, FilterButton, StatsBanner, WhyAICard } from '../components'
import { Page } from '../Layout';
import { searchIcon } from '../public';
import { homeStyles } from '../styles';
import { LayoutProps, StatType } from '../types';
import { WhyAIConsts } from '../utils';

const pageProps: LayoutProps = {
  title: 'Dphi - Hackathon',
  description: 'Dphi hackathon, where students participate in AI/ML hackathons',
}

export default function Home() {
  
  return (
    <Page {...pageProps}>
      <section style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
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
      {/* search */}
      <section className={homeStyles.search__container}>
        <h2>Explore Challenges</h2>
        <div className={homeStyles.explore}>
          <div className={homeStyles.search}>
            <Image src={searchIcon} layout='fixed' alt='search'/>
            <input
              type='text'
              placeholder='Search '
              style={{ height: '100%', width: '100%', outline: 'none', border: 'none', fontFamily: 'Poppins' }} />
          </div>
          <FilterButton />
        </div>

      </section>

      <footer>Cards will be displayed here!!</footer>
    </Page>
  )
}
