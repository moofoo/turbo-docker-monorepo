# turbo-docker-monorepo

## Init

```
git clone https://github.com/moofoo/turbo-docker-monorepo && cd turbo-docker-monorepo && yarn
```

## Docker commands

### Development

```
docker compose [OPTIONS] COMMAND
```

### Production

```
docker compose -f docker-compose.prod.yml [OTHER OPTIONS] COMMAND
```

### Re-build and Re-start project after changing dependencies (development)

```
docker compose stop && docker compose up -d -V --build --force-recreate
```
