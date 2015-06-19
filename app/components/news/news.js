angular.module('app.news', [  ])

    .controller('NewsController', [function ( articleFactory ) {
        this.title = 'News';
        console.log('news controller loaded');

        console.log(articleFactory);

    }]);