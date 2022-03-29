module.exports = [
    {
        name: 'Jeoparties :-)',
        catagories: [
            {
                name: 'Jeoparties',
                questions: [
                    {value:    0, taken: true},
                    {value:  400, taken: true},
                    {value:  600, taken: true},
                    {value: 1000, taken: false},
                    {value: 1000, taken: true},
                ]
            },
            {
                name: 'Jeoparties',
                questions: [
                    {value:    0, taken: true},
                    {value:    0, taken: false},
                    {value:  600, taken: true},
                    {value:  800, taken: true},
                    {value: 1000, taken: false},
                ]
            },
            {
                name: 'Jeoparties',
                questions: [
                    {value:    0, taken: true},
                    {value:  400, taken: true},
                    {value:  600, taken: true},
                    {value:  800, taken: true},
                    {value: 1000, taken: false},
                ]
            },
            {
                name: 'Jeoparties',
                questions: [
                    {value:    0, taken: true},
                    {value:  400, taken: true},
                    {value:  600, taken: true},
                    {value:  800, taken: true},
                    {value: 1000, taken: false},
                ]
            },
            {
                name: 'Jeoparties',
                questions: [
                    {value:    0, taken: true},
                    {value:    0, taken: false},
                    {value:  600, taken: true},
                    {value:  800, taken: true},
                    {value: 1000, taken: false},
                ]
            },
            {
                name: 'Jeoparties',
                questions: [
                    {value:    0, taken: true},
                    {value:  400, taken: true},
                    {value:  600, taken: true},
                    {value: 1000, taken: false},
                    {value: 1000, taken: true},
                ]
            }, 
        ]
    },
    {
        name: 'Round 1',
        catagories: [
            {
                name: 'Battles of History',
                questions: [
                    {
                        value:  200, 
                        taken: false, 
                        kind: 'normal', 
                        text: 'This fight was the tipping point for the USA to join WWII', 
                        answer: 'Pearl Harbor'
                    },
                    {
                        value:  400, 
                        taken: false,
                        kind: 'normal',
                        text: 'The end of Napoleon Bonaparte.',
                        answer: 'Waterloo'
                    },
                    {
                        value:  600, 
                        taken: false,
                        kind: 'normal',
                        text: 'This battle was the turning point in WWII',
                        answer: 'Slag om Stalingrad'
                    },
                    {
                        value:  800, 
                        taken: false, 
                        kind: 'normal',
                        special: 'dailydouble',
                        text: 'This battle was the worst defeat of the Roman empire.',
                        answer: 'Battle of Cannea.'
                    },
                    {
                        value: 1000, 
                        taken: false,
                        kind: 'normal',
                        text: 'The Dutch tradition to eat Herring and white bread comes from this seige.',
                        answer: 'Leids beleg. / Seige of Leiden'
                    },
                ]
            },
            {
                name: 'Hills and mountains',
                questions: [
                    {
                        value:  200, 
                        taken: false, 
                        kind: 'photo', 
                        text: 'See photo',
                        url: '/resources/berg-a.PNG',
                        answer: 'Matterhorn'
                    },
                    {
                        value:  400, 
                        taken: false, 
                        kind: 'photo', 
                        text: 'See photo',
                        url: '/resources/berg-b.PNG',
                        answer: 'Mount Kilimanjaro'
                    },
                    {
                        value:  600, 
                        taken: false, 
                        kind: 'photo', 
                        text: 'See photo',
                        url: '/resources/berg-c.PNG',
                        answer: 'Vaalserberg'
                    },
                    {
                        value:  800, 
                        taken: false, 
                        kind: 'photo', 
                        text: 'See photo',
                        url: '/resources/berh-d.PNG',
                        answer: 'Vluchtheuvel / Flight hill'
                    },
                    {
                        value:  1000, 
                        taken: false, 
                        kind: 'photo', 
                        text: 'See photo',
                        url: '/resources/berg-e.PNG',
                        answer: 'Mount Everest'
                    }
                ]
            },
            {
                name: 'Sports',
                questions: [
                    {
                        value:  200, 
                        taken: false, 
                        kind: 'normal', 
                        text: 'Amount of events in a heptathlon.', 
                        answer: '7'
                    },
                    {
                        value:  400, 
                        taken: false,
                        kind: 'normal',
                        text: 'This country won the world championship soccer for men in 1994.',
                        answer: 'Brazil'
                    },
                    {
                        value:  600, 
                        taken: false,
                        kind: 'normal',
                        text: 'This old sport is often called \'the mother of sports\'.',
                        answer: 'Atheletics'
                    },
                    {
                        value:  800, 
                        taken: false, 
                        kind: 'normal',
                        text: 'The total amount of different olympic athletic events (parts).',
                        answer: '24'
                    },
                    {
                        value: 1000, 
                        taken: false,
                        kind: 'normal',
                        text: 'This sport is practised by Gary Anderson and Simon Whitlock.',
                        answer: 'Darts'
                    },
                ]
            },
            {
                name: 'Funk/Disco',
                questions: [
                    {
                        value:  200, 
                        taken: false,
                        kind: 'audio',
                        text: 'Name and artist',
                        url: '/resources/disco-a.mp3',
                        answer: 'Earth, wind and fire: let\'s groove.'
                    },
                    {
                        value:  400, 
                        taken: false,
                        kind: 'audio',
                        text: 'Name and artist',
                        url: '/resources/disco-b.mp3',
                        answer: 'Bee Gees: Night fever'
                    },
                    {
                        value:  600, 
                        taken: false,
                        kind: 'audio',
                        text: 'Name and artist',
                        url: '/resources/disco-c.mp3',
                        answer: 'Wild Cherry: Play that funky music.'
                    },
                    {
                        value:  800, 
                        taken: false,
                        kind: 'audio',
                        text: 'Name and artist',
                        url: '/resources/disco-d.mp3',
                        answer: 'Gloria Gaynor: I will survive.'
                    },
                    {
                        value:  1000, 
                        taken: false,
                        kind: 'audio',
                        text: 'Name and artist',
                        url: '/resources/disco-e.mp3',
                        answer: 'The Trammps: disco inferno.'
                    }
                ]
            },
            {
                name: 'EE',
                questions: [
                    {
                        value:  200, 
                        taken: false,
                        kind: 'photo',
                        special: 'dailydouble',
                        text: 'Simplify the bondgraph.',
                        url: '/resources/bondgraphq.png',
                        urlans: '/resources/bondgrapha.PNG',                        
                        answer: 'See picture'
                    },
                    {
                        value:  400, 
                        taken: false,
                        kind: 'photo',
                        text: 'The function of this IC.',
                        url: '/resources/AD570-HD.jpg',
                        answer: 'ADC (SAR, 8 bit)'
                    },
                    {
                        value:  600, 
                        taken: false,
                        kind: 'photo',
                        text: 'The output of this logic circuit.',
                        url: '/resources/gate4.gif',
                        answer: '0'
                    },
                    {
                        value:  800, 
                        taken: false,
                        kind: 'photo',
                        text: 'What is the determinant of this matrix?',
                        url: '/resources/det2x2.png',
                        answer: '357'
                    },
                    {
                        value:  1000, 
                        taken: false,
                        kind: 'photo',
                        text: 'What is wrong in this Matlab script that computes the DFT of x?',
                        url: '/resources/matlabdft.png',
                        answer: 'The second n in line 5 should have been capital N; n is not initialized.'
                    }
                ]
            },
            {
                name: 'International Knowledge',
                questions: [
                    {
                        value:  200, 
                        taken: false, 
                        kind: 'normal', 
                        text: 'The amount of timezones in Russia.', 
                        answer: '11'
                    },
                    {
                        value:  400, 
                        taken: false, 
                        kind: 'normal', 
                        text: 'All roads lead to...', 
                        answer: 'Rome'
                    },
                    {
                        value:  600, 
                        taken: false,
                        kind: 'normal',
                        text: 'The national flower of Japan.',
                        answer: 'Cherry blossom'
                    },
                    {
                        value:  800, 
                        taken: false,
                        kind: 'normal',
                        text: 'The amount of stripes on the flag of the USA.',
                        answer: '13'
                    },
                    {
                        value:  1000, 
                        taken: false, 
                        kind: 'normal',
                        text: 'The previous name of Istanbul.',
                        answer: 'Constantinopel [byzantium]'
                    }
                ]
            }
        ]
    },
    {
        name: 'Round 2',
        catagories: [
            {
                name: 'Ape species',
                questions: [
                    {
                        value:  200, 
                        taken: false, 
                        kind: 'photo', 
                        text: 'This ape',
                        url: '/resources/aap-a.png',
                        answer: '(ring tail) maki'
                    },
                    {
                        value:  400, 
                        taken: false, 
                        kind: 'photo', 
                        text: 'This ape',
                        url: '/resources/aap-b.png',
                        answer: 'lion tamarin'
                    },
                    {
                        value:  600, 
                        taken: false, 
                        kind: 'photo', 
                        text: 'This ape',
                        url: '/resources/aap-c.png',
                        answer: 'Tarsier'
                    },
                    {
                        value:  800, 
                        taken: false, 
                        kind: 'photo', 
                        text: 'See photo',
                        url: '/resources/aap-d.jpg',
                        answer: 'Orangutan'
                    },
                    {
                        value:  1000, 
                        taken: false, 
                        kind: 'photo', 
                        text: 'See photo',
                        url: '/resources/aap-e.png',
                        answer: 'Proboscis monkey'
                    }
                ]
            },
            {
                name: 'Topography',
                questions: [
                    {
                        value:  200, 
                        taken: false, 
                        kind: 'normal', 
                        text: 'Accra is the capitol of this country.', 
                        answer: 'Ghana'
                    },
                    {
                        value:  400, 
                        taken: false,
                        kind: 'normal',
                        text: 'This property is shown by contour lines.',
                        answer: 'Height'
                    },
                    {
                        value:  600, 
                        taken: false,
                        kind: 'normal',
                        text: 'This land houses the largest building in the world.',
                        answer: 'China'
                    },
                    {
                        value:  800, 
                        taken: false, 
                        kind: 'normal',
                        text: 'The capitol of Chili.',
                        answer: 'Santiago / Santiago de Chile'
                    },
                    {
                        value: 1000, 
                        taken: false,
                        special: 'dailydouble',
                        kind: 'normal',
                        text: 'This is the currency used in Poland.',
                        answer: 'The Polish Zloty'
                    },
                ]
            },
            {
                name: 'Drinks',
                questions: [
                    {
                        value:  200, 
                        taken: false, 
                        kind: 'normal', 
                        text: 'The name of this famous Italian lemon liqueur.', 
                        answer: 'Limoncello'
                    },
                    {
                        value:  400, 
                        taken: false,
                        kind: 'normal',
                        text: 'The country with the highest beer consumption per capita.',
                        answer: 'The Czech Republic'
                    },
                    {
                        value:  600, 
                        taken: false,
                        kind: 'normal',
                        text: 'This soft drink is the most consumed bevarage in the world.',
                        answer: 'Coca Cola'
                    },
                    {
                        value:  800, 
                        taken: false, 
                        kind: 'normal',
                        text: 'The type of cactus distilled to create tequila.',
                        answer: 'Agave cactus.'
                    },
                    {
                        value: 1000, 
                        taken: false,
                        kind: 'normal',
                        text: 'The common condiment of ouzo, sambuca, absint en raki.',
                        answer: 'Anise / aniseed'
                    },
                ]
            },
            {
                name: 'Scintilla',
                questions: [
                    {
                        value:  200, 
                        taken: false, 
                        kind: 'normal', 
                        text: 'The amount of members of honour Scintilla currently has.', 
                        answer: 'Eight (8)'
                    },
                    {
                        value:  400, 
                        taken: false,
                        kind: 'normal',
                        text: 'This teacher has attended the Cantus Scintillae most often.',
                        answer: 'Bram Nauta'
                    },
                    {
                        value:  600, 
                        taken: false,
                        kind: 'normal',
                        text: 'The royal highness that has officially recognized our association.',
                        answer: 'Queen Juliana'
                    },
                    {
                        value:  800, 
                        taken: false, 
                        kind: 'normal',
                        special: 'dailydouble',
                        text: 'In this year Scintilla was founded.',
                        answer: '1965'
                    },
                    {
                        value:  1000, 
                        taken: false, 
                        kind: 'photo', 
                        text: 'One of these colors is considered Scintilla-red.',
                        url: '/resources/scintillared.png',
                        answer: 'Top left (#E4002B, better known as PMS185C)'
                    }
                ]
            },
            {
                name: 'Logos and Series',
                questions: [
                    {
                        value:  200, 
                        taken: false, 
                        kind: 'photo', 
                        text: 'The series belonging to this logo.',
                        url: '/resources/tvseries-a.jpg',
                        answer: 'Squidgame'
                    },
                    {
                        value:  400, 
                        taken: false, 
                        kind: 'photo', 
                        text: 'See photo',
                        url: '/resources/tvseries-b.jpg',
                        answer: 'Game of Thrones'
                    },
                    {
                        value:  600, 
                        taken: false, 
                        kind: 'photo', 
                        text: 'See photo',
                        url: '/resources/tvseries-c.jpg',
                        answer: 'Flodder'
                    },
                    {
                        value:  800, 
                        taken: false, 
                        kind: 'photo', 
                        text: 'See photo',
                        url: '/resources/tvseries-d.jpg',
                        answer: 'Breaking Bad'
                    },
                    {
                        value:  1000, 
                        taken: false, 
                        kind: 'photo', 
                        text: 'See photo (be specific!)',
                        url: '/resources/tvseries-e.jpg',
                        answer: 'Star Trek the next generation'
                    }
                ]
            },
            {
                name: 'James Bond intro\'s',
                questions: [
                    {
                        value:  400, 
                        taken: false,
                        kind: 'video',
                        text: 'James Bond Movie',
                        url: '/resources/jb-a.mp4',
                        answer: 'GoldFinger'
                    },
                    {
                        value:  800, 
                        taken: false,
                        kind: 'video',
                        text: 'James Bond Movie',
                        url: '/resources/jb-b.mp4',
                        answer: 'Spectre'
                    },
                    {
                        value:  1200, 
                        taken: false,
                        kind: 'video',
                        text: 'James Bond Movie',
                        url: '/resources/jb-c.mp4',
                        answer: 'You only live twice'
                    },
                    {
                        value:  1600, 
                        taken: false,
                        kind: 'video',
                        text: 'James Bond Movie',
                        url: '/resources/jb-d.mp4',
                        answer: 'Skyfall'
                    },
                    {
                        value: 2000, 
                        taken: false,
                        kind: 'video',
                        text: 'James Bond Movie',
                        url: '/resources/jb-e.mp4',
                        answer: 'Dr. No'
                    },
                ]
            }
        ]
    },
    {
        name: 'Round 3',
        catagories: [
            {
                name: 'Up Close',
                questions: [
                    {
                        value:  400, 
                        taken: false, 
                        kind: 'photo', 
                        text: 'Look with care',
                        url: '/resources/zoom-d.PNG',
                        urlans: '/resources/zoom-d-uit.PNG',
                        answer: 'Wall socket'
                    },
                    {
                        value:  800, 
                        taken: false, 
                        kind: 'photo', 
                        text: 'Look with care',
                        url: '/resources/zoom-b.PNG',
                        urlans: '/resources/zoom-b-uit.PNG',
                        answer: 'Oliebol'
                    },
                    {
                        value:  1200, 
                        taken: false, 
                        kind: 'photo', 
                        text: 'Look with care',
                        url: '/resources/zoom-e.PNG',
                        urlans: '/resources/zoom-e-uit.PNG',
                        answer: 'Clothespin / Wasknijper'
                    },
                    {
                        value:  1600, 
                        taken: false, 
                        kind: 'photo', 
                        text: 'Look with care',
                        url: '/resources/zoom-a.PNG',
                        urlans: '/resources/zoom-a-uit.PNG',
                        answer: 'Tea Light / waxinelichtje'
                    },
                    {
                        value:  2000, 
                        taken: false, 
                        kind: 'photo', 
                        text: 'Look with care',
                        url: '/resources/zoom-c.PNG',
                        urlans: '/resources/zoom-c-uit.PNG',
                        answer: 'Piano(keys)'
                    }
                ]
            },
            {
                name: 'Small Countries',
                questions: [
                    {
                        value:  400, 
                        taken: false, 
                        kind: 'photo', 
                        text: 'See photo',
                        url: '/resources/kleinland-a.PNG',
                        answer: 'Luxemburg'
                    },
                    {
                        value:  800, 
                        taken: false, 
                        kind: 'photo', 
                        text: 'See photo',
                        url: '/resources/kleinland-b.PNG',
                        answer: 'Andorra'
                    },
                    {
                        value:  1200, 
                        taken: false, 
                        kind: 'photo', 
                        text: 'See photo',
                        url: '/resources/kleinland-c.PNG',
                        answer: 'Monaco'
                    },
                    {
                        value:  1600, 
                        taken: false, 
                        kind: 'photo', 
                        text: 'See photo',
                        url: '/resources/kleinland-d.PNG',
                        answer: 'Kuwait'
                    },
                    {
                        value:  2000, 
                        taken: false, 
                        kind: 'photo', 
                        text: 'See photo',
                        url: '/resources/kleinland-e.PNG',
                        answer: 'Liechtenstein'
                    }
                ]
            },
            {
                name: 'Cooking and Eating',
                questions: [
                    {
                        value:  400, 
                        taken: false, 
                        kind: 'normal', 
                        text: 'Its bad taste to toast with this drink.', 
                        answer: 'Water'
                    },
                    {
                        value:  800, 
                        taken: false,
                        kind: 'normal',
                        text: 'The amount of grapes in an average bottle of wine.',
                        answer: '600-800'
                    },
                    {
                        value:  1200, 
                        taken: false,
                        kind: 'normal',
                        text: 'Amount of cups of tea drunk in the UK on a daily basis.',
                        answer: '>100 million (165)'
                    },
                    {
                        value:  1600, 
                        taken: false, 
                        kind: 'normal',
                        special: 'dailydouble',
                        text: 'The name of the fear of peanut butter sticking to the roof of your mouth.',
                        answer: 'Arachibutyrophobia'
                    },
                    {
                        value: 2000, 
                        taken: false,
                        kind: 'normal',
                        text: 'The most expensive spice in the world.',
                        answer: 'Saffron'
                    },
                ]
            },
            {
                name: 'Puzzles',
                questions: [
                    {
                        value:  400, 
                        taken: false,
                        kind: 'photo',
                        text: 'Two matching christmas trees.',
                        url: '/resources/ZoekDezelfdeKerstboomQ.PNG',
                        urlans: '/resources/ZoekDezelfdeKerstboomA.PNG',                        
                        answer: 'E en F'
                    },
                    {
                        value:  800, 
                        taken: false,
                        kind: 'photo',
                        text: 'Two matching figures.',
                        url: '/resources/ZoekDezelfdePopQ.PNG',
                        urlans: '/resources/ZoekDezelfdePopA.PNG',
                        answer: 'A en F'
                    },
                    {
                        value:  1200, 
                        taken: false,
                        kind: 'photo',
                        text: 'This sled is different.',
                        url: '/resources/ZoekVerschillendeSleeQ.PNG',
                        urlans: '/resources/ZoekVerschillendeSleeA.PNG',
                        answer: 'C'
                    },
                    {
                        value:  1600, 
                        taken: false,
                        kind: 'photo',
                        text: 'Find the next logical picture.',
                        url: '/resources/VolgendePlaatje1Q.PNG',
                        urlans: '/resources/VolgendePlaatje1A.PNG',                        
                        answer: 'B'
                    },
                    {
                        value: 2000, 
                        taken: false,
                        kind: 'photo',
                        text: 'Find the next logical picture.',
                        url: '/resources/VolgendePlaatje2Q.PNG',
                        urlans: '/resources/VolgendePlaatje2A.PNG',
                        answer: 'A'
                    },
                ]
            },
            {
                name: 'Teacher Facts',
                questions: [
                    {
                        value:  400, 
                        taken: false, 
                        kind: 'normal', 
                        text: 'This teacher won the first (then Opel) EE teacher award.', 
                        answer: 'Bram Nauta'
                    },
                    {
                        value:  800, 
                        taken: false,
                        kind: 'normal',
                        text: 'Object used by Anne-Johan use to build an atenna during the fields and waves module.',
                        answer: 'Kichen Knife'
                    },
                    {
                        value:  1200, 
                        taken: false,
                        kind: 'normal',
                        text: 'The topic of Jurriaans new minor.',
                        answer: 'Energy transitions'
                    },
                    {
                        value:  1600, 
                        taken: false, 
                        kind: 'normal',
                        text: 'Geert Folkertsma works here bescides the University of Twente.',
                        answer: 'Demcom'
                    },
                    {
                        value: 2000, 
                        taken: false,
                        kind: 'normal',
                        text: 'Tracy went to this university before coming to Enschede.',
                        answer: 'University of Capetown'
                    },
                ]
            },
            {
                name: 'Which movie was it again?',
                questions: [
                    {
                        value:  400,
                        taken: false,
                        kind: 'video',
                        text: 'Name the movie.',
                        url: '/resources/film-a.mp4',
                        answer: 'Cars Movie'
                    },
                    {
                        value:  800, 
                        taken: false,
                        kind: 'video',
                        text: 'Name the movie.',
                        url: '/resources/film-b.mp4',
                        answer: 'Star Wars Episode 6 (Return of the Jedi)'
                    },
                    {
                        value:  1200, 
                        taken: false,
                        kind: 'video',
                        text: 'Name the movie.',
                        url: '/resources/film-d.mp4',
                        answer: 'Godfather (I)'
                    },
                    {
                        value: 1600, 
                        taken: false,
                        kind: 'video',
                        text: 'Name the movie.',
                        url: '/resources/film-e.mp4',
                        answer: 'Schindler\'s list'
                    },
                    {
                        value:  2000, 
                        taken: false,
                        kind: 'video',
                        text: 'Name the movie.',
                        url: '/resources/film-c.mp4',
                        answer: 'The good the bad and the ugly.'
                    }
                ]
            }
        ]
    },
    {
        name: 'Final Jeopardy',
        catagories: [
            {
                name: 'Final',
                questions: [
                    {value:  0, taken: false, kind: 'normal', text: 'This is the most common beverage in France.', answer: 'mineraalwater', special: 'finaljeopardy'},
                    {value:  400, taken: true},
                    {value:  600, taken: true},
                    {value:  800, taken: true},
                    {value: 1000, taken: true},
                ]
            },
            {
                name: 'Jeopardy!',
                questions: [
                    {value:  200, taken: true},
                    {value:  400, taken: true},
                    {value:  600, taken: true},
                    {value:  800, taken: true},
                    {value: 1000, taken: true},
                ]
            },
            {
                name: 'Final',
                questions: [
                    {value:  200, taken: true},
                    {value:  400, taken: true},
                    {value:  600, taken: true},
                    {value:  800, taken: true},
                    {value: 1000, taken: true},
                ]
            },
            {
                name: 'Jeopardy!',
                questions: [
                    {value:  200, taken: true},
                    {value:  400, taken: true},
                    {value:  600, taken: true},
                    {value:  800, taken: true},
                    {value: 1000, taken: true},
                ]
            },
            {
                name: 'Final',
                questions: [
                    {value:  200, taken: true},
                    {value:  400, taken: true},
                    {value:  600, taken: true},
                    {value:  800, taken: true},
                    {value: 1000, taken: true},
                ]
            },
            {
                name: 'Jeopardy!',
                questions: [
                    {value:  200, taken: true},
                    {value:  400, taken: true},
                    {value:  600, taken: true},
                    {value:  800, taken: true},
                    {value: 1000, taken: true},
                ]
            }, 
        ]
    },
];
