kill -9 `lsof -i TCP:3000 | awk '/LISTEN/{print $2}'` &  npm run serve-json & npm run test-health
kill -9 888
kill -9 `lsof -i TCP:3000 | awk '/LISTEN/{print $2}'` &  npm run serve-json-auth & npm run test-auth
kill -9 888
kill -9 `lsof -i TCP:3000 | awk '/LISTEN/{print $2}'` &  npm run serve-json-duplicate-entry  & npm run test-search-books-negative
kill -9 888
kill -9 `lsof -i TCP:3000 | awk '/LISTEN/{print $2}'` &  npm run serve-json & npm run test-search-books-positive
kill -9 888
kill -9 `lsof -i TCP:3000 | awk '/LISTEN/{print $2}'` &  npm run serve-json & npm run test-search-books-schema
kill -9 888
kill -9 `lsof -i TCP:3000 | awk '/LISTEN/{print $2}'` &  npm run serve-json-register  & npm run test-user-registration
kill -9 888
kill -9 `lsof -i TCP:3000 | awk '/LISTEN/{print $2}'` &  npm run serve-json-register  & npm run test-user-login
kill -9 888