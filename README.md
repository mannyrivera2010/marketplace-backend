# Marketplace Backend
Marketplace backend is a digital distribution service serving as the Api for Applications



* runs application
```
npm start
```

* runs application in debug mode
```
npm run debug
```
* runs application in debug mode (windows machines)
```
npm run debug
```

* runs mocha tests
```
npm test
```

* runs istanbul code coverage
```
npm run test-coverage
```


Debug Postgresql (CentOS)
```
tail -f /var/lib/pgsql/data/pg_log/postgresql.log -n 0| perl -pe '$_ = "$. \n\t  $_"'
```



Reference

https://www.npmjs.com/package/generator-express-rest-api

https://github.com/trwalker/marvel-node/blob/master/app/config/settings/settings-config.js
