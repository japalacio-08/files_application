build:
	docker-compose build
start:
	docker-compose up --build
stop:
	docker-compose stop
test:
	docker-compose run api npm run ci
	docker-compose run web npm run ci
test_web:
	docker-compose run web npm run ci
test_api:
	docker-compose run api npm run ci
