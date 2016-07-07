"use strict";
var router_1 = require('@angular/router');
var profile_component_1 = require('./profile/profile.component');
var home_component_1 = require('./home/home.component');
var chat_component_1 = require('./chat/chat.component');
exports.routes = [
    { path: '', component: home_component_1.HomeComponent, terminal: true },
    { path: 'profile', component: profile_component_1.ProfileComponent },
    { path: 'chat', component: chat_component_1.ChatComponent },
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=../app.routes.js.map