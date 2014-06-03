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
            if(objId) {
                return {
                    id: 1, username: 'homer', firstname: 'Homer', lastname: 'Simpson', avatar: 'homer.jpg', restrictions: [
                        {food: 'coconut', 'severity': 'allergy'},
                        {food: 'dairy', 'severity': 'preference'}
                    ], savedResults: [], location: 'Canada'};
            }
            else {
                return [
                    {id: 1, username: 'homer', firstname: 'Homer', lastname: 'Simpson', avatar: 'homer.jpg', restrictions: [
                        {food: 'coconut', 'severity': 'allergy'},
                        {food: 'dairy', 'severity': 'preference'}
                    ], savedResults: [], location: 'Canada'},
                    {id: 2, username: 'marge', firstname: 'Marge', lastname: 'Simpson', avatar: 'marge.jpg', restrictions: [
                        {food: 'rice', 'severity': 'allergy'},
                        {food: 'nuts', 'severity': 'preference'}
                    ], savedResults: [], location: 'Canada'},
                ]
            }
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