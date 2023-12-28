SHELL := /bin/bash

server-start:
	symfony serve -d
	docker-compose up -d
.PHONY: server-start

server-stop:
	symfony server:stop
	docker-compose stop
.PHONY: server-stop