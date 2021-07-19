o?=$(o)

rinkeby:
	o=rinkeby $(MAKE) deploy

main:
	o=main $(MAKE) deploy

deploy:
	npm run codegen:$(o)
	npm run build:$(o)
	env-cmd npm run deploy:$(o)

.PNOHY: rinkeby \
	main \
	deploy