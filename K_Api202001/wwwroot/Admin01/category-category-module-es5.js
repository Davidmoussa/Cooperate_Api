function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category-category-module"], {
  /***/
  "./node_modules/ngx-bootstrap/__ivy_ngcc__/component-loader/fesm2015/ngx-bootstrap-component-loader.js":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/component-loader/fesm2015/ngx-bootstrap-component-loader.js ***!
    \*************************************************************************************************************/

  /*! exports provided: BsComponentRef, ComponentLoader, ComponentLoaderFactory, ContentRef */

  /***/
  function node_modulesNgxBootstrap__ivy_ngcc__ComponentLoaderFesm2015NgxBootstrapComponentLoaderJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BsComponentRef", function () {
      return BsComponentRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentLoader", function () {
      return ComponentLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentLoaderFactory", function () {
      return ComponentLoaderFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentRef", function () {
      return ContentRef;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-bootstrap/utils */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/utils/fesm2015/ngx-bootstrap-utils.js");
    /* harmony import */


    var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/positioning */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/positioning/fesm2015/ngx-bootstrap-positioning.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @template T
     */


    var BsComponentRef = function BsComponentRef() {
      _classCallCheck(this, BsComponentRef);
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @copyright Valor Software
     * @copyright Angular ng-bootstrap team
     */


    var ContentRef =
    /**
     * @param {?} nodes
     * @param {?=} viewRef
     * @param {?=} componentRef
     */
    function ContentRef(
    /* tslint:disable-next-line: no-any */
    nodes, viewRef,
    /* tslint:disable-next-line: no-any */
    componentRef) {
      _classCallCheck(this, ContentRef);

      this.nodes = nodes;
      this.viewRef = viewRef;
      this.componentRef = componentRef;
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @template T
     */


    var ComponentLoader = /*#__PURE__*/function () {
      /**
       * Do not use this directly, it should be instanced via
       * `ComponentLoadFactory.attach`
       * \@internal
       * @param {?} _viewContainerRef
       * @param {?} _renderer
       * @param {?} _elementRef
       * @param {?} _injector
       * @param {?} _componentFactoryResolver
       * @param {?} _ngZone
       * @param {?} _applicationRef
       * @param {?} _posService
       */
      // tslint:disable-next-line
      function ComponentLoader(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService) {
        _classCallCheck(this, ComponentLoader);

        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._injector = _injector;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._applicationRef = _applicationRef;
        this._posService = _posService;
        this.onBeforeShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /* tslint:disable-next-line: no-any*/

        this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /* tslint:disable-next-line: no-any*/

        this.onBeforeHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._providers = [];
        this._isHiding = false;
        /**
         * A selector used if container element was not found
         */

        this.containerDefaultSelector = 'body';
        this._listenOpts = {};
        this._globalListener = Function.prototype;
      }
      /**
       * @return {?}
       */


      _createClass(ComponentLoader, [{
        key: "attach",

        /**
         * @param {?} compType
         * @return {?}
         */
        value: function attach(compType) {
          this._componentFactory = this._componentFactoryResolver.resolveComponentFactory(compType);
          return this;
        } // todo: add behaviour: to target element, `body`, custom element

        /**
         * @param {?=} container
         * @return {?}
         */

      }, {
        key: "to",
        value: function to(container) {
          this.container = container || this.container;
          return this;
        }
        /**
         * @param {?=} opts
         * @return {?}
         */

      }, {
        key: "position",
        value: function position(opts) {
          this.attachment = opts.attachment || this.attachment;
          /* tslint:disable-next-line: no-unnecessary-type-assertion */

          this._elementRef =
          /** @type {?} */
          opts.target || this._elementRef;
          return this;
        }
        /**
         * @param {?} provider
         * @return {?}
         */

      }, {
        key: "provide",
        value: function provide(provider) {
          this._providers.push(provider);

          return this;
        } // todo: appendChild to element or document.querySelector(this.container)

        /**
         * @param {?=} opts
         * @return {?}
         */

      }, {
        key: "show",
        value: function show() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          this._subscribePositioning();

          this._innerComponent = null;

          if (!this._componentRef) {
            this.onBeforeShow.emit();
            this._contentRef = this._getContentRef(opts.content, opts.context, opts.initialState);
            /** @type {?} */

            var injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].create({
              providers: this._providers,
              parent: this._injector
            });

            this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);

            this._applicationRef.attachView(this._componentRef.hostView); // this._componentRef = this._viewContainerRef
            //   .createComponent(this._componentFactory, 0, injector, this._contentRef.nodes);


            this.instance = this._componentRef.instance;
            Object.assign(this._componentRef.instance, opts);

            if (this.container instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) {
              this.container.nativeElement.appendChild(this._componentRef.location.nativeElement);
            }

            if (typeof this.container === 'string' && typeof document !== 'undefined') {
              /** @type {?} */
              var selectedElement = document.querySelector(this.container) || document.querySelector(this.containerDefaultSelector);
              selectedElement.appendChild(this._componentRef.location.nativeElement);
            }

            if (!this.container && this._elementRef && this._elementRef.nativeElement.parentElement) {
              this._elementRef.nativeElement.parentElement.appendChild(this._componentRef.location.nativeElement);
            } // we need to manually invoke change detection since events registered
            // via
            // Renderer::listen() are not picked up by change detection with the
            // OnPush strategy


            if (this._contentRef.componentRef) {
              this._innerComponent = this._contentRef.componentRef.instance;

              this._contentRef.componentRef.changeDetectorRef.markForCheck();

              this._contentRef.componentRef.changeDetectorRef.detectChanges();
            }

            this._componentRef.changeDetectorRef.markForCheck();

            this._componentRef.changeDetectorRef.detectChanges();

            this.onShown.emit(this._componentRef.instance);
          }

          this._registerOutsideClick();

          return this._componentRef;
        }
        /**
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide() {
          if (!this._componentRef) {
            return this;
          }

          this._posService.deletePositionElement(this._componentRef.location);

          this.onBeforeHide.emit(this._componentRef.instance);
          /** @type {?} */

          var componentEl = this._componentRef.location.nativeElement;
          componentEl.parentNode.removeChild(componentEl);

          if (this._contentRef.componentRef) {
            this._contentRef.componentRef.destroy();
          }

          this._componentRef.destroy();

          if (this._viewContainerRef && this._contentRef.viewRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
          }

          if (this._contentRef.viewRef) {
            this._contentRef.viewRef.destroy();
          }

          this._contentRef = null;
          this._componentRef = null;

          this._removeGlobalListener();

          this.onHidden.emit();
          return this;
        }
        /**
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          if (this.isShown) {
            this.hide();
            return;
          }

          this.show();
        }
        /**
         * @return {?}
         */

      }, {
        key: "dispose",
        value: function dispose() {
          if (this.isShown) {
            this.hide();
          }

          this._unsubscribePositioning();

          if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
          }
        }
        /**
         * @param {?} listenOpts
         * @return {?}
         */

      }, {
        key: "listen",
        value: function listen(listenOpts) {
          var _this = this;

          this.triggers = listenOpts.triggers || this.triggers;
          this._listenOpts.outsideClick = listenOpts.outsideClick;
          this._listenOpts.outsideEsc = listenOpts.outsideEsc;
          listenOpts.target = listenOpts.target || this._elementRef.nativeElement;
          /** @type {?} */

          var hide = this._listenOpts.hide =
          /**
          * @return {?}
          */
          function () {
            return listenOpts.hide ? listenOpts.hide() : void _this.hide();
          };
          /** @type {?} */


          var show = this._listenOpts.show =
          /**
          * @param {?} registerHide
          * @return {?}
          */
          function (registerHide) {
            listenOpts.show ? listenOpts.show(registerHide) : _this.show(registerHide);
            registerHide();
          };
          /** @type {?} */


          var toggle =
          /**
          * @param {?} registerHide
          * @return {?}
          */
          function toggle(registerHide) {
            _this.isShown ? hide() : show(registerHide);
          };

          this._unregisterListenersFn = Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["listenToTriggersV2"])(this._renderer, {
            target: listenOpts.target,
            triggers: listenOpts.triggers,
            show: show,
            hide: hide,
            toggle: toggle
          });
          return this;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_removeGlobalListener",
        value: function _removeGlobalListener() {
          if (this._globalListener) {
            this._globalListener();

            this._globalListener = null;
          }
        }
        /**
         * @param {?} vRef
         * @param {?} template
         * @return {?}
         */

      }, {
        key: "attachInline",
        value: function attachInline(vRef,
        /* tslint:disable-next-line: no-any*/
        template) {
          this._inlineViewRef = vRef.createEmbeddedView(template);
          return this;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_registerOutsideClick",
        value: function _registerOutsideClick() {
          var _this2 = this;

          if (!this._componentRef || !this._componentRef.location) {
            return;
          } // why: should run after first event bubble


          if (this._listenOpts.outsideClick) {
            /** @type {?} */
            var target = this._componentRef.location.nativeElement;
            setTimeout(
            /**
            * @return {?}
            */
            function () {
              _this2._globalListener = Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["registerOutsideClick"])(_this2._renderer, {
                targets: [target, _this2._elementRef.nativeElement],
                outsideClick: _this2._listenOpts.outsideClick,
                hide:
                /**
                * @return {?}
                */
                function hide() {
                  return _this2._listenOpts.hide();
                }
              });
            });
          }

          if (this._listenOpts.outsideEsc) {
            /** @type {?} */
            var _target = this._componentRef.location.nativeElement;
            this._globalListener = Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["registerEscClick"])(this._renderer, {
              targets: [_target, this._elementRef.nativeElement],
              outsideEsc: this._listenOpts.outsideEsc,
              hide:
              /**
              * @return {?}
              */
              function hide() {
                return _this2._listenOpts.hide();
              }
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "getInnerComponent",
        value: function getInnerComponent() {
          return this._innerComponent;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_subscribePositioning",
        value: function _subscribePositioning() {
          var _this3 = this;

          if (this._zoneSubscription || !this.attachment) {
            return;
          }

          this.onShown.subscribe(
          /**
          * @return {?}
          */
          function () {
            _this3._posService.position({
              element: _this3._componentRef.location,
              target: _this3._elementRef,
              attachment: _this3.attachment,
              appendToBody: _this3.container === 'body'
            });
          });
          this._zoneSubscription = this._ngZone.onStable.subscribe(
          /**
          * @return {?}
          */
          function () {
            if (!_this3._componentRef) {
              return;
            }

            _this3._posService.calcPosition();
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_unsubscribePositioning",
        value: function _unsubscribePositioning() {
          if (!this._zoneSubscription) {
            return;
          }

          this._zoneSubscription.unsubscribe();

          this._zoneSubscription = null;
        }
        /**
         * @private
         * @param {?} content
         * @param {?=} context
         * @param {?=} initialState
         * @return {?}
         */

      }, {
        key: "_getContentRef",
        value: function _getContentRef(
        /* tslint:disable-next-line: no-any*/
        content,
        /* tslint:disable-next-line: no-any*/
        context,
        /* tslint:disable-next-line: no-any*/
        initialState) {
          if (!content) {
            return new ContentRef([]);
          }

          if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) {
            if (this._viewContainerRef) {
              /** @type {?} */
              var _viewRef = this._viewContainerRef.createEmbeddedView(content, context);

              _viewRef.markForCheck();

              return new ContentRef([_viewRef.rootNodes], _viewRef);
            }
            /** @type {?} */


            var viewRef = content.createEmbeddedView({});

            this._applicationRef.attachView(viewRef);

            return new ContentRef([viewRef.rootNodes], viewRef);
          }

          if (typeof content === 'function') {
            /** @type {?} */
            var contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
            /** @type {?} */


            var modalContentInjector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].create({
              providers: this._providers,
              parent: this._injector
            });
            /** @type {?} */


            var componentRef = contentCmptFactory.create(modalContentInjector);
            Object.assign(componentRef.instance, initialState);

            this._applicationRef.attachView(componentRef.hostView);

            return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
          }

          return new ContentRef([[this._renderer.createText("".concat(content))]]);
        }
      }, {
        key: "isShown",
        get: function get() {
          if (this._isHiding) {
            return false;
          }

          return !!this._componentRef;
        }
      }]);

      return ComponentLoader;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ComponentLoaderFactory = /*#__PURE__*/function () {
      /**
       * @param {?} _componentFactoryResolver
       * @param {?} _ngZone
       * @param {?} _injector
       * @param {?} _posService
       * @param {?} _applicationRef
       */
      function ComponentLoaderFactory(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef) {
        _classCallCheck(this, ComponentLoaderFactory);

        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._injector = _injector;
        this._posService = _posService;
        this._applicationRef = _applicationRef;
      }
      /**
       *
       * @template T
       * @param {?} _elementRef
       * @param {?} _viewContainerRef
       * @param {?} _renderer
       * @return {?}
       */


      _createClass(ComponentLoaderFactory, [{
        key: "createLoader",
        value: function createLoader(_elementRef, _viewContainerRef, _renderer) {
          return new ComponentLoader(_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService);
        }
      }]);

      return ComponentLoaderFactory;
    }();

    ComponentLoaderFactory.ɵfac = function ComponentLoaderFactory_Factory(t) {
      return new (t || ComponentLoaderFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__["PositioningService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]));
    };

    ComponentLoaderFactory.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ComponentLoaderFactory,
      factory: ComponentLoaderFactory.ɵfac
    });
    /** @nocollapse */

    ComponentLoaderFactory.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
      }, {
        type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__["PositioningService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentLoaderFactory, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__["PositioningService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ngx-bootstrap-component-loader.js.map

    /***/

  },

  /***/
  "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js":
  /*!***************************************************************************************!*\
    !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js ***!
    \***************************************************************************************/

  /*! exports provided: BsModalRef, BsModalService, ModalBackdropComponent, ModalBackdropOptions, ModalContainerComponent, ModalDirective, ModalModule, ModalOptions, ɵa */

  /***/
  function node_modulesNgxBootstrap__ivy_ngcc__ModalFesm2015NgxBootstrapModalJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BsModalRef", function () {
      return BsModalRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BsModalService", function () {
      return BsModalService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalBackdropComponent", function () {
      return ModalBackdropComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalBackdropOptions", function () {
      return ModalBackdropOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalContainerComponent", function () {
      return ModalContainerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalDirective", function () {
      return ModalDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalModule", function () {
      return ModalModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalOptions", function () {
      return ModalOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return CLASS_NAME;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-bootstrap/utils */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/utils/fesm2015/ngx-bootstrap-utils.js");
    /* harmony import */


    var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/component-loader */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/component-loader/fesm2015/ngx-bootstrap-component-loader.js");
    /* harmony import */


    var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-bootstrap/positioning */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/positioning/fesm2015/ngx-bootstrap-positioning.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var _c0 = ["*"];

    var BsModalRef = function BsModalRef() {
      _classCallCheck(this, BsModalRef);

      /**
       * Hides the modal
       */
      this.hide = Function;
      /**
       * Sets new class to modal window
       */

      this.setClass = Function;
    };

    BsModalRef.ɵfac = function BsModalRef_Factory(t) {
      return new (t || BsModalRef)();
    };

    BsModalRef.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BsModalRef,
      factory: BsModalRef.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsModalRef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ModalBackdropOptions =
    /**
     * @param {?} options
     */
    function ModalBackdropOptions(options) {
      _classCallCheck(this, ModalBackdropOptions);

      this.animate = true;
      Object.assign(this, options);
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ModalOptions = function ModalOptions() {
      _classCallCheck(this, ModalOptions);
    };

    ModalOptions.ɵfac = function ModalOptions_Factory(t) {
      return new (t || ModalOptions)();
    };

    ModalOptions.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ModalOptions,
      factory: ModalOptions.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalOptions, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();

    if (false) {}
    /** @type {?} */


    var modalConfigDefaults = {
      backdrop: true,
      keyboard: true,
      focus: true,
      show: false,
      ignoreBackdropClick: false,
      "class": '',
      animated: true,
      initialState: {}
    };
    /** @type {?} */

    var CLASS_NAME = {
      SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
      BACKDROP: 'modal-backdrop',
      OPEN: 'modal-open',
      FADE: 'fade',
      IN: 'in',
      // bs3
      SHOW: 'show' // bs4

    };
    /** @type {?} */

    var SELECTOR = {
      DIALOG: '.modal-dialog',
      DATA_TOGGLE: '[data-toggle="modal"]',
      DATA_DISMISS: '[data-dismiss="modal"]',
      FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
    };
    /** @type {?} */

    var TRANSITION_DURATIONS = {
      MODAL: 300,
      BACKDROP: 150
    };
    /** @type {?} */

    var DISMISS_REASONS = {
      BACKRDOP: 'backdrop-click',
      ESC: 'esc'
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var ModalContainerComponent = /*#__PURE__*/function () {
      /**
       * @param {?} options
       * @param {?} _element
       * @param {?} _renderer
       */
      function ModalContainerComponent(options, _element, _renderer) {
        _classCallCheck(this, ModalContainerComponent);

        this._element = _element;
        this._renderer = _renderer;
        this.isShown = false;
        this.isModalHiding = false;
        this.clickStartedInContent = false;
        this.config = Object.assign({}, options);
      }
      /**
       * @return {?}
       */


      _createClass(ModalContainerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          if (this.isAnimated) {
            this._renderer.addClass(this._element.nativeElement, CLASS_NAME.FADE);
          }

          this._renderer.setStyle(this._element.nativeElement, 'display', 'block');

          setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this4.isShown = true;

            _this4._renderer.addClass(_this4._element.nativeElement, Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])() ? CLASS_NAME.IN : CLASS_NAME.SHOW);
          }, this.isAnimated ? TRANSITION_DURATIONS.BACKDROP : 0);

          if (document && document.body) {
            if (this.bsModalService.getModalsCount() === 1) {
              this.bsModalService.checkScrollbar();
              this.bsModalService.setScrollbar();
            }

            this._renderer.addClass(document.body, CLASS_NAME.OPEN);
          }

          if (this._element.nativeElement) {
            this._element.nativeElement.focus();
          }
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onClickStarted",
        value: function onClickStarted(event) {
          this.clickStartedInContent = event.target !== this._element.nativeElement;
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onClickStop",
        value: function onClickStop(event) {
          /** @type {?} */
          var clickedInBackdrop = event.target === this._element.nativeElement && !this.clickStartedInContent;

          if (this.config.ignoreBackdropClick || this.config.backdrop === 'static' || !clickedInBackdrop) {
            this.clickStartedInContent = false;
            return;
          }

          this.bsModalService.setDismissReason(DISMISS_REASONS.BACKRDOP);
          this.hide();
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onEsc",
        value: function onEsc(event) {
          if (!this.isShown) {
            return;
          } // tslint:disable-next-line:deprecation


          if (event.keyCode === 27 || event.key === 'Escape') {
            event.preventDefault();
          }

          if (this.config.keyboard && this.level === this.bsModalService.getModalsCount()) {
            this.bsModalService.setDismissReason(DISMISS_REASONS.ESC);
            this.hide();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.isShown) {
            this.hide();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide() {
          var _this5 = this;

          if (this.isModalHiding || !this.isShown) {
            return;
          }

          this.isModalHiding = true;

          this._renderer.removeClass(this._element.nativeElement, Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])() ? CLASS_NAME.IN : CLASS_NAME.SHOW);

          setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this5.isShown = false;

            if (document && document.body && _this5.bsModalService.getModalsCount() === 1) {
              _this5._renderer.removeClass(document.body, CLASS_NAME.OPEN);
            }

            _this5.bsModalService.hide(_this5.level);

            _this5.isModalHiding = false;
          }, this.isAnimated ? TRANSITION_DURATIONS.MODAL : 0);
        }
      }]);

      return ModalContainerComponent;
    }();

    ModalContainerComponent.ɵfac = function ModalContainerComponent_Factory(t) {
      return new (t || ModalContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ModalOptions), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    ModalContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ModalContainerComponent,
      selectors: [["modal-container"]],
      hostAttrs: ["role", "dialog", "tabindex", "-1", 1, "modal"],
      hostVars: 3,
      hostBindings: function ModalContainerComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ModalContainerComponent_mousedown_HostBindingHandler($event) {
            return ctx.onClickStarted($event);
          })("mouseup", function ModalContainerComponent_mouseup_HostBindingHandler($event) {
            return ctx.onClickStop($event);
          })("keydown.esc", function ModalContainerComponent_keydown_esc_HostBindingHandler($event) {
            return ctx.onEsc($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-modal", true)("aria-labelledby", ctx.config.ariaLabelledBy)("aria-describedby", ctx.config.ariaDescribedby);
        }
      },
      ngContentSelectors: _c0,
      decls: 3,
      vars: 2,
      consts: [["role", "document"], [1, "modal-content"]],
      template: function ModalContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("modal-dialog" + (ctx.config["class"] ? " " + ctx.config["class"] : ""));
        }
      },
      encapsulation: 2
    });
    /** @nocollapse */

    ModalContainerComponent.ctorParameters = function () {
      return [{
        type: ModalOptions
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }];
    };

    ModalContainerComponent.propDecorators = {
      onClickStarted: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['mousedown', ['$event']]
      }],
      onClickStop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['mouseup', ['$event']]
      }],
      onEsc: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['window:keydown.esc', ['$event']]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'modal-container',
          template: "\n    <div [class]=\"'modal-dialog' + (config.class ? ' ' + config.class : '')\" role=\"document\">\n      <div class=\"modal-content\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  ",
          host: {
            "class": 'modal',
            role: 'dialog',
            tabindex: '-1',
            '[attr.aria-modal]': 'true',
            '[attr.aria-labelledby]': 'config.ariaLabelledBy',
            '[attr.aria-describedby]': 'config.ariaDescribedby'
          }
        }]
      }], function () {
        return [{
          type: ModalOptions
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, {
        onClickStarted: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mousedown', ['$event']]
        }],
        onClickStop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseup', ['$event']]
        }],
        onEsc: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:keydown.esc', ['$event']]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * This component will be added as background layout for modals if enabled
     */


    var ModalBackdropComponent = /*#__PURE__*/function () {
      /**
       * @param {?} element
       * @param {?} renderer
       */
      function ModalBackdropComponent(element, renderer) {
        _classCallCheck(this, ModalBackdropComponent);

        this._isShown = false;
        this.element = element;
        this.renderer = renderer;
      }
      /**
       * @return {?}
       */


      _createClass(ModalBackdropComponent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          if (this.isAnimated) {
            this.renderer.addClass(this.element.nativeElement, "".concat(CLASS_NAME.FADE));
            ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].reflow(this.element.nativeElement);
          }

          this.isShown = true;
        }
      }, {
        key: "isAnimated",
        get: function get() {
          return this._isAnimated;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._isAnimated = value; // this.renderer.setElementClass(this.element.nativeElement, `${ClassName.FADE}`, value);
        }
        /**
         * @return {?}
         */

      }, {
        key: "isShown",
        get: function get() {
          return this._isShown;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._isShown = value;

          if (value) {
            this.renderer.addClass(this.element.nativeElement, "".concat(CLASS_NAME.IN));
          } else {
            this.renderer.removeClass(this.element.nativeElement, "".concat(CLASS_NAME.IN));
          }

          if (!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()) {
            if (value) {
              this.renderer.addClass(this.element.nativeElement, "".concat(CLASS_NAME.SHOW));
            } else {
              this.renderer.removeClass(this.element.nativeElement, "".concat(CLASS_NAME.SHOW));
            }
          }
        }
      }]);

      return ModalBackdropComponent;
    }();

    ModalBackdropComponent.ɵfac = function ModalBackdropComponent_Factory(t) {
      return new (t || ModalBackdropComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    ModalBackdropComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ModalBackdropComponent,
      selectors: [["bs-modal-backdrop"]],
      hostAttrs: [1, "modal-backdrop"],
      decls: 0,
      vars: 0,
      template: function ModalBackdropComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
    /** @nocollapse */

    ModalBackdropComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalBackdropComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'bs-modal-backdrop',
          template: ' ',
          host: {
            "class": CLASS_NAME.BACKDROP
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var TRANSITION_DURATION = 300;
    /** @type {?} */

    var BACKDROP_TRANSITION_DURATION = 150;
    /**
     * Mark any code with directive to show it's content in modal
     */

    var ModalDirective = /*#__PURE__*/function () {
      /**
       * @param {?} _element
       * @param {?} _viewContainerRef
       * @param {?} _renderer
       * @param {?} clf
       */
      function ModalDirective(_element, _viewContainerRef, _renderer, clf) {
        _classCallCheck(this, ModalDirective);

        this._element = _element;
        this._renderer = _renderer;
        /**
         * This event fires immediately when the `show` instance method is called.
         */

        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the modal has been made visible to the user
         * (will wait for CSS transitions to complete)
         */

        this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired immediately when
         * the hide instance method has been called.
         */

        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the modal has finished being
         * hidden from the user (will wait for CSS transitions to complete).
         */

        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._isShown = false;
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.timerHideModal = 0;
        this.timerRmBackDrop = 0;
        this.isNested = false;
        this.clickStartedInContent = false;
        this._backdrop = clf.createLoader(_element, _viewContainerRef, _renderer);
      }
      /**
       * allows to set modal configuration via element property
       * @param {?} conf
       * @return {?}
       */


      _createClass(ModalDirective, [{
        key: "onClickStarted",

        /**
         * @param {?} event
         * @return {?}
         */
        value: function onClickStarted(event) {
          this.clickStartedInContent = event.target !== this._element.nativeElement;
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onClickStop",
        value: function onClickStop(event) {
          /** @type {?} */
          var clickedInBackdrop = event.target === this._element.nativeElement && !this.clickStartedInContent;

          if (this.config.ignoreBackdropClick || this.config.backdrop === 'static' || !clickedInBackdrop) {
            this.clickStartedInContent = false;
            return;
          }

          this.dismissReason = DISMISS_REASONS.BACKRDOP;
          this.hide(event);
        } // todo: consider preventing default and stopping propagation

        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onEsc",
        value: function onEsc(event) {
          if (!this._isShown) {
            return;
          } // tslint:disable-next-line:deprecation


          if (event.keyCode === 27 || event.key === 'Escape') {
            event.preventDefault();
          }

          if (this.config.keyboard) {
            this.dismissReason = DISMISS_REASONS.ESC;
            this.hide();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.config = void 0;

          if (this._isShown) {
            this._isShown = false;
            this.hideModal();

            this._backdrop.dispose();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this._config = this._config || this.getConfig();
          setTimeout(
          /**
          * @return {?}
          */
          function () {
            if (_this6._config.show) {
              _this6.show();
            }
          }, 0);
        }
        /* Public methods */

        /**
         * Allows to manually toggle modal visibility
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          return this._isShown ? this.hide() : this.show();
        }
        /**
         * Allows to manually open modal
         * @return {?}
         */

      }, {
        key: "show",
        value: function show() {
          var _this7 = this;

          this.dismissReason = null;
          this.onShow.emit(this);

          if (this._isShown) {
            return;
          }

          clearTimeout(this.timerHideModal);
          clearTimeout(this.timerRmBackDrop);
          this._isShown = true;
          this.checkScrollbar();
          this.setScrollbar();

          if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"] && ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body) {
            if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.classList.contains(CLASS_NAME.OPEN)) {
              this.isNested = true;
            } else {
              this._renderer.addClass(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, CLASS_NAME.OPEN);
            }
          }

          this.showBackdrop(
          /**
          * @return {?}
          */
          function () {
            _this7.showElement();
          });
        }
        /**
         * Allows to manually close modal
         * @param {?=} event
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide(event) {
          var _this8 = this;

          if (event) {
            event.preventDefault();
          }

          this.onHide.emit(this); // todo: add an option to prevent hiding

          if (!this._isShown) {
            return;
          }

          ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].clearTimeout(this.timerHideModal);
          ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].clearTimeout(this.timerRmBackDrop);
          this._isShown = false;

          this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.IN);

          if (!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()) {
            this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.SHOW);
          } // this._addClassIn = false;


          if (this._config.animated) {
            this.timerHideModal = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].setTimeout(
            /**
            * @return {?}
            */
            function () {
              return _this8.hideModal();
            }, TRANSITION_DURATION);
          } else {
            this.hideModal();
          }
        }
        /**
         * Private methods \@internal
         * @protected
         * @param {?=} config
         * @return {?}
         */

      }, {
        key: "getConfig",
        value: function getConfig(config) {
          return Object.assign({}, modalConfigDefaults, config);
        }
        /**
         *  Show dialog
         * \@internal
         * @protected
         * @return {?}
         */

      }, {
        key: "showElement",
        value: function showElement() {
          var _this9 = this;

          // todo: replace this with component loader usage
          if (!this._element.nativeElement.parentNode || this._element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE) {
            // don't move modals dom position
            if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"] && ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body) {
              ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.appendChild(this._element.nativeElement);
            }
          }

          this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'false');

          this._renderer.setAttribute(this._element.nativeElement, 'aria-modal', 'true');

          this._renderer.setStyle(this._element.nativeElement, 'display', 'block');

          this._renderer.setProperty(this._element.nativeElement, 'scrollTop', 0);

          if (this._config.animated) {
            ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].reflow(this._element.nativeElement);
          } // this._addClassIn = true;


          this._renderer.addClass(this._element.nativeElement, CLASS_NAME.IN);

          if (!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()) {
            this._renderer.addClass(this._element.nativeElement, CLASS_NAME.SHOW);
          }
          /** @type {?} */


          var transitionComplete =
          /**
          * @return {?}
          */
          function transitionComplete() {
            if (_this9._config.focus) {
              _this9._element.nativeElement.focus();
            }

            _this9.onShown.emit(_this9);
          };

          if (this._config.animated) {
            setTimeout(transitionComplete, TRANSITION_DURATION);
          } else {
            transitionComplete();
          }
        }
        /**
         * \@internal
         * @protected
         * @return {?}
         */

      }, {
        key: "hideModal",
        value: function hideModal() {
          var _this10 = this;

          this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'true');

          this._renderer.setStyle(this._element.nativeElement, 'display', 'none');

          this.showBackdrop(
          /**
          * @return {?}
          */
          function () {
            if (!_this10.isNested) {
              if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"] && ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body) {
                _this10._renderer.removeClass(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, CLASS_NAME.OPEN);
              }

              _this10.resetScrollbar();
            }

            _this10.resetAdjustments();

            _this10.focusOtherModal();

            _this10.onHidden.emit(_this10);
          });
        } // todo: original show was calling a callback when done, but we can use
        // promise

        /**
         * \@internal
         * @protected
         * @param {?=} callback
         * @return {?}
         */

      }, {
        key: "showBackdrop",
        value: function showBackdrop(callback) {
          var _this11 = this;

          if (this._isShown && this.config.backdrop && (!this.backdrop || !this.backdrop.instance.isShown)) {
            this.removeBackdrop();

            this._backdrop.attach(ModalBackdropComponent).to('body').show({
              isAnimated: this._config.animated
            });

            this.backdrop = this._backdrop._componentRef;

            if (!callback) {
              return;
            }

            if (!this._config.animated) {
              callback();
              return;
            }

            setTimeout(callback, BACKDROP_TRANSITION_DURATION);
          } else if (!this._isShown && this.backdrop) {
            this.backdrop.instance.isShown = false;
            /** @type {?} */

            var callbackRemove =
            /**
            * @return {?}
            */
            function callbackRemove() {
              _this11.removeBackdrop();

              if (callback) {
                callback();
              }
            };

            if (this.backdrop.instance.isAnimated) {
              this.timerRmBackDrop = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
            } else {
              callbackRemove();
            }
          } else if (callback) {
            callback();
          }
        }
        /**
         * \@internal
         * @protected
         * @return {?}
         */

      }, {
        key: "removeBackdrop",
        value: function removeBackdrop() {
          this._backdrop.hide();
        }
        /**
         * Events tricks
         * @protected
         * @return {?}
         */
        // no need for it
        // protected setEscapeEvent():void {
        //   if (this._isShown && this._config.keyboard) {
        //     $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
        //       if (event.which === 27) {
        //         this.hide()
        //       }
        //     })
        //
        //   } else if (!this._isShown) {
        //     $(this._element).off(Event.KEYDOWN_DISMISS)
        //   }
        // }
        // protected setResizeEvent():void {
        // console.log(this.renderer.listenGlobal('', Event.RESIZE));
        // if (this._isShown) {
        //   $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this))
        // } else {
        //   $(window).off(Event.RESIZE)
        // }
        // }

      }, {
        key: "focusOtherModal",
        value: function focusOtherModal() {
          if (this._element.nativeElement.parentElement == null) {
            return;
          }
          /** @type {?} */


          var otherOpenedModals = this._element.nativeElement.parentElement.querySelectorAll('.in[bsModal]');

          if (!otherOpenedModals.length) {
            return;
          }

          otherOpenedModals[otherOpenedModals.length - 1].focus();
        }
        /**
         * \@internal
         * @protected
         * @return {?}
         */

      }, {
        key: "resetAdjustments",
        value: function resetAdjustments() {
          this._renderer.setStyle(this._element.nativeElement, 'paddingLeft', '');

          this._renderer.setStyle(this._element.nativeElement, 'paddingRight', '');
        }
        /** Scroll bar tricks */

        /**
         * \@internal
         * @protected
         * @return {?}
         */

      }, {
        key: "checkScrollbar",
        value: function checkScrollbar() {
          this.isBodyOverflowing = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.clientWidth < ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].innerWidth;
          this.scrollbarWidth = this.getScrollbarWidth();
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "setScrollbar",
        value: function setScrollbar() {
          if (!ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"]) {
            return;
          }

          this.originalBodyPadding = parseInt(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].getComputedStyle(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body).getPropertyValue('padding-right') || 0, 10);

          if (this.isBodyOverflowing) {
            ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.style.paddingRight = "".concat(this.originalBodyPadding + this.scrollbarWidth, "px");
          }
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "resetScrollbar",
        value: function resetScrollbar() {
          ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.style.paddingRight = "".concat(this.originalBodyPadding, "px");
        } // thx d.walsh

        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "getScrollbarWidth",
        value: function getScrollbarWidth() {
          /** @type {?} */
          var scrollDiv = this._renderer.createElement('div');

          this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);

          this._renderer.appendChild(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, scrollDiv);
          /** @type {?} */


          var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

          this._renderer.removeChild(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, scrollDiv);

          return scrollbarWidth;
        }
      }, {
        key: "config",
        set: function set(conf) {
          this._config = this.getConfig(conf);
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._config;
        }
        /**
         * @return {?}
         */

      }, {
        key: "isShown",
        get: function get() {
          return this._isShown;
        }
      }]);

      return ModalDirective;
    }();

    ModalDirective.ɵfac = function ModalDirective_Factory(t) {
      return new (t || ModalDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"]));
    };

    ModalDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ModalDirective,
      selectors: [["", "bsModal", ""]],
      hostBindings: function ModalDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ModalDirective_mousedown_HostBindingHandler($event) {
            return ctx.onClickStarted($event);
          })("mouseup", function ModalDirective_mouseup_HostBindingHandler($event) {
            return ctx.onClickStop($event);
          })("keydown.esc", function ModalDirective_keydown_esc_HostBindingHandler($event) {
            return ctx.onEsc($event);
          });
        }
      },
      inputs: {
        config: "config"
      },
      outputs: {
        onShow: "onShow",
        onShown: "onShown",
        onHide: "onHide",
        onHidden: "onHidden"
      },
      exportAs: ["bs-modal"]
    });
    /** @nocollapse */

    ModalDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"]
      }];
    };

    ModalDirective.propDecorators = {
      config: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      onShow: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onShown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onHide: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onHidden: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onClickStarted: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['mousedown', ['$event']]
      }],
      onClickStop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['mouseup', ['$event']]
      }],
      onEsc: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['keydown.esc', ['$event']]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[bsModal]',
          exportAs: 'bs-modal'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"]
        }];
      }, {
        onShow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onShown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onHide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onHidden: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onClickStarted: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mousedown', ['$event']]
        }],
        onClickStop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseup', ['$event']]
        }],
        onEsc: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown.esc', ['$event']]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var BsModalService = /*#__PURE__*/function () {
      /**
       * @param {?} rendererFactory
       * @param {?} clf
       */
      function BsModalService(rendererFactory, clf) {
        _classCallCheck(this, BsModalService);

        this.clf = clf; // constructor props

        this.config = modalConfigDefaults; // tslint:disable-next-line:no-any

        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // tslint:disable-next-line:no-any

        this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // tslint:disable-next-line:no-any

        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // tslint:disable-next-line:no-any

        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.modalsCount = 0;
        this.lastDismissReason = '';
        this.loaders = [];
        this._backdropLoader = this.clf.createLoader(null, null, null);
        this._renderer = rendererFactory.createRenderer(null, null);
      }
      /**
       * Shows a modal
       * @param {?} content
       * @param {?=} config
       * @return {?}
       */
      // tslint:disable-next-line:no-any


      _createClass(BsModalService, [{
        key: "show",
        value: function show(content, config) {
          this.modalsCount++;

          this._createLoaders();

          this.config = Object.assign({}, modalConfigDefaults, config);

          this._showBackdrop();

          this.lastDismissReason = null;
          return this._showModal(content);
        }
        /**
         * @param {?} level
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide(level) {
          var _this12 = this;

          if (this.modalsCount === 1) {
            this._hideBackdrop();

            this.resetScrollbar();
          }

          this.modalsCount = this.modalsCount >= 1 ? this.modalsCount - 1 : 0;
          setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this12._hideModal(level);

            _this12.removeLoaders(level);
          }, this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0);
        }
        /**
         * @return {?}
         */

      }, {
        key: "_showBackdrop",
        value: function _showBackdrop() {
          /** @type {?} */
          var isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
          /** @type {?} */

          var isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;

          if (this.modalsCount === 1) {
            this.removeBackdrop();

            if (isBackdropEnabled && isBackdropInDOM) {
              this._backdropLoader.attach(ModalBackdropComponent).to('body').show({
                isAnimated: this.config.animated
              });

              this.backdropRef = this._backdropLoader._componentRef;
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "_hideBackdrop",
        value: function _hideBackdrop() {
          var _this13 = this;

          if (!this.backdropRef) {
            return;
          }

          this.backdropRef.instance.isShown = false;
          /** @type {?} */

          var duration = this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0;
          setTimeout(
          /**
          * @return {?}
          */
          function () {
            return _this13.removeBackdrop();
          }, duration);
        } // tslint:disable-next-line:no-any

        /**
         * @param {?} content
         * @return {?}
         */

      }, {
        key: "_showModal",
        value: function _showModal(content) {
          var _this14 = this;

          /** @type {?} */
          var modalLoader = this.loaders[this.loaders.length - 1];

          if (this.config && this.config.providers) {
            var _iterator = _createForOfIteratorHelper(this.config.providers),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var provider = _step.value;
                modalLoader.provide(provider);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
          /** @type {?} */


          var bsModalRef = new BsModalRef();
          /** @type {?} */

          var modalContainerRef = modalLoader.provide({
            provide: ModalOptions,
            useValue: this.config
          }).provide({
            provide: BsModalRef,
            useValue: bsModalRef
          }).attach(ModalContainerComponent).to('body').show({
            content: content,
            isAnimated: this.config.animated,
            initialState: this.config.initialState,
            bsModalService: this
          });
          modalContainerRef.instance.level = this.getModalsCount();

          bsModalRef.hide =
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var duration = _this14.config.animated ? TRANSITION_DURATIONS.MODAL : 0;
            setTimeout(
            /**
            * @return {?}
            */
            function () {
              return modalContainerRef.instance.hide();
            }, duration);
          };

          bsModalRef.content = modalLoader.getInnerComponent() || null;

          bsModalRef.setClass =
          /**
          * @param {?} newClass
          * @return {?}
          */
          function (newClass) {
            modalContainerRef.instance.config["class"] = newClass;
          };

          return bsModalRef;
        }
        /**
         * @param {?} level
         * @return {?}
         */

      }, {
        key: "_hideModal",
        value: function _hideModal(level) {
          /** @type {?} */
          var modalLoader = this.loaders[level - 1];

          if (modalLoader) {
            modalLoader.hide();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "getModalsCount",
        value: function getModalsCount() {
          return this.modalsCount;
        }
        /**
         * @param {?} reason
         * @return {?}
         */

      }, {
        key: "setDismissReason",
        value: function setDismissReason(reason) {
          this.lastDismissReason = reason;
        }
        /**
         * @return {?}
         */

      }, {
        key: "removeBackdrop",
        value: function removeBackdrop() {
          this._backdropLoader.hide();

          this.backdropRef = null;
        }
        /** Checks if the body is overflowing and sets scrollbar width */

        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "checkScrollbar",
        value: function checkScrollbar() {
          this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
          this.scrollbarWidth = this.getScrollbarWidth();
        }
        /**
         * @return {?}
         */

      }, {
        key: "setScrollbar",
        value: function setScrollbar() {
          if (!document) {
            return;
          }

          this.originalBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right') || '0', 10);

          if (this.isBodyOverflowing) {
            document.body.style.paddingRight = "".concat(this.originalBodyPadding + this.scrollbarWidth, "px");
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "resetScrollbar",
        value: function resetScrollbar() {
          document.body.style.paddingRight = "".concat(this.originalBodyPadding, "px");
        } // thx d.walsh

        /**
         * @private
         * @return {?}
         */

      }, {
        key: "getScrollbarWidth",
        value: function getScrollbarWidth() {
          /** @type {?} */
          var scrollDiv = this._renderer.createElement('div');

          this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);

          this._renderer.appendChild(document.body, scrollDiv);
          /** @type {?} */


          var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

          this._renderer.removeChild(document.body, scrollDiv);

          return scrollbarWidth;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_createLoaders",
        value: function _createLoaders() {
          /** @type {?} */
          var loader = this.clf.createLoader(null, null, null);
          this.copyEvent(loader.onBeforeShow, this.onShow);
          this.copyEvent(loader.onShown, this.onShown);
          this.copyEvent(loader.onBeforeHide, this.onHide);
          this.copyEvent(loader.onHidden, this.onHidden);
          this.loaders.push(loader);
        }
        /**
         * @private
         * @param {?} level
         * @return {?}
         */

      }, {
        key: "removeLoaders",
        value: function removeLoaders(level) {
          this.loaders.splice(level - 1, 1);
          this.loaders.forEach(
          /**
          * @param {?} loader
          * @param {?} i
          * @return {?}
          */
          function (loader, i) {
            loader.instance.level = i + 1;
          });
        } // tslint:disable-next-line:no-any

        /**
         * @private
         * @param {?} from
         * @param {?} to
         * @return {?}
         */

      }, {
        key: "copyEvent",
        value: function copyEvent(from, to) {
          var _this15 = this;

          from.subscribe(
          /**
          * @return {?}
          */
          function () {
            to.emit(_this15.lastDismissReason);
          });
        }
      }]);

      return BsModalService;
    }();

    BsModalService.ɵfac = function BsModalService_Factory(t) {
      return new (t || BsModalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"]));
    };

    BsModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BsModalService,
      factory: BsModalService.ɵfac
    });
    /** @nocollapse */

    BsModalService.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]
      }, {
        type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]
        }, {
          type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ModalModule = /*#__PURE__*/function () {
      function ModalModule() {
        _classCallCheck(this, ModalModule);
      }

      _createClass(ModalModule, null, [{
        key: "forRoot",

        /**
         * @return {?}
         */
        value: function forRoot() {
          return {
            ngModule: ModalModule,
            providers: [BsModalService, ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"]]
          };
        }
        /**
         * @return {?}
         */

      }, {
        key: "forChild",
        value: function forChild() {
          return {
            ngModule: ModalModule,
            providers: [BsModalService, ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"]]
          };
        }
      }]);

      return ModalModule;
    }();

    ModalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ModalModule
    });
    ModalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ModalModule_Factory(t) {
        return new (t || ModalModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModalModule, {
        declarations: [ModalBackdropComponent, ModalDirective, ModalContainerComponent],
        exports: [ModalBackdropComponent, ModalDirective]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [ModalBackdropComponent, ModalDirective, ModalContainerComponent],
          exports: [ModalBackdropComponent, ModalDirective],
          entryComponents: [ModalBackdropComponent, ModalContainerComponent]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ngx-bootstrap-modal.js.map

    /***/

  },

  /***/
  "./node_modules/ngx-bootstrap/__ivy_ngcc__/positioning/fesm2015/ngx-bootstrap-positioning.js":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/positioning/fesm2015/ngx-bootstrap-positioning.js ***!
    \***************************************************************************************************/

  /*! exports provided: Positioning, PositioningService, positionElements */

  /***/
  function node_modulesNgxBootstrap__ivy_ngcc__PositioningFesm2015NgxBootstrapPositioningJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Positioning", function () {
      return Positioning;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PositioningService", function () {
      return PositioningService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "positionElements", function () {
      return positionElements;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Get CSS computed property of the given element
     * @param {?} element
     * @param {?=} property
     * @return {?}
     */


    function getStyleComputedProperty(element, property) {
      if (element.nodeType !== 1) {
        return [];
      } // NOTE: 1 DOM access here

      /** @type {?} */


      var window = element.ownerDocument.defaultView;
      /** @type {?} */

      var css = window.getComputedStyle(element, null);
      return property ? css[
      /** @type {?} */
      property] : css;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Returns the parentNode or the host of the element
     * @param {?} element
     * @return {?}
     */


    function getParentNode(element) {
      if (element.nodeName === 'HTML') {
        return element;
      }

      return element.parentNode || element.host;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} element
     * @return {?}
     */


    function getScrollParent(element) {
      // Return body, `getScroll` will take care to get the correct `scrollTop` from it
      if (!element) {
        return document.body;
      }

      switch (element.nodeName) {
        case 'HTML':
        case 'BODY':
          return element.ownerDocument.body;

        case '#document':
          return element.body;

        default:
      } // Firefox want us to check `-x` and `-y` variations as well


      var _getStyleComputedProp = getStyleComputedProperty(element),
          overflow = _getStyleComputedProp.overflow,
          overflowX = _getStyleComputedProp.overflowX,
          overflowY = _getStyleComputedProp.overflowY;

      if (/(auto|scroll|overlay)/.test(String(overflow) + String(overflowY) + String(overflowX))) {
        return element;
      }

      return getScrollParent(getParentNode(element));
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var isIE11 = isBrowser && !!(
    /** @type {?} */
    window.MSInputMethodContext &&
    /** @type {?} */
    document.documentMode);
    /** @type {?} */

    var isIE10 = isBrowser && !!(
    /** @type {?} */
    window.MSInputMethodContext && /MSIE 10/.test(
    /** @type {?} */
    navigator.userAgent));
    /**
     * @param {?=} version
     * @return {?}
     */

    function isIE(version) {
      if (version === 11) {
        return isIE11;
      }

      if (version === 10) {
        return isIE10;
      }

      return isIE11 || isIE10;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} element
     * @return {?}
     */


    function getOffsetParent(element) {
      if (!element) {
        return document.documentElement;
      }
      /** @type {?} */


      var noOffsetParent = isIE(10) ? document.body : null; // NOTE: 1 DOM access here

      /** @type {?} */

      var offsetParent = element.offsetParent || null; // Skip hidden elements which don't have an offsetParent

      /** @type {?} */

      var sibling;

      while (offsetParent === noOffsetParent && element.nextElementSibling && sibling !== element.nextElementSibling) {
        sibling = element.nextElementSibling;
        offsetParent = sibling.offsetParent;
      }
      /** @type {?} */


      var nodeName = offsetParent && offsetParent.nodeName;

      if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
        return sibling ? sibling.ownerDocument.documentElement : document.documentElement;
      } // .offsetParent will return the closest TH, TD or TABLE in case


      if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
        return getOffsetParent(offsetParent);
      }

      return offsetParent;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} element
     * @return {?}
     */


    function isOffsetContainer(element) {
      var nodeName = element.nodeName;

      if (nodeName === 'BODY') {
        return false;
      }

      return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Finds the root node (document, shadowDOM root) of the given element
     * @param {?} node
     * @return {?}
     */


    function getRoot(node) {
      if (node.parentNode !== null) {
        return getRoot(node.parentNode);
      }

      return node;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} element1
     * @param {?} element2
     * @return {?}
     */


    function findCommonOffsetParent(element1, element2) {
      // This check is needed to avoid errors in case one of the elements isn't defined for any reason
      if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
        return document.documentElement;
      } // Here we make sure to give as "start" the element that comes first in the DOM

      /* tslint:disable-next-line: no-bitwise */

      /** @type {?} */


      var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
      /** @type {?} */

      var start = order ? element1 : element2;
      /** @type {?} */

      var end = order ? element2 : element1; // Get common ancestor container

      /** @type {?} */

      var range = document.createRange();
      range.setStart(start, 0);
      range.setEnd(end, 0);
      var commonAncestorContainer = range.commonAncestorContainer; // Both nodes are inside #document

      if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
        if (isOffsetContainer(commonAncestorContainer)) {
          return commonAncestorContainer;
        }

        return getOffsetParent(commonAncestorContainer);
      } // one of the nodes is inside shadowDOM, find which one

      /** @type {?} */


      var element1root = getRoot(element1);

      if (element1root.host) {
        return findCommonOffsetParent(element1root.host, element2);
      } else {
        return findCommonOffsetParent(element1, getRoot(element2).host);
      }
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Helper to detect borders of a given element
     */

    /**
     * @param {?} styles
     * @param {?} axis
     * @return {?}
     */


    function getBordersSize(styles, axis) {
      /** @type {?} */
      var sideA = axis === 'x' ? 'Left' : 'Top';
      /** @type {?} */

      var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
      return parseFloat(styles[
      /** @type {?} */
      "border".concat(sideA, "Width")]) + parseFloat(styles[
      /** @type {?} */
      "border".concat(sideB, "Width")]);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} axis
     * @param {?} body
     * @param {?} html
     * @param {?} computedStyle
     * @return {?}
     */


    function getSize(axis, body, html, computedStyle) {
      return Math.max(
      /** @type {?} */
      body["offset".concat(axis)],
      /** @type {?} */
      body["scroll".concat(axis)],
      /** @type {?} */
      html["client".concat(axis)],
      /** @type {?} */
      html["offset".concat(axis)],
      /** @type {?} */
      html["scroll".concat(axis)], isIE(10) ? parseInt(
      /** @type {?} */
      html["offset".concat(axis)], 10) + parseInt(computedStyle[
      /** @type {?} */
      "margin".concat(axis === 'Height' ? 'Top' : 'Left')], 10) + parseInt(computedStyle[
      /** @type {?} */
      "margin".concat(axis === 'Height' ? 'Bottom' : 'Right')], 10) : 0);
    }
    /**
     * @param {?} document
     * @return {?}
     */


    function getWindowSizes(document) {
      /** @type {?} */
      var body = document.body;
      /** @type {?} */

      var html = document.documentElement;
      /** @type {?} */

      var computedStyle = isIE(10) && getComputedStyle(html);
      return {
        height: getSize('Height', body, html, computedStyle),
        width: getSize('Width', body, html, computedStyle)
      };
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Gets the scroll value of the given element in the given side (top and left)
     * @param {?} element
     * @param {?=} side
     * @return {?}
     */


    function getScroll(element) {
      var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

      /** @type {?} */
      var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
      /** @type {?} */

      var nodeName = element.nodeName;

      if (nodeName === 'BODY' || nodeName === 'HTML') {
        /** @type {?} */
        var html = element.ownerDocument.documentElement;
        /** @type {?} */

        var scrollingElement = element.ownerDocument.scrollingElement || html;
        return scrollingElement[upperSide];
      }

      return element[upperSide];
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} offsets
     * @return {?}
     */


    function getClientRect(offsets) {
      return Object.assign({}, offsets, {
        right: offsets.left + offsets.width,
        bottom: offsets.top + offsets.height
      });
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} element
     * @return {?}
     */


    function getBoundingClientRect(element) {
      /** @type {?} */
      var rect = {}; // IE10 10 FIX: Please, don't ask, the element isn't
      // considered in DOM in some circumstances...
      // This isn't reproducible in IE10 compatibility mode of IE11

      try {
        if (isIE(10)) {
          rect = element.getBoundingClientRect();
          /** @type {?} */

          var scrollTop = getScroll(element, 'top');
          /** @type {?} */

          var scrollLeft = getScroll(element, 'left');
          rect.top += scrollTop;
          rect.left += scrollLeft;
          rect.bottom += scrollTop;
          rect.right += scrollLeft;
        } else {
          rect = element.getBoundingClientRect();
        }
      } catch (e) {
        return undefined;
      }
      /** @type {?} */


      var result = {
        left: rect.left,
        top: rect.top,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
      }; // subtract scrollbar size from sizes

      /** @type {?} */

      var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
      /** @type {?} */

      var width = sizes.width || element.clientWidth || result.right - result.left;
      /** @type {?} */

      var height = sizes.height || element.clientHeight || result.bottom - result.top;
      /** @type {?} */

      var horizScrollbar = element.offsetWidth - width;
      /** @type {?} */

      var vertScrollbar = element.offsetHeight - height; // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
      // we make this check conditional for performance reasons

      if (horizScrollbar || vertScrollbar) {
        /** @type {?} */
        var styles = getStyleComputedProperty(element);
        horizScrollbar -= getBordersSize(styles, 'x');
        vertScrollbar -= getBordersSize(styles, 'y');
        result.width -= horizScrollbar;
        result.height -= vertScrollbar;
      }

      return getClientRect(result);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} rect
     * @param {?} element
     * @param {?=} subtract
     * @return {?}
     */


    function includeScroll(rect, element) {
      var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      /** @type {?} */
      var scrollTop = getScroll(element, 'top');
      /** @type {?} */

      var scrollLeft = getScroll(element, 'left');
      /** @type {?} */

      var modifier = subtract ? -1 : 1;
      rect.top += scrollTop * modifier;
      rect.bottom += scrollTop * modifier;
      rect.left += scrollLeft * modifier;
      rect.right += scrollLeft * modifier;
      return rect;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} children
     * @param {?} parent
     * @param {?=} fixedPosition
     * @return {?}
     */


    function getOffsetRectRelativeToArbitraryNode(children, parent) {
      var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      /** @type {?} */
      var isIE10 = isIE(10);
      /** @type {?} */

      var isHTML = parent.nodeName === 'HTML';
      /** @type {?} */

      var childrenRect = getBoundingClientRect(children);
      /** @type {?} */

      var parentRect = getBoundingClientRect(parent);
      /** @type {?} */

      var scrollParent = getScrollParent(children);
      /** @type {?} */

      var styles = getStyleComputedProperty(parent);
      /** @type {?} */

      var borderTopWidth = parseFloat(styles.borderTopWidth);
      /** @type {?} */

      var borderLeftWidth = parseFloat(styles.borderLeftWidth); // In cases where the parent is fixed, we must ignore negative scroll in offset calc

      if (fixedPosition && isHTML) {
        parentRect.top = Math.max(parentRect.top, 0);
        parentRect.left = Math.max(parentRect.left, 0);
      }
      /** @type {?} */


      var offsets = getClientRect({
        top: childrenRect.top - parentRect.top - borderTopWidth,
        left: childrenRect.left - parentRect.left - borderLeftWidth,
        width: childrenRect.width,
        height: childrenRect.height
      });
      offsets.marginTop = 0;
      offsets.marginLeft = 0; // Subtract margins of documentElement in case it's being used as parent
      // we do this only on HTML because it's the only element that behaves
      // differently when margins are applied to it. The margins are included in
      // the box of the documentElement, in the other cases not.

      if (!isIE10 && isHTML) {
        /** @type {?} */
        var marginTop = parseFloat(styles.marginTop);
        /** @type {?} */

        var marginLeft = parseFloat(styles.marginLeft);
        offsets.top -= borderTopWidth - marginTop;
        offsets.bottom -= borderTopWidth - marginTop;
        offsets.left -= borderLeftWidth - marginLeft;
        offsets.right -= borderLeftWidth - marginLeft; // Attach marginTop and marginLeft because in some circumstances we may need them

        offsets.marginTop = marginTop;
        offsets.marginLeft = marginLeft;
      }

      if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
        offsets = includeScroll(offsets, parent);
      }

      return offsets;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} element
     * @param {?=} excludeScroll
     * @return {?}
     */


    function getViewportOffsetRectRelativeToArtbitraryNode(element) {
      var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      /** @type {?} */
      var html = element.ownerDocument.documentElement;
      /** @type {?} */

      var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
      /** @type {?} */

      var width = Math.max(html.clientWidth, window.innerWidth || 0);
      /** @type {?} */

      var height = Math.max(html.clientHeight, window.innerHeight || 0);
      /** @type {?} */

      var scrollTop = !excludeScroll ? getScroll(html) : 0;
      /** @type {?} */

      var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
      /** @type {?} */

      var offset = {
        top: scrollTop - Number(relativeOffset.top) + Number(relativeOffset.marginTop),
        left: scrollLeft - Number(relativeOffset.left) + Number(relativeOffset.marginLeft),
        width: width,
        height: height
      };
      return getClientRect(offset);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} element
     * @return {?}
     */


    function isFixed(element) {
      /** @type {?} */
      var nodeName = element.nodeName;

      if (nodeName === 'BODY' || nodeName === 'HTML') {
        return false;
      }

      if (getStyleComputedProperty(element, 'position') === 'fixed') {
        return true;
      }

      return isFixed(getParentNode(element));
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} element
     * @return {?}
     */


    function getFixedPositionOffsetParent(element) {
      // This check is needed to avoid errors in case one of the elements isn't defined for any reason
      if (!element || !element.parentElement || isIE()) {
        return document.documentElement;
      }
      /** @type {?} */


      var el = element.parentElement;

      while (el && getStyleComputedProperty(el, 'transform') === 'none') {
        el = el.parentElement;
      }

      return el || document.documentElement;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} target
     * @param {?} host
     * @param {?=} padding
     * @param {?=} boundariesElement
     * @param {?=} fixedPosition
     * @return {?}
     */


    function getBoundaries(target, host) {
      var padding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var boundariesElement = arguments.length > 3 ? arguments[3] : undefined;
      var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      // NOTE: 1 DOM access here
      // NOTE: 1 DOM access here

      /** @type {?} */
      var boundaries = {
        top: 0,
        left: 0
      };
      /** @type {?} */

      var offsetParent = fixedPosition ? getFixedPositionOffsetParent(target) : findCommonOffsetParent(target, host); // Handle viewport case

      if (boundariesElement === 'viewport') {
        boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
      } else {
        // Handle other cases based on DOM element used as boundaries

        /** @type {?} */
        var boundariesNode;

        if (boundariesElement === 'scrollParent') {
          boundariesNode = getScrollParent(getParentNode(host));

          if (boundariesNode.nodeName === 'BODY') {
            boundariesNode = target.ownerDocument.documentElement;
          }
        } else if (boundariesElement === 'window') {
          boundariesNode = target.ownerDocument.documentElement;
        } else {
          boundariesNode = boundariesElement;
        }
        /** @type {?} */


        var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition); // In case of HTML, we need a different computation

        if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
          var _getWindowSizes = getWindowSizes(target.ownerDocument),
              height = _getWindowSizes.height,
              width = _getWindowSizes.width;

          boundaries.top += offsets.top - offsets.marginTop;
          boundaries.bottom = Number(height) + Number(offsets.top);
          boundaries.left += offsets.left - offsets.marginLeft;
          boundaries.right = Number(width) + Number(offsets.left);
        } else {
          // for all the other DOM elements, this one is good
          boundaries = offsets;
        }
      } // Add paddings


      boundaries.left += padding;
      boundaries.top += padding;
      boundaries.right -= padding;
      boundaries.bottom -= padding;
      return boundaries;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} __0
     * @return {?}
     */


    function getArea(_ref) {
      var width = _ref.width,
          height = _ref.height;
      return width * height;
    }
    /**
     * @param {?} placement
     * @param {?} refRect
     * @param {?} target
     * @param {?} host
     * @param {?=} allowedPositions
     * @param {?=} boundariesElement
     * @param {?=} padding
     * @return {?}
     */


    function computeAutoPlacement(placement, refRect, target, host) {
      var allowedPositions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : ['top', 'bottom', 'right', 'left'];
      var boundariesElement = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'viewport';
      var padding = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;

      if (placement.indexOf('auto') === -1) {
        return placement;
      }
      /** @type {?} */


      var boundaries = getBoundaries(target, host, padding, boundariesElement);
      /** @type {?} */

      var rects = {
        top: {
          width: boundaries.width,
          height: refRect.top - boundaries.top
        },
        right: {
          width: boundaries.right - refRect.right,
          height: boundaries.height
        },
        bottom: {
          width: boundaries.width,
          height: boundaries.bottom - refRect.bottom
        },
        left: {
          width: refRect.left - boundaries.left,
          height: boundaries.height
        }
      };
      /** @type {?} */

      var sortedAreas = Object.keys(rects).map(
      /**
      * @param {?} key
      * @return {?}
      */
      function (key) {
        return Object.assign({
          key: key
        }, rects[key], {
          area: getArea(rects[key])
        });
      }).sort(
      /**
      * @param {?} a
      * @param {?} b
      * @return {?}
      */
      function (a, b) {
        return b.area - a.area;
      });
      /** @type {?} */

      var filteredAreas = sortedAreas.filter(
      /**
      * @param {?} __0
      * @return {?}
      */
      function (_ref2) {
        var width = _ref2.width,
            height = _ref2.height;
        return width >= target.clientWidth && height >= target.clientHeight;
      });
      filteredAreas = filteredAreas.filter(
      /**
      * @param {?} position
      * @return {?}
      */
      function (position) {
        return allowedPositions.some(
        /**
        * @param {?} allowedPosition
        * @return {?}
        */
        function (allowedPosition) {
          return allowedPosition === position.key;
        });
      });
      /** @type {?} */

      var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
      /** @type {?} */

      var variation = placement.split(' ')[1]; // for tooltip on auto position

      target.className = target.className.replace(/bs-tooltip-auto/g, "bs-tooltip-".concat(computedPlacement));
      return computedPlacement + (variation ? "-".concat(variation) : '');
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} data
     * @return {?}
     */


    function getOffsets(data) {
      return {
        width: data.offsets.target.width,
        height: data.offsets.target.height,
        left: Math.floor(data.offsets.target.left),
        top: Math.round(data.offsets.target.top),
        bottom: Math.round(data.offsets.target.bottom),
        right: Math.floor(data.offsets.target.right)
      };
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Get the opposite placement of the given one
     * @param {?} placement
     * @return {?}
     */


    function getOppositePlacement(placement) {
      /** @type {?} */
      var hash = {
        left: 'right',
        right: 'left',
        bottom: 'top',
        top: 'bottom'
      };
      return placement.replace(/left|right|bottom|top/g,
      /**
      * @param {?} matched
      * @return {?}
      */
      function (matched) {
        return (
          /** @type {?} */
          hash[matched]
        );
      });
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Get the opposite placement variation of the given one
     * @param {?} variation
     * @return {?}
     */


    function getOppositeVariation(variation) {
      if (variation === 'right') {
        return 'left';
      } else if (variation === 'left') {
        return 'right';
      }

      return variation;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Get the outer sizes of the given element (offset size + margins)
     * @param {?} element
     * @return {?}
     */


    function getOuterSizes(element) {
      /** @type {?} */
      var window = element.ownerDocument.defaultView;
      /** @type {?} */

      var styles = window.getComputedStyle(element);
      /** @type {?} */

      var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
      /** @type {?} */

      var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
      return {
        width: Number(element.offsetWidth) + y,
        height: Number(element.offsetHeight) + x
      };
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} target
     * @param {?} host
     * @param {?=} fixedPosition
     * @return {?}
     */


    function getReferenceOffsets(target, host) {
      var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      /** @type {?} */
      var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(target) : findCommonOffsetParent(target, host);
      return getOffsetRectRelativeToArbitraryNode(host, commonOffsetParent, fixedPosition);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} target
     * @param {?} hostOffsets
     * @param {?} position
     * @return {?}
     */


    function getTargetOffsets(target, hostOffsets, position) {
      /** @type {?} */
      var placement = position.split(' ')[0]; // Get target node sizes

      /** @type {?} */

      var targetRect = getOuterSizes(target); // Add position, width and height to our offsets object

      /** @type {?} */

      var targetOffsets = {
        width: targetRect.width,
        height: targetRect.height
      }; // depending by the target placement we have to compute its offsets slightly differently

      /** @type {?} */

      var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
      /** @type {?} */

      var mainSide = isHoriz ? 'top' : 'left';
      /** @type {?} */

      var secondarySide = isHoriz ? 'left' : 'top';
      /** @type {?} */

      var measurement = isHoriz ? 'height' : 'width';
      /** @type {?} */

      var secondaryMeasurement = !isHoriz ? 'height' : 'width';

      /** @type {?} */
      targetOffsets[mainSide] = hostOffsets[mainSide] + hostOffsets[measurement] / 2 - targetRect[measurement] / 2;

      /** @type {?} */
      targetOffsets[secondarySide] = placement === secondarySide ? hostOffsets[secondarySide] - targetRect[secondaryMeasurement] :
      /** @type {?} */
      hostOffsets[getOppositePlacement(secondarySide)];
      return targetOffsets;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Helper used to know if the given modifier is enabled.
     * @param {?} options
     * @param {?} modifierName
     * @return {?}
     */


    function isModifierEnabled(options, modifierName) {
      return options && options.modifiers && options.modifiers[modifierName] && options.modifiers[modifierName].enabled;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Tells if a given input is a number
     * @param {?} n
     * @return {?}
     */


    function isNumeric(n) {
      return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} data
     * @param {?=} renderer
     * @return {?}
     */


    function updateContainerClass(data, renderer) {
      /** @type {?} */
      var target = data.instance.target;
      /** @type {?} */

      var containerClass = target.className;

      if (data.placementAuto) {
        containerClass = containerClass.replace(/bs-popover-auto/g, "bs-popover-".concat(data.placement));
        containerClass = containerClass.replace(/bs-tooltip-auto/g, "bs-tooltip-".concat(data.placement));
        containerClass = containerClass.replace(/\sauto/g, " ".concat(data.placement));

        if (containerClass.indexOf('popover') !== -1 && containerClass.indexOf('popover-auto') === -1) {
          containerClass += ' popover-auto';
        }

        if (containerClass.indexOf('tooltip') !== -1 && containerClass.indexOf('tooltip-auto') === -1) {
          containerClass += ' tooltip-auto';
        }
      }

      containerClass = containerClass.replace(/left|right|top|bottom/g, "".concat(data.placement.split(' ')[0]));

      if (renderer) {
        renderer.setAttribute(target, 'class', containerClass);
        return;
      }

      target.className = containerClass;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} element
     * @param {?} styles
     * @param {?=} renderer
     * @return {?}
     */


    function setStyles(element, styles, renderer) {
      Object.keys(styles).forEach(
      /**
      * @param {?} prop
      * @return {?}
      */
      function (prop) {
        /** @type {?} */
        var unit = ''; // add unit if the value is numeric and is one of the following

        if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
          unit = 'px';
        }

        if (renderer) {
          renderer.setStyle(element, prop, "".concat(String(styles[prop])).concat(unit));
          return;
        }

        element.style[prop] = String(styles[prop]) + unit;
      });
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} data
     * @return {?}
     */


    function arrow(data) {
      var _data$offsets$arrow;

      /** @type {?} */
      var targetOffsets = data.offsets.target; // if arrowElement is a string, suppose it's a CSS selector

      /** @type {?} */

      var arrowElement = data.instance.target.querySelector('.arrow'); // if arrowElement is not found, don't run the modifier

      if (!arrowElement) {
        return data;
      }
      /** @type {?} */


      var isVertical = ['left', 'right'].indexOf(data.placement.split(' ')[0]) !== -1;
      /** @type {?} */

      var len = isVertical ? 'height' : 'width';
      /** @type {?} */

      var sideCapitalized = isVertical ? 'Top' : 'Left';
      /** @type {?} */

      var side = sideCapitalized.toLowerCase();
      /** @type {?} */

      var altSide = isVertical ? 'left' : 'top';
      /** @type {?} */

      var opSide = isVertical ? 'bottom' : 'right';
      /** @type {?} */

      var arrowElementSize = getOuterSizes(arrowElement)[len];
      /** @type {?} */

      var placementVariation = data.placement.split(' ')[1]; // top/left side

      if (data.offsets.host[opSide] - arrowElementSize <
      /** @type {?} */
      targetOffsets[side]) {
        /** @type {?} */
        targetOffsets[side] -=
        /** @type {?} */
        targetOffsets[side] - (data.offsets.host[opSide] - arrowElementSize);
      } // bottom/right side


      if (Number(
      /** @type {?} */
      data.offsets.host[side]) + Number(arrowElementSize) >
      /** @type {?} */
      targetOffsets[opSide]) {
        /** @type {?} */
        targetOffsets[side] += Number(
        /** @type {?} */
        data.offsets.host[side]) + Number(arrowElementSize) - Number(
        /** @type {?} */
        targetOffsets[opSide]);
      }

      targetOffsets = getClientRect(targetOffsets); // Compute the sideValue using the updated target offsets
      // take target margin in account because we don't have this info available

      /** @type {?} */

      var css = getStyleComputedProperty(data.instance.target);
      /** @type {?} */

      var targetMarginSide = parseFloat(css["margin".concat(sideCapitalized)]);
      /** @type {?} */

      var targetBorderSide = parseFloat(css["border".concat(sideCapitalized, "Width")]); // compute center of the target

      /** @type {?} */

      var center;

      if (!placementVariation) {
        center = Number(
        /** @type {?} */
        data.offsets.host[side]) + Number(data.offsets.host[len] / 2 - arrowElementSize / 2);
      } else {
        /** @type {?} */
        var targetBorderRadius = parseFloat(css.borderRadius);
        /** @type {?} */

        var targetSideArrowOffset = Number(targetMarginSide + targetBorderSide + targetBorderRadius);
        center = side === placementVariation ? Number(
        /** @type {?} */
        data.offsets.host[side]) + targetSideArrowOffset : Number(
        /** @type {?} */
        data.offsets.host[side]) + Number(data.offsets.host[len] - targetSideArrowOffset);
      }
      /** @type {?} */


      var sideValue = center -
      /** @type {?} */
      targetOffsets[side] - targetMarginSide - targetBorderSide; // prevent arrowElement from being placed not contiguously to its target

      sideValue = Math.max(Math.min(targetOffsets[len] - arrowElementSize, sideValue), 0);
      data.offsets.arrow = (_data$offsets$arrow = {}, _defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), _defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
      data.instance.arrow = arrowElement;
      return data;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} data
     * @return {?}
     */


    function flip(data) {
      data.offsets.target = getClientRect(data.offsets.target);

      if (!isModifierEnabled(data.options, 'flip')) {
        data.offsets.target = Object.assign({}, data.offsets.target, getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
        return data;
      }
      /** @type {?} */


      var boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
      'viewport', false // positionFixed
      );
      /** @type {?} */

      var placement = data.placement.split(' ')[0];
      /** @type {?} */

      var variation = data.placement.split(' ')[1] || '';
      /** @type {?} */

      var offsetsHost = data.offsets.host;
      /** @type {?} */

      var target = data.instance.target;
      /** @type {?} */

      var host = data.instance.host;
      /** @type {?} */

      var adaptivePosition = computeAutoPlacement('auto', offsetsHost, target, host, data.options.allowedPositions);
      /** @type {?} */

      var flipOrder = [placement, adaptivePosition];
      /* tslint:disable-next-line: cyclomatic-complexity */

      flipOrder.forEach(
      /**
      * @param {?} step
      * @param {?} index
      * @return {?}
      */
      function (step, index) {
        if (placement !== step || flipOrder.length === index + 1) {
          return data;
        }

        placement = data.placement.split(' ')[0]; // using floor because the host offsets may contain decimals we are not going to consider here

        /** @type {?} */

        var overlapsRef = placement === 'left' && Math.floor(data.offsets.target.right) > Math.floor(data.offsets.host.left) || placement === 'right' && Math.floor(data.offsets.target.left) < Math.floor(data.offsets.host.right) || placement === 'top' && Math.floor(data.offsets.target.bottom) > Math.floor(data.offsets.host.top) || placement === 'bottom' && Math.floor(data.offsets.target.top) < Math.floor(data.offsets.host.bottom);
        /** @type {?} */

        var overflowsLeft = Math.floor(data.offsets.target.left) < Math.floor(boundaries.left);
        /** @type {?} */

        var overflowsRight = Math.floor(data.offsets.target.right) > Math.floor(boundaries.right);
        /** @type {?} */

        var overflowsTop = Math.floor(data.offsets.target.top) < Math.floor(boundaries.top);
        /** @type {?} */

        var overflowsBottom = Math.floor(data.offsets.target.bottom) > Math.floor(boundaries.bottom);
        /** @type {?} */

        var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom; // flip the variation if required

        /** @type {?} */

        var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
        /** @type {?} */

        var flippedVariation = isVertical && variation === 'left' && overflowsLeft || isVertical && variation === 'right' && overflowsRight || !isVertical && variation === 'left' && overflowsTop || !isVertical && variation === 'right' && overflowsBottom;

        if (overlapsRef || overflowsBoundaries || flippedVariation) {
          if (overlapsRef || overflowsBoundaries) {
            placement = flipOrder[index + 1];
          }

          if (flippedVariation) {
            variation = getOppositeVariation(variation);
          }

          data.placement = placement + (variation ? " ".concat(variation) : '');
          data.offsets.target = Object.assign({}, data.offsets.target, getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
        }
      });
      return data;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} targetElement
     * @param {?} hostElement
     * @param {?} position
     * @param {?} options
     * @return {?}
     */


    function initData(targetElement, hostElement, position, options) {
      /** @type {?} */
      var hostElPosition = getReferenceOffsets(targetElement, hostElement);

      if (!position.match(/^(auto)*\s*(left|right|top|bottom)*$/) && !position.match(/^(left|right|top|bottom)*(?: (left|right|top|bottom))?\s*(start|end)*$/)) {
        /* tslint:disable-next-line: no-parameter-reassignment */
        position = 'auto';
      }
      /** @type {?} */


      var placementAuto = !!position.match(/auto/g); // support old placements 'auto left|right|top|bottom'

      /** @type {?} */

      var placement = position.match(/auto\s(left|right|top|bottom)/) ? position.split(' ')[1] || 'auto' : position; // Normalize placements that have identical main placement and variation ("right right" => "right").

      /** @type {?} */

      var matches = placement.match(/^(left|right|top|bottom)* ?(?!\1)(left|right|top|bottom)?/);

      if (matches) {
        placement = matches[1] + (matches[2] ? " ".concat(matches[2]) : '');
      } // "left right", "top bottom" etc. placements also considered incorrect.


      if (['left right', 'right left', 'top bottom', 'bottom top'].indexOf(placement) !== -1) {
        placement = 'auto';
      }
      /** @type {?} */


      var targetOffset = getTargetOffsets(targetElement, hostElPosition, placement);
      placement = computeAutoPlacement(placement, hostElPosition, targetElement, hostElement, options ? options.allowedPositions : undefined);
      return {
        options: options,
        instance: {
          target: targetElement,
          host: hostElement,
          arrow: null
        },
        offsets: {
          target: targetOffset,
          host: hostElPosition,
          arrow: null
        },
        positionFixed: false,
        placement: placement,
        placementAuto: placementAuto
      };
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} data
     * @return {?}
     */


    function preventOverflow(data) {
      if (!isModifierEnabled(data.options, 'preventOverflow')) {
        return data;
      } // NOTE: DOM access here
      // resets the targetOffsets's position so that the document size can be calculated excluding
      // the size of the targetOffsets element itself

      /** @type {?} */


      var transformProp = 'transform';
      /** @type {?} */

      var targetStyles = data.instance.target.style; // assignment to help minification

      var top = targetStyles.top,
          left = targetStyles.left,
          transform = targetStyles[transformProp];
      targetStyles.top = '';
      targetStyles.left = '';
      targetStyles[transformProp] = '';
      /** @type {?} */

      var boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
      'scrollParent', false // positionFixed
      ); // NOTE: DOM access here
      // restores the original style properties after the offsets have been computed

      targetStyles.top = top;
      targetStyles.left = left;
      targetStyles[transformProp] = transform;
      /** @type {?} */

      var order = ['left', 'right', 'top', 'bottom'];
      /** @type {?} */

      var check = {
        /**
         * @param {?} placement
         * @return {?}
         */
        primary: function primary(placement) {
          /** @type {?} */
          var value =
          /** @type {?} */
          data.offsets.target[placement];

          if (
          /** @type {?} */
          data.offsets.target[placement] < boundaries[placement] && !false // options.escapeWithReference
          ) {
              value = Math.max(
              /** @type {?} */
              data.offsets.target[placement], boundaries[placement]);
            }

          return _defineProperty({}, placement, value);
        },

        /**
         * @param {?} placement
         * @return {?}
         */
        secondary: function secondary(placement) {
          /** @type {?} */
          var mainSide = placement === 'right' ? 'left' : 'top';
          /** @type {?} */

          var value = data.offsets.target[mainSide];

          if (
          /** @type {?} */
          data.offsets.target[placement] > boundaries[placement] && !false // escapeWithReference
          ) {
              value = Math.min(data.offsets.target[mainSide], boundaries[placement] - (placement === 'right' ? data.offsets.target.width : data.offsets.target.height));
            }

          return _defineProperty({}, mainSide, value);
        }
      };
      /** @type {?} */

      var side;
      order.forEach(
      /**
      * @param {?} placement
      * @return {?}
      */
      function (placement) {
        side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
        data.offsets.target = Object.assign({}, data.offsets.target,
        /** @type {?} */
        check[side](placement));
      });
      return data;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} data
     * @return {?}
     */


    function shift(data) {
      /** @type {?} */
      var placement = data.placement;
      /** @type {?} */

      var basePlacement = placement.split(' ')[0];
      /** @type {?} */

      var shiftVariation = placement.split(' ')[1];

      if (shiftVariation) {
        var _data$offsets = data.offsets,
            host = _data$offsets.host,
            target = _data$offsets.target;
        /** @type {?} */

        var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
        /** @type {?} */

        var side = isVertical ? 'left' : 'top';
        /** @type {?} */

        var measurement = isVertical ? 'width' : 'height';
        /** @type {?} */

        var shiftOffsets = {
          start: _defineProperty({}, side, host[side]),
          end: _defineProperty({}, side, host[side] + host[measurement] - target[measurement])
        };
        data.offsets.target = Object.assign({}, target, _defineProperty({}, side, side === shiftVariation ?
        /** @type {?} */
        shiftOffsets.start[side] :
        /** @type {?} */
        shiftOffsets.end[side]));
      }

      return data;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var Positioning = /*#__PURE__*/function () {
      function Positioning() {
        _classCallCheck(this, Positioning);
      }

      _createClass(Positioning, [{
        key: "position",

        /**
         * @param {?} hostElement
         * @param {?} targetElement
         * @param {?=} round
         * @return {?}
         */
        value: function position(hostElement, targetElement) {
          var round = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.offset(hostElement, targetElement, false);
        }
        /**
         * @param {?} hostElement
         * @param {?} targetElement
         * @param {?=} round
         * @return {?}
         */

      }, {
        key: "offset",
        value: function offset(hostElement, targetElement) {
          var round = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return getReferenceOffsets(targetElement, hostElement);
        }
        /**
         * @param {?} hostElement
         * @param {?} targetElement
         * @param {?} position
         * @param {?=} appendToBody
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "positionElements",
        value: function positionElements(hostElement, targetElement, position, appendToBody, options) {
          /** @type {?} */
          var chainOfModifiers = [flip, shift, preventOverflow, arrow];
          return chainOfModifiers.reduce(
          /**
          * @param {?} modifiedData
          * @param {?} modifier
          * @return {?}
          */
          function (modifiedData, modifier) {
            return modifier(modifiedData);
          }, initData(targetElement, hostElement, position, options));
        }
      }]);

      return Positioning;
    }();
    /** @type {?} */


    var positionService = new Positioning();
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} placement
     * @param {?=} appendToBody
     * @param {?=} options
     * @param {?=} renderer
     * @return {?}
     */

    function positionElements(hostElement, targetElement, placement, appendToBody, options, renderer) {
      /** @type {?} */
      var data = positionService.positionElements(hostElement, targetElement, placement, appendToBody, options);
      /** @type {?} */

      var offsets = getOffsets(data);
      setStyles(targetElement, {
        'will-change': 'transform',
        top: '0px',
        left: '0px',
        transform: "translate3d(".concat(offsets.left, "px, ").concat(offsets.top, "px, 0px)")
      }, renderer);

      if (data.instance.arrow) {
        setStyles(data.instance.arrow, data.offsets.arrow, renderer);
      }

      updateContainerClass(data, renderer);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function PositioningOptions() {}

    if (false) {}

    var PositioningService = /*#__PURE__*/function () {
      /**
       * @param {?} ngZone
       * @param {?} rendererFactory
       * @param {?} platformId
       */
      function PositioningService(ngZone, rendererFactory, platformId) {
        var _this16 = this;

        _classCallCheck(this, PositioningService);

        this.update$$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.positionElements = new Map();
        this.isDisabled = false;

        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId)) {
          ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this16.triggerEvent$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'scroll', {
              passive: true
            }), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize', {
              passive: true
            }),
            /* tslint:disable-next-line: deprecation */
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(0, rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"]), _this16.update$$);

            _this16.triggerEvent$.subscribe(
            /**
            * @return {?}
            */
            function () {
              if (_this16.isDisabled) {
                return;
              }

              _this16.positionElements
              /* tslint:disable-next-line: no-any */
              .forEach(
              /**
              * @param {?} positionElement
              * @return {?}
              */
              function (positionElement) {
                positionElements(_getHtmlElement(positionElement.target), _getHtmlElement(positionElement.element), positionElement.attachment, positionElement.appendToBody, _this16.options, rendererFactory.createRenderer(null, null));
              });
            });
          });
        }
      }
      /**
       * @param {?} options
       * @return {?}
       */


      _createClass(PositioningService, [{
        key: "position",
        value: function position(options) {
          this.addPositionElement(options);
        }
        /**
         * @return {?}
         */

      }, {
        key: "disable",

        /**
         * @return {?}
         */
        value: function disable() {
          this.isDisabled = true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "enable",
        value: function enable() {
          this.isDisabled = false;
        }
        /**
         * @param {?} options
         * @return {?}
         */

      }, {
        key: "addPositionElement",
        value: function addPositionElement(options) {
          this.positionElements.set(_getHtmlElement(options.element), options);
        }
        /**
         * @return {?}
         */

      }, {
        key: "calcPosition",
        value: function calcPosition() {
          this.update$$.next();
        }
        /**
         * @param {?} elRef
         * @return {?}
         */

      }, {
        key: "deletePositionElement",
        value: function deletePositionElement(elRef) {
          this.positionElements["delete"](_getHtmlElement(elRef));
        }
        /**
         * @param {?} options
         * @return {?}
         */

      }, {
        key: "setOptions",
        value: function setOptions(options) {
          this.options = options;
        }
      }, {
        key: "event$",
        get: function get() {
          return this.triggerEvent$;
        }
      }]);

      return PositioningService;
    }();

    PositioningService.ɵfac = function PositioningService_Factory(t) {
      return new (t || PositioningService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]));
    };

    PositioningService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PositioningService,
      factory: PositioningService.ɵfac
    });
    /** @nocollapse */

    PositioningService.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]
      }, {
        type: Number,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PositioningService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]
        }, {
          type: Number,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @param {?} element
     * @return {?}
     */


    function _getHtmlElement(element) {
      // it means that we got a selector
      if (typeof element === 'string') {
        return document.querySelector(element);
      }

      if (element instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) {
        return element.nativeElement;
      }

      return element;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ngx-bootstrap-positioning.js.map

    /***/

  },

  /***/
  "./node_modules/ngx-bootstrap/__ivy_ngcc__/utils/fesm2015/ngx-bootstrap-utils.js":
  /*!***************************************************************************************!*\
    !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/utils/fesm2015/ngx-bootstrap-utils.js ***!
    \***************************************************************************************/

  /*! exports provided: LinkedList, OnChange, Trigger, Utils, document, isBs3, listenToTriggers, listenToTriggersV2, parseTriggers, registerEscClick, registerOutsideClick, setTheme, warnOnce, window */

  /***/
  function node_modulesNgxBootstrap__ivy_ngcc__UtilsFesm2015NgxBootstrapUtilsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LinkedList", function () {
      return LinkedList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnChange", function () {
      return OnChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Trigger", function () {
      return Trigger;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Utils", function () {
      return Utils;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "document", function () {
      return document$1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isBs3", function () {
      return isBs3;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "listenToTriggers", function () {
      return listenToTriggers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "listenToTriggersV2", function () {
      return listenToTriggersV2;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "parseTriggers", function () {
      return parseTriggers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "registerEscClick", function () {
      return registerEscClick;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "registerOutsideClick", function () {
      return registerOutsideClick;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setTheme", function () {
      return setTheme;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "warnOnce", function () {
      return warnOnce;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "window", function () {
      return win;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @copyright Valor Software
     * @copyright Angular ng-bootstrap team
     */


    var Trigger = /*#__PURE__*/function () {
      /**
       * @param {?} open
       * @param {?=} close
       */
      function Trigger(open, close) {
        _classCallCheck(this, Trigger);

        this.open = open;
        this.close = close || open;
      }
      /**
       * @return {?}
       */


      _createClass(Trigger, [{
        key: "isManual",
        value: function isManual() {
          return this.open === 'manual' || this.close === 'manual';
        }
      }]);

      return Trigger;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function ListenOptions() {}

    if (false) {}
    /** @type {?} */


    var DEFAULT_ALIASES = {
      hover: ['mouseover', 'mouseout'],
      focus: ['focusin', 'focusout']
    };
    /* tslint:disable-next-line: no-any */

    /**
     * @param {?} triggers
     * @param {?=} aliases
     * @return {?}
     */

    function parseTriggers(triggers) {
      var aliases = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_ALIASES;

      /** @type {?} */
      var trimmedTriggers = (triggers || '').trim();

      if (trimmedTriggers.length === 0) {
        return [];
      }
      /** @type {?} */


      var parsedTriggers = trimmedTriggers.split(/\s+/).map(
      /**
      * @param {?} trigger
      * @return {?}
      */
      function (trigger) {
        return trigger.split(':');
      }).map(
      /**
      * @param {?} triggerPair
      * @return {?}
      */
      function (triggerPair) {
        /** @type {?} */
        var alias = aliases[triggerPair[0]] || triggerPair;
        return new Trigger(alias[0], alias[1]);
      });
      /** @type {?} */

      var manualTriggers = parsedTriggers.filter(
      /**
      * @param {?} triggerPair
      * @return {?}
      */
      function (triggerPair) {
        return triggerPair.isManual();
      });

      if (manualTriggers.length > 1) {
        throw new Error('Triggers parse error: only one manual trigger is allowed');
      }

      if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw new Error('Triggers parse error: manual trigger can\'t be mixed with other triggers');
      }

      return parsedTriggers;
    }
    /**
     * @param {?} renderer
     * @param {?} target
     * @param {?} triggers
     * @param {?} showFn
     * @param {?} hideFn
     * @param {?} toggleFn
     * @return {?}
     */


    function listenToTriggers(renderer,
    /* tslint:disable-next-line: no-any */
    target, triggers, showFn, hideFn, toggleFn) {
      /** @type {?} */
      var parsedTriggers = parseTriggers(triggers);
      /* tslint:disable-next-line: no-any */

      /** @type {?} */

      var listeners = [];

      if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
      }

      parsedTriggers.forEach(
      /**
      * @param {?} trigger
      * @return {?}
      */
      function (trigger) {
        if (trigger.open === trigger.close) {
          listeners.push(renderer.listen(target, trigger.open, toggleFn));
          return;
        }

        listeners.push(renderer.listen(target, trigger.open, showFn), renderer.listen(target, trigger.close, hideFn));
      });
      return (
        /**
        * @return {?}
        */
        function () {
          listeners.forEach(
          /**
          * @param {?} unsubscribeFn
          * @return {?}
          */
          function (unsubscribeFn) {
            return unsubscribeFn();
          });
        }
      );
    }
    /**
     * @param {?} renderer
     * @param {?} options
     * @return {?}
     */


    function listenToTriggersV2(renderer, options) {
      /** @type {?} */
      var parsedTriggers = parseTriggers(options.triggers);
      /** @type {?} */

      var target = options.target; // do nothing

      if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
      } // all listeners

      /* tslint:disable-next-line: no-any */

      /** @type {?} */


      var listeners = []; // lazy listeners registration

      /** @type {?} */

      var _registerHide = [];
      /** @type {?} */

      var registerHide =
      /**
      * @return {?}
      */
      function registerHide() {
        // add hide listeners to unregister array
        _registerHide.forEach(
        /**
        * @param {?} fn
        * @return {?}
        */
        function (fn) {
          return listeners.push(fn());
        }); // register hide events only once


        _registerHide.length = 0;
      }; // register open\close\toggle listeners


      parsedTriggers.forEach(
      /**
      * @param {?} trigger
      * @return {?}
      */
      function (trigger) {
        /** @type {?} */
        var useToggle = trigger.open === trigger.close;
        /** @type {?} */

        var showFn = useToggle ? options.toggle : options.show;

        if (!useToggle) {
          _registerHide.push(
          /**
          * @return {?}
          */
          function () {
            return renderer.listen(target, trigger.close, options.hide);
          });
        }

        listeners.push(renderer.listen(target, trigger.open,
        /**
        * @return {?}
        */
        function () {
          return showFn(registerHide);
        }));
      });
      return (
        /**
        * @return {?}
        */
        function () {
          listeners.forEach(
          /**
          * @param {?} unsubscribeFn
          * @return {?}
          */
          function (unsubscribeFn) {
            return unsubscribeFn();
          });
        }
      );
    }
    /**
     * @param {?} renderer
     * @param {?} options
     * @return {?}
     */


    function registerOutsideClick(renderer, options) {
      if (!options.outsideClick) {
        return Function.prototype;
      }
      /* tslint:disable-next-line: no-any */


      return renderer.listen('document', 'click',
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        if (options.target && options.target.contains(event.target)) {
          return undefined;
        }

        if (options.targets && options.targets.some(
        /**
        * @param {?} target
        * @return {?}
        */
        function (target) {
          return target.contains(event.target);
        })) {
          return undefined;
        }

        options.hide();
      });
    }
    /**
     * @param {?} renderer
     * @param {?} options
     * @return {?}
     */


    function registerEscClick(renderer, options) {
      if (!options.outsideEsc) {
        return Function.prototype;
      }

      return renderer.listen('document', 'keyup.esc',
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        if (options.target && options.target.contains(event.target)) {
          return undefined;
        }

        if (options.targets && options.targets.some(
        /**
        * @param {?} target
        * @return {?}
        */
        function (target) {
          return target.contains(event.target);
        })) {
          return undefined;
        }

        options.hide();
      });
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * JS version of browser APIs. This library can only run in the browser.
     * @type {?}
     */


    var win = typeof window !== 'undefined' && window ||
    /** @type {?} */
    {};
    /** @type {?} */

    var document$1 = win.document;
    /** @type {?} */

    var location = win.location;
    /** @type {?} */

    var gc = win.gc ?
    /**
    * @return {?}
    */
    function () {
      return win.gc();
    } :
    /**
    * @return {?}
    */
    function () {
      return null;
    };
    /** @type {?} */

    var performance = win.performance ? win.performance : null;
    /** @type {?} */

    var Event = win.Event;
    /** @type {?} */

    var MouseEvent = win.MouseEvent;
    /** @type {?} */

    var KeyboardEvent = win.KeyboardEvent;
    /** @type {?} */

    var EventTarget = win.EventTarget;
    /** @type {?} */

    var History = win.History;
    /** @type {?} */

    var Location = win.Location;
    /** @type {?} */

    var EventListener = win.EventListener;
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var guessedVersion;
    /**
     * @return {?}
     */

    function _guessBsVersion() {
      if (typeof document === 'undefined') {
        return null;
      }
      /** @type {?} */


      var spanEl = document.createElement('span');
      spanEl.innerText = 'test bs version';
      document.body.appendChild(spanEl);
      spanEl.classList.add('d-none');
      /** @type {?} */

      var rect = spanEl.getBoundingClientRect();
      document.body.removeChild(spanEl);

      if (!rect) {
        return 'bs3';
      }

      return rect.top === 0 ? 'bs4' : 'bs3';
    }
    /**
     * @param {?} theme
     * @return {?}
     */


    function setTheme(theme) {
      guessedVersion = theme;
    } // todo: in ngx-bootstrap, bs4 will became a default one

    /**
     * @return {?}
     */


    function isBs3() {
      if (typeof win === 'undefined') {
        return true;
      }

      if (typeof win.__theme === 'undefined') {
        if (guessedVersion) {
          return guessedVersion === 'bs3';
        }

        guessedVersion = _guessBsVersion();
        return guessedVersion === 'bs3';
      }

      return win.__theme !== 'bs4';
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @template T
     */


    var LinkedList = /*#__PURE__*/function () {
      function LinkedList() {
        _classCallCheck(this, LinkedList);

        this.length = 0;
        this.asArray = []; // Array methods overriding END
      }
      /**
       * @param {?} position
       * @return {?}
       */


      _createClass(LinkedList, [{
        key: "get",
        value: function get(position) {
          if (this.length === 0 || position < 0 || position >= this.length) {
            return void 0;
          }
          /** @type {?} */


          var current = this.head;

          for (var index = 0; index < position; index++) {
            current = current.next;
          }

          return current.value;
        }
        /**
         * @param {?} value
         * @param {?=} position
         * @return {?}
         */

      }, {
        key: "add",
        value: function add(value) {
          var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.length;

          if (position < 0 || position > this.length) {
            throw new Error('Position is out of the list');
          }
          /* tslint:disable-next-line: no-any*/

          /** @type {?} */


          var node = {
            value: value,
            next: undefined,
            previous: undefined
          };

          if (this.length === 0) {
            this.head = node;
            this.tail = node;
            this.current = node;
          } else {
            if (position === 0) {
              // first node
              node.next = this.head;
              this.head.previous = node;
              this.head = node;
            } else if (position === this.length) {
              // last node
              this.tail.next = node;
              node.previous = this.tail;
              this.tail = node;
            } else {
              // node in middle

              /** @type {?} */
              var currentPreviousNode = this.getNode(position - 1);
              /** @type {?} */

              var currentNextNode = currentPreviousNode.next;
              currentPreviousNode.next = node;
              currentNextNode.previous = node;
              node.previous = currentPreviousNode;
              node.next = currentNextNode;
            }
          }

          this.length++;
          this.createInternalArrayRepresentation();
        }
        /**
         * @param {?=} position
         * @return {?}
         */

      }, {
        key: "remove",
        value: function remove() {
          var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

          if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
          }

          if (position === 0) {
            // first node
            this.head = this.head.next;

            if (this.head) {
              // there is no second node
              this.head.previous = undefined;
            } else {
              // there is no second node
              this.tail = undefined;
            }
          } else if (position === this.length - 1) {
            // last node
            this.tail = this.tail.previous;
            this.tail.next = undefined;
          } else {
            // middle node

            /** @type {?} */
            var removedNode = this.getNode(position);
            removedNode.next.previous = removedNode.previous;
            removedNode.previous.next = removedNode.next;
          }

          this.length--;
          this.createInternalArrayRepresentation();
        }
        /**
         * @param {?} position
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "set",
        value: function set(position, value) {
          if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
          }
          /** @type {?} */


          var node = this.getNode(position);
          node.value = value;
          this.createInternalArrayRepresentation();
        }
        /**
         * @return {?}
         */

      }, {
        key: "toArray",
        value: function toArray() {
          return this.asArray;
        }
        /* tslint:disable-next-line: no-any*/

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "findAll",
        value: function findAll(fn) {
          /** @type {?} */
          var current = this.head;
          /* tslint:disable-next-line: no-any*/

          /** @type {?} */

          var result = [];

          for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
              result.push({
                index: index,
                value: current.value
              });
            }

            current = current.next;
          }

          return result;
        } // Array methods overriding start

        /**
         * @param {...?} args
         * @return {?}
         */

      }, {
        key: "push",
        value: function push() {
          var _this17 = this;

          for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
            args[_key2] = arguments[_key2];
          }

          /* tslint:disable-next-line: no-any*/
          args.forEach(
          /**
          * @param {?} arg
          * @return {?}
          */
          function (arg) {
            _this17.add(arg);
          });
          return this.length;
        }
        /**
         * @return {?}
         */

      }, {
        key: "pop",
        value: function pop() {
          if (this.length === 0) {
            return undefined;
          }
          /** @type {?} */


          var last = this.tail;
          this.remove(this.length - 1);
          return last.value;
        }
        /**
         * @param {...?} args
         * @return {?}
         */

      }, {
        key: "unshift",
        value: function unshift() {
          var _this18 = this;

          for (var _len2 = arguments.length, args = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
            args[_key3] = arguments[_key3];
          }

          args.reverse();
          /* tslint:disable-next-line: no-any*/

          args.forEach(
          /**
          * @param {?} arg
          * @return {?}
          */
          function (arg) {
            _this18.add(arg, 0);
          });
          return this.length;
        }
        /**
         * @return {?}
         */

      }, {
        key: "shift",
        value: function shift() {
          if (this.length === 0) {
            return undefined;
          }
          /** @type {?} */


          var lastItem = this.head.value;
          this.remove();
          return lastItem;
        }
        /* tslint:disable-next-line: no-any*/

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "forEach",
        value: function forEach(fn) {
          /** @type {?} */
          var current = this.head;

          for (var index = 0; index < this.length; index++) {
            fn(current.value, index);
            current = current.next;
          }
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "indexOf",
        value: function indexOf(value) {
          /** @type {?} */
          var current = this.head;
          /** @type {?} */

          var position = 0;

          for (var index = 0; index < this.length; index++) {
            if (current.value === value) {
              position = index;
              break;
            }

            current = current.next;
          }

          return position;
        }
        /* tslint:disable-next-line: no-any*/

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "some",
        value: function some(fn) {
          /** @type {?} */
          var current = this.head;
          /** @type {?} */

          var result = false;

          while (current && !result) {
            if (fn(current.value)) {
              result = true;
              break;
            }

            current = current.next;
          }

          return result;
        }
        /* tslint:disable-next-line: no-any*/

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "every",
        value: function every(fn) {
          /** @type {?} */
          var current = this.head;
          /** @type {?} */

          var result = true;

          while (current && result) {
            if (!fn(current.value)) {
              result = false;
            }

            current = current.next;
          }

          return result;
        }
        /**
         * @return {?}
         */

      }, {
        key: "toString",
        value: function toString() {
          return '[Linked List]';
        }
        /* tslint:disable-next-line: no-any*/

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "find",
        value: function find(fn) {
          /** @type {?} */
          var current = this.head;
          /** @type {?} */

          var result;

          for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
              result = current.value;
              break;
            }

            current = current.next;
          }

          return result;
        }
        /* tslint:disable-next-line: no-any*/

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "findIndex",
        value: function findIndex(fn) {
          /** @type {?} */
          var current = this.head;
          /** @type {?} */

          var result;

          for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
              result = index;
              break;
            }

            current = current.next;
          }

          return result;
        }
        /* tslint:disable-next-line: no-any*/

        /**
         * @protected
         * @param {?} position
         * @return {?}
         */

      }, {
        key: "getNode",
        value: function getNode(position) {
          if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
          }
          /** @type {?} */


          var current = this.head;

          for (var index = 0; index < position; index++) {
            current = current.next;
          }

          return current;
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "createInternalArrayRepresentation",
        value: function createInternalArrayRepresentation() {
          /* tslint:disable-next-line: no-any*/

          /** @type {?} */
          var outArray = [];
          /** @type {?} */

          var current = this.head;

          while (current) {
            outArray.push(current.value);
            current = current.next;
          }

          this.asArray = outArray;
        }
      }]);

      return LinkedList;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /*tslint:disable:no-invalid-this */

    /* tslint:disable-next-line: no-any */

    /**
     * @param {?=} defaultValue
     * @return {?}
     */


    function OnChange(defaultValue) {
      /** @type {?} */
      var sufix = 'Change';
      /* tslint:disable-next-line: no-any */

      return (
        /**
        * @param {?} target
        * @param {?} propertyKey
        * @return {?}
        */
        function OnChangeHandler(target, propertyKey) {
          /** @type {?} */
          var _key = " __".concat(propertyKey, "Value");

          Object.defineProperty(target, propertyKey, {
            /* tslint:disable-next-line: no-any */

            /**
             * @return {?}
             */
            get: function get() {
              return this[_key];
            },

            /* tslint:disable-next-line: no-any */

            /**
             * @param {?} value
             * @return {?}
             */
            set: function set(value) {
              /** @type {?} */
              var prevValue = this[_key];
              this[_key] = value;

              if (prevValue !== value && this[propertyKey + sufix]) {
                this[propertyKey + sufix].emit(value);
              }
            }
          });
        }
      );
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var Utils = /*#__PURE__*/function () {
      function Utils() {
        _classCallCheck(this, Utils);
      }

      _createClass(Utils, null, [{
        key: "reflow",

        /* tslint:disable-next-line: no-any */

        /**
         * @param {?} element
         * @return {?}
         */
        value: function reflow(element) {
          /* tslint:disable-next-line: no-any */
          (
          /**
          * @param {?} bs
          * @return {?}
          */
          function (bs) {
            return bs;
          })(element.offsetHeight);
        } // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js

        /* tslint:disable-next-line: no-any */

        /**
         * @param {?} elem
         * @return {?}
         */

      }, {
        key: "getStyles",
        value: function getStyles(elem) {
          // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
          // IE throws on elements created in popups
          // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"

          /** @type {?} */
          var view = elem.ownerDocument.defaultView;

          if (!view || !view.opener) {
            view = win;
          }

          return view.getComputedStyle(elem);
        }
      }]);

      return Utils;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var _messagesHash = {};
    /** @type {?} */

    var _hideMsg = typeof console === 'undefined' || !('warn' in console);
    /**
     * @param {?} msg
     * @return {?}
     */


    function warnOnce(msg) {
      if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() || _hideMsg || msg in _messagesHash) {
        return;
      }

      _messagesHash[msg] = true;
      /*tslint:disable-next-line*/

      console.warn(msg);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ngx-bootstrap-utils.js.map

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


    __webpack_exports__["default"] = "<div [@routerTransition]>\n    <h2 class=\"text-muted\">Category </h2>\n    <form>\n        <div class=\"form-row align-items-center\">\n\n            <div class=\"col-auto\">\n                <div class=\"form-group input-group\">\n                    <input class=\"form-control\" type=\"text\" />\n                    <div class=\"input-group-append\">\n                        <button class=\"btn btn-secondary\" type=\"button\"><i class=\"fa fa-search\"></i></button>\n                    </div>\n                    <div class=\"col-auto\">\n                        <a [routerLinkActive]=\"['router-link-active']\" routerLink=\"/add-category\" ><button class=\"btn btn-danger\">\n                            +Add New Category\n                        </button>\n                         </a>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </form>\n\n\n    <!-- /Table for category -->\n    <div class=\"row\">\n        <div class=\"col col-xl-12\">\n            <div class=\"card mb-3\">\n                <table class=\"table text-center table-hover table-striped\">\n                    <thead>\n                        <tr>\n\n                            <th>Name</th>\n                            <th>Name(Arabic)</th>\n                            <th>Actions </th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let category of data\">\n                            <td>{{category.name}}</td>\n                            <td>{{ category.aName }}</td>\n                            <td class=\"\">\n                                <button class=\"btn btn-sm btn-danger mr-2 \"(click)=\"deletePost(category.id)\">delete</button>\n                                \n                                <a href=\"#\" [routerLink]=\"['/edit-category', category.id]\" class=\"btn btn-primary\">Edit</a>\n                            </td>\n\n                        </tr>\n\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>";
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJ9 */";
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
        var _this19 = this;

        _classCallCheck(this, CategoryComponent);

        this.categorySrvice = categorySrvice;
        this.data = [];
        this.categorySrvice.getAll().subscribe(function (result) {
          _this19.data = result.data;
          console.log('JSON Response = ', _this19.data);
        });
      }

      _createClass(CategoryComponent, [{
        key: "deletePost",
        value: function deletePost(id) {
          var _this20 = this;

          this.categorySrvice["delete"](id).subscribe(function (res) {
            _this20.data = _this20.data.filter(function (item) {
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


    var _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./edit-category/edit-category.component */
    "./src/app/layout/category/edit-category/edit-category.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");

    var CategoryModule = function CategoryModule() {
      _classCallCheck(this, CategoryModule);
    };

    CategoryModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_category_component__WEBPACK_IMPORTED_MODULE_6__["CategoryComponent"], _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_7__["AddCategoryComponent"], _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_8__["EditCategoryComponent"]],
      imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarouselModule"], _shared_modules__WEBPACK_IMPORTED_MODULE_4__["StatModule"], _category_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoryRoutingModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalModule"].forRoot(), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]],
      entryComponents: [_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_7__["AddCategoryComponent"], _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_8__["EditCategoryComponent"]]
    })], CategoryModule);
    /***/
  }
}]);
//# sourceMappingURL=category-category-module-es5.js.map