var munchApp = angular.module('munchApp', 
    ['ngCookies',
     'ui.bootstrap',
     'ui.router',
     'ngAnimate',
     'firebase'
    ]
);


munchApp

.config(function($stateProvider, $urlRouterProvider){

    $stateProvider
        .state('home', {
            url: '/',
            views: {
                'main': {
                    templateUrl: '../web/partials/main.tmpl.html',
                    controller: 'MainCtrl',
                    resolve: {
                        results: function (MunchService) {
                            return MunchService.list('results/');
                            //return {data: 'munch some stuff'};
                        },
                    }
                },
            }
        })
        .state('profile', {
            url: '/profile/',
            views: {
                'main': {
                    templateUrl: '../web/partials/profile.tmpl.html',
                    controller: 'ProfileCtrl',
                    resolve: {
                        user: function (MunchService) {
                            userId = 1;
                            return {data: MunchService.get('users/', userId)};
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