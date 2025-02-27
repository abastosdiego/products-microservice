#!/bin/sh
set -e  # Faz o script falhar caso algum comando falhe

chmod -R 777 .

if [ "$INSTALL_NODE_MODULES" = "true" ]; then
    yarn init -y
    yarn add typescript ts-node nodemon express @types/express dotenv mongodb mongoose @types/mongoose tsyringe reflect-metadata axios
    yarn add --dev jest ts-jest @types/jest
    #yarn add dotenv # Environment variables
    #yarn add mongodb mongoose @types/mongoose # MongoDB
    #yarn add tsyringe reflect-metadata ## Dependency injection
    #yarn add --dev jest ts-jest @types/jest # Tests
    #yarn add axios # Http requests
    #yarn add sequelize sequelize-cli ## Sequelize ORM
    #yarn add pg pg-hstore ## Postgres driver
    npx tsc --init
    yarn install --frozen-lockfile
    #npx sequelize-cli init
fi

#npx nodemon server.js
npx nodemon --exec "node --loader ts-node/esm" server.js