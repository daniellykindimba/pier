(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/pier-cms/UI/DeleteRow.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/pier-cms/UI/DeleteRow.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PierCMSDeleteRow',
  props: {
    modelName: {
      type: String,
      required: true
    },
    rowId: {
      type: String,
      required: true
    }
  },
  mounted: function mounted() {
    this.setupModel();
  },
  data: function data() {
    return {
      deletingRow: false
    };
  },
  watch: {
    modelName: function modelName(modelId) {
      this.setupModel();
    }
  },
  methods: {
    setupModel: function setupModel() {
      console.log("Delete row:", this.modelName, this.rowId);
    },
    deleteRow: function deleteRow() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.deletingRow = true;
                _context.next = 3;
                return {
                  then: function then(resolve) {
                    return setTimeout(resolve, 2000);
                  }
                };

              case 3:
                _this.deletingRow = false;

                _this.$router.replace("/".concat(_this.modelName));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/pier-cms/UI/DeleteRow.vue?vue&type=template&id=9bb3da4e&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/pier-cms/UI/DeleteRow.vue?vue&type=template&id=9bb3da4e& ***!
  \**********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "modal open" }, [
    _c(
      "div",
      { staticClass: "modal-content", staticStyle: { width: "450px" } },
      [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "modal-buttons" }, [
          _c(
            "button",
            {
              staticClass: "p-2 font-bold text-sm tracking-wider",
              class: { "pointer-events-none opacity-50": _vm.deletingRow },
              on: {
                click: function($event) {
                  return _vm.$router.replace("/" + _vm.modelName)
                }
              }
            },
            [_vm._v("\n        No, Cancel\n      ")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass:
                "bg-red-100 border-red-200 font-semibold px-4 py-2 rounded text-red-500 text-red-600 text-sm tracking-wider",
              class: { "pointer-events-none opacity-50": _vm.deletingRow },
              on: {
                click: function($event) {
                  return _vm.deleteRow(null, true)
                }
              }
            },
            [
              _vm._v(
                "\n        " +
                  _vm._s(_vm.deletingRow ? "Deleting..." : "Yes, Delete") +
                  "\n      "
              )
            ]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "modal-body overflow-y-auto",
        staticStyle: { "max-height": "480px" }
      },
      [
        _c("p", { staticClass: "m-0 pt-2 px-4 text-xl text-center" }, [
          _vm._v("\n        Are you sure you want to delete this row?\n      ")
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/pier-cms/UI/DeleteRow.vue":
/*!*********************************************!*\
  !*** ./resources/pier-cms/UI/DeleteRow.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeleteRow_vue_vue_type_template_id_9bb3da4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeleteRow.vue?vue&type=template&id=9bb3da4e& */ "./resources/pier-cms/UI/DeleteRow.vue?vue&type=template&id=9bb3da4e&");
/* harmony import */ var _DeleteRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeleteRow.vue?vue&type=script&lang=js& */ "./resources/pier-cms/UI/DeleteRow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DeleteRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DeleteRow_vue_vue_type_template_id_9bb3da4e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DeleteRow_vue_vue_type_template_id_9bb3da4e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/pier-cms/UI/DeleteRow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/pier-cms/UI/DeleteRow.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/pier-cms/UI/DeleteRow.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DeleteRow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/pier-cms/UI/DeleteRow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/pier-cms/UI/DeleteRow.vue?vue&type=template&id=9bb3da4e&":
/*!****************************************************************************!*\
  !*** ./resources/pier-cms/UI/DeleteRow.vue?vue&type=template&id=9bb3da4e& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteRow_vue_vue_type_template_id_9bb3da4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DeleteRow.vue?vue&type=template&id=9bb3da4e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/pier-cms/UI/DeleteRow.vue?vue&type=template&id=9bb3da4e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteRow_vue_vue_type_template_id_9bb3da4e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteRow_vue_vue_type_template_id_9bb3da4e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);