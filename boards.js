module.exports = [
    {
        name: 'Jeoparties :-)',
        catagories: [
            {
                name: 'Jeoparties',
                questions: [
                    {value:  0,   taken: true},
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
                    {value:  0,   taken: true},
                    {value:  400, taken: true},
                    {value:  600, taken: true},
                    {value:  800, taken: true},
                    {value: 1000, taken: false},
                ]
            },
            {
                name: 'Jeoparties',
                questions: [
                    {value:  0,   taken: true},
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
                    {value:  0,   taken: true},
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
                name: 'Ballgames',
                questions: [
                    {value:  200, taken: true, kind: 'normal', text: 'Soccer', answer: 'What is a ballgame?'},
                    {value:  400, taken: true},
                    {value:  600, taken: true},
                    {value:  800, taken: false, special: 'dailydouble'},
                    {value: 1000, taken: true},
                ]
            },
            {
                name: 'Phototest',
                questions: [
                    {
                        value:  200, 
                        taken: false, 
                        kind: 'photo', 
                        text: 'This kind of car',
                        url: '/resources/car.png'
                    },
                    {
                        value:  400, 
                        taken: false, 
                        kind: 'photo', 
                        text: 'Big thing',
                        url: '/resources/big.png',
                        urlans: '/resources/biganswer.png'
                    },
                    {value:  600, taken: true},
                    {value:  800, taken: true},
                    {value: 1000, taken: true},
                ]
            },
            {
                name: 'AudioTest',
                questions: [
                    {
                        value:  200, 
                        taken: false,
                        kind: 'audio',
                        text: 'Listen to this!',
                        url: '/resources/theme.mp3'
                    },
                    {value:  400, taken: true},
                    {value:  600, taken: true},
                    {value:  800, taken: true},
                    {value: 1000, taken: true},
                ]
            },
            {
                name: 'VideoTest',
                questions: [
                    {
                        value:  200, 
                        taken: false,
                        kind: 'video',
                        text: 'Watch this video!',
                        url: '/resources/theme.mp4'
                    },
                    {value:  400, taken: true},
                    {value:  600, taken: true},
                    {value:  800, taken: true},
                    {value: 1000, taken: true},
                ]
            },
            {
                name: 'Chess',
                questions: [
                    {value:  200, taken: true},
                    {value:  400, taken: true},
                    {value:  600, taken: true},
                    {value:  800, taken: true},
                    {value: 1000, taken: true},
                ]
            },
            {
                name: 'Chess',
                questions: [
                    {value:  200, taken: true},
                    {value:  400, taken: true},
                    {value:  600, taken: true},
                    {value:  800, taken: true},
                    {value: 1000, taken: false},
                ]
            }, 
        ]
    },
    {
        name: 'Round 2',
        catagories: [
            {
                name: 'BEEP',
                questions: [
                    {value:  200, taken: true, kind: 'normal', text: 'Soccer', answer: 'What is ballgame?'},
                    {value:  400, taken: true},
                    {value:  600, taken: true},
                    {value:  800, taken: false},
                    {value: 1000, taken: true},
                ]
            },
            {
                name: 'BOOP',
                questions: [
                    {value:  200, taken: true},
                    {value:  400, taken: true},
                    {value:  600, taken: true},
                    {value:  800, taken: true},
                    {value: 1000, taken: true},
                ]
            },
            {
                name: 'Chess',
                questions: [
                    {value:  200, taken: true},
                    {value:  400, taken: true},
                    {value:  600, taken: true},
                    {value:  800, taken: true},
                    {value: 1000, taken: true},
                ]
            },
            {
                name: 'Chess',
                questions: [
                    {value:  200, taken: true},
                    {value:  400, taken: true},
                    {value:  600, taken: false},
                    {value:  800, taken: true},
                    {value: 1000, taken: true},
                ]
            },
            {
                name: 'Chess',
                questions: [
                    {value:  200, taken: true},
                    {value:  400, taken: true},
                    {value:  600, taken: true},
                    {value:  800, taken: true},
                    {value: 1000, taken: true},
                ]
            },
            {
                name: 'BAAP',
                questions: [
                    {value:  200, taken: true},
                    {value:  400, taken: true},
                    {value:  600, taken: true},
                    {value:  800, taken: true},
                    {value: 1000, taken: false},
                ]
            }, 
        ]
    },
    {
        name: 'Final Jeopardy',
        catagories: [
            {
                name: 'Final',
                questions: [
                    {value:  0, taken: false, kind: 'normal', text: 'Soccer', answer: 'What is ballgame?', special: 'finaljeopardy'},
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