"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var _1 = require('./app/');
var app_routes_1 = require('./app/app.routes');
var angularfire2_1 = require('angularfire2');
if (_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(_1.MeansStackAppComponent, [
    app_routes_1.APP_ROUTER_PROVIDERS,
    angularfire2_1.FIREBASE_PROVIDERS,
    angularfire2_1.defaultFirebase({
        apiKey: "AIzaSyDp_HxXYjYxFuanqeMtB2bBm8myCAr2Txk",
        authDomain: "engage-starter.firebaseapp.com",
        databaseURL: "https://engage-starter.firebaseio.com",
        storageBucket: "engage-starter.appspot.com",
    }),
])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map