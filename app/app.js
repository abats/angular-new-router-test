'use strict';

angular.module('app', ['ngNewRouter', 'app.home', 'app.news', 'app.nav', 'app.void'])

  .controller('AppController', ['$router', AppController])
  
  .config(['$locationProvider', function ($locationProvider) {
        $locationProvider.html5Mode({  enabled: true,  requireBase: true});
  }]);
 
function AppController($router, articleFactory) {
  $router.config([
    {
      path: '/', redirectTo : '/home'
    },
    {
      path: '/home',
        components: {
            'nav' : 'nav',
            'content' : 'home',
            'content2' : 'void',
            'content3' : 'void'
        },
        as : 'home'
    },

    {
      path: '/news',
        components: {
            'nav' : 'nav',
            'content' : 'news',
            'content2' : 'void',
            'content3' : 'void'
        },
        as : 'news'
    }

  ]);
}