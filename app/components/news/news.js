angular
    .module('app.news', ['app.services'])
    .controller('NewsController', NewsController);


NewsController.$inject = ['newsFactory'];

function NewsController(newsFactory) {

    var news = this;
    news.title = 'News';
    news.newsitems = [];

    init();

    function init() {

        console.log('step 1');

        getNews().then(function(data) {
            news.newsitems =  data;
            console.log('step 4');
        });

    }

    function getNews() {

        console.log('step 2');

        return newsFactory.getNews()
            .then(function(data) {
                console.log('step 3');
                return data;
            });
    }

}