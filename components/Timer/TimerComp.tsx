import { Timestamp } from 'firebase/firestore';
import React from 'react';
import { timerStyles } from '../../styles';
import useTimer from './useTimer';

type ITimer = {
    enddate: Timestamp
}

const TimerComp = ({ enddate } : ITimer) => {

    const {
        days,
        hours,
        mins,
        seconds
    } = useTimer(enddate);

    return (
        <div className={timerStyles.countdown}>
            <span className={timerStyles.container_days}>
                <h3 className={timerStyles.day}>{days}</h3>
                <p>Days</p>
            </span>
            <span>:</span>
            <span className={timerStyles.container_hours}>
                <h3 className={timerStyles.hours}>{hours}</h3>
                <p>Hours</p>
            </span>
            <span>:</span>
            <span className={timerStyles.container_mins}>
                <h3 className={timerStyles.mins}>{mins}</h3>
                <p>Mins</p>
            </span>
            <span>:</span>
            <span className={timerStyles.container_seconds}>
                <h3 className={timerStyles.seconds}>{seconds}</h3>
                <p>Seconds</p>
            </span>
        </div>
    )
}

export default TimerComp