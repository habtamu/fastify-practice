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

```graphql  
# http://127.0.0.1:3000/graphql
query sum {
	add(x:4, y:5)
}
```

### 2. Loaders
```bash
https://github.com/anapaulalemos/the-graphql-workshop/blob/master/src/step-02-loaders
```
```graphql
# http://127.0.0.1:3000/graphql
query {
	pets {
		name
		owner {
			name
			__typename
		}
		__typename
	}
}

```

### 3. Executable Schema
```bash 
https://github.com/anapaulalemos/the-graphql-workshop/tree/master/src/step-03-executable-schema
```

```graphql
# http://127.0.0.1:3000/graphql
query  {
	add(x:4, y:5)
}
```

