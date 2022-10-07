import Image from 'next/image'
import React from 'react'
import { statStyles } from '../../styles'
import { StatType } from '../../types'



const Stat = ({ heading, subHeading, icon}: StatType) => {
    return (
        <div className={statStyles.container}>
            <div className={statStyles.content}>
                <div className={statStyles.content__heading}>{heading}</div>
                <div className={statStyles.content__subheading}>{subHeading}</div>
            </div>
            <div>
                <Image src={icon} layout='fixed'/>
            </div>
        </div>
    )
}

export default Stat