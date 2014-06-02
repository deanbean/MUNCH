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
        });
})

.run( function ($http, $cookies) {
    /*
    get django csrf token
    */
    //$http.defaults.headers.common['X-CSRFToken'] = $cookies.csrftoken;
});