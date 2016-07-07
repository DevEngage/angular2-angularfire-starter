"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var angularfire2_1 = require('angularfire2');
var ChatComponent = (function () {
    function ChatComponent(af) {
        // create a list at /items
        this.items = af.database.list('/table-elements');
    }
    ChatComponent.prototype.addMessage = function (message) {
        // this.items.push(message);
        this.message = '';
    };
    ChatComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-chat',
            templateUrl: 'chat.component.html',
            styleUrls: ['chat.component.css']
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=../../chat.component.js.map