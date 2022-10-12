import { Timestamp } from "firebase/firestore";

export default interface IChallenge{
    id: number,
    name: string,
    startdate: Timestamp,
    enddate: Timestamp,
    description: string,
    imageURL: string,
    level: string
}