munchApp

.factory('MunchService', function ($http) {
    var api_url = 'http://localhost:8000/api/';

    var MunchService = {
        // API methods
        list: function (items_url) {
            //return $http.get(
            //    api_url + items_url
            //);
            return [
                {
                    food: 'Gluten', subs: ['Rice', 'Coconut', 'Oat',]
                },
                {
                    food: 'Cabbage', subs: ['Reese\'s Pieces'],
                },
            ]
        },
        get: function (items_url, objId) {
            return $http.get(
                api_url + items_url + objId
            );
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
        save: function (url, obj) {
            return $http.post(
                api_url + url,
                obj
            );
        },

    };
    return MunchService;
});