import { Timestamp } from 'firebase/firestore';
import Image from 'next/image';
import React from 'react'
import { Timer } from '..';
import { cardStyles } from '../../styles';
import { IChallenge, IContestStatus } from '../../types';
import { getContestStatus } from '../../utils';



const ChallengeCard = ({ id, name, level, description, imageURL, enddate, startdate }: IChallenge) => {
  const status: IContestStatus = getContestStatus(startdate, enddate);
  const endDate: string = new Timestamp(enddate.seconds, enddate.nanoseconds).toDate().toString();
  const statusStyles: React.CSSProperties = {
    color: status.textColor,
    backgroundColor: status.bgColor,
    width: '87px',
    height: '21px',
    borderRadius: '5px',
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <div className={cardStyles.card__wrapper}>
      <div className={cardStyles.card__image__wrapper}>
        <Image src={imageURL} height={176} width={352} />
      </div>
      <div className={cardStyles.card__details__wrapper}>
        <div style={statusStyles}>{status.status}</div>
        <h3 className={cardStyles.challenge__name} style={{ margin: 0 }}>{name}</h3>
        <div className={cardStyles.timer__status}>
          {
            status.status === 'Upcoming' ? 'Starts in' :
              status.status === 'Active' ? 'Ends in' :
                'Ended on'
          }
        </div>
        {
          status.status === 'Past' ? <div style={{color: '#454545'}}>{endDate}</div> :
            status.status === 'Upcoming' ? <Timer enddate={startdate} /> :
              <Timer enddate={enddate} />
        }

        <button>participate now</button>
      </div>
    </div>
  )
}

export default ChallengeCard;