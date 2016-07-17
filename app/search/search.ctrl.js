(function () {
    angular.module("app.search")
        .controller("Search", function ($scope, weatherSvc) {
            $scope.city = null;

            $scope.$on("search", search);

            function search(evt, data) {
                weatherSvc.find(data.str)
                    .then(
                        function (response) {
                            $scope.city = response;
                            console.log($scope.city);
                        },
                        function (err) {
                            console.log("error finding cities: ", err);
                        }
                    )
            }
        });
})();
