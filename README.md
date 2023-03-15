# Buzzvel Assessment

This project was made as a technical assessment for a position at Buzzvel.

## Techs

- React
- Typescript
- TailwindCSS
- NodeJS
- Fastify
- Vitest
- qrcode

## How to run

This project is hosted online. You can access the frontend at [https://buzzvel-web.vercel.app](https://buzzvel-web.vercel.app).

> Please, note that the backend is hosted on a free Render plan, so it may take a few seconds to load the first time you make a request.

## Docker

You can also run the project using Docker. To do so, you need to clone this repository and run docker-compose inside the root directory:

```bash
docker-compose up
```

In order to run with docker, you need to set the environment variables used by the server and client inside the [docker-compose.yml](https://github.com/rasteli/buzzvel/blob/main/docker-compose.yml) file: _HOST_ for the server and _VITE_API_URL_ for the client.

The former is the client host that the server will use to generate the QR code, so you can access it once you scan the code. You probably will do this with your phone, so it needs to have access to this host. The latter is the server host the client will make requests to.
