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

## NextJS differences (from standard boilerplate)

- [next.config.js](https://github.com/moofoo/turbo-docker-monorepo/blob/main/apps/frontend/next.config.js)

```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
};

module.exports = nextConfig;
```

- [package.json](https://github.com/moofoo/turbo-docker-monorepo/blob/main/apps/frontend/package.json) (added 'server' script)

```json
{
  "name": "frontend",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "server": "node server.js"
  },
  "dependencies": {
    "@types/node": "20.1.7",
    "@types/react": "18.2.6",
    "@types/react-dom": "18.2.4",
    "eslint": "8.40.0",
    "eslint-config-next": "13.4.2",
    "next": "13.4.2",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "typescript": "5.0.4"
  }
}
```

## NestJS differences (from standard boilerplate)

- [main.ts](https://github.com/moofoo/turbo-docker-monorepo/blob/main/apps/backend/src/main.ts)

```typescript
import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(
    process.env.PORT || 3333,
    process.env.IN_CONTAINER === "1" ? "0.0.0.0" : "127.0.0.1"
  );
}
bootstrap();
```

## References

- [Turborepo - Deploying with Docker](https://turbo.build/repo/docs/handbook/deploying-with-docker#example)
- [NextJS - With Docker Compose example](https://github.com/vercel/next.js/tree/canary/examples/with-docker-compose)
