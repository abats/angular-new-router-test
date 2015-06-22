angular.module('app.news', ['app.services'])

    .controller('NewsController', ['testValue', 'articleFactory', function (kek, articleFactory) {
        this.title = 'News';
        console.log('news controller loaded');
        console.log(articleFactory.getNews());

    }])
