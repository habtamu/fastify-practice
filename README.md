# fastify-practice

## REST API with Fastify

### Api Endpoints GET /
```bash
curl http://localhost:3000
```

### Api Endpoints POST /login
```bash
curl --location 'localhost:3000/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username": "admin",
    "password": "p@ssw0rd"
}'
```

### Api Endpoints GET /protected
```bash
curl --location 'localhost:3000/protected/admin' \
--header 'Authorization: Bearer <token>'

```

## GraphQL API with Fastify
### 1. Basic
```bash
https://github.com/anapaulalemos/the-graphql-workshop/tree/master/src/step-01-basic

```