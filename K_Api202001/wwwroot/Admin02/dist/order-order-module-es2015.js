(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-order-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/order/order.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/order/order.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [@routerTransition]>\n    <h2 class=\"text-muted\">{{'Orders' | translate }} </h2>\n    \n        <div class=\"form-row align-items-center\">\n\n            <div class=\"col-auto\">\n                <div class=\"form-group input-group\">\n                    <input [(ngModel)]='term' class=\"form-control\" type=\"text\" />\n                    <div class=\"input-group-append\">\n                        <button type=\"submit\" class=\"btn btn-secondary\" type=\"button\"><i class=\"fa fa-search\"></i></button>\n                    </div>\n\n                </div>\n            </div>\n\n        </div>\n    \n\n\n    <!-- /Table for orders -->\n    <div class=\"row\">\n        <div class=\"col col-xl-12\">\n            \n                <table class=\"table table-hover table-bordered  text-center table-striped\">\n                    <thead>\n                        <tr>\n                            <th> {{'id' | translate }}</th>\n                            <th>{{'Created At' | translate}}</th>\n                            <th>{{ 'Order Status' | translate}}</th>\n                            <th>{{'Merchant Name' | translate}}</th>\n                            <th>{{'Merchant City' | translate}}</th>\n                            <th>{{'Customer Name' | translate}}</th>\n                            <th>{{'Customer Phone' | translate}}</th>\n                            <th>{{'Order Address' | translate}}</th>\n                            <th>{{'Product #Id' | translate}}</th>\n                            <th>{{'Product Name' | translate}}</th>\n                        </tr>\n\n                    </thead>\n                    <tbody>\n\n\n                        <tr *ngFor=\"let order of data|orderSearch:term\">\n                            <td>{{ order.id }}</td>\n                            <td>{{ order.date }}</td>\n                            <td>{{ getOrderStatusText(order.orderStatus)}}</td>\n                            <td>{{ order.sealler.projectAName }}</td>\n                            <td>{{ order.sealler.city.name}}</td>\n                            <td>{{ order.user.name }}</td>\n                            <td>{{ order.user.phoneNumber }}</td>\n                            <td>{{ order.user.userAddress }}</td>\n                            <td>{{ order.productId }}</td>\n                            <td>{{ order.product.productAName }}</td>\n                        </tr>\n\n\n                    </tbody>\n                </table>\n            \n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/page-header/page-header.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/page-header/page-header.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-xl-12\">\n        <h2 class=\"page-header\">\n            {{ heading }}\n        </h2>\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">\n                <i class=\"fa fa-dashboard\"></i> <a [routerLink]=\"['/dashboard']\" href=\"Javascript:void(0)\">Dashboard</a>\n            </li>\n            <li class=\"breadcrumb-item active\"><i class=\"fa {{ icon }}\"></i> {{ heading }}</li>\n        </ol>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/stat/stat.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/stat/stat.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card text-white bg-{{ bgClass }}\">\n    <div class=\"card-header\">\n        <div class=\"row\">\n            <div class=\"col col-xs-3\">\n                <i class=\"fa {{ icon }} fa-5x\"></i>\n            </div>\n            <div class=\"col col-xs-9 text-right\">\n                <div class=\"d-block huge\">{{ count }}</div>\n                <div class=\"d-block\">{{ label }}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card-footer\">\n        <span class=\"float-left\">View Details {{ data }}</span>\n        <a class=\"float-right card-inverse\" href=\"javascript:void(0)\">\n            <span><i class=\"fa fa-arrow-circle-right\"></i></span>\n        </a>\n    </div>\n</div>\n");

/***/ }),

/***/ "./src/app/layout/order/order-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/order/order-routing.module.ts ***!
  \******************************************************/
/*! exports provided: OrderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderRoutingModule", function() { return OrderRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order.component */ "./src/app/layout/order/order.component.ts");




const routes = [
    {
        path: '',
        component: _order_component__WEBPACK_IMPORTED_MODULE_3__["OrderComponent"]
    }
];
let OrderRoutingModule = class OrderRoutingModule {
};
OrderRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], OrderRoutingModule);



/***/ }),

/***/ "./src/app/layout/order/order.component.scss":
/*!***************************************************!*\
  !*** ./src/app/layout/order/order.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9vcmRlci9vcmRlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/layout/order/order.component.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/order/order.component.ts ***!
  \*************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _shared_services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/order.service */ "./src/app/shared/services/order.service.ts");




let OrderComponent = class OrderComponent {
    constructor(orderSrvice) {
        this.orderSrvice = orderSrvice;
        this.data = [];
        this.orderSrvice.getAll().subscribe((result) => {
            this.data = result.data;
            console.log('JSON Response = ', this.data);
        });
    }
    ngOnInit() {
    }
    getOrderStatusText(orderStatus) {
        let status;
        switch (orderStatus) {
            case 0:
                status = "Ordered";
                break;
            case 1:
                status = "Rejected";
                break;
            case 2:
                status = "Approved";
                break;
            case 3:
                status = "Finshed";
                break;
            case 4:
                status = "Shipped";
                break;
            case 5:
                status = "Delivered";
                break;
            default:
                status = "Unkown";
                break;
        }
        return status;
    }
};
OrderComponent.ctorParameters = () => [
    { type: _shared_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"] }
];
OrderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/order/order.component.html")).default,
        animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./order.component.scss */ "./src/app/layout/order/order.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]])
], OrderComponent);



