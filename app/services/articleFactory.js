angular
    .module('app')
    .factory('articleFactory', _articleFactory);

function _articleFactory() {
    function getArticles() {
        console.log('return articles');
    }
}