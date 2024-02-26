include .env

start:
	@docker compose start $(service)

stop:
	@docker compose stop $(service)

restart:
	@docker compose restart $(service)

up:
	@docker compose up -d

log:
	@docker compose logs -f $(service)

build:
	@docker compose build

shell:
	@docker compose run --rm --no-deps $(service) sh

psql:
	@docker compose exec postgres sh -c "su - postgres -c 'psql $(db)'"

redis:
	@docker compose exec redis sh -c "redis-cli -h ${REDIS_HOST} --user ${REDIS_USER} -a ${REDIS_PASSWORD} -p ${REDIS_PORT} -n ${db}"
