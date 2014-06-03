var munchApp = angular.module('munchApp', 
    ['ngCookies',
     'ui.bootstrap',
     'ui.router',
     'ngAnimate',
     'customFilters',
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
                            return MunchService.list('foods');
                            //return {data: 'munch some stuff'};
                        },
                        user: function (MunchService) {
                            userId = 1;
                            return {data: MunchService.get('users/', userId)};
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
        })
        .state('users', {
            url: '/users/',
            views: {
                'main': {
                    templateUrl: '../web/partials/users.tmpl.html',
                    controller: 'UsersCtrl',
                    resolve: {
                        user: function (MunchService) {
                            userId = 1;
                            return {data: MunchService.get('users/', userId)};
                        },
                        users: function (MunchService) {
                            return {data: MunchService.get('users/')};
                        },
                    }
                },
            }
        })
        .state('restaurants', {
            url: '/restaurants/',
            views: {
                'main': {
                    templateUrl: '../web/partials/restaurants.tmpl.html',
                    controller: 'RestaurantsCtrl',
                    resolve: {
                        user: function (MunchService) {
                            userId = 1;
                            return {data: MunchService.get('users/', userId)};
                        },
                        restaurants: function (MunchService) {
                            return {
                                data: [
                                    {id: 1, name: 'The Munch Shack', info: '2906 Main St., Vancouver, 604 555 555', restrictions: ['dairy', 'Coconut']},
                                    {id: 2, name: 'Get Your Munch On', info: '1106 Cordova St., Vancouver, 604 555 555', restrictions: ['Gluten', 'Coconut']}
                                ]
                            };
                        },
                    }
                },
            }
        })
        .state('contact', {
            url: '/contact/',
            views: {
                'main': {
                    templateUrl: '../web/partials/contact.tmpl.html',
                    controller: 'ContactCtrl',
                    resolve: {
                        contact: function (MunchService) {
                            return {data: {twitter: 'bal@blah', email: 'deanna.m.cooney@gmail.com', web: 'http://bit.ly/U9BqOZ',}};
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