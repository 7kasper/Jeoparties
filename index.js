const RestNio = require('restnio');

new RestNio((router, rnio) => {
    router.use('', rnio.serve(__dirname + '/www/', {cache: true, recursive: false, index: 'index.html'}));
    router.use('/resources', rnio.serve(__dirname + '/www/resources/', {cache: false, recursive: false}));


    router.ws('/host', (params, client) => {
        if (params.password === 'DOPE') {
            client.grantPerm('host');
        } else {
            throw [403, 'Incorrect host password!'];
        }
    });

    // GAME BOARD DEFINITION
    let boards = require('./boards');
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
            qId: rnio.$p.integer,
            vaux: rnio.$p.boolean
        },
        permissions: ['host'],
        func: (params) => {
            board.catagories[params.catId].questions[params.qId].taken = true;
            rnio.subs('all').obj({
                type: 'hidequestion', 
                body: {
                    catId: params.catId,
                    qId: params.qId,
                    vaux: params.vaux
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

    router.ws('/specialaction', {
        permissions: ['host'],
        func: () => {
            rnio.subs('all').obj({
                type: 'specialaction'
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