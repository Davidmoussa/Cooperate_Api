function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category-category-module"], {
  /***/
  "./node_modules/jw-angular-pagination/__ivy_ngcc__/fesm2015/jw-angular-pagination.js":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/jw-angular-pagination/__ivy_ngcc__/fesm2015/jw-angular-pagination.js ***!
    \*******************************************************************************************/

  /*! exports provided: JwPaginationComponent, JwPaginationModule */

  /***/
  function node_modulesJwAngularPagination__ivy_ngcc__Fesm2015JwAngularPaginationJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwPaginationComponent", function () {
      return JwPaginationComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwPaginationModule", function () {
      return JwPaginationModule;
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


    var jw_paginate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jw-paginate */
    "./node_modules/jw-paginate/lib/jw-paginate.js");
    /* harmony import */


    var jw_paginate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jw_paginate__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        active: a0
      };
    };

    function JwPaginationComponent_ul_0_li_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JwPaginationComponent_ul_0_li_7_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

          var page_r2 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r3.setPage(page_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var page_r2 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx_r1.pager.currentPage === page_r2));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](page_r2);
      }
    }

    var _c1 = function _c1(a0) {
      return {
        disabled: a0
      };
    };

    function JwPaginationComponent_ul_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JwPaginationComponent_ul_0_Template_a_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r5.setPage(1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "First");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JwPaginationComponent_ul_0_Template_a_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r7.setPage(ctx_r7.pager.currentPage - 1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Previous");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, JwPaginationComponent_ul_0_li_7_Template, 3, 4, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JwPaginationComponent_ul_0_Template_a_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r8.setPage(ctx_r8.pager.currentPage + 1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JwPaginationComponent_ul_0_Template_a_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r9.setPage(ctx_r9.pager.totalPages);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Last");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c1, ctx_r0.pager.currentPage === 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c1, ctx_r0.pager.currentPage === 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.pager.pages);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c1, ctx_r0.pager.currentPage === ctx_r0.pager.totalPages));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c1, ctx_r0.pager.currentPage === ctx_r0.pager.totalPages));
      }
    }

    var JwPaginationComponent = /*#__PURE__*/function () {
      function JwPaginationComponent() {
        _classCallCheck(this, JwPaginationComponent);

        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.initialPage = 1;
        this.pageSize = 10;
        this.maxPages = 10;
        this.pager = {};
      }

      _createClass(JwPaginationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // set page if items array isn't empty
          if (this.items && this.items.length) {
            this.setPage(this.initialPage);
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          // reset page if items array has changed
          if (changes.items.currentValue !== changes.items.previousValue) {
            this.setPage(this.initialPage);
          }
        }
      }, {
        key: "setPage",
        value: function setPage(page) {
          // get new pager object for specified page
          this.pager = jw_paginate__WEBPACK_IMPORTED_MODULE_2___default()(this.items.length, page, this.pageSize, this.maxPages); // get new page of items from items array

          var pageOfItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1); // call change page function in parent component

          this.changePage.emit(pageOfItems);
        }
      }]);

      return JwPaginationComponent;
    }();

    JwPaginationComponent.ɵfac = function JwPaginationComponent_Factory(t) {
      return new (t || JwPaginationComponent)();
    };

    JwPaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: JwPaginationComponent,
      selectors: [["jw-pagination"]],
      inputs: {
        initialPage: "initialPage",
        pageSize: "pageSize",
        maxPages: "maxPages",
        items: "items"
      },
      outputs: {
        changePage: "changePage"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "pagination", 4, "ngIf"], [1, "pagination"], [1, "page-item", "first-item", 3, "ngClass"], [1, "page-link", 3, "click"], [1, "page-item", "previous-item", 3, "ngClass"], ["class", "page-item number-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "page-item", "next-item", 3, "ngClass"], [1, "page-item", "last-item", 3, "ngClass"], [1, "page-item", "number-item", 3, "ngClass"]],
      template: function JwPaginationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, JwPaginationComponent_ul_0_Template, 14, 13, "ul", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.pager.pages && ctx.pager.pages.length);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      encapsulation: 2
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], JwPaginationComponent.prototype, "items", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], JwPaginationComponent.prototype, "changePage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], JwPaginationComponent.prototype, "initialPage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], JwPaginationComponent.prototype, "pageSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], JwPaginationComponent.prototype, "maxPages", void 0);

    var JwPaginationModule = function JwPaginationModule() {
      _classCallCheck(this, JwPaginationModule);
    };

    JwPaginationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: JwPaginationModule
    });
    JwPaginationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function JwPaginationModule_Factory(t) {
        return new (t || JwPaginationModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JwPaginationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'jw-pagination',
          template: "<ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n    <li [ngClass]=\"{disabled:pager.currentPage === 1}\" class=\"page-item first-item\">\n        <a (click)=\"setPage(1)\" class=\"page-link\">First</a>\n    </li>\n    <li [ngClass]=\"{disabled:pager.currentPage === 1}\" class=\"page-item previous-item\">\n        <a (click)=\"setPage(pager.currentPage - 1)\" class=\"page-link\">Previous</a>\n    </li>\n    <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\" class=\"page-item number-item\">\n        <a (click)=\"setPage(page)\" class=\"page-link\">{{page}}</a>\n    </li>\n    <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" class=\"page-item next-item\">\n        <a (click)=\"setPage(pager.currentPage + 1)\" class=\"page-link\">Next</a>\n    </li>\n    <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" class=\"page-item last-item\">\n        <a (click)=\"setPage(pager.totalPages)\" class=\"page-link\">Last</a>\n    </li>\n</ul>"
        }]
      }], function () {
        return [];
      }, {
        changePage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        initialPage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pageSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxPages: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](JwPaginationModule, {
        declarations: function declarations() {
          return [JwPaginationComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]];
        },
        exports: function exports() {
          return [JwPaginationComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JwPaginationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
          declarations: [JwPaginationComponent],
          exports: [JwPaginationComponent]
        }]
      }], null, null);
    })();
    /*
     * Public API Surface of jw-pagination
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=jw-angular-pagination.js.map

    /***/

  },

  /***/
  "./node_modules/jw-paginate/lib/jw-paginate.js":
  /*!*****************************************************!*\
    !*** ./node_modules/jw-paginate/lib/jw-paginate.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJwPaginateLibJwPaginateJs(module, exports, __webpack_require__) {
    "use strict";

    function paginate(totalItems, currentPage, pageSize, maxPages) {
      if (currentPage === void 0) {
        currentPage = 1;
      }

      if (pageSize === void 0) {
        pageSize = 10;
      }

      if (maxPages === void 0) {
        maxPages = 10;
      } // calculate total pages


      var totalPages = Math.ceil(totalItems / pageSize); // ensure current page isn't out of range

      if (currentPage < 1) {
        currentPage = 1;
      } else if (currentPage > totalPages) {
        currentPage = totalPages;
      }

      var startPage, endPage;

      if (totalPages <= maxPages) {
        // total pages less than max so show all pages
        startPage = 1;
        endPage = totalPages;
      } else {
        // total pages more than max so calculate start and end pages
        var maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
        var maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;

        if (currentPage <= maxPagesBeforeCurrentPage) {
          // current page near the start
          startPage = 1;
          endPage = maxPages;
        } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
          // current page near the end
          startPage = totalPages - maxPages + 1;
          endPage = totalPages;
        } else {
          // current page somewhere in the middle
          startPage = currentPage - maxPagesBeforeCurrentPage;
          endPage = currentPage + maxPagesAfterCurrentPage;
        }
      } // calculate start and end item indexes


      var startIndex = (currentPage - 1) * pageSize;
      var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1); // create an array of pages to ng-repeat in the pager control

      var pages = Array.from(Array(endPage + 1 - startPage).keys()).map(function (i) {
        return startPage + i;
      }); // return object with all pager properties required by the view

      return {
        totalItems: totalItems,
        currentPage: currentPage,
        pageSize: pageSize,
        totalPages: totalPages,
        startPage: startPage,
        endPage: endPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: pages
      };
    }

    module.exports = paginate;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/category/category.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/category/category.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutCategoryCategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [@routerTransition]>\n    <h2 class=\"text-muted\">{{'Category ' | translate }}</h2>\n    \n        <div class=\"form-row align-items-center\">\n\n            <div class=\"col-auto\">\n                <div class=\"form-group input-group\">\n                    <input [(ngModel)]='term' class=\"form-control\" type=\"text\" />\n                    <div class=\"input-group-append\">\n                        <button class=\"btn btn-secondary\" type=\"button\"><i class=\"fa fa-search\"></i></button>\n                    </div>\n                    <div class=\"col-auto\">\n                        <a [routerLinkActive]=\"['router-link-active']\" routerLink=\"/add-category\" ><button class=\"btn btn-danger\">\n                            +Add New Category\n                        </button>\n                         </a>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    \n\n\n    <!-- /Table for category -->\n    <div class=\"row\">\n        <div class=\"col col-xl-12\">\n        \n                <table class=\"table table-hover  table-bordered text-center table-striped\">\n                    <thead>\n                        <tr>\n\n                            <th>{{'Name' | translate }}</th>\n                            <th>{{'ar-Name' | translate }}</th>\n                            <th>Actions </th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let category of data|categorySearch:term\">\n                            <td>{{category.name}}</td>\n                            <td>{{ category.aName }}</td>\n                            <td class=\"\">\n                                <button class=\"btn btn-sm btn-danger mr-2 \"(click)=\"deletePost(category.id)\">delete</button>\n                                \n                                <a href=\"#\" [routerLink]=\"['/edit-category', category.id]\" class=\"btn btn-primary\">Edit</a>\n                            </td>\n\n                        </tr>\n\n                    </tbody>\n                </table>\n            \n        </div>\n    </div>\n\n  \n</div>\n\n<nav aria-label=\"Page navigation example\">\n    <ul class=\"pagination\">\n      <li  (click)='prev()'  class=\"page-item\"><a class=\"page-link\" >Previous</a></li>\n      <li *ngFor=\"let pageNumber of pageNumbers; let i =index\" (click)='changeNumber(pageNumber)' class=\"page-item\"><a class=\"page-link\" >{{pageNumber}}</a></li>\n     \n      <li (click)='next()'  class=\"page-item\"><a class=\"page-link\" >Next</a></li>\n    </ul>\n  </nav>";
    /***/
  },

  /***/
  "./src/app/layout/category/category-routing.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/layout/category/category-routing.module.ts ***!
    \************************************************************/

  /*! exports provided: CategoryRoutingModule */

  /***/
  function srcAppLayoutCategoryCategoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryRoutingModule", function () {
      return CategoryRoutingModule;
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


    var _category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./category.component */
    "./src/app/layout/category/category.component.ts");

    var routes = [{
      path: '',
      component: _category_component__WEBPACK_IMPORTED_MODULE_3__["CategoryComponent"]
    }];

    var CategoryRoutingModule = function CategoryRoutingModule() {
      _classCallCheck(this, CategoryRoutingModule);
    };

    CategoryRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CategoryRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/category/category.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/layout/category/category.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutCategoryCategoryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".pagination {\n  justify-content: center;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hL1dvcmsvRnJlZS9sYXN0LXVwZGF0ZS1hZG1pbi1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2luYXRpb257XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6IGJsYWNrO1xufSIsIi5wYWdpbmF0aW9uIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/layout/category/category.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/layout/category/category.component.ts ***!
    \*******************************************************/

  /*! exports provided: CategoryComponent */

  /***/
  function srcAppLayoutCategoryCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryComponent", function () {
      return CategoryComponent;
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


    var _shared_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/category.service */
    "./src/app/shared/services/category.service.ts");

    var CategoryComponent = /*#__PURE__*/function () {
      function CategoryComponent(categorySrvice) {
        var _this = this;

        _classCallCheck(this, CategoryComponent);

        this.categorySrvice = categorySrvice;
        this.currentPage = 1;
        this.pageNumbers = [];
        this.data = [];

        for (var i = 1; i < 11; i++) {
          this.pageNumbers.push(i);
        }

        this.categorySrvice.getAll(this.currentPage).subscribe(function (result) {
          _this.data = result.data;
          console.log('JSON Response = ', _this.data);
        });
      }

      _createClass(CategoryComponent, [{
        key: "changeNumber",
        value: function changeNumber(ind) {
          var _this2 = this;

          this.currentPage = ind;
          this.categorySrvice.getAll(this.currentPage).subscribe(function (result) {
            _this2.data = result.data;
            console.log('JSON Response = ', _this2.data);
          });
        }
      }, {
        key: "prev",
        value: function prev() {
          this.changeNumber(this.currentPage - 1);
        }
      }, {
        key: "next",
        value: function next() {
          this.changeNumber(this.currentPage + 1);
        }
      }, {
        key: "deletePost",
        value: function deletePost(id) {
          var _this3 = this;

          this.categorySrvice["delete"](id).subscribe(function (res) {
            _this3.data = _this3.data.filter(function (item) {
              return item.id !== id;
            });
            alert('Category deleted successfully!');
          }, function (error) {
            alert("There are producers that use this category");
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CategoryComponent;
    }();

    CategoryComponent.ctorParameters = function () {
      return [{
        type: _shared_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]
      }];
    };

    CategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-category',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./category.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/category/category.component.html"))["default"],
      animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./category.component.scss */
      "./src/app/layout/category/category.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]])], CategoryComponent);
    /***/
  },

  /***/
  "./src/app/layout/category/category.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/layout/category/category.module.ts ***!
    \****************************************************/

  /*! exports provided: CategoryModule */

  /***/
  function srcAppLayoutCategoryCategoryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryModule", function () {
      return CategoryModule;
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


    var _shared_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/modules */
    "./src/app/shared/modules/index.ts");
    /* harmony import */


    var _category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./category-routing.module */
    "./src/app/layout/category/category-routing.module.ts");
    /* harmony import */


    var _category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./category.component */
    "./src/app/layout/category/category.component.ts");
    /* harmony import */


    var _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./add-category/add-category.component */
    "./src/app/layout/category/add-category/add-category.component.ts");
    /* harmony import */


    var jw_angular_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! jw-angular-pagination */
    "./node_modules/jw-angular-pagination/__ivy_ngcc__/fesm2015/jw-angular-pagination.js");
    /* harmony import */


    var _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./edit-category/edit-category.component */
    "./src/app/layout/category/edit-category/edit-category.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _shared_pipes_category_search_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../shared/pipes/category-search.pipe */
    "./src/app/shared/pipes/category-search.pipe.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var CategoryModule = function CategoryModule() {
      _classCallCheck(this, CategoryModule);
    };

    CategoryModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_category_component__WEBPACK_IMPORTED_MODULE_6__["CategoryComponent"], _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_7__["AddCategoryComponent"], _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_9__["EditCategoryComponent"], _shared_pipes_category_search_pipe__WEBPACK_IMPORTED_MODULE_12__["CategorySearchPipe"], jw_angular_pagination__WEBPACK_IMPORTED_MODULE_8__["JwPaginationComponent"]],
      imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarouselModule"], _shared_modules__WEBPACK_IMPORTED_MODULE_4__["StatModule"], _category_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoryRoutingModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__["ModalModule"].forRoot(), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]],
      entryComponents: [_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_7__["AddCategoryComponent"], _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_9__["EditCategoryComponent"]]
    })], CategoryModule);
    /***/
  },

  /***/
  "./src/app/shared/pipes/category-search.pipe.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/pipes/category-search.pipe.ts ***!
    \******************************************************/

  /*! exports provided: CategorySearchPipe */

  /***/
  function srcAppSharedPipesCategorySearchPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategorySearchPipe", function () {
      return CategorySearchPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CategorySearchPipe = /*#__PURE__*/function () {
      function CategorySearchPipe() {
        _classCallCheck(this, CategorySearchPipe);
      }

      _createClass(CategorySearchPipe, [{
        key: "transform",
        value: function transform(category, term) {
          if (term == undefined) {
            return category;
          }

          return category.filter(function (category) {
            return category.aName.includes(term);
          });
        }
      }]);

      return CategorySearchPipe;
    }();

    CategorySearchPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'categorySearch'
    })], CategorySearchPipe);
    /***/
  }
}]);
//# sourceMappingURL=category-category-module-es5.js.map