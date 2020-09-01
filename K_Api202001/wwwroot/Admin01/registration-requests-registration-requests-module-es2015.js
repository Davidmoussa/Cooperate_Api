(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registration-requests-registration-requests-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/registration-requests/registration-requests.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/registration-requests/registration-requests.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [@routerTransition]>\n    <h2 class=\"text-muted\">Registration Requsts </h2>\n    <form>\n        <div class=\"form-row align-items-center\">\n\n            <div class=\"col-auto\">\n                <div class=\"form-group input-group\">\n                    <input class=\"form-control\" type=\"text\" />\n                    <div class=\"input-group-append\">\n                        <button class=\"btn btn-secondary\" type=\"button\"><i class=\"fa fa-search\"></i></button>\n                    </div>\n\n                </div>\n            </div>\n\n        </div>\n    </form>\n\n\n    <!-- /Table for registration requests -->\n    <div class=\"row\">\n        <div class=\"col col-xl-12\">\n            <div class=\"card mb-3\">\n                <table class=\"table table-hover table-striped text-center \">\n                    <thead>\n                        <tr>\n                            <th> #id</th>\n                            <th>Name</th>\n                            <th>Phone Number</th>\n                            <th>Category</th>\n\n                            <th>Action</th>\n\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let user of data\">\n                            <th scope=\"row\">{{ user.id }}</th>\n                            <td>{{ user.projectAName }}</td>\n                            <td>{{ user.phoneNumber  }}</td>\n                            <td>{{ user.proJectType.aName  }}</td>\n\n                            <td>\n                                 <button class=\"btn btn-sm btn-danger mr-2 \" (click)=\"verify(user.id)\" type=\"button\">verify</button>\n                            </td>\n\n                        </tr>\n\n\n\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/layout/registration-requests/registration-requests.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/registration-requests/registration-requests.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9yZWdpc3RyYXRpb24tcmVxdWVzdHMvcmVnaXN0cmF0aW9uLXJlcXVlc3RzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/layout/registration-requests/registration-requests.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/registration-requests/registration-requests.component.ts ***!
  \*********************************************************************************/
/*! exports provided: RegistrationRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationRequestsComponent", function() { return RegistrationRequestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _shared_services_registration_requests_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/registration-requests.service */ "./src/app/shared/services/registration-requests.service.ts");




let RegistrationRequestsComponent = class RegistrationRequestsComponent {
    constructor(registrationSrvice) {
        this.registrationSrvice = registrationSrvice;
        this.data = [];
        this.getALLData();
    }
    getALLData() {
        this.registrationSrvice.getAll().subscribe((result) => {
            this.data = result.data;
            console.log('JSON Response = ', this.data);
        });
    }
    verify(id) {
        this.registrationSrvice.verify(id).subscribe((result) => {
            console.log(result);
            this.getALLData();
        });
    }
    ngOnInit() {
    }
};
RegistrationRequestsComponent.ctorParameters = () => [
    { type: _shared_services_registration_requests_service__WEBPACK_IMPORTED_MODULE_3__["RegistrationRequestsService"] }
];
RegistrationRequestsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registration-requests',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./registration-requests.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/registration-requests/registration-requests.component.html")).default,
        animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./registration-requests.component.css */ "./src/app/layout/registration-requests/registration-requests.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_registration_requests_service__WEBPACK_IMPORTED_MODULE_3__["RegistrationRequestsService"]])
], RegistrationRequestsComponent);



/***/ }),

/***/ "./src/app/layout/registration-requests/registration-requests.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/layout/registration-requests/registration-requests.module.ts ***!
  \******************************************************************************/
/*! exports provided: RegistrationRequestsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationRequestsModule", function() { return RegistrationRequestsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _registration_requests_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration-requests.component */ "./src/app/layout/registration-requests/registration-requests.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _registrationRrequests_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registrationRrequests-routing.module */ "./src/app/layout/registration-requests/registrationRrequests-routing.module.ts");






let RegistrationRequestsModule = class RegistrationRequestsModule {
};
RegistrationRequestsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_registration_requests_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationRequestsComponent"]],
        imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarouselModule"], _registrationRrequests_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistrationRequestsRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], RegistrationRequestsModule);



/***/ }),

/***/ "./src/app/layout/registration-requests/registrationRrequests-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/registration-requests/registrationRrequests-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: RegistrationRequestsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationRequestsRoutingModule", function() { return RegistrationRequestsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _registration_requests_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration-requests.component */ "./src/app/layout/registration-requests/registration-requests.component.ts");




const routes = [
    {
        path: '',
        component: _registration_requests_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationRequestsComponent"]
    }
];
let RegistrationRequestsRoutingModule = class RegistrationRequestsRoutingModule {
};
RegistrationRequestsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], RegistrationRequestsRoutingModule);



/***/ }),

/***/ "./src/app/shared/services/registration-requests.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/services/registration-requests.service.ts ***!
  \******************************************************************/
/*! exports provided: RegistrationRequestsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationRequestsService", function() { return RegistrationRequestsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let RegistrationRequestsService = class RegistrationRequestsService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'http://46.101.105.124/api/Acount/Seallers/Requst';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    getAll() {
        return this.http.get(this.apiUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    verify(acountId) {
        let body = {
            "seallerId": acountId,
            "confierm": true
        };
        return this.http.post("http://46.101.105.124/api/Acount/Sealler/Confierm", JSON.stringify(body), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.log(error.error.message);
        }
        else {
            console.log(error.status);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(console.log('Something is wrong!'));
    }
    ;
};
RegistrationRequestsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RegistrationRequestsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], RegistrationRequestsService);



/***/ })

}]);
//# sourceMappingURL=registration-requests-registration-requests-module-es2015.js.map