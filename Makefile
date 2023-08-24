PROJECT?=prokmak
APP?=tsyst-app
PORT?=80
PORT_APP?=80

CONTAINER_IMAGE?=$(PROJECT)/${APP}
RELEASE?=0.0.2

container-build:
	@docker build -t $(CONTAINER_IMAGE):$(RELEASE) .

container-run:
	@docker run --name ${APP} -p ${PORT}:${PORT_APP} --rm \
		-e "PORT=${PORT}" \
		$(CONTAINER_IMAGE):$(RELEASE)
