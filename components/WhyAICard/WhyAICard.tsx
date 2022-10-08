import Image from 'next/image';
import React from 'react';
import { bannerStyles } from '../../styles';
import { StatType } from '../../types';

const WhyAICard = ({ heading, subHeading, icon }: StatType) => {
    return (
        <article className={bannerStyles.WhyAI__card__container}>
            <div>
                <Image src={icon} layout='fixed' />
            </div>
            <div>{heading}</div>
            <p>{subHeading}</p>
        </article>
    )
}

export default WhyAICard