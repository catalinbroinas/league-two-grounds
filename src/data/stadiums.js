import images from "./images";

const stadiums = [
    {
        id: crypto.randomUUID(),
        stadium: {
            name: 'Wham Stadium	',
            image: images.accringtonStanley.stadium,
            buildYear: 1968,
            capacity: 5450,
            rank: 2
        },
        team: {
            name: 'Accrington Stanley',
            image: images.accringtonStanley.team
        }
    },
    {
        id: crypto.randomUUID(),
        stadium: {
            name: 'Plough Lane',
            image: images.afcWimbledon.stadium,
            buildYear: 2020,
            capacity: 9215,
            rank: 4
        },
        team: {
            name: 'AFC Wimbledon',
            image: images.afcWimbledon.team
        }
    },
    {
        id: crypto.randomUUID(),
        stadium: {
            name: 'Stadium MK',
            image: images.mkDons.stadium,
            buildYear: 2007,
            capacity: 30500,
            rank: 5
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
            capacity: 24840,
            rank: 3.5
        },
        team: {
            name: 'Bradford City',
            image: images.bradfordCity.team
        }
    }
];

export default stadiums;
