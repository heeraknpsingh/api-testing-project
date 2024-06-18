kill -9 $(lsof -t -i:3000) &  npm run serve-json & npm run test-health &
pid1=$!
wait $pid1
kill -9 $(lsof -t -i:3000) &  npm run serve-json-auth & npm run test-auth &
pid2=$!
wait $pid2
kill -9 $(lsof -t -i:3000) &  npm run serve-json-duplicate-entry  & npm run test-search-books-negative &
pid3=$!
wait $pid3
kill -9 $(lsof -t -i:3000) &  npm run serve-json & npm run test-search-books-positive &
pid4=$!
wait $pid4
kill -9 $(lsof -t -i:3000) &  npm run serve-json & npm run test-search-books-schema &
pid5=$!
wait $pid5
kill -9 $(lsof -t -i:3000) &  npm run serve-json-register  & npm run test-user-registration &
pid6=$!
wait $pid6
kill -9 $(lsof -t -i:3000) &  npm run serve-json-register  & npm run test-user-login &
pid7=$!
wait $pid7