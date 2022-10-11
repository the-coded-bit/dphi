import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { headerLogo } from '../../public'
import { bannerStyles } from '../../styles'



const Banner = () => {
  return (
    <header className={bannerStyles.banner}>
      <div>
        <div className={bannerStyles.container__title}>Accelerate Innovation with Global AI Challenges</div>
        <p className={bannerStyles.container__content}>AI challenges at DPhi simulate real-world problems. It is a <br />
          great place to put you AI/Data Science skills to test on <br />
          diverse datasets allowing you to faster learning through <br />
          competitions.
        </p>
        <div className={bannerStyles.container__button}>
          <Link href='/create-challenge'>
            <button>Create Challenge</button>
          </Link>
        </div>
      </div>
      <div>
        <Image src={headerLogo} layout='fixed' alt='header'/>
      </div>
    </header>
  )
}

export default Banner