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
            name: 'Priestfield Stadium',
            image: images.gillingham.stadium,
            buildYear: 1893,
            capacity: 11582,
            rank: 3
        },
        team: {
            name: 'Gillingham',
            image: images.gillingham.team
        }
    },
    {
        id: crypto.randomUUID(),
        stadium: {
            name: 'Blundell Park',
            image: images.grinsbyTown.stadium,
            buildYear: 1899,
            capacity: 9052,
            rank: 2.5
        },
        team: {
            name: 'Grimsby Town',
            image: images.grinsbyTown.team
        }
    },
    {
        id: crypto.randomUUID(),
        stadium: {
            name: 'Wetherby Road',
            image: images.harrogateTown.stadium,
            buildYear: 1920,
            capacity: 5000,
            rank: 2
        },
        team: {
            name: 'Harrogate Town',
            image: images.harrogateTown.team
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
            name: 'Mazuma Stadium',
            image: images.morecambe.stadium,
            buildYear: 2010,
            capacity: 6476,
            rank: 3
        },
        team: {
            name: 'Morecambe',
            image: images.morecambe.team
        }
    },
    {
        id: crypto.randomUUID(),
        stadium: {
            name: 'Rodney Parade',
            image: images.newportCounty.stadium,
            buildYear: 1877,
            capacity: 8700,
            rank: 1.5
        },
        team: {
            name: 'Newport County',
            image: images.newportCounty.team
        }
    },
    {
        id: crypto.randomUUID(),
        stadium: {
            name: 'Meadow Lane',
            image: images.nottsCounty.stadium,
            buildYear: 1910,
            capacity: 19841,
            rank: 3.5
        },
        team: {
            name: 'Notts County',
            image: images.nottsCounty.team
        }
    },
    {
        id: crypto.randomUUID(),
        stadium: {
            name: 'Vale Park',
            image: images.portVale.stadium,
            buildYear: 1950,
            capacity: 15695,
            rank: 4
        },
        team: {
            name: 'Port Vale',
            image: images.portVale.team
        }
    },
    {
        id: crypto.randomUUID(),
        stadium: {
            name: 'Moor Lane',
            image: images.salfordCity.stadium,
            buildYear: 1978,
            capacity: 5108,
            rank: 2.5
        },
        team: {
            name: 'Salford City',
            image: images.salfordCity.team
        }
    },
    {
        id: crypto.randomUUID(),
        stadium: {
            name: 'County Ground',
            image: images.swidonTown.stadium,
            buildYear: 1892,
            capacity: 15728,
            rank: 3
        },
        team: {
            name: 'Swindon Town',
            image: images.swidonTown.team
        }
    },
    {
        id: crypto.randomUUID(),
        stadium: {
            name: 'Prenton Park',
            image: images.tranmereRovers.stadium,
            buildYear: 1912,
            capacity: 16587,
            rank: 3.5
        },
        team: {
            name: 'Tranmere Rovers',
            image: images.tranmereRovers.team
        }
    },
    {
        id: crypto.randomUUID(),
        stadium: {
            name: 'Bescot Stadium',
            image: images.walsall.stadium,
            buildYear: 1990,
            capacity: 11300,
            rank: 4
        },
        team: {
            name: 'Walsall',
            image: images.walsall.team
        }
    }
];

export default stadiums;
