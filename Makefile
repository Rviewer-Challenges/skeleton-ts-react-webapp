.PHONY: test coverage

deps:
	docker-compose run node yarn install

down:
	docker-compose down

bash:
	docker-compose run node /bin/sh

up: deps
	docker-compose up app -d

test: deps
	docker-compose run node yarn test

coverage: deps
	docker-compose run -e CI=true node yarn coverage
