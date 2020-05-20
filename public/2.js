(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/UI/pages/Models/Detail.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/UI/pages/Models/Detail.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/vue */ "./node_modules/@chakra-ui/vue/dist/esm/index.js");
/* harmony import */ var _DbFieldTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DbFieldTypes */ "./resources/js/UI/pages/Models/DbFieldTypes.js");
/* harmony import */ var _components_MDIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/MDIcon */ "./resources/js/UI/pages/Models/components/MDIcon.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _services_API__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/API */ "./resources/js/services/API/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  name: "ModelDetail",
  props: {
    modelId: {
      type: String,
      required: true
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (!this.models && !this.fetchingModels) {
      this.$store.dispatch('getModels');
      this.$store.subscribe(function (mutation) {
        if (mutation.type === 'SET_MODELS') _this.$store.dispatch('setModelBeingEdited', _this.modelId);
      });
    } else this.$store.dispatch('setModelBeingEdited', this.modelId);
  },
  beforeDestroy: function beforeDestroy() {
    this.$store.dispatch('setModelBeingEdited', null);
  },
  data: function data() {
    return {
      name: "",
      fields: [],
      records: [],
      populating: false,
      fetchingRecords: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapState"])(['models', 'fetchingModels', 'modelBeingEdited'])),
  watch: {
    modelBeingEdited: function modelBeingEdited(model) {
      if (!model) return;
      var typeMap = {};
      _DbFieldTypes__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(function (_ref) {
        var label = _ref.label,
            value = _ref.value;
        typeMap[value] = label;
      });
      this.name = model.name;
      this.fields = JSON.parse(model.fields).map(function (field) {
        field.typeLabel = typeMap[field.type];
        return field;
      });
      this.fetchRecords();
    }
  },
  methods: {
    fetchRecords: function fetchRecords() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.fetchingRecords = true;
                _context.next = 3;
                return Object(_services_API__WEBPACK_IMPORTED_MODULE_5__["browseModel"])(_this2.name);

              case 3:
                res = _context.sent;
                _this2.records = res;
                _this2.fetchingRecords = false;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    populate: function populate() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this3.populating = true;
                _context2.next = 3;
                return Object(_services_API__WEBPACK_IMPORTED_MODULE_5__["populateModel"])(_this3.name);

              case 3:
                res = _context2.sent;
                _this3.records = res;
                _this3.populating = false;

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  },
  components: {
    CBox: _chakra_ui_vue__WEBPACK_IMPORTED_MODULE_1__["CBox"],
    CText: _chakra_ui_vue__WEBPACK_IMPORTED_MODULE_1__["CText"],
    CButton: _chakra_ui_vue__WEBPACK_IMPORTED_MODULE_1__["CButton"],
    CIcon: _chakra_ui_vue__WEBPACK_IMPORTED_MODULE_1__["CIcon"],
    CStack: _chakra_ui_vue__WEBPACK_IMPORTED_MODULE_1__["CStack"],
    CCircularProgress: _chakra_ui_vue__WEBPACK_IMPORTED_MODULE_1__["CCircularProgress"],
    CCircularProgressLabel: _chakra_ui_vue__WEBPACK_IMPORTED_MODULE_1__["CCircularProgressLabel"],
    MDIcon: _components_MDIcon__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/UI/pages/Models/components/MDIcon.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/UI/pages/Models/components/MDIcon.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_material_design_icons_Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-material-design-icons/Menu */ "./node_modules/vue-material-design-icons/Menu.vue");
/* harmony import */ var vue_material_design_icons_AccountBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-material-design-icons/AccountBox */ "./node_modules/vue-material-design-icons/AccountBox.vue");
/* harmony import */ var vue_material_design_icons_Email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-material-design-icons/Email */ "./node_modules/vue-material-design-icons/Email.vue");
/* harmony import */ var vue_material_design_icons_Lock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-material-design-icons/Lock */ "./node_modules/vue-material-design-icons/Lock.vue");
/* harmony import */ var vue_material_design_icons_Phone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-material-design-icons/Phone */ "./node_modules/vue-material-design-icons/Phone.vue");
/* harmony import */ var vue_material_design_icons_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-material-design-icons/Image */ "./node_modules/vue-material-design-icons/Image.vue");
/* harmony import */ var vue_material_design_icons_Youtube__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-material-design-icons/Youtube */ "./node_modules/vue-material-design-icons/Youtube.vue");
/* harmony import */ var vue_material_design_icons_File__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-material-design-icons/File */ "./node_modules/vue-material-design-icons/File.vue");
/* harmony import */ var vue_material_design_icons_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-material-design-icons/Link */ "./node_modules/vue-material-design-icons/Link.vue");
/* harmony import */ var vue_material_design_icons_FormatAlignLeft__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-material-design-icons/FormatAlignLeft */ "./node_modules/vue-material-design-icons/FormatAlignLeft.vue");
/* harmony import */ var vue_material_design_icons_FormatIndentIncrease__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-material-design-icons/FormatIndentIncrease */ "./node_modules/vue-material-design-icons/FormatIndentIncrease.vue");
/* harmony import */ var vue_material_design_icons_Numeric__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue-material-design-icons/Numeric */ "./node_modules/vue-material-design-icons/Numeric.vue");
/* harmony import */ var vue_material_design_icons_ToggleSwitch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vue-material-design-icons/ToggleSwitch */ "./node_modules/vue-material-design-icons/ToggleSwitch.vue");
/* harmony import */ var vue_material_design_icons_Calendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vue-material-design-icons/Calendar */ "./node_modules/vue-material-design-icons/Calendar.vue");
/* harmony import */ var vue_material_design_icons_MapMarker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vue-material-design-icons/MapMarker */ "./node_modules/vue-material-design-icons/MapMarker.vue");
/* harmony import */ var vue_material_design_icons_ArrowDown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vue-material-design-icons/ArrowDown */ "./node_modules/vue-material-design-icons/ArrowDown.vue");
/* harmony import */ var vue_material_design_icons_Delete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vue-material-design-icons/Delete */ "./node_modules/vue-material-design-icons/Delete.vue");

















