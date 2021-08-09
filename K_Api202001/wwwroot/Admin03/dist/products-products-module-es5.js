function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/products/products.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/products/products.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutProductsProductsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [@routerTransition]>\n    <h2 class=\"text-muted\">{{ 'Products' | translate }} </h2>\n   \n\n\n    <!-- /Table for Products -->\n    <div class=\"row\">\n        <div class=\"col col-xl-12\">\n            \n                <table class=\"table table-hover  table-bordered text-center table-striped\">\n                    <thead>\n                        <tr>\n                            <th> {{ 'id' | translate }} </th>\n                            <th>  {{ 'Name' | translate}}</th>\n                            <th>{{ 'Available in stock' | translate }}</th>\n                            <th>{{ 'Product Price' | translate}}</th>\n                            <th>{{ 'Merchant Name' | translate}}</th>\n                            <th>{{ 'Merchant Phone' | translate}}</th>\n                            <th>{{'Product Category' | translate}}</th>\n\n\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let product of data\">\n                            <th scope=\"row\">{{ product.id }}</th>\n                            <td>{{ product.name }}</td>\n                            <td>{{ product.stock }}</td>\n                            <td>{{ product.price}}</td>\n                            <td>{{ product.sealler.projectAName}}</td>\n                            <td>{{ product.sealler.phoneNumber}}</td>\n\n                            <td>\n                                <a [routerLinkActive]=\"['router-link-active']\"\n                                    routerLink=\"/products-details/{{product.id}}\">  {{ product.category.acategory}}\n                                    </a>\n                               \n\n                            </td>\n                           \n\n                        </tr>\n                    </tbody>\n                </table>\n            \n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/page-header/page-header.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/page-header/page-header.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedModulesPageHeaderPageHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-xl-12\">\n        <h2 class=\"page-header\">\n            {{ heading }}\n        </h2>\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">\n                <i class=\"fa fa-dashboard\"></i> <a [routerLink]=\"['/dashboard']\" href=\"Javascript:void(0)\">Dashboard</a>\n            </li>\n            <li class=\"breadcrumb-item active\"><i class=\"fa {{ icon }}\"></i> {{ heading }}</li>\n        </ol>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/stat/stat.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/stat/stat.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedModulesStatStatComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card text-white bg-{{ bgClass }}\">\n    <div class=\"card-header\">\n        <div class=\"row\">\n            <div class=\"col col-xs-3\">\n                <i class=\"fa {{ icon }} fa-5x\"></i>\n            </div>\n            <div class=\"col col-xs-9 text-right\">\n                <div class=\"d-block huge\">{{ count }}</div>\n                <div class=\"d-block\">{{ label }}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card-footer\">\n        <span class=\"float-left\">View Details {{ data }}</span>\n        <a class=\"float-right card-inverse\" href=\"javascript:void(0)\">\n            <span><i class=\"fa fa-arrow-circle-right\"></i></span>\n        </a>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/layout/products/products-routing.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/layout/products/products-routing.module.ts ***!
    \************************************************************/

  /*! exports provided: ProductsRoutingModule */

  /***/
  function srcAppLayoutProductsProductsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function () {
      return ProductsRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./products.component */
    "./src/app/layout/products/products.component.ts");

    var routes = [{
      path: '',
      component: _products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"]
    }];

    var ProductsRoutingModule = function ProductsRoutingModule() {
      _classCallCheck(this, ProductsRoutingModule);
    };

    ProductsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProductsRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/products/products.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/layout/products/products.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutProductsProductsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/layout/products/products.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/layout/products/products.component.ts ***!
    \*******************************************************/

  /*! exports provided: ProductsComponent */

  /***/
  function srcAppLayoutProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../router.animations */
    "./src/app/router.animations.ts");
    /* harmony import */


    var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/product.service */
    "./src/app/shared/services/product.service.ts");

    var ProductsComponent = /*#__PURE__*/function () {
      function ProductsComponent(productSrvice) {
        var _this = this;

        _classCallCheck(this, ProductsComponent);

        this.productSrvice = productSrvice;
        this.data = [];
        this.productSrvice.getAll().subscribe(function (result) {
          _this.data = result.data;
          console.log('JSON Response = ', _this.data);
        });
      }

      _createClass(ProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductsComponent;
    }();

    ProductsComponent.ctorParameters = function () {
      return [{
        type: _shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
      }];
    };

    ProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-products',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./products.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/products/products.component.html"))["default"],
      animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./products.component.scss */
      "./src/app/layout/products/products.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])], ProductsComponent);
    /***/
  },

  /***/
  "./src/app/layout/products/products.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/layout/products/products.module.ts ***!
    \****************************************************/

  /*! exports provided: ProductsModule */

  /***/
  function srcAppLayoutProductsProductsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsModule", function () {
      return ProductsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _shared_modules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/modules */
    "./src/app/shared/modules/index.ts");
    /* harmony import */


    var _products_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./products-routing.module */
    "./src/app/layout/products/products-routing.module.ts");
    /* harmony import */


    var _products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./products.component */
    "./src/app/layout/products/products.component.ts");
    /* harmony import */


    var _productsdetails_productsdetails_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./productsdetails/productsdetails.component */
    "./src/app/layout/products/productsdetails/productsdetails.component.ts");

    var ProductsModule = function ProductsModule() {
      _classCallCheck(this, ProductsModule);
    };

    ProductsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"], _productsdetails_productsdetails_component__WEBPACK_IMPORTED_MODULE_9__["ProductsdetailsComponent"]],
      imports: [_products_routing_module__WEBPACK_IMPORTED_MODULE_7__["ProductsRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarouselModule"], _shared_modules__WEBPACK_IMPORTED_MODULE_6__["StatModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"]]
    })], ProductsModule);
    /***/
  },

  /***/
  "./src/app/shared/modules/index.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/modules/index.ts ***!
    \*****************************************/

  /*! exports provided: PageHeaderModule, StatModule */

  /***/
  function srcAppSharedModulesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./page-header/page-header.module */
    "./src/app/shared/modules/page-header/page-header.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PageHeaderModule", function () {
      return _page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__["PageHeaderModule"];
    });
    /* harmony import */


    var _stat_stat_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./stat/stat.module */
    "./src/app/shared/modules/stat/stat.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StatModule", function () {
      return _stat_stat_module__WEBPACK_IMPORTED_MODULE_1__["StatModule"];
    });
    /***/

  },

  /***/
  "./src/app/shared/modules/page-header/page-header.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/shared/modules/page-header/page-header.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedModulesPageHeaderPageHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2R1bGVzL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/shared/modules/page-header/page-header.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/shared/modules/page-header/page-header.component.ts ***!
    \*********************************************************************/

  /*! exports provided: PageHeaderComponent */

  /***/
  function srcAppSharedModulesPageHeaderPageHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function () {
      return PageHeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PageHeaderComponent = /*#__PURE__*/function () {
      function PageHeaderComponent() {
        _classCallCheck(this, PageHeaderComponent);
      }

      _createClass(PageHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageHeaderComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], PageHeaderComponent.prototype, "heading", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], PageHeaderComponent.prototype, "icon", void 0);
    PageHeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page-header',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./page-header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/page-header/page-header.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./page-header.component.scss */
      "./src/app/shared/modules/page-header/page-header.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PageHeaderComponent);
    /***/
  },

  /***/
  "./src/app/shared/modules/page-header/page-header.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/shared/modules/page-header/page-header.module.ts ***!
    \******************************************************************/

  /*! exports provided: PageHeaderModule */

  /***/
  function srcAppSharedModulesPageHeaderPageHeaderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageHeaderModule", function () {
      return PageHeaderModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _page_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./page-header.component */
    "./src/app/shared/modules/page-header/page-header.component.ts");

    var PageHeaderModule = function PageHeaderModule() {
      _classCallCheck(this, PageHeaderModule);
    };

    PageHeaderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
      declarations: [_page_header_component__WEBPACK_IMPORTED_MODULE_4__["PageHeaderComponent"]],
      exports: [_page_header_component__WEBPACK_IMPORTED_MODULE_4__["PageHeaderComponent"]]
    })], PageHeaderModule);
    /***/
  },

  /***/
  "./src/app/shared/modules/stat/stat.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/shared/modules/stat/stat.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedModulesStatStatComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2R1bGVzL3N0YXQvc3RhdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/shared/modules/stat/stat.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/modules/stat/stat.component.ts ***!
    \*******************************************************/

  /*! exports provided: StatComponent */

  /***/
  function srcAppSharedModulesStatStatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatComponent", function () {
      return StatComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var StatComponent = /*#__PURE__*/function () {
      function StatComponent() {
        _classCallCheck(this, StatComponent);

        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(StatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StatComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], StatComponent.prototype, "bgClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], StatComponent.prototype, "icon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], StatComponent.prototype, "count", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], StatComponent.prototype, "label", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], StatComponent.prototype, "data", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], StatComponent.prototype, "event", void 0);
    StatComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-stat',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./stat.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/stat/stat.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./stat.component.scss */
      "./src/app/shared/modules/stat/stat.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], StatComponent);
    /***/
  },

  /***/
  "./src/app/shared/modules/stat/stat.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/modules/stat/stat.module.ts ***!
    \****************************************************/

  /*! exports provided: StatModule */

  /***/
  function srcAppSharedModulesStatStatModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatModule", function () {
      return StatModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _stat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./stat.component */
    "./src/app/shared/modules/stat/stat.component.ts");

    var StatModule = function StatModule() {
      _classCallCheck(this, StatModule);
    };

    StatModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
      declarations: [_stat_component__WEBPACK_IMPORTED_MODULE_3__["StatComponent"]],
      exports: [_stat_component__WEBPACK_IMPORTED_MODULE_3__["StatComponent"]]
    })], StatModule);
    /***/
  }
}]);
//# sourceMappingURL=products-products-module-es5.js.map