# NLW Agents IA

Projeto desenvolvido durante a semana NLW da Rocketseat.

## Tecnologias e Bibliotecas Utilizadas

- **Node.js** (runtime)
- **TypeScript** (tipagem estática)
- **Fastify** (`fastify`, `@fastify/cors`, `fastify-type-provider-zod`) — servidor HTTP rápido e seguro
- **Zod** — validação de esquemas e variáveis de ambiente
- **Drizzle ORM** (`drizzle-orm`, `drizzle-kit`, `drizzle-seed`) — ORM para PostgreSQL
- **Postgres.js** (`postgres`) — driver para PostgreSQL
- **pgvector** — extensão para vetores no PostgreSQL
- **Biome** — formatação e lint de código

## Padrões de Projeto

- **Modularização**: Separação de rotas, conexão com banco e schemas.
- **Validação de ambiente**: Uso de Zod para garantir variáveis obrigatórias.
- **Migrations e Seeds**: Gerenciamento de estrutura e dados do banco via Drizzle.

## Configuração e Setup

### 1. Clone o repositório

```sh
git clone <repo-url>
cd nlw-agentsIA
```

### 2. Instale as dependências

```sh
npm install
```

### 3. Configure o ambiente

Copie `.env.example` para `.env` e preencha as variáveis:

```
PORT=3333
DATABASE_URL="postgresql://docker:docker@localhost:5432/agents"
```


### 4. Execute as migrações do banco


```sh


npx drizzle-kit migrate


```


### 5. Suba o banco de dados com Docker

```sh
docker-compose up -d
```

### 6. Rode as migrations e seeds

```sh
npm run db:seed
```

### 7. Inicie o servidor

```sh
npm run dev
```

## Estrutura do Projeto

- `src/` — código-fonte principal
  - `db/` — conexão, schemas, migrations e seeds do banco
  - `env.ts` — validação das variáveis de ambiente
  - `server.ts` — inicialização do servidor Fastify
- `http/routes/` — rotas HTTP
- `docker/` — scripts de inicialização do banco

## Scripts Principais

- `npm run dev` — inicia o servidor em modo desenvolvimento
- `npm run db:seed` — reseta e popula o banco de dados

---

Desenvolvido durante a NLW da Rocketseat 🚀