/***/ }),

/***/ "./src/app/layout/order/order.module.ts":
/*!**********************************************!*\
  !*** ./src/app/layout/order/order.module.ts ***!
  \**********************************************/
/*! exports provided: OrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModule", function() { return OrderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order.component */ "./src/app/layout/order/order.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _order_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-routing.module */ "./src/app/layout/order/order-routing.module.ts");
/* harmony import */ var _shared_modules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/modules */ "./src/app/shared/modules/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_pipes_order_search_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/pipes/order-search.pipe */ "./src/app/shared/pipes/order-search.pipe.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");










let OrderModule = class OrderModule {
};
OrderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_order_component__WEBPACK_IMPORTED_MODULE_3__["OrderComponent"], _shared_pipes_order_search_pipe__WEBPACK_IMPORTED_MODULE_8__["OrderSearchPipe"]],
        imports: [_order_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarouselModule"], _shared_modules__WEBPACK_IMPORTED_MODULE_6__["StatModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]]
    })
], OrderModule);



/***/ }),

/***/ "./src/app/shared/modules/index.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/modules/index.ts ***!
  \*****************************************/
/*! exports provided: PageHeaderModule, StatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-header/page-header.module */ "./src/app/shared/modules/page-header/page-header.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageHeaderModule", function() { return _page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__["PageHeaderModule"]; });

/* harmony import */ var _stat_stat_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stat/stat.module */ "./src/app/shared/modules/stat/stat.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatModule", function() { return _stat_stat_module__WEBPACK_IMPORTED_MODULE_1__["StatModule"]; });





/***/ }),

/***/ "./src/app/shared/modules/page-header/page-header.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/shared/modules/page-header/page-header.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2R1bGVzL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/modules/page-header/page-header.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/modules/page-header/page-header.component.ts ***!
  \*********************************************************************/
/*! exports provided: PageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function() { return PageHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PageHeaderComponent = class PageHeaderComponent {
    constructor() { }
    ngOnInit() { }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], PageHeaderComponent.prototype, "heading", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], PageHeaderComponent.prototype, "icon", void 0);
PageHeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-header',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./page-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/page-header/page-header.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./page-header.component.scss */ "./src/app/shared/modules/page-header/page-header.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], PageHeaderComponent);



/***/ }),

/***/ "./src/app/shared/modules/page-header/page-header.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/modules/page-header/page-header.module.ts ***!
  \******************************************************************/
/*! exports provided: PageHeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderModule", function() { return PageHeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _page_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-header.component */ "./src/app/shared/modules/page-header/page-header.component.ts");





let PageHeaderModule = class PageHeaderModule {
};
PageHeaderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        declarations: [_page_header_component__WEBPACK_IMPORTED_MODULE_4__["PageHeaderComponent"]],
        exports: [_page_header_component__WEBPACK_IMPORTED_MODULE_4__["PageHeaderComponent"]]
    })
], PageHeaderModule);



/***/ }),

/***/ "./src/app/shared/modules/stat/stat.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/shared/modules/stat/stat.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2R1bGVzL3N0YXQvc3RhdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/modules/stat/stat.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/modules/stat/stat.component.ts ***!
  \*******************************************************/
/*! exports provided: StatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatComponent", function() { return StatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let StatComponent = class StatComponent {
    constructor() {
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], StatComponent.prototype, "bgClass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], StatComponent.prototype, "icon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], StatComponent.prototype, "count", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], StatComponent.prototype, "label", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], StatComponent.prototype, "data", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], StatComponent.prototype, "event", void 0);
StatComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stat',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./stat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/stat/stat.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./stat.component.scss */ "./src/app/shared/modules/stat/stat.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], StatComponent);



/***/ }),

/***/ "./src/app/shared/modules/stat/stat.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/modules/stat/stat.module.ts ***!
  \****************************************************/
/*! exports provided: StatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatModule", function() { return StatModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _stat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stat.component */ "./src/app/shared/modules/stat/stat.component.ts");




let StatModule = class StatModule {
};
StatModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        declarations: [_stat_component__WEBPACK_IMPORTED_MODULE_3__["StatComponent"]],
        exports: [_stat_component__WEBPACK_IMPORTED_MODULE_3__["StatComponent"]]
    })
], StatModule);



/***/ }),

/***/ "./src/app/shared/pipes/order-search.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/pipes/order-search.pipe.ts ***!
  \***************************************************/
/*! exports provided: OrderSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSearchPipe", function() { return OrderSearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OrderSearchPipe = class OrderSearchPipe {
    transform(order, term) {
        if (term == undefined) {
            return order;
        }
        return order.filter(function (order) {
            return order.user.name.includes(term);
        });
    }
};
OrderSearchPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'orderSearch'
    })
], OrderSearchPipe);



/***/ }),

/***/ "./src/app/shared/services/order.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/order.service.ts ***!
  \**************************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let OrderService = class OrderService {
    constructor(http) {
        this.http = http;
        this.apiUrl = "https://api.egypt-youth.com:4430/api/Orders/orderStatus";
    }
    getAll() {
        return this.http.get(this.apiUrl)
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
OrderService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
OrderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], OrderService);



/***/ })

}]);
//# sourceMappingURL=order-order-module-es2015.js.map