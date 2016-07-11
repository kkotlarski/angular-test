angular.module('app', [
    'dbService'
]).controller('AppCtrl', function ($scope, db) {
    $scope.data = {
        _new: '',
        error: null,
        add: function () {
            db.put({_id: 'id-' + Date.now(), value: $scope.data._new})
                .then(function () {
                    $scope.data.error = null;
                })
                .catch(function (err) {
                    $scope.data.error = err.message;
                });
            $scope.data._new = '';
        },
        remove: function (item) {
            db.remove(item).catch(function (err) {
                $scope.data.error = err.message;
            });
        }
    };
    $scope.list = db;
});
