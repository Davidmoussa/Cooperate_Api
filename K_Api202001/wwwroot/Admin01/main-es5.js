function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [@routerTransition] class=\"login-page\">\n   \n        <div class=\"card\">\n            <h4 class=\"card-header\">LogIn</h4>\n            <div class=\"card-body\">\n                <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                    <div class=\"form-group\">\n                        <label for=\"userName\">UserName</label>\n                        <input type=\"text\" formControlName=\"userName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.userName.errors }\" />\n                        <div *ngIf=\"submitted && f.userName.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.userName.errors.required\">Username is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"password\">Password</label>\n                        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                        </div>\n                    </div>\n                    <button [disabled]=\"loading\" class=\"btn btn-primary\">\n                        <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                        Login\n                    </button>\n                    <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\n                </form>\n            </div>\n        </div>\n    \n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [@routerTransition] class=\"login-page\">\n    \n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/terms-and-conditions/terms-and-conditions.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/terms-and-conditions/terms-and-conditions.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTermsAndConditionsTermsAndConditionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 style=\"text-align: center;\"><strong>الشروط والأحكام</strong></h1>\n<h1 style=\"text-align: center;\">&nbsp;</h1>\n<p style=\"text-align: right;\"><strong>شروط الإستخدام</strong></p>\n<p style=\"text-align: right;\"><span style=\"font-weight: 400;\">يرجى مراجعة هذه الشروط والأحكام بعناية قبل استخدام هذا\n        التطبيق.</span></p>\n<p style=\"text-align: right;\"><strong>تمهيد</strong></p>\n<p style=\"text-align: right;\"><strong>هذا التطبيق جزء من مشروع تعاون المنفذ من جمعية شباب مصر لتنمية المجتمع بالفيوم\n        والممول من مؤسسة دروسوس والذى يهدف لدعم المشروعات التعاونية والصغيرة&nbsp;</strong></p>\n<p style=\"text-align: right;\"><span style=\"font-weight: 400;\">تتضمن شروط الاستخدام (مع الأحكام المشار إليها في هذا\n        المستند) تعليمات حول كيفية استخدام تطبيقنا (تعاون )&nbsp; والتصفح والتسجيل ، سواء كمتصفح أو كمستخدم.</span></p>\n<p style=\"text-align: right;\"><span style=\"font-weight: 400;\">يرجى قراءة شروط الاستخدام أدناه بعناية قبل البدء في\n        استخدام تطبيقنا ، حيث إنها تنطبق على استخدامك للتطبيق. نوصي بطباعة نسخة من هذه الشروط كمرجع إذا لزم الأمر في\n        المستقبل.</span></p>\n<p style=\"text-align: right;\"><span style=\"font-weight: 400;\">باستخدامك للتطبيق ، فإنك تؤكد قبولك لشروط الاستخدام هذه\n        وتوافق على الالتزام لأحكامه.</span></p>\n<p style=\"text-align: right;\"><span style=\"font-weight: 400;\">إذا كنت لا تقبل بهذه الشروط ، فلا يحق لك استخدام\n        التطبيق.</span></p>\n<p style=\"text-align: right;\"><strong>أحكام إضافية</strong></p>\n<p style=\"text-align: right;\"><span style=\"font-weight: 400;\">تتضمن شروط الاستخدام أيضًا الشروط الإضافية التالية ، والتي\n        تنطبق أيضًا على استخدامك للتطبيق:</span></p>\n<p style=\"text-align: right;\"><span style=\"font-weight: 400;\">باستخدام التطبيق ، فإن سياسة الخصوصية لـ ( تعاون ) التي\n        تنص على الشروط التي نعالج بموجبها البيانات الشخصية التي تقدمها ، أنت تقبل بهذه العملية وتتعهد بأن جميع البيانات\n        التي تقدمها صحيحة ودقيقة.</span></p>\n<p style=\"text-align: right;\"><strong>التغيرات في الشروط&nbsp;</strong></p>\n<p style=\"text-align: right;\"><span style=\"font-weight: 400;\">لنا الحق في تعديل هذه الشروط في أي وقت عن طريق تعديل هذه\n        الصفحة.</span></p>\n<p style=\"text-align: right;\"><span style=\"font-weight: 400;\">يرجى التحقق من هذه الصفحة من وقت لآخر لرؤية أي تعديلات\n        جديدة ملزمة للمستخدم.</span></p>\n<p style=\"text-align: right;\"><strong>تعديلات التطبيق</strong></p>\n<p style=\"text-align: right;\"><span style=\"font-weight: 400;\">قد نقوم بتحديث محتوى تطبيقنا من وقت لآخر. يرجى ملاحظة أن\n        أي جزء من المحتوى قد يتم تطويره&nbsp;</span></p>\n<p style=\"text-align: right;\"><strong>حقوق الملكية الفكرية</strong></p>\n<p style=\"text-align: right;\"><span style=\"font-weight: 400;\">جميع حقوق الملكية الفكرية لتطبيق تعاون مملوكة لجمعية شباب\n        مصر لتنمية المجتمع بالفيوم ، وجميع المواد المنشورة محمية بقوانين حقوق النشر والمعاهدات الدولية ، وجميع هذه\n        الحقوق محفوظة.</span></p>\n<p style=\"text-align: right;\"><span style=\"font-weight: 400;\">&nbsp;باستخدام تطبيقنا ، فإنك تتعهد على الالتزام بجميع هذه\n        القواعد والشروط والاحتفاظ بجميع حقوق النشر والإشعارات الأخرى في أي محتوى تحصل عليه من تطبيقنا. جميع حقوق ومحتوى\n        تطبيقنا محفوظة ، ما لم يتم منحها صراحة.</span></p>\n<p style=\"text-align: right;\"><span style=\"font-weight: 400;\">لديك الحق في طباعة نسخة واحدة وتحميل أجزاء / اقتباسات من\n        محتوى تطبيقنا لاستخدامك الشخصي ومشاركة هذا المحتوى مع أشخاص آخرين في منشأتك.</span></p>\n<p style=\"text-align: right;\"><span style=\"font-weight: 400;\">لا يحق لك تعديل النسخ الورقية أو الرقمية لأي مادة قمت\n        بطباعتها أو تحميلها بأي شكل من الأشكال ، ولا يجوز لك استخدام أي رسوم توضيحية أو صور أو سلسلة من الرسومات المرئية\n        أو الصوتية أو غيرها من الرسومات.الاعتراف الدائم بحالتها (والاعتراف بالمشاركين المعتمدين) كمؤلفين لمحتوى\n        تطبيقنا.</span></p>\n<p style=\"text-align: right;\"><span style=\"font-weight: 400;\">ليس لديك الحق في استخدام أي جزء من المحتوى الخاص بنا&nbsp;\n        او بمستخدمى التطبيق لأغراض تجارية دون إذن للقيام بذلك منا أو من ممثلينا.</span></p>\n<p style=\"text-align: right;\"><span style=\"font-weight: 400;\">إذا قمت بطباعة أو نسخ أو تحميل أي جزء من تطبيقنا بما يخالف\n        شروط الاستخدام ، فسيتم تعليق حقك في استخدام تطبيقنا على الفور. ستضطر إلى إعادة أو إتلاف المواد التي\n        نسختها.</span></p>\n<p style=\"text-align: right;\"><strong>سياسة المستخدمين ( العارضين )&nbsp;</strong></p>\n<p style=\"text-align: right;\"><strong>هذا التطبيق مخصص لدعم المشروعات التعاونية والصغيرة والحرفية و التي لا يتجاوز\n        رأسمالها ......</strong></p>\n<p style=\"text-align: right;\">&nbsp;</p>\n<ul style=\"text-align: right;\">\n    <li><strong><strong>يتحمل العارض كافة المسئوليات عن المحتوى المعروض تحت اسم وحدته الانتاجية&nbsp;</strong></strong>\n    </li>\n</ul>\n<ul>\n    <li><strong>يتقدم العارض بطلب انضمام للتطبيق وتحدد جمعية شباب مصر مدى ملائمته للفئة المستهدفة&nbsp;</strong></li>\n</ul>\n<ul>\n    <li><strong>يتحمل العارض مسئولية سياسة الاستبدال والاسترجاع الواردة بقانون حماية المستهلك ويلتزم بها وفى حالة\n            مخالفتها يتم انذاره ثم الغاء اشتراكه دون ادني مسئولية على جمعية شباب مصر.&nbsp;</strong></li>\n</ul>\n<ul>\n    <li><strong>لا يجوز للعارضين من الوحدات الانتاجية عرض اى منتجات لم يقم بانتاجها من خلال وحدته الانتاجية وهو المسئول\n            عن ملكيته للمنتجات المعروضة .</strong></li>\n</ul>\n<ul>\n    <li><strong>يتحمل العارضين من الوحدات الاستهلاكية والخدمية كافة المسئولية القانونية عن المنتجات المعروضة والخدمات\n            المقدمه منهم .</strong></li>\n</ul>\n<ul>\n    <li><strong>يتحمل العارض المسئولية الكاملة لكافة البيانات الورادة على المنتج والاسعار المعلنة عليه ومدى جودته والزمن\n            المعلن لتسليم المنتج&nbsp;</strong></li>\n</ul>\n<ul>\n    <li><strong>يتحمل العارض مسئوليات تسليم المنتج وسياسة الدفع ، حيث لا تقوم الجمعية بعمليات الشحن واستلام ثمن المنتجات\n            المعروضه.&nbsp;</strong></li>\n</ul>\n<p style=\"text-align: right;\">&nbsp;</p>\n<p style=\"text-align: right;\"><strong>فى حالة مخالفة العارض للسياسات المعلنة يجوز للجمعية حذف أشتراكه من التطبيق ، مع\n        مسئوليته القانونية عن المخالفة .</strong><span style=\"font-weight: 400;\">&nbsp;</span></p>\n<p style=\"text-align: right;\">&nbsp;</p>\n<p style=\"text-align: right;\"><strong>سياسة المستخدمين&nbsp;</strong></p>\n<p style=\"text-align: right;\">&nbsp;</p>\n<ul style=\"text-align: right;\">\n    <li><strong><strong>هذا التطبيق هو تطبيق خدمى للعارضين ولا تتحمل الجمعية اى مسئولية تجاه المنتجات او جودتها او\n                اسعارها&nbsp; أو طرق شحنها ، ولا يجوز الرجوع علي الجمعية بأي مسئولية قانونية .</strong></strong></li>\n</ul>\n<ul>\n    <li><strong>يجوز للمستخدم فى حالة مخالفة اى عارض لسياسات التطبيق او قانون حماية المستهلك ان يقدم شكوى للجمعية عبر\n            التطبيق وتقوم بالتحقيق فيها وفى حالة صحتها يلتزم العارض بتحمل المسئولية واصلاح الخطأ طبقا لقواعد واحكام\n            القانون او حذفه من التطبيق .</strong></li>\n</ul>\n<ul>\n    <li><strong>يتحمل المستخدم المسئولية القانونية عن التزامه بسداد الاسعار المعلنة فى حالة موافقة المنتج للشروط\n            والاحكام&nbsp; .</strong></li>\n</ul>\n<p style=\"text-align: right;\">&nbsp;</p>\n<p style=\"text-align: right;\">&nbsp;</p>\n<p style=\"text-align: right;\">&nbsp;</p>\n<ul style=\"text-align: right;\">\n    <li><strong><strong>لا يجوز لاى مستخدم اعادة استخدام صور اى منتجات او رسائل اعلانية موجودة على التطبيق بدون اذن\n                الجمعية او العارضين&nbsp;</strong></strong></li>\n</ul>\n<ul>\n    <li><strong>فى حالة رسائل التوعية يجوز اعادة استخدامها بدون اذن من الجمعية بشرط عدم اجراء اى تعديل\n            بالرسالة&nbsp;</strong></li>\n</ul>\n<p style=\"text-align: right;\">&nbsp;</p>\n<p style=\"text-align: right;\">&nbsp;</p>\n<p style=\"text-align: right;\">&nbsp;</p>\n<ul style=\"text-align: right;\">\n    <li><strong><strong>الأنشطة المحظورة</strong></strong></li>\n</ul>\n<p style=\"text-align: right;\">&nbsp;</p>\n<p style=\"text-align: right;\"><span style=\"font-weight: 400;\">لا يجوز لك الوصول إلى التطبيق أو استخدامه لأي غرض بخلاف\n        الغرض الذي نجعل التطبيق متاحًا من أجله. لا يجوز استخدام التطبيق فيما يتعلق بأي مساعي تجارية باستثناء تلك التي\n        يتم اعتمادها أو الموافقة عليها بشكل خاص من قبلنا.</span></p>\n<p style=\"text-align: right;\"><span style=\"font-weight: 400;\">بصفتك مستخدمًا للتطبيق ، فإنك توافق على عدم:</span></p>\n<p style=\"text-align: right;\"><span style=\"font-weight: 400;\">استرجاع البيانات أو المحتوى الآخر بشكل منهجي من التطبيق\n        لإنشاء أو تجميع ، بشكل مباشر أو غير مباشر ، مجموعة أو تصنيف أو قاعدة بيانات أو دليل دون إذن كتابي منا. القيام\n        بأي استخدام غير مصرح به للتطبيق ، بما في ذلك جمع أسماء المستخدمين و / أو عناوين البريد الإلكتروني للمستخدمين عن\n        طريق الوسائل الإلكترونية أو غيرها بغرض إرسال بريد إلكتروني غير مرغوب فيه ، أو إنشاء حسابات مستخدمين بوسائل آلية\n        أو بحجج زائفة.استخدم وكيل شراء لإجراء عمليات شراء على التطبيق.استخدام التطبيق للإعلان أو العرض لبيع السلع\n        والخدمات.التحايل على ميزات التطبيق المتعلقة بالأمان أو تعطيلها أو التدخل فيها بأي شكل آخر ، بما في ذلك الميزات\n        التي تمنع أو تقيد استخدام أو نسخ أي محتوى أو تفرض قيودًا على استخدام التطبيق و / أو المحتوى الوارد فيه.الانخراط\n        في تأطير غير مرخص أو ربط التطبيق.خداعنا أو تضليلنا نحن والمستخدمين الآخرين ، خاصة في أي محاولة لمعرفة معلومات\n        الحساب الحساسة مثل كلمات مرور المستخدم ؛</span></p>\n<p style=\"text-align: right;\"><span style=\"font-weight: 400;\">الاستخدام غير السليم لخدمات الدعم الخاصة بنا أو إرسال\n        تقارير كاذبة عن إساءة أو سوء سلوك.</span></p>\n<p style=\"text-align: right;\"><span style=\"font-weight: 400;\">الانخراط في أي استخدام آلي للنظام ، مثل استخدام البرامج\n        النصية لإرسال التعليقات أو الرسائل ، أو استخدام أي استخراج للبيانات ، أو الروبوتات ، أو أدوات مماثلة لجمع\n        البيانات واستخراجها.</span></p>\n<p style=\"text-align: right;\"><span style=\"font-weight: 400;\">التدخل في أو تعطيل أو إنشاء عبء على التطبيق أو الشبكات أو\n        الخدمات المتصلة بالتطبيق.</span></p>\n<p style=\"text-align: right;\"><span style=\"font-weight: 400;\">محاولة انتحال شخصية مستخدم أو شخص آخر أو استخدام اسم\n        مستخدم آخر.</span></p>\n<p style=\"text-align: right;\"><span style=\"font-weight: 400;\">بيع أو نقل ملفك الشخصي.</span></p>\n<p style=\"text-align: right;\"><span style=\"font-weight: 400;\">استخدام أي معلومات تم الحصول عليها من التطبيق من أجل\n        مضايقة أو إساءة أو إيذاء شخص آخر.</span></p>\n<p style=\"text-align: right;\"><span style=\"font-weight: 400;\">استخدام التطبيق كجزء من أي جهد أو المحتوى بأي طريقة أخرى\n        لأي محاولة مدرة للدخل أو مؤسسة تجارية.</span></p>\n<p style=\"text-align: right;\"><strong>تمثيلات المستخدم</strong></p>\n<p style=\"text-align: right;\"><span style=\"font-weight: 400;\">باستخدام التطبيق ، أنت تقر وتضمن ما يلي: (1) أن جميع\n        معلومات التسجيل التي ترسلها ستكون صحيحة ودقيقة وحديثة وكاملة ؛ (2) ستحافظ على دقة هذه المعلومات وتحديث معلومات\n        التسجيل على الفور حسب الضرورة ؛ (3) لديك الأهلية القانونية وتوافق على الامتثال لشروط الاستخدام هذه ؛ (4) أن لا\n        يقل عمرك عن 13 عامًا ؛ (5) ليس قاصرًا في السلطة القضائية التي تقيم فيها ، أو إذا كنت قاصرًا ، فقد حصلت على إذن\n        الوالدين لاستخدام الموقع ؛ (6) لن تتمكن من الوصول إلى التطبيق من خلال وسائل آلية أو غير بشرية ، سواء من خلال\n        الروبوت أو البرنامج النصي أو غير ذلك ؛ (7) لن تستخدم التطبيق لأي غرض غير قانوني أو غير مصرح به ؛ و (8) لن ينتهك\n        استخدامك للتطبيق أي قانون أو لائحة سارية.</span></p>\n<p style=\"text-align: right;\">&nbsp;</p>\n<p style=\"text-align: right;\"><span style=\"font-weight: 400;\">تسجيل المستخدم</span></p>\n<p style=\"text-align: right;\"><span style=\"font-weight: 400;\">قد يُطلب منك التسجيل في التطبيق. أنت توافق على الحفاظ على\n        سرية كلمة المرور الخاصة بك وستكون مسؤولاً عن جميع استخدامات حسابك وكلمة المرور. نحتفظ بالحق في إزالة اسم مستخدم\n        تحدده أو استعادته أو تغييره إذا قررنا ، وفقًا لتقديرنا الخاص ، أن اسم المستخدم هذا غير لائق أو مسيئ أو مرفوض بأي\n        شكل آخر.</span></p>\n<p style=\"text-align: right;\"><strong>استخدام الترخيص</strong></p>\n<p style=\"text-align: right;\"><span style=\"font-weight: 400;\">إذا قمت بالوصول إلى التطبيق عبر تطبيق محمول ، فإننا نمنحك\n        حقًا قابلاً للإلغاء وغير حصري وغير قابل للتحويل ومحدودًا لتثبيت واستخدام تطبيق الهاتف المحمول على الأجهزة\n        الإلكترونية اللاسلكية التي تمتلكها أو تتحكم فيها ، وللوصول إلى تطبيق الهاتف المحمول على هذه الأجهزة بما يتفق\n        تمامًا مع أحكام وشروط ترخيص تطبيق الهاتف المحمول الوارد في شروط الاستخدام هذه. لا يجوز لك: (1) فك الشفرة أو\n        الهندسة العكسية أو تفكيك أو محاولة اشتقاق شفرة المصدر للتطبيق أو فك تشفيره ؛ (2) إجراء أي تعديل أو تكييف أو\n        تحسين أو ترجمة أو عمل مشتق من التطبيق ؛ (3) تنتهك أي قوانين أو قواعد أو لوائح سارية فيما يتعلق بوصولك أو\n        استخدامك للتطبيق ؛ (4) إزالة أو تغيير أو إخفاء أي إشعار ملكية (بما في ذلك أي إشعار بحقوق النشر أو العلامة\n        التجارية) تم نشره من قبلنا أو من قبل الجهات المرخصة للتطبيق ؛ (5) استخدام التطبيق في أي محاولة مدرة للدخل أو\n        مؤسسة تجارية أو أي غرض آخر لم يتم تصميمه أو الغرض منه. (6) إتاحة التطبيق عبر شبكة أو بيئة أخرى تسمح بالوصول أو\n        الاستخدام بواسطة أجهزة أو مستخدمين متعددين في نفس الوقت ؛ (7) استخدام التطبيق لإرسال استعلامات تلقائية إلى أي\n        موقع ويب أو لإرسال أي بريد إلكتروني تجاري غير مرغوب فيه (8)&nbsp; استخدام أي معلومات ملكية أو أي من واجهاتنا أو\n        ملكيتنا الفكرية الأخرى في تصميم أو تطوير أو تصنيع أو ترخيص أو توزيع أي تطبيقات أو ملحقات أو أجهزة للاستخدام مع\n        التطبيق.</span></p>\n<p style=\"text-align: right;\"><strong>القانون المعمول به</strong></p>\n<p style=\"text-align: right;\"><span style=\"font-weight: 400;\">يحكم القانون المصرى&nbsp; شروط الاستخدام والموضوع والتكوين\n        (وأي نزاعات أو مطالبات غير تعاقدية). كلانا متفق على أن المحاكم المصرية&nbsp; لها الاختصاص الحصري.</span></p>\n<p style=\"text-align: right;\"><br /><br /></p>";
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/_helpers/auth.guard.ts":
  /*!****************************************!*\
    !*** ./src/app/_helpers/auth.guard.ts ***!
    \****************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcApp_helpersAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
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


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(router, authService) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.authService = authService;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var currentUser = this.authService.currentUserValue;

          if (currentUser) {
            // check if route is restricted by role
            if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
              // role not authorised so redirect to home page
              this.router.navigate(['/']);
              return false;
            } // authorised so return true


            return true;
          } // not logged in so redirect to login page with the return url


          this.router.navigate(['/login'], {
            queryParams: {
              returnUrl: state.url
            }
          });
          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])], AuthGuard);
    /***/
  },

  /***/
  "./src/app/_helpers/error.interceptor.ts":
  /*!***********************************************!*\
    !*** ./src/app/_helpers/error.interceptor.ts ***!
    \***********************************************/

  /*! exports provided: ErrorInterceptor */

  /***/
  function srcApp_helpersErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
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


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ErrorInterceptor = /*#__PURE__*/function () {
      function ErrorInterceptor(authService) {
        _classCallCheck(this, ErrorInterceptor);

        this.authService = authService;
      }

      _createClass(ErrorInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
          }));
        }
      }]);

      return ErrorInterceptor;
    }();

    ErrorInterceptor.ctorParameters = function () {
      return [{
        type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    ErrorInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])], ErrorInterceptor);
    /***/
  },

  /***/
  "./src/app/_helpers/jwt.interceptor.ts":
  /*!*********************************************!*\
    !*** ./src/app/_helpers/jwt.interceptor.ts ***!
    \*********************************************/

  /*! exports provided: JwtInterceptor */

  /***/
  function srcApp_helpersJwtInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
      return JwtInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var JwtInterceptor = /*#__PURE__*/function () {
      function JwtInterceptor(authenticationService) {
        _classCallCheck(this, JwtInterceptor);

        this.authenticationService = authenticationService;
        this.apiUrl = 'http://46.101.105.124/api';
      }

      _createClass(JwtInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          // add auth header with jwt if user is logged in and request is to api url
          var currentUser = this.authenticationService.currentUserValue;
          var isLoggedIn = currentUser && currentUser.token;
          var isApiUrl = request.url.startsWith(this.apiUrl);

          if (isLoggedIn && isApiUrl) {
            request = request.clone({
              setHeaders: {
                authorization: "Bearer ".concat(currentUser.token)
              }
            });
          }

          return next.handle(request);
        }
      }]);

      return JwtInterceptor;
    }();

    JwtInterceptor.ctorParameters = function () {
      return [{
        type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }];
    };

    JwtInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])], JwtInterceptor);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _helpers_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./_helpers/auth.guard */
    "./src/app/_helpers/auth.guard.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./terms-and-conditions/terms-and-conditions.component */
    "./src/app/terms-and-conditions/terms-and-conditions.component.ts");

    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | layout-layout-module */
        "layout-layout-module").then(__webpack_require__.bind(null,
        /*! ./layout/layout.module */
        "./src/app/layout/layout.module.ts")).then(function (m) {
          return m.LayoutModule;
        });
      },
      canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: 'signup',
      component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]
    }, {
      path: 'terms',
      component: _terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_6__["TermsAndConditionsComponent"]
    }, {
      path: 'error',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | server-error-server-error-module */
        "server-error-server-error-module").then(__webpack_require__.bind(null,
        /*! ./server-error/server-error.module */
        "./src/app/server-error/server-error.module.ts")).then(function (m) {
          return m.ServerErrorModule;
        });
      }
    }, {
      path: 'not-found',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | not-found-not-found-module */
        "not-found-not-found-module").then(__webpack_require__.bind(null,
        /*! ./not-found/not-found.module */
        "./src/app/not-found/not-found.module.ts")).then(function (m) {
          return m.NotFoundModule;
        });
      }
    }, {
      path: '**',
      redirectTo: 'not-found'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router, authService) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.router = router;
        this.authService = authService;
        this.authService.currentUser.subscribe(function (x) {
          return _this.currentUser = x;
        });
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          this.authService.logout();
          this.router.navigate(['/login']);
        }
      }, {
        key: "isAdmin",
        get: function get() {
          return this.currentUser && this.currentUser.role;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared/modules/language-translation/language-translation.module */
    "./src/app/shared/modules/language-translation/language-translation.module.ts");
    /* harmony import */


    var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./_helpers/jwt.interceptor */
    "./src/app/_helpers/jwt.interceptor.ts");
    /* harmony import */


    var _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./_helpers/error.interceptor */
    "./src/app/_helpers/error.interceptor.ts");
    /* harmony import */


    var _helpers_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./_helpers/auth.guard */
    "./src/app/_helpers/auth.guard.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./terms-and-conditions/terms-and-conditions.component */
    "./src/app/terms-and-conditions/terms-and-conditions.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_9__["LanguageTranslationModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]],
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], _terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_14__["TermsAndConditionsComponent"]],
      providers: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
        useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_10__["JwtInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
        useClass: _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_11__["ErrorInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/login/login.component.scss":
  /*!********************************************!*\
    !*** ./src/app/login/login.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n}\n\n.login-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: #3f3d3d;\n  text-align: center;\n  padding: 3em;\n}\n\n.login-page .col-lg-4 {\n  padding: 0;\n}\n\n.login-page .input-lg {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 0;\n}\n\n.login-page .input-underline {\n  background: 0 0;\n  border: none;\n  box-shadow: none;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n  color: #fff;\n  border-radius: 0;\n}\n\n.login-page .input-underline:focus {\n  border-bottom: 2px solid #0a0a0a;\n  box-shadow: none;\n}\n\n.login-page .rounded-btn {\n  border-radius: 50px;\n  color: rgba(255, 255, 255, 0.8);\n  background: #3f3d3d;\n  border: 2px solid rgba(255, 255, 255, 0.8);\n  font-size: 18px;\n  line-height: 40px;\n  padding: 0 25px;\n}\n\n.login-page .rounded-btn:hover,\n.login-page .rounded-btn:focus,\n.login-page .rounded-btn:active,\n.login-page .rounded-btn:visited {\n  color: white;\n  border: 2px solid white;\n  outline: none;\n}\n\n.login-page h1 {\n  font-weight: 300;\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-size: 36px;\n}\n\n.login-page h1 small {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.login-page .form-group {\n  padding: 8px 0;\n}\n\n.login-page .form-group input::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n\n.login-page .form-group input:-moz-placeholder {\n  /* Firefox 18- */\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n\n.login-page .form-group input::-moz-placeholder {\n  /* Firefox 19+ */\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n\n.login-page .form-group input:-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n\n.login-page .form-content {\n  padding: 40px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hL1dvcmsvRnJlZS9sYXN0LXVwZGF0ZS1hZG1pbi1kYXNoYm9hcmQvc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxjQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBWnNCO0VBYXRCLGtCQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREVJO0VBQ0ksVUFBQTtBQ0FSOztBREdJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNEUjs7QURJSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpREFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0ZSOztBREtJO0VBQ0ksZ0NBQUE7RUFDQSxnQkFBQTtBQ0hSOztBRE1JO0VBRUksbUJBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQTlDa0I7RUErQ2xCLDBDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0pSOztBRE9JOzs7O0VBSUksWUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQ0xSOztBRFFJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ05SOztBRFFRO0VBQ0ksK0JBQUE7QUNOWjs7QURVSTtFQUNJLGNBQUE7QUNSUjs7QURVUTtFQUNJLDBDQUFBO0FDUlo7O0FEV1E7RUFDSSxnQkFBQTtFQUNBLDBDQUFBO0FDVFo7O0FEWVE7RUFDSSxnQkFBQTtFQUNBLDBDQUFBO0FDVlo7O0FEYVE7RUFDSSwwQ0FBQTtBQ1haOztBRGVJO0VBQ0ksZUFBQTtBQ2JSIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkdG9wbmF2LWJhY2tncm91bmQtY29sb3I6ICMzZjNkM2Q7XG46aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5sb2dpbi1wYWdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJhY2tncm91bmQ6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogM2VtO1xuXG4gICAgLmNvbC1sZy00IHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cbiAgICAuaW5wdXQtbGcge1xuICAgICAgICBoZWlnaHQ6IDQ2cHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS4zMzMzMzMzO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIH1cblxuICAgIC5pbnB1dC11bmRlcmxpbmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAwIDA7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgfVxuXG4gICAgLmlucHV0LXVuZGVybGluZTpmb2N1cyB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMTAsIDEwLCAxMCk7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuXG4gICAgLnJvdW5kZWQtYnRuIHtcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgICAgICBiYWNrZ3JvdW5kOiAkdG9wbmF2LWJhY2tncm91bmQtY29sb3I7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgcGFkZGluZzogMCAyNXB4O1xuICAgIH1cblxuICAgIC5yb3VuZGVkLWJ0bjpob3ZlcixcbiAgICAucm91bmRlZC1idG46Zm9jdXMsXG4gICAgLnJvdW5kZWQtYnRuOmFjdGl2ZSxcbiAgICAucm91bmRlZC1idG46dmlzaXRlZCB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cblxuICAgIGgxIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuXG4gICAgICAgIHNtYWxsIHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZm9ybS1ncm91cCB7XG4gICAgICAgIHBhZGRpbmc6IDhweCAwO1xuXG4gICAgICAgIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgLyogRmlyZWZveCAxOC0gKi9cbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIC8qIEZpcmVmb3ggMTkrICovXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmZvcm0tY29udGVudCB7XG4gICAgICAgIHBhZGRpbmc6IDQwcHggMDtcbiAgICB9XG5cbiAgIFxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmxvZ2luLXBhZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQ6ICMzZjNkM2Q7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogM2VtO1xufVxuLmxvZ2luLXBhZ2UgLmNvbC1sZy00IHtcbiAgcGFkZGluZzogMDtcbn1cbi5sb2dpbi1wYWdlIC5pbnB1dC1sZyB7XG4gIGhlaWdodDogNDZweDtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjMzMzMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4ubG9naW4tcGFnZSAuaW5wdXQtdW5kZXJsaW5lIHtcbiAgYmFja2dyb3VuZDogMCAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmxvZ2luLXBhZ2UgLmlucHV0LXVuZGVybGluZTpmb2N1cyB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMGEwYTBhO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmxvZ2luLXBhZ2UgLnJvdW5kZWQtYnRuIHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBiYWNrZ3JvdW5kOiAjM2YzZDNkO1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDAgMjVweDtcbn1cbi5sb2dpbi1wYWdlIC5yb3VuZGVkLWJ0bjpob3Zlcixcbi5sb2dpbi1wYWdlIC5yb3VuZGVkLWJ0bjpmb2N1cyxcbi5sb2dpbi1wYWdlIC5yb3VuZGVkLWJ0bjphY3RpdmUsXG4ubG9naW4tcGFnZSAucm91bmRlZC1idG46dmlzaXRlZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ubG9naW4tcGFnZSBoMSB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMzZweDtcbn1cbi5sb2dpbi1wYWdlIGgxIHNtYWxsIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbn1cbi5sb2dpbi1wYWdlIC5mb3JtLWdyb3VwIHtcbiAgcGFkZGluZzogOHB4IDA7XG59XG4ubG9naW4tcGFnZSAuZm9ybS1ncm91cCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgIWltcG9ydGFudDtcbn1cbi5sb2dpbi1wYWdlIC5mb3JtLWdyb3VwIGlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xuICAvKiBGaXJlZm94IDE4LSAqL1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpICFpbXBvcnRhbnQ7XG59XG4ubG9naW4tcGFnZSAuZm9ybS1ncm91cCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIC8qIEZpcmVmb3ggMTkrICovXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgIWltcG9ydGFudDtcbn1cbi5sb2dpbi1wYWdlIC5mb3JtLWdyb3VwIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgIWltcG9ydGFudDtcbn1cbi5sb2dpbi1wYWdlIC5mb3JtLWNvbnRlbnQge1xuICBwYWRkaW5nOiA0MHB4IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
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


    var _router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../router.animations */
    "./src/app/router.animations.ts");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(formBuilder, route, router, authService) {
        _classCallCheck(this, LoginComponent);

        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.loading = false;
        this.submitted = false;
        this.error = ''; // redirect to home if already logged in

        if (this.authService.currentUserValue) {
          this.router.navigate(['/dashboard']);
        }
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.formBuilder.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          }); // get return url from route parameters or default to '/'

          this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        } // convenience getter for easy access to form fields

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this2 = this;

          this.submitted = true; // stop here if form is invalid

          if (this.loginForm.invalid) {
            return;
          }

          this.loading = true;
          this.authService.login(this.f.userName.value, this.f.password.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function (data) {
            _this2.router.navigate([_this2.returnUrl]);
          }, function (error) {
            _this2.error = error;
            _this2.loading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.loginForm.controls;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_3__["routerTransition"])()],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/login/login.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/router.animations.ts":
  /*!**************************************!*\
    !*** ./src/app/router.animations.ts ***!
    \**************************************/

  /*! exports provided: routerTransition, noTransition, slideToRight, slideToLeft, slideToBottom, slideToTop */

  /***/
  function srcAppRouterAnimationsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routerTransition", function () {
      return routerTransition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "noTransition", function () {
      return noTransition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "slideToRight", function () {
      return slideToRight;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "slideToLeft", function () {
      return slideToLeft;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "slideToBottom", function () {
      return slideToBottom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "slideToTop", function () {
      return slideToTop;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    function routerTransition() {
      return noTransition();
    }

    function noTransition() {
      return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', []);
    }

    function slideToRight() {
      return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(-100%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(0%)'
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(0%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(100%)'
      }))])]);
    }

    function slideToLeft() {
      return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(100%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(0%)'
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(0%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(-100%)'
      }))])]);
    }

    function slideToBottom() {
      return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateY(-100%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateY(0%)'
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateY(0%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateY(100%)'
      }))])]);
    }

    function slideToTop() {
      return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateY(100%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateY(0%)'
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateY(0%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateY(-100%)'
      }))])]);
    }
    /***/

  },

  /***/
  "./src/app/shared/modules/language-translation/language-translation.module.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/shared/modules/language-translation/language-translation.module.ts ***!
    \************************************************************************************/

  /*! exports provided: HttpLoaderFactory, LanguageTranslationModule */

  /***/
  function srcAppSharedModulesLanguageTranslationLanguageTranslationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguageTranslationModule", function () {
      return LanguageTranslationModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /**
     * This module is used to language translations.
     * The translations are saved in a json file in /src/app/assets/i18n directory
     * Docs: https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-angular7-app-with-ngx-translate
     */
    // import ngx-translate and the http loader
    // ngx-translate - required for AOT compilation


    function HttpLoaderFactory(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__["TranslateHttpLoader"](http);
    }

    var LanguageTranslationModule = function LanguageTranslationModule(translate) {
      _classCallCheck(this, LanguageTranslationModule);

      this.translate = translate; // Gets Default language from browser if available, otherwise set English ad default

      this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
      this.translate.setDefaultLang('en');
      var browserLang = this.translate.getBrowserLang();
      this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
    };

    LanguageTranslationModule.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }];
    };

    LanguageTranslationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [],
      imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"],
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
        }
      })],
      exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])], LanguageTranslationModule);
    /***/
  },

  /***/
  "./src/app/shared/services/auth.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/services/auth.service.ts ***!
    \*************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppSharedServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
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

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.apiUrl = 'http://46.101.105.124/api/Acount/Login';
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(userName, password) {
          var _this3 = this;

          return this.http.post(this.apiUrl, {
            userName: userName,
            password: password
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(user));

              _this3.currentUserSubject.next(user);
            }

            return user;
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          // remove user from local storage to log user out
          localStorage.removeItem('currentUser');
          this.currentUserSubject.next(null);
        }
      }, {
        key: "currentUserValue",
        get: function get() {
          return this.currentUserSubject.value;
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], AuthService);
    /***/
  },

  /***/
  "./src/app/signup/signup.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/signup/signup.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignupSignupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n}\n\n.login-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: #3f3d3d;\n  text-align: center;\n  padding: 3em;\n}\n\n.login-page .col-lg-4 {\n  padding: 0;\n}\n\n.login-page .input-lg {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 0;\n}\n\n.login-page .input-underline {\n  background: 0 0;\n  border: none;\n  box-shadow: none;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n  color: #fff;\n  border-radius: 0;\n}\n\n.login-page .input-underline:focus {\n  border-bottom: 2px solid #0a0a0a;\n  box-shadow: none;\n}\n\n.login-page .rounded-btn {\n  border-radius: 50px;\n  color: rgba(255, 255, 255, 0.8);\n  background: #3f3d3d;\n  border: 2px solid rgba(255, 255, 255, 0.8);\n  font-size: 18px;\n  line-height: 40px;\n  padding: 0 25px;\n}\n\n.login-page .rounded-btn:hover,\n.login-page .rounded-btn:focus,\n.login-page .rounded-btn:active,\n.login-page .rounded-btn:visited {\n  color: white;\n  border: 2px solid white;\n  outline: none;\n}\n\n.login-page h1 {\n  font-weight: 300;\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-size: 36px;\n}\n\n.login-page h1 small {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.login-page .form-group {\n  padding: 8px 0;\n}\n\n.login-page .form-group input::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n\n.login-page .form-group input:-moz-placeholder {\n  /* Firefox 18- */\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n\n.login-page .form-group input::-moz-placeholder {\n  /* Firefox 19+ */\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n\n.login-page .form-group input:-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n\n.login-page .form-content {\n  padding: 40px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hL1dvcmsvRnJlZS9sYXN0LXVwZGF0ZS1hZG1pbi1kYXNoYm9hcmQvc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGNBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFac0I7RUFhdEIsa0JBQUE7RUFDQSxZQUFBO0FDQUo7O0FERUk7RUFDSSxVQUFBO0FDQVI7O0FER0k7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0RSOztBRElJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlEQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDRlI7O0FES0k7RUFDSSxnQ0FBQTtFQUNBLGdCQUFBO0FDSFI7O0FETUk7RUFFSSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBOUNrQjtFQStDbEIsMENBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDSlI7O0FET0k7Ozs7RUFJSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FDTFI7O0FEUUk7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDTlI7O0FEUVE7RUFDSSwrQkFBQTtBQ05aOztBRFVJO0VBQ0ksY0FBQTtBQ1JSOztBRFVRO0VBQ0ksMENBQUE7QUNSWjs7QURXUTtFQUNJLGdCQUFBO0VBQ0EsMENBQUE7QUNUWjs7QURZUTtFQUNJLGdCQUFBO0VBQ0EsMENBQUE7QUNWWjs7QURhUTtFQUNJLDBDQUFBO0FDWFo7O0FEZUk7RUFDSSxlQUFBO0FDYlIiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yOiAjM2YzZDNkO1xuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubG9naW4tcGFnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiAkdG9wbmF2LWJhY2tncm91bmQtY29sb3I7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDNlbTtcblxuICAgIC5jb2wtbGctNCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gICAgLmlucHV0LWxnIHtcbiAgICAgICAgaGVpZ2h0OiA0NnB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzMzMzMzMztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB9XG5cbiAgICAuaW5wdXQtdW5kZXJsaW5lIHtcbiAgICAgICAgYmFja2dyb3VuZDogMCAwO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIH1cblxuICAgIC5pbnB1dC11bmRlcmxpbmU6Zm9jdXMge1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDEwLCAxMCwgMTApO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cblxuICAgIC5yb3VuZGVkLWJ0biB7XG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICAgICAgYmFja2dyb3VuZDogJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMjVweDtcbiAgICB9XG5cbiAgICAucm91bmRlZC1idG46aG92ZXIsXG4gICAgLnJvdW5kZWQtYnRuOmZvY3VzLFxuICAgIC5yb3VuZGVkLWJ0bjphY3RpdmUsXG4gICAgLnJvdW5kZWQtYnRuOnZpc2l0ZWQge1xuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG5cbiAgICBoMSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcblxuICAgICAgICBzbWFsbCB7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmZvcm0tZ3JvdXAge1xuICAgICAgICBwYWRkaW5nOiA4cHggMDtcblxuICAgICAgICBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dDotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIC8qIEZpcmVmb3ggMTgtICovXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAvKiBGaXJlZm94IDE5KyAqL1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5mb3JtLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiA0MHB4IDA7XG4gICAgfVxuXG4gICBcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5sb2dpbi1wYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjM2YzZDNkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDNlbTtcbn1cbi5sb2dpbi1wYWdlIC5jb2wtbGctNCB7XG4gIHBhZGRpbmc6IDA7XG59XG4ubG9naW4tcGFnZSAuaW5wdXQtbGcge1xuICBoZWlnaHQ6IDQ2cHg7XG4gIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMS4zMzMzMzMzO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmxvZ2luLXBhZ2UgLmlucHV0LXVuZGVybGluZSB7XG4gIGJhY2tncm91bmQ6IDAgMDtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5sb2dpbi1wYWdlIC5pbnB1dC11bmRlcmxpbmU6Zm9jdXMge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzBhMGEwYTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5sb2dpbi1wYWdlIC5yb3VuZGVkLWJ0biB7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgYmFja2dyb3VuZDogIzNmM2QzZDtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAwIDI1cHg7XG59XG4ubG9naW4tcGFnZSAucm91bmRlZC1idG46aG92ZXIsXG4ubG9naW4tcGFnZSAucm91bmRlZC1idG46Zm9jdXMsXG4ubG9naW4tcGFnZSAucm91bmRlZC1idG46YWN0aXZlLFxuLmxvZ2luLXBhZ2UgLnJvdW5kZWQtYnRuOnZpc2l0ZWQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBvdXRsaW5lOiBub25lO1xufVxuLmxvZ2luLXBhZ2UgaDEge1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDM2cHg7XG59XG4ubG9naW4tcGFnZSBoMSBzbWFsbCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG59XG4ubG9naW4tcGFnZSAuZm9ybS1ncm91cCB7XG4gIHBhZGRpbmc6IDhweCAwO1xufVxuLmxvZ2luLXBhZ2UgLmZvcm0tZ3JvdXAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpICFpbXBvcnRhbnQ7XG59XG4ubG9naW4tcGFnZSAuZm9ybS1ncm91cCBpbnB1dDotbW96LXBsYWNlaG9sZGVyIHtcbiAgLyogRmlyZWZveCAxOC0gKi9cbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSAhaW1wb3J0YW50O1xufVxuLmxvZ2luLXBhZ2UgLmZvcm0tZ3JvdXAgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAvKiBGaXJlZm94IDE5KyAqL1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpICFpbXBvcnRhbnQ7XG59XG4ubG9naW4tcGFnZSAuZm9ybS1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpICFpbXBvcnRhbnQ7XG59XG4ubG9naW4tcGFnZSAuZm9ybS1jb250ZW50IHtcbiAgcGFkZGluZzogNDBweCAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/signup/signup.component.ts":
  /*!********************************************!*\
    !*** ./src/app/signup/signup.component.ts ***!
    \********************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
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
    /*! ../router.animations */
    "./src/app/router.animations.ts");

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent() {
        _classCallCheck(this, SignupComponent);
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SignupComponent;
    }();

    SignupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html"))["default"],
      animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./signup.component.scss */
      "./src/app/signup/signup.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SignupComponent);
    /***/
  },

  /***/
  "./src/app/terms-and-conditions/terms-and-conditions.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/terms-and-conditions/terms-and-conditions.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTermsAndConditionsTermsAndConditionsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlcm1zLWFuZC1jb25kaXRpb25zL3Rlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/terms-and-conditions/terms-and-conditions.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/terms-and-conditions/terms-and-conditions.component.ts ***!
    \************************************************************************/

  /*! exports provided: TermsAndConditionsComponent */

  /***/
  function srcAppTermsAndConditionsTermsAndConditionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TermsAndConditionsComponent", function () {
      return TermsAndConditionsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TermsAndConditionsComponent = /*#__PURE__*/function () {
      function TermsAndConditionsComponent() {
        _classCallCheck(this, TermsAndConditionsComponent);
      }

      _createClass(TermsAndConditionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TermsAndConditionsComponent;
    }();

    TermsAndConditionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-terms-and-conditions',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./terms-and-conditions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/terms-and-conditions/terms-and-conditions.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./terms-and-conditions.component.css */
      "./src/app/terms-and-conditions/terms-and-conditions.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], TermsAndConditionsComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/a/Work/Free/last-update-admin-dashboard/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map