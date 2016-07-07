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
// import { RSVP } from 'rxjs';
var ProfileComponent = (function () {
    function ProfileComponent() {
        this.filesToUpload = [];
    }
    ProfileComponent.prototype.upload = function () {
        this.makeFileRequest("http://localhost:3000/upload", [], this.filesToUpload, function (success, err) {
            if (success)
                console.log(success);
            if (err)
                console.log(err);
        });
    };
    ProfileComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    ProfileComponent.prototype.makeFileRequest = function (url, params, files, cb) {
        var formData = new FormData();
        var xhr = new XMLHttpRequest();
        for (var i = 0; i < files.length; i++) {
            formData.append("photos", files[i], files[i].name);
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    cb(JSON.parse(xhr.response), null);
                }
                else {
                    cb(null, xhr.response);
                }
            }
        };
        xhr.open("POST", url, true);
        xhr.send(formData);
    };
    ProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-profile',
            templateUrl: 'profile.component.html',
            styleUrls: ['profile.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=../../profile.component.js.map