# fastify-practice

## Api Endpoints GET /
```bash
curl http://localhost:3000
```

## Api Endpoints POST /login
```bash
curl --location 'localhost:3000/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username": "admin",
    "password": "p@ssw0rd"
}'
```

## Api Endpoints GET /protected
```bash
curl --location 'localhost:3000/protected/admin' \
--header 'Authorization: Bearer <token>'

```