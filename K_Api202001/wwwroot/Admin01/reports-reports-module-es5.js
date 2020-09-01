function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports-reports-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/reports/reports.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/reports/reports.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutReportsReportsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [@routerTransition]>\n    <h2 class=\"text-muted\">Reports </h2>\n    <form>\n        <div class=\"form-row align-items-center\">\n\n            <div class=\"col-auto\">\n                <div class=\"form-group input-group\">\n                    <input class=\"form-control\" type=\"text\" />\n                    <div class=\"input-group-append\">\n                        <button class=\"btn btn-secondary\" type=\"button\"><i class=\"fa fa-search\"></i></button>\n                    </div>\n\n                </div>\n            </div>\n\n        </div>\n    </form>\n\n\n    <!-- /Table for orders -->\n    <div class=\"row\">\n        <div class=\"col col-xl-12\">\n            <div class=\"card mb-3\">\n                <table class=\"table table-hover table-striped table-bordered text-center\">\n                    <thead>\n                      \n                        <th> #Id</th>\n                        <th>Report Date</th>\n                        <th>Report Number</th>\n                        <th>Report Message</th>\n                      \n\n\n                    </thead>\n                    <tbody>\n                       \n                        <tr *ngFor=\"let report of data\">\n                            <td >{{ report.acount.id }}</td>\n                            <td>{{ report.date }}</td>\n                            <td>{{ report.acount.phoneNumber }}</td>\n                            <td>{{ report.text}}</td>\n                        </tr>\n                            \n\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/layout/reports/reports-routing.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/layout/reports/reports-routing.module.ts ***!
    \**********************************************************/

  /*! exports provided: ReportsRoutingModule */

  /***/
  function srcAppLayoutReportsReportsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function () {
      return ReportsRoutingModule;
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


    var _reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./reports.component */
    "./src/app/layout/reports/reports.component.ts");

    var routes = [{
      path: '',
      component: _reports_component__WEBPACK_IMPORTED_MODULE_3__["ReportsComponent"]
    }];

    var ReportsRoutingModule = function ReportsRoutingModule() {
      _classCallCheck(this, ReportsRoutingModule);
    };

    ReportsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ReportsRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/reports/reports.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/layout/reports/reports.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutReportsReportsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9yZXBvcnRzL3JlcG9ydHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/layout/reports/reports.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/layout/reports/reports.component.ts ***!
    \*****************************************************/

  /*! exports provided: ReportsComponent */

  /***/
  function srcAppLayoutReportsReportsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportsComponent", function () {
      return ReportsComponent;
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


    var _shared_services_reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/reports.service */
    "./src/app/shared/services/reports.service.ts");

    var ReportsComponent = /*#__PURE__*/function () {
      function ReportsComponent(reportsSrvice) {
        var _this = this;

        _classCallCheck(this, ReportsComponent);

        this.reportsSrvice = reportsSrvice;
        this.data = [];
        this.reportsSrvice.getAll().subscribe(function (result) {
          _this.data = result.data;
          console.log('JSON Response = ', _this.data);
        });
      }

      _createClass(ReportsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ReportsComponent;
    }();

    ReportsComponent.ctorParameters = function () {
      return [{
        type: _shared_services_reports_service__WEBPACK_IMPORTED_MODULE_3__["ReportsService"]
      }];
    };

    ReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reports',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./reports.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/reports/reports.component.html"))["default"],
      animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./reports.component.scss */
      "./src/app/layout/reports/reports.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_3__["ReportsService"]])], ReportsComponent);
    /***/
  },

  /***/
  "./src/app/layout/reports/reports.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/layout/reports/reports.module.ts ***!
    \**************************************************/

  /*! exports provided: ReportsModule */

  /***/
  function srcAppLayoutReportsReportsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportsModule", function () {
      return ReportsModule;
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


    var _reports_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./reports-routing.module */
    "./src/app/layout/reports/reports-routing.module.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _reports_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./reports.component */
    "./src/app/layout/reports/reports.component.ts");

    var ReportsModule = function ReportsModule() {
      _classCallCheck(this, ReportsModule);
    };

    ReportsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_reports_component__WEBPACK_IMPORTED_MODULE_5__["ReportsComponent"]],
      imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarouselModule"], _reports_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReportsRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbAlertModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
    })], ReportsModule);
    /***/
  },

  /***/
  "./src/app/shared/services/reports.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/services/reports.service.ts ***!
    \****************************************************/

  /*! exports provided: ReportsService */

  /***/
  function srcAppSharedServicesReportsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportsService", function () {
      return ReportsService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ReportsService = /*#__PURE__*/function () {
      function ReportsService(http) {
        _classCallCheck(this, ReportsService);

        this.http = http;
        this.apiUrl = "http://46.101.105.124/api/Report/currentPage";
      }

      _createClass(ReportsService, [{
        key: "getAll",
        value: function getAll() {
          return this.http.get(this.apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          if (error.error instanceof ErrorEvent) {
            console.log(error.error.message);
          } else {
            console.log(error.status);
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(console.log('Something is wrong!'));
        }
      }]);

      return ReportsService;
    }();

    ReportsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ReportsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ReportsService);
    /***/
  }
}]);
//# sourceMappingURL=reports-reports-module-es5.js.map