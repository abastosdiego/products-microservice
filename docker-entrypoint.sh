#!/bin/sh
set -e  # Faz o script falhar caso algum comando falhe

chmod -R 777 .

if [ "$INICIALIZAR_PROJETO" = "true" ]; then
    yarn init -y
    yarn add typescript ts-node nodemon express @types/express mongodb mongoose @types/mongoose dotenv axios
    npx tsc --init

    yarn add --dev jest ts-jest @types/jest
    #yarn add --dev babel-jest @babel/core @babel/preset-env  @babel/preset-typescript
fi

yarn install --frozen-lockfile

#npx nodemon server.js
npx nodemon --exec "node --loader ts-node/esm" server.js