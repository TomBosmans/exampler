FROM oven/bun
WORKDIR /app
EXPOSE 3000

CMD ["bun", "start:dev"]
