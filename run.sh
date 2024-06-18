(kill -9 $(lsof -t -i:3000) && npm run health) &&
(kill -9 $(lsof -t -i:3000) && npm run auth) &&
(kill -9 $(lsof -t -i:3000) && npm run book-negative) &&
(kill -9 $(lsof -t -i:3000) && npm run book-positive) &&
(kill -9 $(lsof -t -i:3000) && npm run book-schema) &&
(kill -9 $(lsof -t -i:3000) && npm run user-registration) &&
(kill -9 $(lsof -t -i:3000) && npm run user-login)