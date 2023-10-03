install:
	npm ci

brain-games:     # Добавляем правило для сборки 'brain-games'
	node bin/brain-games.js

publish:
	npm publish --dry-run
