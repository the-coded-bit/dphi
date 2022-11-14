import { Timestamp } from "firebase/firestore";
import { IChallenge, IContestStatus } from "../types";

export const getContestStatus = (startdate : Timestamp, enddate : Timestamp): IContestStatus => {
    // get date out of timestamp object
    const std: Date = new Timestamp(startdate.seconds, startdate.nanoseconds).toDate();
    const edd: Date = new Timestamp(enddate.seconds, enddate.nanoseconds).toDate();

    var status: IContestStatus;

    // current date
    const d: Date = new Date();

    if (d < std) {
        // upcoming contest
        status = {
            status: 'Upcoming',
            bgColor: 'rgba(242, 201, 76, 0.25)',
            textColor: '#666666'
        }

    }
    else if (d >= std && d <= edd) {
        // active contest
        status = {
            status: 'Active',
            bgColor: 'rgba(68, 146, 76, 0.24)',
            textColor: '#44924C'
        }
    }
    else {
        // past contest
        status = {
            status: 'Past',
            textColor: '#666666',
            bgColor: 'rgba(255, 60, 0, 0.17)'
        }
    }

    return status;
}