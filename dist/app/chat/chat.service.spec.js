/* tslint:disable:no-unused-variable */
"use strict";
var testing_1 = require('@angular/core/testing');
var chat_service_1 = require('./chat.service');
testing_1.describe('Chat Service', function () {
    testing_1.beforeEachProviders(function () { return [chat_service_1.ChatService]; });
    testing_1.it('should ...', testing_1.inject([chat_service_1.ChatService], function (service) {
        testing_1.expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=../../chat.service.spec.js.map