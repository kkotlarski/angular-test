angular.module('dbService', ['pouchdb'])
    .factory('db', function (pouchdb) {
        var db = pouchdb.create('db');

        return db;
    });
