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
            name: 'Holker Street',
            image: images.barrow.stadium,
            buildYear: 1909,
            capacity: 6500,
            rank: 1
        },
        team: {
            name: 'Barrow AFC',
            image: images.barrow.team
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
    },
    {
        id: crypto.randomUUID(),
        stadium: {
            name: 'Hayes Lane',
            image: images.bromley.stadium,
            buildYear: 1938,
            capacity: 5000,
            rank: 1.5
        },
        team: {
            name: 'Bromley',
            image: images.bromley.team
        }
    },
    {
        id: crypto.randomUUID(),
        stadium: {
            name: 'Brunton Park',
            image: images.carlisleUnited.stadium,
            buildYear: 1909,
            capacity: 17949,
            rank: 1.5
        },
        team: {
            name: 'Carlisle United',
            image: images.carlisleUnited.team
        }
    },
    {
        id: crypto.randomUUID(),
        stadium: {
            name: 'Whaddon Road',
            image: images.cheltenhamTown.stadium,
            buildYear: 1927,
            capacity: 7066,
            rank: 2.5
        },
        team: {
            name: 'Cheltenham Town',
            image: images.cheltenhamTown.team
        }
    },
    {
        id: crypto.randomUUID(),
        stadium: {
            name: 'SMH Group Stadium',
            image: images.chesterfield.stadium,
            buildYear: 2010,
            capacity: 10292,
            rank: 4
        },
        team: {
            name: 'Chesterfield',
            image: images.chesterfield.team
        }
    },
    {
        id: crypto.randomUUID(),
        stadium: {
            name: 'JobServe Community',
            image: images.colchesterUnited.stadium,
            buildYear: 2008,
            capacity: 10105,
            rank: 3.5
        },
        team: {
            name: 'Colchester United',
            image: images.colchesterUnited.team
        }
    },
    {
        id: crypto.randomUUID(),
        stadium: {
            name: 'Gresty Road',
            image: images.creweAlexandra.stadium,
            buildYear: 1906,
            capacity: 10153,
            rank: 2.5
        },
        team: {
            name: 'Crewe Alexandra',
            image: images.creweAlexandra.team
        }
    },
    {
        id: crypto.randomUUID(),
        stadium: {
            name: 'Eco-Power Stadium',
            image: images.doncasterRovers.stadium,
            buildYear: 2007,
            capacity: 15231,
            rank: 4.5
        },
        team: {
            name: 'Doncaster Rovers',
            image: images.doncasterRovers.team
        }
    },
    {
        id: crypto.randomUUID(),
        stadium: {
            name: 'Highbury Stadium',
            image: images.fleetwoodTown.stadium,
            buildYear: 1939,
            capacity: 5327,
            rank: 2.5
        },
        team: {
            name: 'Fleetwood Town',
            image: images.fleetwoodTown.team
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
    }
];

export default stadiums;
