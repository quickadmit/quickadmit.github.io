start:
	npm run dev

build:
	npm run build

deploy:
	git subtree push --prefix dist origin gh-pages
