import { CarbonNotebook, GroupIcon, IdentificationCard, Robot } from "../public";
import { StatType } from "../types";


const whyAI : StatType[] = [
    {
        heading: 'Prove your skills',
        subHeading: 'Gain substaintial experience by solving real-world problems and pit against others to come up with innovative solutions.',
        icon: CarbonNotebook
    },
    {
        heading: 'Learn from community',
        subHeading: 'One can look analyze the solutions submitted by the other Data Scientists in the community and learn from them.',
        icon: GroupIcon
    },
    {
        heading: 'Challenge yourself',
        subHeading: 'There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.',
        icon: Robot
    },
    {
        heading : 'Earn recognition',
        subHeading: 'You will stand out form the crowd if you do well in AI challenges, it not only helps you shine in the community but alos earns rewards.',
        icon: IdentificationCard
    }
];

export default whyAI;