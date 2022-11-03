import { collection, DocumentData, getDocs, QuerySnapshot } from "firebase/firestore";
import { db } from "../Firebase/firebase";
import { IChallenge } from "../types";

export default async function getHackathons(): Promise<IChallenge[]>{
    const allDocs: QuerySnapshot<DocumentData> = await getDocs(collection(db, "challenges"));
    var hackathonData : IChallenge[] = [];
    allDocs.forEach(doc => {
        const {id, name, level, description, startdate, enddate, imageURL} = doc.data();
        const data : IChallenge = {
            id: id,
            name: name,
            level: level,
            description: description,
            startdate: startdate,
            enddate: enddate,
            imageURL: imageURL
        }
        hackathonData.push(data);
    });
    return hackathonData;    
}
