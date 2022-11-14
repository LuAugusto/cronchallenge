# Projeto

API CRONCHALLENGE

### Sobre a API

Foi desenvolvido uma API para resolução do desafio proposto pela empresa Coodesh.

## Pré-requisitos e utilização da API

. Para baixar a API:
git clone https://github.com/LuAugusto/cronchallenge.git

. Arquivo .env:
É necessario criar no arquivo .env e definir:
DB_URL -> Url do banco mongoDB

. Instalando recursos e libs:
npm i

. Iniciando a api:
npm run dev

## Utilizando projeto com Docker

Para utilizar o projeto com o docker, siga estas etapas:

Requisitos: Docker instalado

1 - sudo docker-compose build
2 - sudo docker-compose up

Porta do projeto: 3333

## Rotas disponiveis e documentação da API:

rota da documentação swagger: api/docs
Exemplo: http://localhost:3333/api/docs

## - Testes -> Como rodar os teste unitários

npm run test
