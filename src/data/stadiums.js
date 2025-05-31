import images from "./images";

const stadiums = [
    {
        id: crypto.randomUUID(),
        stadium: {
            name: 'MK Stadium',
            image: images.mkDons.stadium,
            buildYear: 2010,
            capacity: 30000,
            rank: 4.5
        },
        team: {
            name: 'MK Dons',
            image: images.mkDons.team
        }
    },
    {
        id: crypto.randomUUID(),
        stadium: {
            name: 'Valley Parade',
            image: images.bradfordCity.stadium,
            buildYear: 1886,
            capacity: 25000,
            rank: 3.5
        },
        team: {
            name: 'Bradford City',
            image: images.bradfordCity.team
        }
    }
];

export default stadiums;
