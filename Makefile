o?=$(o)

rinkeby:
	o=rinkeby $(MAKE) deploy

mainnet:
	o=mainnet $(MAKE) deploy

deploy:
	npm run codegen:$(o)
	npm run build:$(o)
	env-cmd npm run deploy:$(o)

.PNOHY: rinkeby \
	mainnet \
	deploy