angular
    .module('app.services', [])
    .factory('newsFactory', newsFactory)


    newsFactory.$inject = ['$http', '$log', 'urlBase'];

    function newsFactory($http, $log, urlBase){

        return {
            getNews: getNews
        };

        function getNews() {
            return $http.get(urlBase + '/news')
                .then(getNewsComplete)
                .catch(getNewsFailed);

            function getNewsComplete(response) {
                return response.data.news;
            }

            function getNewsFailed(error) {
                $log.error('XHR Failed for getNews.' + error.data);
            }
        }
    };
