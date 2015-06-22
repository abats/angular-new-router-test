angular.module('app.news', ['app.services'])

    .controller('NewsController', ['articleFactory', function (articleFactory) {

        this.title = 'News';

        console.log('news controller loaded');

        console.log(articleFactory.getNews());

    }])
