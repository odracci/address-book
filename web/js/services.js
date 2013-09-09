'use strict';

ABApp.value('localStorageAdapter', $.jStorage);

ABApp
    .factory('localStorageService', ['localStorageAdapter', function(localStorageAdapter) {
        return {
            adapter: localStorageAdapter,
            update: function(model) {
                if (_.isUndefined(model.id) || _.isNull(model.id)) {
                    model.id = this.guid();
                }
                this.adapter.set(model.id, model);
            },
            findAll: function() {
                return _.map(this.adapter.index(), function(index) {
                    return this.adapter.get(index);
                }, this);
            },
            find: function(id) {
                return this.adapter.get(id);
            },
            S4: function () {
                return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            },
            guid: function () {
                return (this.S4() + this.S4() + "-" + this.S4() + "-" + this.S4() + "-" + this.S4() + "-" + this.S4() + this.S4() + this.S4());
            }
        }
    }]);

ABApp
    .factory('AddressBookManager', ['localStorageService', function (localStorageService) {
        return {
            getAll: function() {
                return localStorageService.findAll();
            },
            get: function(id) {
                return localStorageService.find(id);
            },
            save: function(contact) {
                localStorageService.update(contact);
            }
        }
    }]);
