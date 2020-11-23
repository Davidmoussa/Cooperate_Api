(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cities-cities-module"],{

/***/ "./src/app/layout/cities/cities-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/cities/cities-routing.module.ts ***!
  \********************************************************/
/*! exports provided: CitiesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesRoutingModule", function() { return CitiesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cities_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cities.component */ "./src/app/layout/cities/cities.component.ts");




const routes = [
    {
        path: '',
        component: _cities_component__WEBPACK_IMPORTED_MODULE_3__["CitiesComponent"]
    }
];
let CitiesRoutingModule = class CitiesRoutingModule {
};
CitiesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CitiesRoutingModule);



/***/ }),

/***/ "./src/app/layout/cities/cities.module.ts":
/*!************************************************!*\
  !*** ./src/app/layout/cities/cities.module.ts ***!
  \************************************************/
/*! exports provided: CitiesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesModule", function() { return CitiesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared_modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/modules */ "./src/app/shared/modules/index.ts");
/* harmony import */ var _cities_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cities-routing.module */ "./src/app/layout/cities/cities-routing.module.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









let CitiesModule = class CitiesModule {
};
CitiesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarouselModule"], _shared_modules__WEBPACK_IMPORTED_MODULE_5__["StatModule"], _cities_routing_module__WEBPACK_IMPORTED_MODULE_6__["CitiesRoutingModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(),
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
        ]
    })
], CitiesModule);



/***/ })

}]);
//# sourceMappingURL=cities-cities-module-es2015.js.map