angular.module('app.services', [])

    .factory('articleFactory', ['$http', function( $http ) {

    var urlBase = '/api/news/';
    var newsFactory = {};

    newsFactory.getNews = function () {
        return 'news items';
    };

    return newsFactory;
}]);