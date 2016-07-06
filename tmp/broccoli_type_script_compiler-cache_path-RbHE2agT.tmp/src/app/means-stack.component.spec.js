"use strict";
var testing_1 = require('@angular/core/testing');
var means_stack_component_1 = require('../app/means-stack.component');
testing_1.beforeEachProviders(function () { return [means_stack_component_1.MeansStackAppComponent]; });
testing_1.describe('App: MeansStack', function () {
    testing_1.it('should create the app', testing_1.inject([means_stack_component_1.MeansStackAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'means-stack works!\'', testing_1.inject([means_stack_component_1.MeansStackAppComponent], function (app) {
        testing_1.expect(app.title).toEqual('means-stack works!');
    }));
});
//# sourceMappingURL=../means-stack.component.spec.js.map