import React from 'react'
import { statsStyles } from '../../styles'
import Stat from '../Stat/Stat'
import { RoboLogo, DSLogo, AILogo } from '../../public'



const StatsBanner = () => {
  return (
    <article className={statsStyles.container}>
        <Stat heading='100K+' subHeading='AI model submissions' icon={AILogo} />
        <hr/>
        <Stat heading='50K+' subHeading='Data Scientists' icon={DSLogo} />
        <hr />
        <Stat heading='100+' subHeading='AI Challenges hosted' icon={RoboLogo} />
    </article>
  )
}

export default StatsBanner;