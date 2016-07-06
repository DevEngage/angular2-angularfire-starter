"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var _1 = require('./app/');
var app_routes_1 = require('./app/app.routes');
var chat_service_1 = require('./app/chat/chat.service');
if (_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(_1.MeansStackAppComponent, [
    app_routes_1.APP_ROUTER_PROVIDERS,
    chat_service_1.ChatService
])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map