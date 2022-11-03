import Image from 'next/image';
import React from 'react'
import { cardStyles } from '../../styles';
import { IChallenge } from '../../types';

const ChallengeCard = ({ id, name, level, description, imageURL, enddate, startdate }: IChallenge) => {
  return (
    <div className={cardStyles.card__wrapper}>
      <div className={cardStyles.card__image__wrapper}>
        <Image src={imageURL} height={176} width={352} />
      </div>
      <div className={cardStyles.card__details__wrapper}>
        <div>status holder</div>
        <h3 className={cardStyles.challenge__name}>{name}</h3>
        <div>timer status holder</div>
        <div>Timer component</div>
        <button>participate now</button>
      </div>
    </div>
  )
}

export default ChallengeCard;