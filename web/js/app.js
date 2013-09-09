'use strict';

var config = {
    foo: 'bar'
};

var ABApp = angular
    .module('addressbook', [])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/', {templateUrl: 'partials/contact-list.html', controller: 'ContactListController'}).
            when('/contact/new', {templateUrl: 'partials/contact-form.html', controller: 'ContactFormController'}).
            when('/contact/:id/edit', {templateUrl: 'partials/contact-form.html', controller: 'ContactFormController'}).
            otherwise({redirectTo: '/'});
    }]);
