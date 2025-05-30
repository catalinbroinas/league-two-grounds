import mkStadium from '../assets/img/MKStadium.jpg';
import mkLogo from '../assets/img/mkDons.avif';

import valleyParade from '../assets/img/valleyParade.jpg';
import bcLogo from '../assets/img/BradfordCity.png';

const stadiums = [
    {
        id: crypto.randomUUID(),
        stadium: {
            name: 'MK Stadium',
            image: mkStadium,
            buildYear: 2010,
            capacity: 30000,
            rank: 4.5
        },
        team: {
            name: 'MK Dons',
            image: mkLogo
        }
    },
    {
        id: crypto.randomUUID(),
        stadium: {
            name: 'Valley Parade',
            image: valleyParade,
            buildYear: 1886,
            capacity: 25000,
            rank: 3.5
        },
        team: {
            name: 'Bradford City',
            image: bcLogo
        }
    }
];

export default stadiums;
