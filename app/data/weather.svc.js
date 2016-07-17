(function () {
    angular.module("app.data")
        .factory("weatherSvc", function ($http, $q, weatherImgUrl, weatherSvcUrl, countryFlagImgUrl) {
            return {
                find: findByLocation,
                getCurrent: getCurrentWeather,
                getForecast: getForecast,
                getWeatherImgUrl: getWeatherImgUrl,
                getCountryFlagImgUrl: getCountryFlagImgUrl
            }

            function findByLocation(location) {
                var url = weatherSvcUrl+"weather?q="+location+"&apiKey=fd78503db7afa853be58d2ba3e1c04bd";

                var defer = $q.defer();

                $http.get(url)
                    .success(function (response) {
                        defer.resolve(response);
                    })
                    .error(function (err) {
                        defer.reject(err);
                    })

                return defer.promise;
            }

            function getCurrentWeather(id) {
                var defer = $q.defer();

                var url = weatherSvcUrl+"weather?id="+id+"&apiKey=fd78503db7afa853be58d2ba3e1c04bd";

                $http.get(url)
                    .success(function(response) {
                        defer.resolve(response);
                    })
                    .error(function(err) {
                        defer.reject(err);
                    })

                return defer.promise;
            }

            function getForecast(id) {
                var defer = $q.defer();

                var url = weatherSvcUrl+"forecast/daily?id="+id+"&apiKey=fd78503db7afa853be58d2ba3e1c04bd";

                $http.get(url)
                    .success(function (response) {
                        defer.resolve(response);
                    })
                    .error(function (err) {
                        defer.reject(err);
                    })

                return defer.promise;
            }

            function getWeatherImgUrl(imgStr){
              return weatherImgUrl+ imgStr + ".png";
            }

            function getCountryFlagImgUrl(imgStr){
              return countryFlagImgUrl + imgStr.toLowerCase() + ".png";
            }
        });
}());
