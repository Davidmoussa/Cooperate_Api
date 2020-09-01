(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/products/products.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/products/products.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [@routerTransition]>\n    <h2 class=\"text-muted\">Products </h2>\n    <form>\n        <div class=\"form-row align-items-center\">\n\n            <div class=\"col-auto\">\n                <div class=\"form-group input-group\">\n                    <input class=\"form-control\" type=\"text\" />\n                    <div class=\"input-group-append\">\n                        <button class=\"btn btn-secondary\" type=\"button\"><i class=\"fa fa-search\"></i></button>\n                    </div>\n\n\n                </div>\n            </div>\n\n        </div>\n    </form>\n\n\n    <!-- /Table for Products -->\n    <div class=\"row\">\n        <div class=\"col col-xl-12\">\n            <div class=\"card mb-3\">\n                <table class=\"table table-hover  table-bordered text-center table-striped\">\n                    <thead>\n                        <tr>\n                            <th> #Id</th>\n                            <th> Name</th>\n                            <th>Available in stock</th>\n                            <th>Product Price</th>\n                            <th>Merchant Name</th>\n                            <th>Merchant Phone</th>\n                            <th>Product Category</th>\n                            <th>Product Details</th>\n\n\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let product of data\">\n                            <th scope=\"row\">{{ product.id }}</th>\n                            <td>{{ product.name }}</td>\n                            <td>{{ product.stock }}</td>\n                            <td>{{ product.price}}</td>\n                            <td>{{ product.sealler.projectAName}}</td>\n                            <td>{{ product.sealler.phoneNumber}}</td>\n\n                            <td>\n                                {{ product.category.acategory}}\n\n                            </td>\n                            <td><a [routerLinkActive]=\"['router-link-active']\"\n                                    routerLink=\"/products-details/{{product.id}}\"> Click\n                                    Here</a></td>\n\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/layout/products/products-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/products/products-routing.module.ts ***!
  \************************************************************/
/*! exports provided: ProductsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function() { return ProductsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products.component */ "./src/app/layout/products/products.component.ts");




const routes = [
    {
        path: '',
        component: _products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"]
    }
];
let ProductsRoutingModule = class ProductsRoutingModule {
};
ProductsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProductsRoutingModule);



/***/ }),

/***/ "./src/app/layout/products/products.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layout/products/products.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/layout/products/products.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/products/products.component.ts ***!
  \*******************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/product.service */ "./src/app/shared/services/product.service.ts");




let ProductsComponent = class ProductsComponent {
    constructor(productSrvice) {
        this.productSrvice = productSrvice;
        this.data = [];
        this.productSrvice.getAll().subscribe((result) => {
            this.data = result.data;
            console.log('JSON Response = ', this.data);
        });
    }
    ngOnInit() {
    }
};
ProductsComponent.ctorParameters = () => [
    { type: _shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }
];
ProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/products/products.component.html")).default,
        animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./products.component.scss */ "./src/app/layout/products/products.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
], ProductsComponent);



/***/ }),

/***/ "./src/app/layout/products/products.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/products/products.module.ts ***!
  \****************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
/* harmony import */ var _shared_modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/modules */ "./src/app/shared/modules/index.ts");
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products-routing.module */ "./src/app/layout/products/products-routing.module.ts");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products.component */ "./src/app/layout/products/products.component.ts");
/* harmony import */ var _productsdetails_productsdetails_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./productsdetails/productsdetails.component */ "./src/app/layout/products/productsdetails/productsdetails.component.ts");









let ProductsModule = class ProductsModule {
};
ProductsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"], _productsdetails_productsdetails_component__WEBPACK_IMPORTED_MODULE_8__["ProductsdetailsComponent"]],
        imports: [_products_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProductsRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarouselModule"], _shared_modules__WEBPACK_IMPORTED_MODULE_5__["StatModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"],]
    })
], ProductsModule);



/***/ })

}]);
//# sourceMappingURL=products-products-module-es2015.js.map