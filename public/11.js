(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/pier-cms/UI/PierCMSWrapper.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/pier-cms/UI/PierCMSWrapper.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PierCMSWrapper',
  mounted: function mounted() {
    if (this.$route.path === "/") {
      var modelName = window.models[0].name;
      this.$store.dispatch('setSelectedModel', modelName);
      this.$router.replace("/" + modelName);
    } else if (!this.selectedModelName || !this.selectedModelName.length) {
      this.$store.dispatch('setSelectedModel', this.$route.path.split("/")[1]);
    }

    if (!this.models) {
      this.$store.dispatch('setModels', window.models);
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['models', 'selectedModelName']))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/pier-cms/UI/PierCMSWrapper.vue?vue&type=template&id=e9d68354&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/pier-cms/UI/PierCMSWrapper.vue?vue&type=template&id=e9d68354& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "container" } }, [
    _c("aside", { staticClass: "flex-shrink-0" }, [
      _c(
        "div",
        { staticClass: "long-header bg-blue-100 text-blue-800 tracking-wider" },
        [_vm._v("\n            Pier CMS\n        ")]
      ),
      _vm._v(" "),
      _c(
        "ul",
        _vm._l(_vm.models, function(model) {
          return _c(
            "li",
            { key: model._id },
            [
              _c("router-link", { attrs: { to: "/" + model.name } }, [
                _vm._v(
                  "\n                    " +
                    _vm._s(model.name) +
                    "\n                "
                )
              ])
            ],
            1
          )
        }),
        0
      )
    ]),
    _vm._v(" "),
    _c("main", { staticClass: "flex-1 h-screen" }, [_c("router-view")], 1)
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/pier-cms/UI/PierCMSWrapper.vue":
/*!**************************************************!*\
  !*** ./resources/pier-cms/UI/PierCMSWrapper.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PierCMSWrapper_vue_vue_type_template_id_e9d68354___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PierCMSWrapper.vue?vue&type=template&id=e9d68354& */ "./resources/pier-cms/UI/PierCMSWrapper.vue?vue&type=template&id=e9d68354&");
/* harmony import */ var _PierCMSWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PierCMSWrapper.vue?vue&type=script&lang=js& */ "./resources/pier-cms/UI/PierCMSWrapper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PierCMSWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PierCMSWrapper_vue_vue_type_template_id_e9d68354___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PierCMSWrapper_vue_vue_type_template_id_e9d68354___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/pier-cms/UI/PierCMSWrapper.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/pier-cms/UI/PierCMSWrapper.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/pier-cms/UI/PierCMSWrapper.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PierCMSWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PierCMSWrapper.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/pier-cms/UI/PierCMSWrapper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PierCMSWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/pier-cms/UI/PierCMSWrapper.vue?vue&type=template&id=e9d68354&":
/*!*********************************************************************************!*\
  !*** ./resources/pier-cms/UI/PierCMSWrapper.vue?vue&type=template&id=e9d68354& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PierCMSWrapper_vue_vue_type_template_id_e9d68354___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PierCMSWrapper.vue?vue&type=template&id=e9d68354& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/pier-cms/UI/PierCMSWrapper.vue?vue&type=template&id=e9d68354&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PierCMSWrapper_vue_vue_type_template_id_e9d68354___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PierCMSWrapper_vue_vue_type_template_id_e9d68354___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);