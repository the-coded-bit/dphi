import { Timestamp } from 'firebase/firestore';
import { useEffect, useState } from 'react'

const useTimer = (enddate: Timestamp) => {
    const [days, setDays] = useState<string>('00');
    const [hours, setHours] = useState<string>('00');
    const [mins, setMins] = useState<string>('00');
    const [seconds, setSeconds] = useState<string>('00');

    const targetDate: number = new Timestamp(enddate.seconds, enddate.nanoseconds).toDate().getTime();

    useEffect(() => {
        const interval = setInterval(() => {
            var t = targetDate - new Date().getTime();

            var sec = Math.floor(t / 1000);
            var mins = Math.floor(sec / 60);
            var hrs = Math.floor(mins / 60);
            var days = Math.floor(hrs / 24);

            hrs = hrs % 24;
            mins = mins % 60;
            sec = sec % 60;

            setDays((days < 10) ? `0${days}` : `${days}`);
            setHours((hrs < 10) ? `0${hrs}` : `${hrs}`);
            setMins((mins < 10) ? `0${mins}` : `${mins}`);
            setSeconds((sec < 10) ? `0${sec}` : `${sec}`);
        }, 1000);

        return () => clearInterval(interval);

    }, []);
    return {
        days,
        hours,
        mins,
        seconds,
        setDays,
        setHours,
        setMins,
        setSeconds
    }
}

export default useTimer