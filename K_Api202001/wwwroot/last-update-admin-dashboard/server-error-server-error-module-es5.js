function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["server-error-server-error-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/server-error/server-error.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/server-error/server-error.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppServerErrorServerErrorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n    server-error works!\n</p>\n";
    /***/
  },

  /***/
  "./src/app/server-error/server-error-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/server-error/server-error-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: ServerErrorRoutingModule */

  /***/
  function srcAppServerErrorServerErrorRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServerErrorRoutingModule", function () {
      return ServerErrorRoutingModule;
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


    var _server_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./server-error.component */
    "./src/app/server-error/server-error.component.ts");

    var routes = [{
      path: '',
      component: _server_error_component__WEBPACK_IMPORTED_MODULE_3__["ServerErrorComponent"]
    }];

    var ServerErrorRoutingModule = function ServerErrorRoutingModule() {
      _classCallCheck(this, ServerErrorRoutingModule);
    };

    ServerErrorRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ServerErrorRoutingModule);
    /***/
  },

  /***/
  "./src/app/server-error/server-error.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/server-error/server-error.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppServerErrorServerErrorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZlci1lcnJvci9zZXJ2ZXItZXJyb3IuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/server-error/server-error.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/server-error/server-error.component.ts ***!
    \********************************************************/

  /*! exports provided: ServerErrorComponent */

  /***/
  function srcAppServerErrorServerErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServerErrorComponent", function () {
      return ServerErrorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ServerErrorComponent = /*#__PURE__*/function () {
      function ServerErrorComponent() {
        _classCallCheck(this, ServerErrorComponent);
      }

      _createClass(ServerErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ServerErrorComponent;
    }();

    ServerErrorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-server-error',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./server-error.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/server-error/server-error.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./server-error.component.scss */
      "./src/app/server-error/server-error.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ServerErrorComponent);
    /***/
  },

  /***/
  "./src/app/server-error/server-error.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/server-error/server-error.module.ts ***!
    \*****************************************************/

  /*! exports provided: ServerErrorModule */

  /***/
  function srcAppServerErrorServerErrorModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServerErrorModule", function () {
      return ServerErrorModule;
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


    var _server_error_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./server-error-routing.module */
    "./src/app/server-error/server-error-routing.module.ts");
    /* harmony import */


    var _server_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./server-error.component */
    "./src/app/server-error/server-error.component.ts");

    var ServerErrorModule = function ServerErrorModule() {
      _classCallCheck(this, ServerErrorModule);
    };

    ServerErrorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _server_error_routing_module__WEBPACK_IMPORTED_MODULE_3__["ServerErrorRoutingModule"]],
      declarations: [_server_error_component__WEBPACK_IMPORTED_MODULE_4__["ServerErrorComponent"]]
    })], ServerErrorModule);
    /***/
  }
}]);
//# sourceMappingURL=server-error-server-error-module-es5.js.map