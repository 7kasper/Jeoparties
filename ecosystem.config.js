module.exports = {
apps: [
    {
        name: "jeoparties",
        script: "./index.js",
        env: {
            NODE_ENV: "production",
            githook: {
                command: 'git pull && npm i && pm2 restart jeoparties',
                branch: 'main',
                port: 3333,
                secret: 'jeopartywep'
            }
        },
        env_test: {
            NODE_ENV: "test",
        },
        env_staging: {
            NODE_ENV: "staging",
        },
        env_development: {
            NODE_ENV: "development",
            watch: "."
        },
    },
]};
