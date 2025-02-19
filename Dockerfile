# Usa a imagem oficial do Node.js com Alpine (versão leve)
FROM node:22-alpine

# Define o diretório de trabalho
WORKDIR /app

# Instala o bash
RUN apk add --no-cache bash

# Expõe a porta da aplicação
EXPOSE 3000

ENTRYPOINT ["sh", "/app/docker-entrypoint.sh"]