var munchApp = angular.module('munchApp', 
    ['ngCookies',
     'ui.bootstrap',
     'ui.router',
     'ngAnimate',
    ]
);


munchApp

.config(function($stateProvider, $urlRouterProvider){
  
    $urlRouterProvider.when('', '/');

    $stateProvider
        .state('default', {
            url: '/',
            views: {
                'main': {
                    template: '<div>Munch!</div>',
                    controller: 'MainCtrl',
                    resolve: {
                        users: function (MunchService) {
                            //return GeminiService.list('users/');
                            return {data: 'foo'};
                        },
                    }
                },
            }
        });
})

.run( function ($http, $cookies) {
    /*
    get django csrf token
    */
    //$http.defaults.headers.common['X-CSRFToken'] = $cookies.csrftoken;
});