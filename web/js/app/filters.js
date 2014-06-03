angular.module('customFilters', [])

.filter('isRestrictedFilter', function () {
    /* 
    a custom filter for returning percenatges
    */
    return function (input, restrictions) {
        var isRestricted = false;
        if (input && restrictions) {
            for (i=0;i<restrictions.length;i++) {
                //console.log('input '+i, input);                
                //console.log('res '+i, restrictions[i].food);
                if (input.toLowerCase() == restrictions[i].food) {
                    console.log('YEAH');
                    isRestricted = true;
                    return isRestricted;
                }
            }
        }
        return isRestricted;
    };
});