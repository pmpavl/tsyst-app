#!make
include .env

PROJECT?=prokmak
APP?=tsyst-app
PORT?=80
PORT_APP?=80

CONTAINER_IMAGE?=$(PROJECT)/${APP}
RELEASE?=0.0.1

container-build:
	@docker build \
		--build-arg NEXT_PUBLIC_HOST=${NEXT_PUBLIC_HOST} \
		-t $(CONTAINER_IMAGE):$(RELEASE) .

container-run:
	@docker run --name ${APP} -p ${PORT}:${PORT_APP} --rm \
		-e "PORT=${PORT}" \
		$(CONTAINER_IMAGE):$(RELEASE)
