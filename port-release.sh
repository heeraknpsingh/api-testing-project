kill -9 `lsof -i TCP:3000 | awk '/LISTEN/{print $2}'`