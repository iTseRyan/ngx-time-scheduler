function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn-bd": "./node_modules/moment/locale/bn-bd.js",
      "./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-mx": "./node_modules/moment/locale/es-mx.js",
      "./es-mx.js": "./node_modules/moment/locale/es-mx.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./projects/ngx-time-scheduler/node_modules/@angular/core/__ivy_ngcc__/fesm2015 lazy recursive":
  /*!************************************************************************************************************!*\
    !*** ./projects/ngx-time-scheduler/node_modules/@angular/core/__ivy_ngcc__/fesm2015 lazy namespace object ***!
    \************************************************************************************************************/

  /*! no static exports found */

  /***/
  function projectsNgxTimeSchedulerNode_modulesAngularCore__ivy_ngcc__Fesm2015LazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./projects/ngx-time-scheduler/node_modules/@angular/core/__ivy_ngcc__/fesm2015 lazy recursive";
    /***/
  },

  /***/
  "./projects/ngx-time-scheduler/node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!******************************************************************************!*\
    !*** ./projects/ngx-time-scheduler/node_modules/moment/locale sync ^\.\/.*$ ***!
    \******************************************************************************/

  /*! no static exports found */

  /***/
  function projectsNgxTimeSchedulerNode_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./projects/ngx-time-scheduler/node_modules/moment/locale/af.js",
      "./af.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/af.js",
      "./ar": "./projects/ngx-time-scheduler/node_modules/moment/locale/ar.js",
      "./ar-dz": "./projects/ngx-time-scheduler/node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./projects/ngx-time-scheduler/node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./projects/ngx-time-scheduler/node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./projects/ngx-time-scheduler/node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./projects/ngx-time-scheduler/node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./projects/ngx-time-scheduler/node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/ar.js",
      "./az": "./projects/ngx-time-scheduler/node_modules/moment/locale/az.js",
      "./az.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/az.js",
      "./be": "./projects/ngx-time-scheduler/node_modules/moment/locale/be.js",
      "./be.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/be.js",
      "./bg": "./projects/ngx-time-scheduler/node_modules/moment/locale/bg.js",
      "./bg.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/bg.js",
      "./bm": "./projects/ngx-time-scheduler/node_modules/moment/locale/bm.js",
      "./bm.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/bm.js",
      "./bn": "./projects/ngx-time-scheduler/node_modules/moment/locale/bn.js",
      "./bn-bd": "./projects/ngx-time-scheduler/node_modules/moment/locale/bn-bd.js",
      "./bn-bd.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/bn-bd.js",
      "./bn.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/bn.js",
      "./bo": "./projects/ngx-time-scheduler/node_modules/moment/locale/bo.js",
      "./bo.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/bo.js",
      "./br": "./projects/ngx-time-scheduler/node_modules/moment/locale/br.js",
      "./br.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/br.js",
      "./bs": "./projects/ngx-time-scheduler/node_modules/moment/locale/bs.js",
      "./bs.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/bs.js",
      "./ca": "./projects/ngx-time-scheduler/node_modules/moment/locale/ca.js",
      "./ca.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/ca.js",
      "./cs": "./projects/ngx-time-scheduler/node_modules/moment/locale/cs.js",
      "./cs.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/cs.js",
      "./cv": "./projects/ngx-time-scheduler/node_modules/moment/locale/cv.js",
      "./cv.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/cv.js",
      "./cy": "./projects/ngx-time-scheduler/node_modules/moment/locale/cy.js",
      "./cy.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/cy.js",
      "./da": "./projects/ngx-time-scheduler/node_modules/moment/locale/da.js",
      "./da.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/da.js",
      "./de": "./projects/ngx-time-scheduler/node_modules/moment/locale/de.js",
      "./de-at": "./projects/ngx-time-scheduler/node_modules/moment/locale/de-at.js",
      "./de-at.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/de-at.js",
      "./de-ch": "./projects/ngx-time-scheduler/node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/de-ch.js",
      "./de.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/de.js",
      "./dv": "./projects/ngx-time-scheduler/node_modules/moment/locale/dv.js",
      "./dv.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/dv.js",
      "./el": "./projects/ngx-time-scheduler/node_modules/moment/locale/el.js",
      "./el.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/el.js",
      "./en-au": "./projects/ngx-time-scheduler/node_modules/moment/locale/en-au.js",
      "./en-au.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/en-au.js",
      "./en-ca": "./projects/ngx-time-scheduler/node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/en-ca.js",
      "./en-gb": "./projects/ngx-time-scheduler/node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/en-gb.js",
      "./en-ie": "./projects/ngx-time-scheduler/node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/en-ie.js",
      "./en-il": "./projects/ngx-time-scheduler/node_modules/moment/locale/en-il.js",
      "./en-il.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/en-il.js",
      "./en-in": "./projects/ngx-time-scheduler/node_modules/moment/locale/en-in.js",
      "./en-in.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/en-in.js",
      "./en-nz": "./projects/ngx-time-scheduler/node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/en-nz.js",
      "./en-sg": "./projects/ngx-time-scheduler/node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/en-sg.js",
      "./eo": "./projects/ngx-time-scheduler/node_modules/moment/locale/eo.js",
      "./eo.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/eo.js",
      "./es": "./projects/ngx-time-scheduler/node_modules/moment/locale/es.js",
      "./es-do": "./projects/ngx-time-scheduler/node_modules/moment/locale/es-do.js",
      "./es-do.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/es-do.js",
      "./es-mx": "./projects/ngx-time-scheduler/node_modules/moment/locale/es-mx.js",
      "./es-mx.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/es-mx.js",
      "./es-us": "./projects/ngx-time-scheduler/node_modules/moment/locale/es-us.js",
      "./es-us.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/es-us.js",
      "./es.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/es.js",
      "./et": "./projects/ngx-time-scheduler/node_modules/moment/locale/et.js",
      "./et.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/et.js",
      "./eu": "./projects/ngx-time-scheduler/node_modules/moment/locale/eu.js",
      "./eu.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/eu.js",
      "./fa": "./projects/ngx-time-scheduler/node_modules/moment/locale/fa.js",
      "./fa.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/fa.js",
      "./fi": "./projects/ngx-time-scheduler/node_modules/moment/locale/fi.js",
      "./fi.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/fi.js",
      "./fil": "./projects/ngx-time-scheduler/node_modules/moment/locale/fil.js",
      "./fil.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/fil.js",
      "./fo": "./projects/ngx-time-scheduler/node_modules/moment/locale/fo.js",
      "./fo.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/fo.js",
      "./fr": "./projects/ngx-time-scheduler/node_modules/moment/locale/fr.js",
      "./fr-ca": "./projects/ngx-time-scheduler/node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./projects/ngx-time-scheduler/node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/fr.js",
      "./fy": "./projects/ngx-time-scheduler/node_modules/moment/locale/fy.js",
      "./fy.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/fy.js",
      "./ga": "./projects/ngx-time-scheduler/node_modules/moment/locale/ga.js",
      "./ga.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/ga.js",
      "./gd": "./projects/ngx-time-scheduler/node_modules/moment/locale/gd.js",
      "./gd.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/gd.js",
      "./gl": "./projects/ngx-time-scheduler/node_modules/moment/locale/gl.js",
      "./gl.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/gl.js",
      "./gom-deva": "./projects/ngx-time-scheduler/node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./projects/ngx-time-scheduler/node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/gom-latn.js",
      "./gu": "./projects/ngx-time-scheduler/node_modules/moment/locale/gu.js",
      "./gu.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/gu.js",
      "./he": "./projects/ngx-time-scheduler/node_modules/moment/locale/he.js",
      "./he.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/he.js",
      "./hi": "./projects/ngx-time-scheduler/node_modules/moment/locale/hi.js",
      "./hi.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/hi.js",
      "./hr": "./projects/ngx-time-scheduler/node_modules/moment/locale/hr.js",
      "./hr.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/hr.js",
      "./hu": "./projects/ngx-time-scheduler/node_modules/moment/locale/hu.js",
      "./hu.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/hu.js",
      "./hy-am": "./projects/ngx-time-scheduler/node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/hy-am.js",
      "./id": "./projects/ngx-time-scheduler/node_modules/moment/locale/id.js",
      "./id.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/id.js",
      "./is": "./projects/ngx-time-scheduler/node_modules/moment/locale/is.js",
      "./is.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/is.js",
      "./it": "./projects/ngx-time-scheduler/node_modules/moment/locale/it.js",
      "./it-ch": "./projects/ngx-time-scheduler/node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/it-ch.js",
      "./it.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/it.js",
      "./ja": "./projects/ngx-time-scheduler/node_modules/moment/locale/ja.js",
      "./ja.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/ja.js",
      "./jv": "./projects/ngx-time-scheduler/node_modules/moment/locale/jv.js",
      "./jv.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/jv.js",
      "./ka": "./projects/ngx-time-scheduler/node_modules/moment/locale/ka.js",
      "./ka.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/ka.js",
      "./kk": "./projects/ngx-time-scheduler/node_modules/moment/locale/kk.js",
      "./kk.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/kk.js",
      "./km": "./projects/ngx-time-scheduler/node_modules/moment/locale/km.js",
      "./km.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/km.js",
      "./kn": "./projects/ngx-time-scheduler/node_modules/moment/locale/kn.js",
      "./kn.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/kn.js",
      "./ko": "./projects/ngx-time-scheduler/node_modules/moment/locale/ko.js",
      "./ko.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/ko.js",
      "./ku": "./projects/ngx-time-scheduler/node_modules/moment/locale/ku.js",
      "./ku.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/ku.js",
      "./ky": "./projects/ngx-time-scheduler/node_modules/moment/locale/ky.js",
      "./ky.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/ky.js",
      "./lb": "./projects/ngx-time-scheduler/node_modules/moment/locale/lb.js",
      "./lb.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/lb.js",
      "./lo": "./projects/ngx-time-scheduler/node_modules/moment/locale/lo.js",
      "./lo.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/lo.js",
      "./lt": "./projects/ngx-time-scheduler/node_modules/moment/locale/lt.js",
      "./lt.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/lt.js",
      "./lv": "./projects/ngx-time-scheduler/node_modules/moment/locale/lv.js",
      "./lv.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/lv.js",
      "./me": "./projects/ngx-time-scheduler/node_modules/moment/locale/me.js",
      "./me.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/me.js",
      "./mi": "./projects/ngx-time-scheduler/node_modules/moment/locale/mi.js",
      "./mi.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/mi.js",
      "./mk": "./projects/ngx-time-scheduler/node_modules/moment/locale/mk.js",
      "./mk.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/mk.js",
      "./ml": "./projects/ngx-time-scheduler/node_modules/moment/locale/ml.js",
      "./ml.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/ml.js",
      "./mn": "./projects/ngx-time-scheduler/node_modules/moment/locale/mn.js",
      "./mn.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/mn.js",
      "./mr": "./projects/ngx-time-scheduler/node_modules/moment/locale/mr.js",
      "./mr.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/mr.js",
      "./ms": "./projects/ngx-time-scheduler/node_modules/moment/locale/ms.js",
      "./ms-my": "./projects/ngx-time-scheduler/node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/ms-my.js",
      "./ms.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/ms.js",
      "./mt": "./projects/ngx-time-scheduler/node_modules/moment/locale/mt.js",
      "./mt.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/mt.js",
      "./my": "./projects/ngx-time-scheduler/node_modules/moment/locale/my.js",
      "./my.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/my.js",
      "./nb": "./projects/ngx-time-scheduler/node_modules/moment/locale/nb.js",
      "./nb.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/nb.js",
      "./ne": "./projects/ngx-time-scheduler/node_modules/moment/locale/ne.js",
      "./ne.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/ne.js",
      "./nl": "./projects/ngx-time-scheduler/node_modules/moment/locale/nl.js",
      "./nl-be": "./projects/ngx-time-scheduler/node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/nl-be.js",
      "./nl.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/nl.js",
      "./nn": "./projects/ngx-time-scheduler/node_modules/moment/locale/nn.js",
      "./nn.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/nn.js",
      "./oc-lnc": "./projects/ngx-time-scheduler/node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./projects/ngx-time-scheduler/node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/pa-in.js",
      "./pl": "./projects/ngx-time-scheduler/node_modules/moment/locale/pl.js",
      "./pl.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/pl.js",
      "./pt": "./projects/ngx-time-scheduler/node_modules/moment/locale/pt.js",
      "./pt-br": "./projects/ngx-time-scheduler/node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/pt-br.js",
      "./pt.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/pt.js",
      "./ro": "./projects/ngx-time-scheduler/node_modules/moment/locale/ro.js",
      "./ro.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/ro.js",
      "./ru": "./projects/ngx-time-scheduler/node_modules/moment/locale/ru.js",
      "./ru.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/ru.js",
      "./sd": "./projects/ngx-time-scheduler/node_modules/moment/locale/sd.js",
      "./sd.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/sd.js",
      "./se": "./projects/ngx-time-scheduler/node_modules/moment/locale/se.js",
      "./se.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/se.js",
      "./si": "./projects/ngx-time-scheduler/node_modules/moment/locale/si.js",
      "./si.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/si.js",
      "./sk": "./projects/ngx-time-scheduler/node_modules/moment/locale/sk.js",
      "./sk.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/sk.js",
      "./sl": "./projects/ngx-time-scheduler/node_modules/moment/locale/sl.js",
      "./sl.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/sl.js",
      "./sq": "./projects/ngx-time-scheduler/node_modules/moment/locale/sq.js",
      "./sq.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/sq.js",
      "./sr": "./projects/ngx-time-scheduler/node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./projects/ngx-time-scheduler/node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/sr.js",
      "./ss": "./projects/ngx-time-scheduler/node_modules/moment/locale/ss.js",
      "./ss.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/ss.js",
      "./sv": "./projects/ngx-time-scheduler/node_modules/moment/locale/sv.js",
      "./sv.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/sv.js",
      "./sw": "./projects/ngx-time-scheduler/node_modules/moment/locale/sw.js",
      "./sw.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/sw.js",
      "./ta": "./projects/ngx-time-scheduler/node_modules/moment/locale/ta.js",
      "./ta.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/ta.js",
      "./te": "./projects/ngx-time-scheduler/node_modules/moment/locale/te.js",
      "./te.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/te.js",
      "./tet": "./projects/ngx-time-scheduler/node_modules/moment/locale/tet.js",
      "./tet.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/tet.js",
      "./tg": "./projects/ngx-time-scheduler/node_modules/moment/locale/tg.js",
      "./tg.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/tg.js",
      "./th": "./projects/ngx-time-scheduler/node_modules/moment/locale/th.js",
      "./th.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/th.js",
      "./tk": "./projects/ngx-time-scheduler/node_modules/moment/locale/tk.js",
      "./tk.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/tk.js",
      "./tl-ph": "./projects/ngx-time-scheduler/node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/tl-ph.js",
      "./tlh": "./projects/ngx-time-scheduler/node_modules/moment/locale/tlh.js",
      "./tlh.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/tlh.js",
      "./tr": "./projects/ngx-time-scheduler/node_modules/moment/locale/tr.js",
      "./tr.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/tr.js",
      "./tzl": "./projects/ngx-time-scheduler/node_modules/moment/locale/tzl.js",
      "./tzl.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/tzl.js",
      "./tzm": "./projects/ngx-time-scheduler/node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./projects/ngx-time-scheduler/node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/tzm.js",
      "./ug-cn": "./projects/ngx-time-scheduler/node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/ug-cn.js",
      "./uk": "./projects/ngx-time-scheduler/node_modules/moment/locale/uk.js",
      "./uk.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/uk.js",
      "./ur": "./projects/ngx-time-scheduler/node_modules/moment/locale/ur.js",
      "./ur.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/ur.js",
      "./uz": "./projects/ngx-time-scheduler/node_modules/moment/locale/uz.js",
      "./uz-latn": "./projects/ngx-time-scheduler/node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/uz.js",
      "./vi": "./projects/ngx-time-scheduler/node_modules/moment/locale/vi.js",
      "./vi.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/vi.js",
      "./x-pseudo": "./projects/ngx-time-scheduler/node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/x-pseudo.js",
      "./yo": "./projects/ngx-time-scheduler/node_modules/moment/locale/yo.js",
      "./yo.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/yo.js",
      "./zh-cn": "./projects/ngx-time-scheduler/node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./projects/ngx-time-scheduler/node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./projects/ngx-time-scheduler/node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./projects/ngx-time-scheduler/node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./projects/ngx-time-scheduler/node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./projects/ngx-time-scheduler/node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./projects/ngx-time-scheduler/src/lib/ngx-time-scheduler.component.ts":
  /*!*****************************************************************************!*\
    !*** ./projects/ngx-time-scheduler/src/lib/ngx-time-scheduler.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: NgxTimeSchedulerComponent */

  /***/
  function projectsNgxTimeSchedulerSrcLibNgxTimeSchedulerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxTimeSchedulerComponent", function () {
      return NgxTimeSchedulerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./projects/ngx-time-scheduler/node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_time_scheduler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ngx-time-scheduler.service */
    "./projects/ngx-time-scheduler/src/lib/ngx-time-scheduler.service.ts");
    /* harmony import */


    var _ngx_time_scheduler_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ngx-time-scheduler.model */
    "./projects/ngx-time-scheduler/src/lib/ngx-time-scheduler.model.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment */
    "./projects/ngx-time-scheduler/node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./projects/ngx-time-scheduler/node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./projects/ngx-time-scheduler/node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./projects/ngx-time-scheduler/node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");

    var _c0 = ["sectionTd"];
    var _c1 = ["items", "", "periods", "", "sections", ""];

    function NgxTimeSchedulerComponent_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxTimeSchedulerComponent_button_3_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var period_r8 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.changePeriod(period_r8);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var period_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", period_r8.classes)("title", period_r8.tooltip ? period_r8.tooltip : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", period_r8.name, " ");
      }
    }

    function NgxTimeSchedulerComponent_button_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxTimeSchedulerComponent_button_5_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.showGotoModal = !ctx_r11.showGotoModal;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.text.GotoButton);
      }
    }

    function NgxTimeSchedulerComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NgxTimeSchedulerComponent_div_6_Template_input_change_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.gotoDate($event.target.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NgxTimeSchedulerComponent_button_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxTimeSchedulerComponent_button_7_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.gotoToday();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.text.TodayButton);
      }
    }

    function NgxTimeSchedulerComponent_tr_16_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowSpan", ctx_r19.periods.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r19.text.SectionTitle, " ");
      }
    }

    function NgxTimeSchedulerComponent_tr_16_td_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var dateTime_r21 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colSpan", dateTime_r21.colspan)("title", dateTime_r21.tooltip ? dateTime_r21.tooltip : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dateTime_r21.name, " ");
      }
    }

    function NgxTimeSchedulerComponent_tr_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxTimeSchedulerComponent_tr_16_td_1_Template, 2, 2, "td", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxTimeSchedulerComponent_tr_16_td_2_Template, 2, 3, "td", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var timeFrameHeader_r17 = ctx.$implicit;
        var i_r18 = ctx.index;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r18 === 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", timeFrameHeader_r17.headerDetails)("ngForTrackBy", ctx_r4.trackByFn);
      }
    }

    function NgxTimeSchedulerComponent_tr_19_td_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td");
      }
    }

    function NgxTimeSchedulerComponent_tr_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 24, 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxTimeSchedulerComponent_tr_19_Template_td_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var sectionItem_r22 = ctx.$implicit;

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.events.SectionClickEvent ? ctx_r26.events.SectionClickEvent(sectionItem_r22.section) : false;
        })("contextmenu", function NgxTimeSchedulerComponent_tr_19_Template_td_contextmenu_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var sectionItem_r22 = ctx.$implicit;

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.events.SectionContextMenuEvent ? ctx_r28.events.SectionContextMenuEvent(sectionItem_r22.section, $event) : false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgxTimeSchedulerComponent_tr_19_td_4_Template, 1, 0, "td", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var sectionItem_r22 = ctx.$implicit;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", sectionItem_r22.minRowHeight + "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("cursor", ctx_r5.events.SectionClickEvent ? "pointer" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", sectionItem_r22.section.tooltip ? sectionItem_r22.section.tooltip : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sectionItem_r22.section.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.header[ctx_r5.header.length - 1].headerDetails)("ngForTrackBy", ctx_r5.trackByFn);
      }
    }

    function NgxTimeSchedulerComponent_div_21_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 33);
      }

      if (rf & 2) {
        var itemMeta_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx_r32.minRowHeight - 6 + "px")("left", itemMeta_r31.cssLeft + "%")("width", "calc(" + itemMeta_r31.cssWidth + "% - 6px)");
      }
    }

    function NgxTimeSchedulerComponent_div_21_div_1_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 34);
      }
    }

    function NgxTimeSchedulerComponent_div_21_div_1_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 35);
      }
    }

    function NgxTimeSchedulerComponent_div_21_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxTimeSchedulerComponent_div_21_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var itemMeta_r31 = ctx.$implicit;

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r36.events.ItemClicked ? ctx_r36.events.ItemClicked(itemMeta_r31.item) : false;
        })("contextmenu", function NgxTimeSchedulerComponent_div_21_div_1_Template_div_contextmenu_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var itemMeta_r31 = ctx.$implicit;

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r38.events.ItemContextMenu ? ctx_r38.events.ItemContextMenu(itemMeta_r31.item, $event) : false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxTimeSchedulerComponent_div_21_div_1_div_1_Template, 1, 6, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxTimeSchedulerComponent_div_21_div_1_div_2_Template, 1, 0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgxTimeSchedulerComponent_div_21_div_1_div_5_Template, 1, 0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var itemMeta_r31 = ctx.$implicit;

        var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx_r30.minRowHeight + "px")("top", itemMeta_r31.cssTop + "px")("left", itemMeta_r31.cssLeft + "%")("width", itemMeta_r31.cssWidth + "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDragData", itemMeta_r31.item)("cdkDragDisabled", !ctx_r30.allowDragging)("ngClass", itemMeta_r31.item.classes);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", itemMeta_r31.isStart);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", itemMeta_r31.item.tooltip ? itemMeta_r31.item.tooltip : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", itemMeta_r31.item.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", itemMeta_r31.isEnd);
      }
    }

    function NgxTimeSchedulerComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function NgxTimeSchedulerComponent_div_21_Template_div_cdkDropListDropped_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r39.drop($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxTimeSchedulerComponent_div_21_div_1_Template, 6, 15, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var sectionItem_r29 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", sectionItem_r29.minRowHeight + "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", sectionItem_r29.section);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", sectionItem_r29.itemMetas);
      }
    }

    function NgxTimeSchedulerComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 36);
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx_r7.currentTimeVisibility)("left", ctx_r7.currentTimeIndicatorPosition);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r7.currentTimeTitle);
      }
    }

    var moment = moment__WEBPACK_IMPORTED_MODULE_3__;

    var NgxTimeSchedulerComponent = /*#__PURE__*/function () {
      function NgxTimeSchedulerComponent(changeDetector, service) {
        var _this = this;

        _classCallCheck(this, NgxTimeSchedulerComponent);

        this.changeDetector = changeDetector;
        this.service = service;
        this.currentTimeFormat = 'DD-MMM-YYYY HH:mm';
        this.showCurrentTime = true;
        this.showGoto = true;
        this.showToday = true;
        this.allowDragging = false; // @Input() allowResizing = false;

        this.locale = '';
        this.showBusinessDayOnly = false;
        this.headerFormat = 'Do MMM YYYY';
        this.minRowHeight = 40;
        this.maxHeight = null;
        this.text = new _ngx_time_scheduler_model__WEBPACK_IMPORTED_MODULE_2__["Text"]();
        this.events = new _ngx_time_scheduler_model__WEBPACK_IMPORTED_MODULE_2__["Events"]();
        this.start = moment().startOf('day');
        this.end = moment().endOf('day');
        this.showGotoModal = false;
        this.currentTimeVisibility = 'visible';
        this.ShowCurrentTimeHandle = null;
        this.SectionLeftMeasure = '0';
        this.currentPeriodMinuteDiff = 0;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();

        this.showCurrentTimeIndicator = function () {
          if (_this.ShowCurrentTimeHandle) {
            clearTimeout(_this.ShowCurrentTimeHandle);
          }

          var currentTime = moment();

          if (currentTime >= _this.start && currentTime <= _this.end) {
            _this.currentTimeVisibility = 'visible';
            _this.currentTimeIndicatorPosition = Math.abs(_this.start.diff(currentTime, 'minutes')) / _this.currentPeriodMinuteDiff * 100 + '%';
            _this.currentTimeTitle = currentTime.format(_this.currentTimeFormat);
          } else {
            _this.currentTimeVisibility = 'hidden';
          }

          _this.ShowCurrentTimeHandle = setTimeout(_this.showCurrentTimeIndicator, 30000);
        };

        moment.locale(this.locale);
      }

      _createClass(NgxTimeSchedulerComponent, [{
        key: "SectionTd",
        set: function set(elementRef) {
          this.SectionLeftMeasure = elementRef.nativeElement.clientWidth + 'px';
          this.changeDetector.detectChanges();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setSectionsInSectionItems();
          this.changePeriod(this.periods[0], false);
          this.itemPush();
          this.itemPop();
          this.itemRemove();
          this.sectionPush();
          this.sectionPop();
          this.sectionRemove();
          this.refresh();
        }
      }, {
        key: "refreshView",
        value: function refreshView() {
          this.setSectionsInSectionItems();
          this.changePeriod(this.currentPeriod, false);
        }
      }, {
        key: "trackByFn",
        value: function trackByFn(index, item) {
          return index;
        }
      }, {
        key: "setSectionsInSectionItems",
        value: function setSectionsInSectionItems() {
          var _this2 = this;

          this.sectionItems = new Array();
          this.sections.forEach(function (section) {
            var perSectionItem = new _ngx_time_scheduler_model__WEBPACK_IMPORTED_MODULE_2__["SectionItem"]();
            perSectionItem.section = section;
            perSectionItem.minRowHeight = _this2.minRowHeight;

            _this2.sectionItems.push(perSectionItem);
          });
        }
      }, {
        key: "setItemsInSectionItems",
        value: function setItemsInSectionItems() {
          var _this3 = this;

          var itemMetas = new Array();
          this.sectionItems.forEach(function (ele) {
            ele.itemMetas = new Array();
            ele.minRowHeight = _this3.minRowHeight;

            _this3.items.filter(function (i) {
              var itemMeta = new _ngx_time_scheduler_model__WEBPACK_IMPORTED_MODULE_2__["ItemMeta"]();

              if (i.sectionID === ele.section.id) {
                itemMeta.item = i;

                if (itemMeta.item.start <= _this3.end && itemMeta.item.end >= _this3.start) {
                  itemMeta = _this3.itemMetaCal(itemMeta);
                  ele.itemMetas.push(itemMeta);
                  itemMetas.push(itemMeta);
                }
              }
            });
          });
          var sortedItems = itemMetas.reduce(function (sortItems, itemMeta) {
            var index = _this3.sectionItems.findIndex(function (sectionItem) {
              return sectionItem.section.id === itemMeta.item.sectionID;
            });

            if (!sortItems[index]) {
              sortItems[index] = [];
            }

            sortItems[index].push(itemMeta);
            return sortItems;
          }, {});
          this.calCssTop(sortedItems);
        }
      }, {
        key: "itemMetaCal",
        value: function itemMetaCal(itemMeta) {
          var foundStart = moment.max(itemMeta.item.start, this.start);
          var foundEnd = moment.min(itemMeta.item.end, this.end);
          var widthMinuteDiff = Math.abs(foundStart.diff(foundEnd, 'minutes'));
          var leftMinuteDiff = foundStart.diff(this.start, 'minutes');

          if (this.showBusinessDayOnly) {
            widthMinuteDiff -= this.getNumberOfWeekendDays(moment(foundStart), moment(foundEnd)) * this.currentPeriod.timeFramePeriod;
            leftMinuteDiff -= this.getNumberOfWeekendDays(moment(this.start), moment(foundStart)) * this.currentPeriod.timeFramePeriod;
          }

          itemMeta.cssLeft = leftMinuteDiff / this.currentPeriodMinuteDiff * 100;
          itemMeta.cssWidth = widthMinuteDiff / this.currentPeriodMinuteDiff * 100;

          if (itemMeta.item.start >= this.start) {
            itemMeta.isStart = true;
          }

          if (itemMeta.item.end <= this.end) {
            itemMeta.isEnd = true;
          }

          return itemMeta;
        }
      }, {
        key: "calCssTop",
        value: function calCssTop(sortedItems) {
          for (var _i = 0, _Object$keys = Object.keys(sortedItems); _i < _Object$keys.length; _i++) {
            var prop = _Object$keys[_i];

            for (var i = 0; i < sortedItems[prop].length; i++) {
              var elemBottom = void 0;
              var elem = sortedItems[prop][i];

              for (var prev = 0; prev < i; prev++) {
                var prevElem = sortedItems[prop][prev];
                var prevElemBottom = prevElem.cssTop + this.minRowHeight;
                elemBottom = elem.cssTop + this.minRowHeight;

                if ((prevElem.item.start <= elem.item.start && elem.item.start <= prevElem.item.end || prevElem.item.start <= elem.item.end && elem.item.end <= prevElem.item.end || prevElem.item.start >= elem.item.start && elem.item.end >= prevElem.item.end) && (prevElem.cssTop <= elem.cssTop && elem.cssTop <= prevElemBottom || prevElem.cssTop <= elemBottom && elemBottom <= prevElemBottom)) {
                  elem.cssTop = prevElemBottom + 1;
                  prev = 0;
                }
              }

              elemBottom = elem.cssTop + this.minRowHeight + 1;

              if (this.sectionItems[Number(prop)] && elemBottom > this.sectionItems[Number(prop)].minRowHeight) {
                this.sectionItems[Number(prop)].minRowHeight = elemBottom;
              }
            }
          }
        }
      }, {
        key: "changePeriod",
        value: function changePeriod(period) {
          var _this4 = this;

          var userTrigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          this.currentPeriod = period;
          var _start = this.start;
          this.end = moment(_start).add(this.currentPeriod.timeFrameOverall, 'minutes').endOf('day');
          this.currentPeriodMinuteDiff = Math.abs(this.start.diff(this.end, 'minutes'));

          if (userTrigger && this.events.PeriodChange) {
            this.events.PeriodChange(this.start, this.end);
          }

          if (this.showBusinessDayOnly) {
            this.currentPeriodMinuteDiff -= this.getNumberOfWeekendDays(moment(this.start), moment(this.end)) * this.currentPeriod.timeFramePeriod;
          }

          this.header = new Array();
          this.currentPeriod.timeFrameHeaders.forEach(function (ele, index) {
            _this4.header.push(_this4.getDatesBetweenTwoDates(ele, index));
          });
          this.setItemsInSectionItems();
          this.showCurrentTimeIndicator();
        }
      }, {
        key: "gotoToday",
        value: function gotoToday() {
          this.start = moment().startOf('day');
          this.changePeriod(this.currentPeriod);
        }
      }, {
        key: "nextPeriod",
        value: function nextPeriod() {
          this.start.add(this.currentPeriod.timeFrameOverall, 'minutes');
          this.changePeriod(this.currentPeriod);
        }
      }, {
        key: "previousPeriod",
        value: function previousPeriod() {
          this.start.subtract(this.currentPeriod.timeFrameOverall, 'minutes');
          this.changePeriod(this.currentPeriod);
        }
      }, {
        key: "gotoDate",
        value: function gotoDate(event) {
          this.showGotoModal = false;
          this.start = moment(event).startOf('day');
          this.changePeriod(this.currentPeriod);
        }
      }, {
        key: "getDatesBetweenTwoDates",
        value: function getDatesBetweenTwoDates(format, index) {
          var now = moment(this.start);
          var dates = new _ngx_time_scheduler_model__WEBPACK_IMPORTED_MODULE_2__["Header"]();
          var prev;
          var colspan = 0;

          while (now.isBefore(this.end) || now.isSame(this.end)) {
            if (!this.showBusinessDayOnly || now.day() !== 0 && now.day() !== 6) {
              var headerDetails = new _ngx_time_scheduler_model__WEBPACK_IMPORTED_MODULE_2__["HeaderDetails"]();
              headerDetails.name = now.locale(this.locale).format(format);

              if (prev && prev !== headerDetails.name) {
                colspan = 1;
              } else {
                colspan++;
                dates.headerDetails.pop();
              }

              prev = headerDetails.name;
              headerDetails.colspan = colspan;
              headerDetails.tooltip = this.currentPeriod.timeFrameHeadersTooltip && this.currentPeriod.timeFrameHeadersTooltip[index] ? now.locale(this.locale).format(this.currentPeriod.timeFrameHeadersTooltip[index]) : '';
              dates.headerDetails.push(headerDetails);
            }

            now.add(this.currentPeriod.timeFramePeriod, 'minutes');
          }

          return dates;
        }
      }, {
        key: "getNumberOfWeekendDays",
        value: function getNumberOfWeekendDays(startDate, endDate) {
          var count = 0;

          while (startDate.isBefore(endDate) || startDate.isSame(endDate)) {
            if (startDate.day() === 0 || startDate.day() === 6) {
              count++;
            }

            startDate.add(this.currentPeriod.timeFramePeriod, 'minutes');
          }

          return count;
        }
      }, {
        key: "drop",
        value: function drop(event) {
          event.item.data.sectionID = event.container.data.id;
          this.refreshView();
          this.events.ItemDropped(event.item.data);
        }
      }, {
        key: "itemPush",
        value: function itemPush() {
          var _this5 = this;

          this.subscription.add(this.service.itemAdd.asObservable().subscribe(function (item) {
            _this5.items.push(item);

            _this5.refreshView();
          }));
        }
      }, {
        key: "itemPop",
        value: function itemPop() {
          var _this6 = this;

          this.subscription.add(this.service.item.asObservable().subscribe(function () {
            _this6.items.pop();

            _this6.refreshView();
          }));
        }
      }, {
        key: "itemRemove",
        value: function itemRemove() {
          var _this7 = this;

          this.subscription.add(this.service.itemId.asObservable().subscribe(function (itemId) {
            _this7.items.splice(_this7.items.findIndex(function (item) {
              return item.id === itemId;
            }), 1);

            _this7.refreshView();
          }));
        }
      }, {
        key: "sectionPush",
        value: function sectionPush() {
          var _this8 = this;

          this.subscription.add(this.service.sectionAdd.asObservable().subscribe(function (section) {
            _this8.sections.push(section);

            _this8.refreshView();
          }));
        }
      }, {
        key: "sectionPop",
        value: function sectionPop() {
          var _this9 = this;

          this.subscription.add(this.service.section.asObservable().subscribe(function () {
            _this9.sections.pop();

            _this9.refreshView();
          }));
        }
      }, {
        key: "sectionRemove",
        value: function sectionRemove() {
          var _this10 = this;

          this.subscription.add(this.service.sectionId.asObservable().subscribe(function (sectionId) {
            _this10.sections.splice(_this10.sections.findIndex(function (section) {
              return section.id === sectionId;
            }), 1);

            _this10.refreshView();
          }));
        }
      }, {
        key: "refresh",
        value: function refresh() {
          var _this11 = this;

          this.subscription.add(this.service.refreshView.asObservable().subscribe(function () {
            _this11.refreshView();
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
        }
      }]);

      return NgxTimeSchedulerComponent;
    }();

    NgxTimeSchedulerComponent.ɵfac = function NgxTimeSchedulerComponent_Factory(t) {
      return new (t || NgxTimeSchedulerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_time_scheduler_service__WEBPACK_IMPORTED_MODULE_1__["NgxTimeSchedulerService"]));
    };

    NgxTimeSchedulerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NgxTimeSchedulerComponent,
      selectors: [["ngx-ts", "items", "", "periods", "", "sections", ""]],
      viewQuery: function NgxTimeSchedulerComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.SectionTd = _t.first);
        }
      },
      inputs: {
        currentTimeFormat: "currentTimeFormat",
        showCurrentTime: "showCurrentTime",
        showGoto: "showGoto",
        showToday: "showToday",
        allowDragging: "allowDragging",
        locale: "locale",
        showBusinessDayOnly: "showBusinessDayOnly",
        headerFormat: "headerFormat",
        minRowHeight: "minRowHeight",
        maxHeight: "maxHeight",
        text: "text",
        items: "items",
        sections: "sections",
        periods: "periods",
        events: "events",
        start: "start"
      },
      attrs: _c1,
      decls: 23,
      vars: 18,
      consts: [[1, "time-sch-wrapper"], [1, "time-sch-header-wrapper", "mb-1"], [1, "time-sch-period-container"], ["class", "btn", 3, "ngClass", "title", "click", 4, "ngFor", "ngForOf"], [1, "time-sch-time-container"], ["class", "btn", 3, "click", 4, "ngIf"], ["class", "goto-modal", 4, "ngIf"], [1, "btn", 3, "click"], [1, "text-center", "m-0"], [1, "time-sch-table-wrapper"], [1, "time-sch-table"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "time-sch-content-wrap"], [3, "height", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["cdkDropListGroup", "", 1, "time-sch-section-wrapper"], ["class", "time-sch-section-container", "cdkDropList", "", "cdkDropListSortingDisabled", "", 3, "cdkDropListData", "height", "cdkDropListDropped", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "time-sch-current-time", 3, "title", "visibility", "left", 4, "ngIf"], [1, "btn", 3, "ngClass", "title", "click"], [1, "goto-modal"], ["type", "date", 3, "change"], ["class", "time-sch-section text-center", 3, "rowSpan", 4, "ngIf"], ["class", "text-center", 3, "colSpan", "title", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "time-sch-section", "text-center", 3, "rowSpan"], [1, "text-center", 3, "colSpan", "title"], [1, "time-sch-section", "text-center", 3, "title", "click", "contextmenu"], ["sectionTd", ""], ["cdkDropList", "", "cdkDropListSortingDisabled", "", 1, "time-sch-section-container", 3, "cdkDropListData", "cdkDropListDropped"], ["class", "time-sch-item", "cdkDrag", "", "cdkDragLockAxis", "y", "cdkDragBoundary", ".time-sch-section-wrapper", 3, "cdkDragData", "cdkDragDisabled", "ngClass", "height", "top", "left", "width", "click", "contextmenu", 4, "ngFor", "ngForOf"], ["cdkDrag", "", "cdkDragLockAxis", "y", "cdkDragBoundary", ".time-sch-section-wrapper", 1, "time-sch-item", 3, "cdkDragData", "cdkDragDisabled", "ngClass", "click", "contextmenu"], ["class", "item-drag-placeholder", 3, "height", "left", "width", 4, "cdkDragPlaceholder"], ["class", "time-sch-item-start", 4, "ngIf"], [1, "time-sch-item-content", 3, "title"], ["class", "time-sch-item-end", 4, "ngIf"], [1, "item-drag-placeholder"], [1, "time-sch-item-start"], [1, "time-sch-item-end"], [1, "time-sch-current-time", 3, "title"]],
      template: function NgxTimeSchedulerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgxTimeSchedulerComponent_button_3_Template, 2, 3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgxTimeSchedulerComponent_button_5_Template, 2, 1, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NgxTimeSchedulerComponent_div_6_Template, 3, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NgxTimeSchedulerComponent_button_7_Template, 2, 1, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxTimeSchedulerComponent_Template_button_click_8_listener() {
            return ctx.previousPeriod();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxTimeSchedulerComponent_Template_button_click_10_listener() {
            return ctx.nextPeriod();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "table", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NgxTimeSchedulerComponent_tr_16_Template, 3, 3, "tr", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "table", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NgxTimeSchedulerComponent_tr_19_Template, 5, 8, "tr", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, NgxTimeSchedulerComponent_div_21_Template, 2, 4, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, NgxTimeSchedulerComponent_div_22_Template, 1, 5, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.maxHeight);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.periods);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showGoto);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showGotoModal);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showToday);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text.PrevButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text.NextButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.start.locale(ctx.locale).format(ctx.headerFormat) + " - " + ctx.end.locale(ctx.locale).format(ctx.headerFormat), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.header)("ngForTrackBy", ctx.trackByFn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sectionItems)("ngForTrackBy", ctx.trackByFn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx.SectionLeftMeasure);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sectionItems)("ngForTrackBy", ctx.trackByFn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showCurrentTime);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDropListGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDropList"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDrag"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDragPlaceholder"]],
      styles: [".d-inline-block[_ngcontent-%COMP%] {\r\n  display: inline-block !important;\r\n}\r\n\r\n.text-center[_ngcontent-%COMP%] {\r\n  text-align: center !important;\r\n}\r\n\r\n.m-0[_ngcontent-%COMP%] {\r\n  margin: 0 !important;\r\n}\r\n\r\n.mb-1[_ngcontent-%COMP%] {\r\n  margin-bottom: 1rem !important;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  border: 1px solid #E1E1E1;\r\n  font-weight: 600;\r\n  text-decoration: none;\r\n  color: #222222;\r\n  height: 30px;\r\n  padding: .5em 1em;\r\n  cursor: pointer;\r\n  margin: 0.2rem;\r\n  border-radius: 4px;\r\n}\r\n\r\n.goto-modal[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 0;\r\n  height: auto;\r\n  width: auto;\r\n  border-radius: 4px;\r\n  background-color: #dddddd;\r\n  padding: 5px;\r\n  text-align: left;\r\n  z-index: 1;\r\n}\r\n\r\n.time-sch-wrapper[_ngcontent-%COMP%] {\r\n  overflow: auto;\r\n}\r\n\r\n.time-sch-wrapper[_ngcontent-%COMP%], .time-sch-header-wrapper[_ngcontent-%COMP%], .time-sch-table-wrapper[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.time-sch-header-wrapper[_ngcontent-%COMP%] {\r\n  padding: .5em;\r\n  margin-bottom: .5em;\r\n}\r\n\r\n.time-sch-table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  table-layout: fixed;\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\n.time-sch-period-container[_ngcontent-%COMP%] {\r\n  float: left;\r\n  position: relative;\r\n}\r\n\r\n.time-sch-time-container[_ngcontent-%COMP%] {\r\n  float: right;\r\n  position: relative;\r\n}\r\n\r\n.time-sch-wrapper[_ngcontent-%COMP%]   .time-sch-section[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n}\r\n\r\n.time-sch-wrapper[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .time-sch-wrapper[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  border-width: 1px;\r\n  border-style: solid;\r\n  border-top-color: #E1E1E1;\r\n  border-bottom-color: #E1E1E1;\r\n  border-left-color: #C1C1C1;\r\n  border-right-color: #C1C1C1;\r\n}\r\n\r\n.time-sch-content-wrap[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.time-sch-section-wrapper[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  z-index: 1;\r\n  padding-left: 1px;\r\n  padding-right: 1px;\r\n}\r\n\r\n.time-sch-section-container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.time-sch-item[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  min-height: 1em;\r\n  clear: both;\r\n  background-color: #2299DD;\r\n  color: white;\r\n  border-radius: 2px;\r\n  cursor: pointer;\r\n  transition: background-color ease 0.1s;\r\n  border-width: 1px;\r\n  border-style: solid;\r\n  border-color: #C1C1C1;\r\n}\r\n\r\n.time-sch-item-content[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  position: relative;\r\n  z-index: 1;\r\n  padding: 4px 0 4px 6px;\r\n}\r\n\r\n.time-sch-item-start[_ngcontent-%COMP%], .time-sch-item-end[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 2px;\r\n  bottom: 2px;\r\n}\r\n\r\n.time-sch-item-start[_ngcontent-%COMP%] {\r\n  left: 1px;\r\n  border-right: 2px dotted #FFFFFF;\r\n}\r\n\r\n.time-sch-item-end[_ngcontent-%COMP%] {\r\n  right: 1px;\r\n  border-left: 2px dotted #FFFFFF;\r\n}\r\n\r\n.time-sch-current-time[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  z-index: 2;\r\n  background: transparent;\r\n  border-left-style: dotted;\r\n  border-left-width: 1px;\r\n  border-left-color: #000000;\r\n}\r\n\r\n.item-drag-placeholder[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  background: #ccc;\r\n  border: dotted 3px #999;\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC10aW1lLXNjaGVkdWxlci9zcmMvbGliL25neC10aW1lLXNjaGVkdWxlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHNDQUFzQztFQUN0QyxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsVUFBVTtFQUNWLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLHNEQUFzRDtBQUN4RCIsImZpbGUiOiJwcm9qZWN0cy9uZ3gtdGltZS1zY2hlZHVsZXIvc3JjL2xpYi9uZ3gtdGltZS1zY2hlZHVsZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kLWlubGluZS1ibG9jayB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLTAge1xyXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWItMSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRTFFMUUxO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjMjIyMjIyO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBwYWRkaW5nOiAuNWVtIDFlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luOiAwLjJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uZ290by1tb2RhbCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4udGltZS1zY2gtd3JhcHBlciB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi50aW1lLXNjaC13cmFwcGVyLCAudGltZS1zY2gtaGVhZGVyLXdyYXBwZXIsIC50aW1lLXNjaC10YWJsZS13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi50aW1lLXNjaC1oZWFkZXItd3JhcHBlciB7XHJcbiAgcGFkZGluZzogLjVlbTtcclxuICBtYXJnaW4tYm90dG9tOiAuNWVtO1xyXG59XHJcblxyXG4udGltZS1zY2gtdGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBib3JkZXItc3BhY2luZzogMDtcclxufVxyXG5cclxuLnRpbWUtc2NoLXBlcmlvZC1jb250YWluZXIge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnRpbWUtc2NoLXRpbWUtY29udGFpbmVyIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udGltZS1zY2gtd3JhcHBlciAudGltZS1zY2gtc2VjdGlvbiB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4udGltZS1zY2gtd3JhcHBlciB0aCwgLnRpbWUtc2NoLXdyYXBwZXIgdGQge1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogI0UxRTFFMTtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjRTFFMUUxO1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjQzFDMUMxO1xyXG4gIGJvcmRlci1yaWdodC1jb2xvcjogI0MxQzFDMTtcclxufVxyXG5cclxuLnRpbWUtc2NoLWNvbnRlbnQtd3JhcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5cclxuLnRpbWUtc2NoLXNlY3Rpb24td3JhcHBlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgei1pbmRleDogMTtcclxuICBwYWRkaW5nLWxlZnQ6IDFweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxcHg7XHJcbn1cclxuXHJcbi50aW1lLXNjaC1zZWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi50aW1lLXNjaC1pdGVtIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWluLWhlaWdodDogMWVtO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjk5REQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciBlYXNlIDAuMXM7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6ICNDMUMxQzE7XHJcbn1cclxuXHJcbi50aW1lLXNjaC1pdGVtLWNvbnRlbnQge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICBwYWRkaW5nOiA0cHggMCA0cHggNnB4O1xyXG59XHJcblxyXG4udGltZS1zY2gtaXRlbS1zdGFydCwgLnRpbWUtc2NoLWl0ZW0tZW5kIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAycHg7XHJcbiAgYm90dG9tOiAycHg7XHJcbn1cclxuXHJcbi50aW1lLXNjaC1pdGVtLXN0YXJ0IHtcclxuICBsZWZ0OiAxcHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAycHggZG90dGVkICNGRkZGRkY7XHJcbn1cclxuXHJcbi50aW1lLXNjaC1pdGVtLWVuZCB7XHJcbiAgcmlnaHQ6IDFweDtcclxuICBib3JkZXItbGVmdDogMnB4IGRvdHRlZCAjRkZGRkZGO1xyXG59XHJcblxyXG4udGltZS1zY2gtY3VycmVudC10aW1lIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB6LWluZGV4OiAyO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBkb3R0ZWQ7XHJcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDFweDtcclxuICBib3JkZXItbGVmdC1jb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLml0ZW0tZHJhZy1wbGFjZWhvbGRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgYm9yZGVyOiBkb3R0ZWQgM3B4ICM5OTk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxTimeSchedulerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ngx-ts[items][periods][sections]',
          templateUrl: './ngx-time-scheduler.component.html',
          styleUrls: ['./ngx-time-scheduler.component.css']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _ngx_time_scheduler_service__WEBPACK_IMPORTED_MODULE_1__["NgxTimeSchedulerService"]
        }];
      }, {
        SectionTd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['sectionTd']
        }],
        currentTimeFormat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showCurrentTime: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showGoto: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showToday: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        allowDragging: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showBusinessDayOnly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        headerFormat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        minRowHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        sections: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        periods: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        events: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        start: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./projects/ngx-time-scheduler/src/lib/ngx-time-scheduler.model.ts":
  /*!*************************************************************************!*\
    !*** ./projects/ngx-time-scheduler/src/lib/ngx-time-scheduler.model.ts ***!
    \*************************************************************************/

  /*! exports provided: Period, Item, Section, Text, Events, SectionItem, ItemMeta, Header, HeaderDetails */

  /***/
  function projectsNgxTimeSchedulerSrcLibNgxTimeSchedulerModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Period", function () {
      return Period;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Item", function () {
      return Item;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Section", function () {
      return Section;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Text", function () {
      return Text;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Events", function () {
      return Events;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SectionItem", function () {
      return SectionItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemMeta", function () {
      return ItemMeta;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Header", function () {
      return Header;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderDetails", function () {
      return HeaderDetails;
    });

    var Period = /*#__PURE__*/_createClass(function Period() {
      _classCallCheck(this, Period);
    });

    var Item = /*#__PURE__*/_createClass(function Item() {
      _classCallCheck(this, Item);
    });

    var Section = /*#__PURE__*/_createClass(function Section() {
      _classCallCheck(this, Section);
    });

    var Text = /*#__PURE__*/_createClass(function Text() {
      _classCallCheck(this, Text);

      this.NextButton = 'Next';
      this.PrevButton = 'Prev';
      this.TodayButton = 'Today';
      this.GotoButton = 'Go to';
      this.SectionTitle = 'Section';
    });

    var Events = /*#__PURE__*/_createClass(function Events() {
      _classCallCheck(this, Events);
    });

    var SectionItem = /*#__PURE__*/_createClass(function SectionItem() {
      _classCallCheck(this, SectionItem);

      this.itemMetas = new Array();
    });

    var ItemMeta = /*#__PURE__*/_createClass(function ItemMeta() {
      _classCallCheck(this, ItemMeta);

      this.cssTop = 0;
      this.cssLeft = 0;
      this.cssWidth = 0;
    });

    var Header = /*#__PURE__*/_createClass(function Header() {
      _classCallCheck(this, Header);

      this.headerDetails = new Array();
    });

    var HeaderDetails = /*#__PURE__*/_createClass(function HeaderDetails() {
      _classCallCheck(this, HeaderDetails);
    });
    /***/

  },

  /***/
  "./projects/ngx-time-scheduler/src/lib/ngx-time-scheduler.module.ts":
  /*!**************************************************************************!*\
    !*** ./projects/ngx-time-scheduler/src/lib/ngx-time-scheduler.module.ts ***!
    \**************************************************************************/

  /*! exports provided: NgxTimeSchedulerModule */

  /***/
  function projectsNgxTimeSchedulerSrcLibNgxTimeSchedulerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxTimeSchedulerModule", function () {
      return NgxTimeSchedulerModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./projects/ngx-time-scheduler/node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_time_scheduler_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ngx-time-scheduler.component */
    "./projects/ngx-time-scheduler/src/lib/ngx-time-scheduler.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./projects/ngx-time-scheduler/node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./projects/ngx-time-scheduler/node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");

    var NgxTimeSchedulerModule = /*#__PURE__*/_createClass(function NgxTimeSchedulerModule() {
      _classCallCheck(this, NgxTimeSchedulerModule);
    });

    NgxTimeSchedulerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NgxTimeSchedulerModule
    });
    NgxTimeSchedulerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NgxTimeSchedulerModule_Factory(t) {
        return new (t || NgxTimeSchedulerModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxTimeSchedulerModule, {
        declarations: [_ngx_time_scheduler_component__WEBPACK_IMPORTED_MODULE_1__["NgxTimeSchedulerComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"]],
        exports: [_ngx_time_scheduler_component__WEBPACK_IMPORTED_MODULE_1__["NgxTimeSchedulerComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxTimeSchedulerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_ngx_time_scheduler_component__WEBPACK_IMPORTED_MODULE_1__["NgxTimeSchedulerComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"]],
          exports: [_ngx_time_scheduler_component__WEBPACK_IMPORTED_MODULE_1__["NgxTimeSchedulerComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./projects/ngx-time-scheduler/src/lib/ngx-time-scheduler.service.ts":
  /*!***************************************************************************!*\
    !*** ./projects/ngx-time-scheduler/src/lib/ngx-time-scheduler.service.ts ***!
    \***************************************************************************/

  /*! exports provided: NgxTimeSchedulerService */

  /***/
  function projectsNgxTimeSchedulerSrcLibNgxTimeSchedulerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxTimeSchedulerService", function () {
      return NgxTimeSchedulerService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./projects/ngx-time-scheduler/node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./projects/ngx-time-scheduler/node_modules/rxjs/_esm2015/index.js");

    var NgxTimeSchedulerService = /*#__PURE__*/function () {
      function NgxTimeSchedulerService() {
        _classCallCheck(this, NgxTimeSchedulerService);

        this.item = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.itemAdd = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.itemId = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.sectionAdd = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.section = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.sectionId = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.refreshView = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(NgxTimeSchedulerService, [{
        key: "itemPush",
        value: function itemPush(item) {
          this.itemAdd.next(item);
        }
      }, {
        key: "itemPop",
        value: function itemPop() {
          this.item.next();
        }
      }, {
        key: "itemRemove",
        value: function itemRemove(id) {
          this.itemId.next(id);
        }
      }, {
        key: "sectionPush",
        value: function sectionPush(section) {
          this.sectionAdd.next(section);
        }
      }, {
        key: "sectionPop",
        value: function sectionPop() {
          this.section.next();
        }
      }, {
        key: "sectionRemove",
        value: function sectionRemove(id) {
          this.sectionId.next(id);
        }
      }, {
        key: "refresh",
        value: function refresh() {
          this.refreshView.next();
        }
      }]);

      return NgxTimeSchedulerService;
    }();

    NgxTimeSchedulerService.ɵfac = function NgxTimeSchedulerService_Factory(t) {
      return new (t || NgxTimeSchedulerService)();
    };

    NgxTimeSchedulerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NgxTimeSchedulerService,
      factory: NgxTimeSchedulerService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxTimeSchedulerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _projects_ngx_time_scheduler_src_lib_ngx_time_scheduler_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../projects/ngx-time-scheduler/src/lib/ngx-time-scheduler.model */
    "./projects/ngx-time-scheduler/src/lib/ngx-time-scheduler.model.ts");
    /* harmony import */


    var _projects_ngx_time_scheduler_src_lib_ngx_time_scheduler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../projects/ngx-time-scheduler/src/lib/ngx-time-scheduler.service */
    "./projects/ngx-time-scheduler/src/lib/ngx-time-scheduler.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _projects_ngx_time_scheduler_src_lib_ngx_time_scheduler_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../projects/ngx-time-scheduler/src/lib/ngx-time-scheduler.component */
    "./projects/ngx-time-scheduler/src/lib/ngx-time-scheduler.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(service) {
        var _this12 = this;

        _classCallCheck(this, AppComponent);

        this.service = service;
        this.eventOutput = '';
        this.events = new _projects_ngx_time_scheduler_src_lib_ngx_time_scheduler_model__WEBPACK_IMPORTED_MODULE_1__["Events"]();
        this.itemCount = 3;
        this.sectionCount = 10;

        this.events.SectionClickEvent = function (section) {
          _this12.eventOutput += '\n' + JSON.stringify(section);
        };

        this.events.SectionContextMenuEvent = function (section, _ref) {
          var x = _ref.x,
              y = _ref.y;
          _this12.eventOutput += '\n' + JSON.stringify(section) + ',' + JSON.stringify({
            x: x,
            y: y
          });
        };

        this.events.ItemClicked = function (item) {
          _this12.eventOutput += '\n' + JSON.stringify(item);
        };

        this.events.ItemContextMenu = function (item, _ref2) {
          var x = _ref2.x,
              y = _ref2.y;
          _this12.eventOutput += '\n' + JSON.stringify(item) + ',' + JSON.stringify({
            x: x,
            y: y
          });
        };

        this.events.ItemDropped = function (item) {
          _this12.eventOutput += '\n' + JSON.stringify(item);
        };

        this.events.PeriodChange = function (start, end) {
          _this12.eventOutput += '\n' + JSON.stringify(start) + ',' + JSON.stringify(end);
        };

        this.periods = [{
          name: '2 week',
          timeFrameHeaders: ['MMM YYYY', 'DD(ddd)'],
          timeFrameHeadersTooltip: ['MMM YYYY', 'DD(ddd)'],
          classes: '',
          timeFrameOverall: 1440 * 14,
          timeFramePeriod: 1440
        }, {
          name: '3 days',
          timeFramePeriod: 60 * 3,
          timeFrameOverall: 60 * 24 * 3,
          timeFrameHeaders: ['Do MMM', 'HH'],
          classes: 'period-3day'
        }, {
          name: '1 week',
          timeFrameHeaders: ['MMM YYYY', 'DD(ddd)'],
          classes: '',
          timeFrameOverall: 1440 * 7,
          timeFramePeriod: 1440
        }];
        this.sections = [{
          name: 'A',
          id: 1
        }, {
          name: 'B',
          id: 2
        }, {
          name: 'C',
          id: 3
        }, {
          name: 'D',
          id: 4
        }, {
          name: 'E',
          id: 5
        }, {
          name: 'F',
          id: 6
        }, {
          name: 'G',
          id: 7
        }];
        this.items = [{
          id: 1,
          sectionID: 1,
          name: 'Item 1',
          start: moment__WEBPACK_IMPORTED_MODULE_3__().startOf('day'),
          end: moment__WEBPACK_IMPORTED_MODULE_3__().add(5, 'days').endOf('day'),
          classes: ''
        }, {
          id: 2,
          sectionID: 3,
          name: 'Item 2',
          start: moment__WEBPACK_IMPORTED_MODULE_3__().startOf('day'),
          end: moment__WEBPACK_IMPORTED_MODULE_3__().add(4, 'days').endOf('day'),
          classes: ''
        }, {
          id: 3,
          sectionID: 1,
          name: 'Item 3',
          start: moment__WEBPACK_IMPORTED_MODULE_3__().add(1, 'days').startOf('day'),
          end: moment__WEBPACK_IMPORTED_MODULE_3__().add(3, 'days').endOf('day'),
          classes: ''
        }, {
          id: 4,
          sectionID: 3,
          name: 'Item 4',
          start: moment__WEBPACK_IMPORTED_MODULE_3__().add(1, 'days').startOf('day'),
          end: moment__WEBPACK_IMPORTED_MODULE_3__().add(3, 'days').endOf('day'),
          classes: ''
        }, {
          id: 5,
          sectionID: 1,
          name: 'Item 5',
          start: moment__WEBPACK_IMPORTED_MODULE_3__().add(7, 'days').startOf('day'),
          end: moment__WEBPACK_IMPORTED_MODULE_3__().add(8, 'days').endOf('day'),
          classes: ''
        }, {
          id: 6,
          sectionID: 1,
          name: 'Item 6',
          start: moment__WEBPACK_IMPORTED_MODULE_3__().subtract(3, 'days').startOf('day'),
          end: moment__WEBPACK_IMPORTED_MODULE_3__().subtract(1, 'days').endOf('day'),
          classes: ''
        }, {
          id: 7,
          sectionID: 1,
          name: 'Item 7',
          start: moment__WEBPACK_IMPORTED_MODULE_3__().subtract(2, 'days').startOf('day'),
          end: moment__WEBPACK_IMPORTED_MODULE_3__().add(2, 'days').endOf('day'),
          classes: ''
        }, {
          id: 8,
          sectionID: 1,
          name: 'Item 8',
          start: moment__WEBPACK_IMPORTED_MODULE_3__().add(3, 'days').startOf('day'),
          end: moment__WEBPACK_IMPORTED_MODULE_3__().add(7, 'days').endOf('day'),
          classes: ''
        }, {
          id: 9,
          sectionID: 1,
          name: 'Item 9',
          start: moment__WEBPACK_IMPORTED_MODULE_3__().subtract(2, 'days').startOf('day'),
          end: moment__WEBPACK_IMPORTED_MODULE_3__().add(7, 'days').endOf('day'),
          classes: ''
        }];
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addItem",
        value: function addItem() {
          this.itemCount++;
          this.service.itemPush({
            id: this.itemCount,
            sectionID: 5,
            name: 'Item ' + this.itemCount,
            start: moment__WEBPACK_IMPORTED_MODULE_3__().startOf('day'),
            end: moment__WEBPACK_IMPORTED_MODULE_3__().add(3, 'days').endOf('day'),
            classes: ''
          });
        }
      }, {
        key: "popItem",
        value: function popItem() {
          this.service.itemPop();
        }
      }, {
        key: "removeItem",
        value: function removeItem() {
          this.service.itemRemove(4);
        }
      }, {
        key: "addSection",
        value: function addSection() {
          this.sectionCount++;
          this.service.sectionPush({
            id: this.sectionCount,
            name: 'Section ' + this.sectionCount
          });
        }
      }, {
        key: "popSection",
        value: function popSection() {
          this.service.sectionPop();
        }
      }, {
        key: "removeSection",
        value: function removeSection() {
          this.service.sectionRemove(4);
        }
      }, {
        key: "refresh",
        value: function refresh() {
          this.service.refresh();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_projects_ngx_time_scheduler_src_lib_ngx_time_scheduler_service__WEBPACK_IMPORTED_MODULE_2__["NgxTimeSchedulerService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 20,
      vars: 7,
      consts: [[3, "items", "periods", "sections", "events", "showBusinessDayOnly", "allowDragging"], ["placeholder", "Event output", "name", "event-output", 2, "width", "80%", "height", "50px", 3, "ngModel", "ngModelChange"], [3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-ts", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Event output");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_textarea_ngModelChange_4_listener($event) {
            return ctx.eventOutput = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_6_listener() {
            return ctx.addItem();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add Item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_8_listener() {
            return ctx.popItem();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Pop Item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_10_listener() {
            return ctx.removeItem();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Remove Item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_12_listener() {
            return ctx.addSection();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add Section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_14_listener() {
            return ctx.popSection();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Pop Section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_16_listener() {
            return ctx.removeSection();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Remove Section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_18_listener() {
            return ctx.refresh();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Refresh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.items)("periods", ctx.periods)("sections", ctx.sections)("events", ctx.events)("showBusinessDayOnly", false)("allowDragging", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.eventOutput);
        }
      },
      directives: [_projects_ngx_time_scheduler_src_lib_ngx_time_scheduler_component__WEBPACK_IMPORTED_MODULE_4__["NgxTimeSchedulerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _projects_ngx_time_scheduler_src_lib_ngx_time_scheduler_service__WEBPACK_IMPORTED_MODULE_2__["NgxTimeSchedulerService"]
        }];
      }, null);
    })();
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _projects_ngx_time_scheduler_src_lib_ngx_time_scheduler_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../projects/ngx-time-scheduler/src/lib/ngx-time-scheduler.module */
    "./projects/ngx-time-scheduler/src/lib/ngx-time-scheduler.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _projects_ngx_time_scheduler_src_lib_ngx_time_scheduler_module__WEBPACK_IMPORTED_MODULE_3__["NgxTimeSchedulerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _projects_ngx_time_scheduler_src_lib_ngx_time_scheduler_module__WEBPACK_IMPORTED_MODULE_3__["NgxTimeSchedulerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _projects_ngx_time_scheduler_src_lib_ngx_time_scheduler_module__WEBPACK_IMPORTED_MODULE_3__["NgxTimeSchedulerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
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
    /*! D:\Code\ngx-time-scheduler\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map