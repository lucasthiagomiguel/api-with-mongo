module.exports = {
   "type": "mysql",
   "host": "i54jns50s3z6gbjt.chr7pe7iynqr.eu-west-1.rds.amazonaws.com",
   "port": 3306,
   "username": "zrwwgkmo7oqbkh7f",
   "password": "o7g94ypm89fy6cm8",
   "database": "pcfdcbeib1dpe535",
   "synchronize": true,
   "logging": false,
   "entities": [
      "dist/modules/**/entities/*.js"
   ],
   "migrations": [
      "dist/shared/migrations/**/*.js"
   ],
   "subscribers": [
      "dist/subscriber/**/*.js"
   ],
   "cli":{
       "migrationsDir": "./dist/shared/migrations"
   }
}