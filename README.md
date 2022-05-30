### Install

To install and run the application.

- Install db and configure database

    E.g. using sqlite locally
    1. install sqlite

            sudo apt-get install php8.0-sqlite3

    2. create file for the sqlite database

            touch <absolute path>/db.sqlite

    2. point config/config.json to sqlite

            "development": {
                "database": "fixfly",
                "dialect": "sqlite",
                "storage": "<absolute application root path>/server/db.sqlite"
            },

- Run in terminal from application root
    npm i -G sequelize-cli sqlite3
    npm run migrate-fresh

## install using mysql as db
    npm i -G sequelize-cli mysql2
    npm run migrate-fresh
