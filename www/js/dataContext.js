(function () {
    'use strict';

    var serviceId = 'dataContext';
    angular.module('starter').factory(serviceId, [dataContext]);

    function dataContext() {
debugger
        return new Firebase("https://scorching-heat-7034.firebaseio.com/");

        
    }
})();