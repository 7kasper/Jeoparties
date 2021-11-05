const RestNio = require('restnio');

new RestNio((router, rnio) => {
    router.use('', rnio.serve(__dirname + '/www/', {cache: true, recursive: true, index: 'index.html'}));

    router.ws('/host', (params, client) => {
        if (params.password === 'DOPE') {
            client.grantPerm('host');
        } else {
            throw [403, 'Incorrect host password!'];
        }
    });

    // GAME BOARD DEFINITION
    let boards = [
        {
            name: 'Final Jeopardy',
            catagories: [
                {
                    name: 'Jeopardy!',
                    questions: [
                        {value:  0, taken: false},
                        {value:  400, taken: true},
                        {value:  600, taken: true},
                        {value:  800, taken: true},
                        {value: 1000, taken: true},
                    ]
                },
                {
                    name: 'Jeopardy!',
                    questions: [
                        {value:  0, taken: false},
                        {value:  400, taken: true},
                        {value:  600, taken: true},
                        {value:  800, taken: true},
                        {value: 1000, taken: true},
                    ]
                },
                {
                    name: 'Jeopardy!',
                    questions: [
                        {value:  0, taken: false},
                        {value:  400, taken: true},
                        {value:  600, taken: true},
                        {value:  800, taken: true},
                        {value: 1000, taken: true},
                    ]
                },
                {
                    name: 'Jeopardy!',
                    questions: [
                        {value:  0, taken: false},
                        {value:  400, taken: true},
                        {value:  600, taken: true},
                        {value:  800, taken: true},
                        {value: 1000, taken: true},
                    ]
                },
                {
                    name: 'Jeopardy!',
                    questions: [
                        {value:  0, taken: false},
                        {value:  400, taken: true},
                        {value:  600, taken: true},
                        {value:  800, taken: true},
                        {value: 1000, taken: true},
                    ]
                },
                {
                    name: 'Jeopardy!',
                    questions: [
                        {value:  0, taken: false},
                        {value:  400, taken: true},
                        {value:  600, taken: true},
                        {value:  800, taken: true},
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
                        {value:  200, taken: true, kind: 'normal', text: 'Soccer', answer: 'What is ballgame?'},
                        {value:  400, taken: true},
                        {value:  600, taken: true},
                        {value:  800, taken: false, special: 'dailydouble'},
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
    let boardIndex = 0;

    let board = boards[boardIndex];
    // definition players
    let players = [
        {name: 'Kasper', money: 100},
        {name: 'Eric', money: 0},
        {name: 'Jaap', money: 0},
    ];

    router.ws('/register', {
        params: {
            host: rnio.$p.boolean,
            hostPwd: rnio.$p.string
        },
        func: (params, client) => {
            if (params.host && params.hostPwd === 'DOPE') {
                client.grantPerm('host');
                client.subscribe('hosts');
            } else {
                client.subscribe('clients');
            }
            client.subscribe('all');
            // send board
            client.obj({
                type: 'board',
                body: {board}
            });
            // send players
            client.obj({
                type: 'players',
                body: {players}
            });
        }

    });

    router.ws('/showquestion', {
        params: {
            catId: rnio.$p.integer,
            qId: rnio.$p.integer
        },
        permissions: ['host'],
        func: (params) => {
            rnio.subs('all').obj({
                type: 'showquestion', 
                body: {
                    catId: params.catId,
                    qId: params.qId
                }
            });
        }
    });

    router.ws('/hidequestion', {
        params: {
            catId: rnio.$p.integer,
            qId: rnio.$p.integer
        },
        permissions: ['host'],
        func: (params) => {
            board.catagories[params.catId].questions[params.qId].taken = true;
            rnio.subs('all').obj({
                type: 'hidequestion', 
                body: {
                    catId: params.catId,
                    qId: params.qId
                }
            });
        }
    });

    router.ws('/showspecial', {
        params: {
            catId: rnio.$p.integer,
            qId: rnio.$p.integer,
            special: rnio.$p.string
        },
        permissions: ['host'],
        func: (params) => {
            board.catagories[params.catId].questions[params.qId].taken = true;
            rnio.subs('all').obj({
                type: 'showspecial', 
                body: {
                    catId: params.catId,
                    qId: params.qId,
                    special: params.special
                }
            });
        }
    });

    router.ws('/updateplayers', {
        permissions: ['host'],
        func: (params) => {
            players = params.players;
            rnio.subs('all').obj({
                type: 'players', 
                body: { players: params.players }
            });
        }
    });

    router.ws('/nextboard', {
        permissions: ['host'],
        func: () => {
            board = boards[++boardIndex];
            rnio.subs('all').obj({
                type: 'board',
                body: {board}
            });
        }
    });

    router.get('/testhost', {
        permissions: ['host'],
        func: () => 'you can!'
    });

    router.get('/test', () => 'it works!');
}, {
    port: 5050
}).bind();