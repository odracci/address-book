'use strict';

ABApp
    .controller('ContactListController', ['$scope', 'AddressBookManager', function ($scope, AddressBookManager) {
        $scope.contacts = AddressBookManager.getAll();
    }])
    .controller('ContactFormController',
        ['$scope', '$routeParams', '$location', 'AddressBookManager',
            function ($scope, $routeParams, $location, AddressBookManager) {
                var contact = {};

                if (!_.isUndefined($routeParams.id)) {
                    contact = AddressBookManager.get($routeParams.id);
                }

                $scope.contact = contact;

                $scope.update = function (contact) {
                    AddressBookManager.save(contact);
                    $location.path('/#/');
                }
            }]);