/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MdICon",
  props: {
    icon: String,
    size: {
      type: String | vue_material_design_icons_Numeric__WEBPACK_IMPORTED_MODULE_11__["default"],
      "default": 28
    }
  },
  render: function render(h) {
    switch (this.icon) {
      case 'down':
        return h(vue_material_design_icons_ArrowDown__WEBPACK_IMPORTED_MODULE_15__["default"], {
          "attrs": {
            "color": "currentColor",
            "size": this.size
          }
        });

      case 'name':
        return h(vue_material_design_icons_AccountBox__WEBPACK_IMPORTED_MODULE_1__["default"], {
          "attrs": {
            "color": "currentColor",
            "size": this.size
          }
        });

      case 'email':
        return h(vue_material_design_icons_Email__WEBPACK_IMPORTED_MODULE_2__["default"], {
          "attrs": {
            "color": "currentColor",
            "size": this.size
          }
        });

      case 'password':
        return h(vue_material_design_icons_Lock__WEBPACK_IMPORTED_MODULE_3__["default"], {
          "attrs": {
            "color": "currentColor",
            "size": this.size
          }
        });

      case 'phone':
        return h(vue_material_design_icons_Phone__WEBPACK_IMPORTED_MODULE_4__["default"], {
          "attrs": {
            "color": "currentColor",
            "size": this.size
          }
        });

      case 'image':
        return h(vue_material_design_icons_Image__WEBPACK_IMPORTED_MODULE_5__["default"], {
          "attrs": {
            "color": "currentColor",
            "size": this.size
          }
        });

      case 'video':
        return h(vue_material_design_icons_Youtube__WEBPACK_IMPORTED_MODULE_6__["default"], {
          "attrs": {
            "color": "currentColor",
            "size": this.size
          }
        });

      case 'file':
        return h(vue_material_design_icons_File__WEBPACK_IMPORTED_MODULE_7__["default"], {
          "attrs": {
            "color": "currentColor",
            "size": this.size
          }
        });

      case 'link':
        return h(vue_material_design_icons_Link__WEBPACK_IMPORTED_MODULE_8__["default"], {
          "attrs": {
            "color": "currentColor",
            "size": this.size
          }
        });

      case 'location':
        return h(vue_material_design_icons_MapMarker__WEBPACK_IMPORTED_MODULE_14__["default"], {
          "attrs": {
            "color": "currentColor",
            "size": this.size
          }
        });

      case 'long text':
        return h(vue_material_design_icons_FormatIndentIncrease__WEBPACK_IMPORTED_MODULE_10__["default"], {
          "attrs": {
            "color": "currentColor",
            "size": this.size
          }
        });

      case 'string':
        return h(vue_material_design_icons_FormatAlignLeft__WEBPACK_IMPORTED_MODULE_9__["default"], {
          "attrs": {
            "color": "currentColor",
            "size": this.size
          }
        });

      case 'number':
        return h(vue_material_design_icons_Numeric__WEBPACK_IMPORTED_MODULE_11__["default"], {
          "attrs": {
            "color": "currentColor",
            "size": this.size
          }
        });

      case 'boolean':
        return h(vue_material_design_icons_ToggleSwitch__WEBPACK_IMPORTED_MODULE_12__["default"], {
          "attrs": {
            "color": "currentColor",
            "size": this.size
          }
        });

      case 'date':
        return h(vue_material_design_icons_Calendar__WEBPACK_IMPORTED_MODULE_13__["default"], {
          "attrs": {
            "color": "currentColor",
            "size": this.size
          }
        });

      case 'delete':
        return h(vue_material_design_icons_Delete__WEBPACK_IMPORTED_MODULE_16__["default"], {
          "attrs": {
            "color": "currentColor",
            "size": this.size
          }
        });

      default:
        return h("span", [this.icon]);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/UI/pages/Models/Detail.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/UI/pages/Models/Detail.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fieldItem:not(:hover) .fieldActionButtons{\n  display: none;\n}\n[data-chakra-component=\"CInput\"]{\n  color: #999;\n  outline-color: #555;\n}\n[data-chakra-component=\"CInput\"]:focus{\n  border-color: #555;\n  box-shadow: 0 0 0 1px #555;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/UI/pages/Models/Detail.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/UI/pages/Models/Detail.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Detail.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/UI/pages/Models/Detail.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/UI/pages/Models/Detail.vue?vue&type=template&id=029ceee4&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/UI/pages/Models/Detail.vue?vue&type=template&id=029ceee4& ***!
  \**************************************************************************************************************************************************************************************************************/
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
  return _c(
    "c-box",
    { attrs: { d: "flex", padding: "10", "justify-content": "center" } },
    [
      _c(
        "c-box",
        {
          attrs: {
            width: "500px",
            mr: "6",
            pb: "2",
            "border-width": "2px",
            "border-color": "#444",
            rounded: "lg"
          }
        },
        [
          _vm.fetchingModels
            ? _c(
                "c-box",
                {
                  attrs: {
                    d: "flex",
                    padding: "6",
                    "align-items": "center",
                    "justify-content": "center"
                  }
                },
                [
                  _c("c-circular-progress", {
                    attrs: { "is-indeterminate": "" }
                  })
                ],
                1
              )
            : _c(
                "c-box",
                { attrs: { p: "6" } },
                [
                  _c(
                    "c-text",
                    { attrs: { color: "#ddd", mb: "1", fontSize: "3xl" } },
                    [_vm._v("\n        " + _vm._s(_vm.name) + "\n      ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "c-stack",
                    { attrs: { spacing: "3", color: "#999" } },
                    [
                      _c("c-box"),
                      _vm._v(" "),
                      _vm._l(_vm.fields, function(field, index) {
                        return [
                          _c(
                            "c-box",
                            {
                              key: index,
                              attrs: {
                                rounded: "md",
                                color: "#777",
                                px: "4",
                                py: "3",
                                background: "#222"
                              }
                            },
                            [
                              _c(
                                "c-box",
                                {
                                  attrs: {
                                    mb: "1",
                                    d: "flex",
                                    "align-items": "center",
                                    "justify-content": "space-between"
                                  }
                                },
                                [
                                  _c(
                                    "c-box",
                                    {
                                      attrs: {
                                        d: "flex",
                                        "align-items": "center"
                                      }
                                    },
                                    [
                                      _c(
                                        "c-box",
                                        { attrs: { mr: "3" } },
                                        [
                                          _c("MDIcon", {
                                            attrs: {
                                              icon: field.type,
                                              size: 20
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "c-text",
                                        {
                                          attrs: {
                                            fontSize: "xl",
                                            color: "#999"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                  " +
                                              _vm._s(field.label) +
                                              "\n                "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "c-text",
                                    {
                                      attrs: { fontSize: "lg", color: "#777" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                " +
                                          _vm._s(field.typeLabel) +
                                          "\n              "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ]
                      })
                    ],
                    2
                  )
                ],
                1
              )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "c-box",
        {
          attrs: {
            flex: "1",
            mb: "6",
            pb: "2",
            "border-width": "2px",
            "border-color": "#444",
            rounded: "lg"
          }
        },
        [
          _c(
            "c-box",
            { attrs: { p: "6" } },
            [
              _c(
                "c-text",
                { attrs: { color: "#ddd", mb: "1", fontSize: "3xl" } },
                [_vm._v("\n        Records\n      ")]
              ),
              _vm._v(" "),
              _vm.fetchingModels || _vm.populating || _vm.fetchingRecords
                ? _c(
                    "c-box",
                    {
                      attrs: {
                        d: "flex",
                        padding: "6",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    [
                      _c("c-circular-progress", {
                        attrs: { "is-indeterminate": "" }
                      })
                    ],
                    1
                  )
                : !_vm.records.length
                ? _c(
                    "c-box",
                    {
                      attrs: {
                        padding: "6",
                        d: "flex",
                        "flex-direction": "column",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    [
                      _vm._v(
                        "\n        \n        No records found.\n\n        "
                      ),
                      _c("c-button", { on: { click: _vm.populate } }, [
                        _vm._v("\n          Populate\n        ")
                      ])
                    ],
                    1
                  )
                : _c(
                    "c-box",
                    {
                      attrs: {
                        d: "flex",
                        padding: "6",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    [
                      _vm._v(
                        "\n        " +
                          _vm._s(_vm.records.length) +
                          " entries.\n      "
                      )
                    ]
                  )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/UI/pages/Models/DbFieldTypes.js":
/*!******************************************************!*\
  !*** ./resources/js/UI/pages/Models/DbFieldTypes.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  label: 'Name',
  value: 'name',
  placeholder: 'E.g. full_name'
}, {
  label: 'Email',
  value: 'email',
  placeholder: 'E.g. email'
}, {
  label: 'Password',
  value: 'password',
  placeholder: 'E.g. password'
}, {
  label: 'Phone',
  value: 'phone',
  placeholder: 'E.g. phoneNo'
}, {
  label: 'Date',
  value: 'date',
  placeholder: 'E.g. dob'
}, {
  label: 'Short Text',
  value: 'string',
  placeholder: 'E.g. genre'
}, {
  label: 'Long Text',
  value: 'long text',
  placeholder: 'E.g. description'
}, {
  label: 'Number',
  value: 'number',
  placeholder: 'E.g. rating'
}, {
  label: 'Image',
  value: 'image',
  placeholder: 'E.g. profile_picture'
}, {
  label: 'Video',
  value: 'video',
  placeholder: 'E.g. youtube_url'
}, {
  label: 'File',
  value: 'file',
  placeholder: 'E.g. attachment'
}, {
  label: 'Link',
  value: 'link',
  placeholder: 'E.g. rsvp_link'
}, {
  label: 'Location',
  value: 'location',
  placeholder: 'E.g. location'
}, {
  label: 'Switch',
  value: 'boolean',
  placeholder: 'E.g. in_stock'
}]);

/***/ }),

/***/ "./resources/js/UI/pages/Models/Detail.vue":
/*!*************************************************!*\
  !*** ./resources/js/UI/pages/Models/Detail.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Detail_vue_vue_type_template_id_029ceee4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Detail.vue?vue&type=template&id=029ceee4& */ "./resources/js/UI/pages/Models/Detail.vue?vue&type=template&id=029ceee4&");
/* harmony import */ var _Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Detail.vue?vue&type=script&lang=js& */ "./resources/js/UI/pages/Models/Detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Detail.vue?vue&type=style&index=0&lang=css& */ "./resources/js/UI/pages/Models/Detail.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Detail_vue_vue_type_template_id_029ceee4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Detail_vue_vue_type_template_id_029ceee4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/UI/pages/Models/Detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/UI/pages/Models/Detail.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/UI/pages/Models/Detail.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Detail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/UI/pages/Models/Detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/UI/pages/Models/Detail.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************!*\
  !*** ./resources/js/UI/pages/Models/Detail.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Detail.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/UI/pages/Models/Detail.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/UI/pages/Models/Detail.vue?vue&type=template&id=029ceee4&":
/*!********************************************************************************!*\
  !*** ./resources/js/UI/pages/Models/Detail.vue?vue&type=template&id=029ceee4& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_029ceee4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Detail.vue?vue&type=template&id=029ceee4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/UI/pages/Models/Detail.vue?vue&type=template&id=029ceee4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_029ceee4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_029ceee4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/UI/pages/Models/components/MDIcon.vue":
/*!************************************************************!*\
  !*** ./resources/js/UI/pages/Models/components/MDIcon.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MDIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MDIcon.vue?vue&type=script&lang=js& */ "./resources/js/UI/pages/Models/components/MDIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _MDIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/UI/pages/Models/components/MDIcon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/UI/pages/Models/components/MDIcon.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/UI/pages/Models/components/MDIcon.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MDIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MDIcon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/UI/pages/Models/components/MDIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MDIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);