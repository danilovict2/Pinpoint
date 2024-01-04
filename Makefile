SHELL := /bin/bash

server-start:
	symfony serve -d
	symfony run -d npm run watch
	docker-compose up -d
.PHONY: server-start

server-stop:
	symfony server:stop
	docker-compose stop
.PHONY: server-stop