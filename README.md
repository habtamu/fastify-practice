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
### client
<!-- http://localhost:3000/graphiql -->

### 1. Basic
```bash
https://github.com/anapaulalemos/the-graphql-workshop/tree/master/src/step-01-basic

curl --request POST \
  --url http://localhost:3000/graphql \
  --header 'Content-Type: application/json' \
  --data '{"query":"{ add(x: 4, y:5) }"}'

```graphql  
# Create a schema including an add Query accepting parameters x and y
# Implement a resolver for the add query
# Respond with the JSON object when invoked with (x:5, y:3)

# http://127.0.0.1:3000/graphql
query sum {
	add(x:4, y:5)
}


```

### 2. Loaders
- A loader is an utility to avoid the N+1 query problem of GraphQL. Each defined loader will register a resolver that coalesces each of the request and combines them into a single, bulk query.
- Moreover, it can also cache the results, so that other parts of the GraphQL do not have to fetch the same data.
```
- Create a Person type with name property
- Create a Pet type with name and owner property (of type Person)
- Expose a pets query which returns all pets and, for each pet, its owner, using GraphQL loaders
```

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

### 4. n + 1 Problem

```bash
https://github.com/anapaulalemos/the-graphql-workshop/tree/master/src/step-04-n%2B1
```

```text
Note: Migration
1. pnpm install -g pg postgrator-cli
2. create script in package.json
   "db:migrate": "postgrator",
3. create file .postgratorrc.json
{
    "migrationPattern": "migrations/*",
    "driver": "pg",
    "host": "127.0.0.1",
    "port": 5432,
    "database": "postgres",
    "username": "postgres",
    "password": "0911362311"
}
4. create folder migrations/001.do.sql, 002.do.sql
5. write sql in 001.do.sql and 002.do.sql
6. run command: pnpm run db:migrate
```

```graphql

```
```graphql

query {
	pets {
		name
		owner {
			name
		}
	}
}
```
