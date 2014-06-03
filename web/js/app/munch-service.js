munchApp

.factory('MunchService', function ($http, $rootScope) {
    var api_url = 'http://localhost:8000/api/';

    var MunchService = {
        // API methods
        list: function (items_url) {
            //return $http.get(
            //    api_url + items_url
            //);
            return {
                data: [
                    {
                        id: 1, food: 'Gluten', subs: ['rice', 'coconut', 'oat',]
                    },
                    {
                        id: 2, food: 'Cabbage', subs: ['reese\'s pieces',],
                    },
                ]
            };
        },
        get: function (items_url, objId) {
            //return $http.get(
            //    api_url + items_url + objId
            //);
            return {id: 1, username: 'sam', restrictions: ['cocount', 'dairy'], savedResults: [], location: 'Canada'};
        },
        del: function(obj_url, obj) {
            return $http.delete(
                api_url + obj_url + obj.id + '/'
            );
        },
        update: function (obj_url, obj) {
            return $http.put(
                api_url + obj_url + obj.id + '/',
                obj
            );
        },
        save: function (url, obj, userId) {
            //return $http.post(
            //    api_url + url,
            //    obj
            //);
            $rootScope.user.savedResults.push(obj);
        },

    };
    return MunchService;
});