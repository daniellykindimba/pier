(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/UI/pages/Editor/Add.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/UI/pages/Editor/Add.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chakra_ui_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/vue */ "./node_modules/@chakra-ui/vue/dist/esm/index.js");
/* harmony import */ var _DbFieldTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DbFieldTypes */ "./resources/js/UI/pages/Editor/DbFieldTypes.js");
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
  name: "EditorAdd",
  data: function data() {
    return {
      name: "",
      saving: false,
      editing: false,
      dbFieldTypes: _DbFieldTypes__WEBPACK_IMPORTED_MODULE_1__["default"],
      curFieldIndex: -1,
      fields: [// {
        //   label: "name",
        //   type: "long text",
        // }
      ]
    };
  },
  methods: {
    // async addField() {}
    removeField: function removeField() {
      this.fields.splice(this.curFieldIndex, 1);
      this.editing = false;
      this.curFieldIndex = -1;
    },
    cancelAddField: function cancelAddField() {
      if (!this.editing && this.curFieldIndex === this.fields.length - 1) this.fields.splice(this.curFieldIndex, 1);
      this.editing = false;
      this.curFieldIndex = -1;
    },
    saveModel: function saveModel() {
      var _this = this;

      this.saving = true;
      var data = {
        fields: this.fields.map(function (_ref) {
          var label = _ref.label,
              type = _ref.type;
          return {
            label: label,
            type: type.value
          };
        })
      };
      axios.post("/editor/".concat(this.name.replace(/ /g, ""), "/"), data).then(function (_ref2) {
        var data = _ref2.data;
        _this.saving = false;

        _this.$router.replace('/editor/list');
      })["catch"](function (error) {
        _this.saving = false;
        console.log("Axios error: ", error);
      });
    },
    addField: function addField() {
      var _this2 = this;

      this.editing = false;
      this.fields.push({
        label: "",
        type: {}
      });
      this.curFieldIndex = this.fields.length - 1;
      this.$nextTick(function () {
        console.log(_this2.$refs.fieldLabel.$el.focus());
      });
    },
    editField: function editField(index) {
      var _this3 = this;

      this.editing = true;
      this.curFieldIndex = index;
      this.$nextTick(function () {
        console.log(_this3.$refs.fieldLabel.$el.focus());
      });
    }
  },
  components: {
    CBox: _chakra_ui_vue__WEBPACK_IMPORTED_MODULE_0__["CBox"],
    CText: _chakra_ui_vue__WEBPACK_IMPORTED_MODULE_0__["CText"],
    CButton: _chakra_ui_vue__WEBPACK_IMPORTED_MODULE_0__["CButton"],
    CIcon: _chakra_ui_vue__WEBPACK_IMPORTED_MODULE_0__["CIcon"],
    CStack: _chakra_ui_vue__WEBPACK_IMPORTED_MODULE_0__["CStack"],
    CFormControl: _chakra_ui_vue__WEBPACK_IMPORTED_MODULE_0__["CFormControl"],
    CFormLabel: _chakra_ui_vue__WEBPACK_IMPORTED_MODULE_0__["CFormLabel"],
    CFormHelperText: _chakra_ui_vue__WEBPACK_IMPORTED_MODULE_0__["CFormHelperText"],
    CInput: _chakra_ui_vue__WEBPACK_IMPORTED_MODULE_0__["CInput"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/UI/pages/Editor/Add.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/UI/pages/Editor/Add.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-chakra-component=\"CInput\"]{\n  color: #999;\n  outline-color: #555;\n}\n[data-chakra-component=\"CInput\"]:focus{\n  border-color: #555;\n  box-shadow: 0 0 0 1px #555;\n}\n[data-chakra-component=\"CInput\"]::-webkit-input-placeholder{\n  color: #6a6a6a;\n}\n[data-chakra-component=\"CInput\"]::-moz-placeholder{\n  color: #6a6a6a;\n}\n[data-chakra-component=\"CInput\"]:-ms-input-placeholder{\n  color: #6a6a6a;\n}\n[data-chakra-component=\"CInput\"]::-ms-input-placeholder{\n  color: #6a6a6a;\n}\n[data-chakra-component=\"CInput\"]::placeholder{\n  color: #6a6a6a;\n}\n#fieldTypeOptions{\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 0.8rem;\n}\n.action-label{\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 1rem;\n  border: 1px solid #555;\n  border-radius: 5px;\n  width: auto;\n  cursor: pointer;\n  color: #aaa;\n  font-size: 1.1rem;\n  text-transform: capitalize;\n}\n.action-label.active{\n  border-color: #8c6d52;\n  background: #28231f;\n}\n.action-label:before{\n  content: \"\";\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  border: 2px solid #555;\n}\n.action-label.active:before{\n  display: none;\n}\n.action-label svg{\n  display: inline-block;\n  width: 22px;\n  height: 22px;\n  color: #ffba7f;\n}\n.action-label:not(.active) svg{\n  display: none;\n}\n.action-label span:last-child{\n  display: block;\n  width: 100%;\n}\n.action-label input{\n  display: none !important\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/UI/pages/Editor/Add.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/UI/pages/Editor/Add.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/UI/pages/Editor/Add.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/UI/pages/Editor/Add.vue?vue&type=template&id=1b5ee2b7&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/UI/pages/Editor/Add.vue?vue&type=template&id=1b5ee2b7& ***!
  \***********************************************************************************************************************************************************************************************************/
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
    {
      attrs: {
        d: "flex",
        padding: "10",
        "flex-direction": "column",
        "align-items": "center",
        "justify-content": "center"
      }
    },
    [
      _c(
        "c-box",
        {
          attrs: {
            width: "780px",
            mb: "6",
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
                { attrs: { color: "#ddd", mb: "5", fontSize: "2xl" } },
                [_vm._v("New Pier Model")]
              ),
              _vm._v(" "),
              _c(
                "c-stack",
                { attrs: { spacing: "5", color: "#999" } },
                [
                  _c(
                    "c-form-control",
                    [
                      _c(
                        "c-form-label",
                        { attrs: { fontSize: "xl", htmlFor: "name" } },
                        [_vm._v("Model Name")]
                      ),
                      _vm._v(" "),
                      _c("c-input", {
                        attrs: {
                          id: "name",
                          type: "text",
                          placeholder: "E.g Article",
                          size: "lg"
                        },
                        model: {
                          value: _vm.name,
                          callback: function($$v) {
                            _vm.name = $$v
                          },
                          expression: "name"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "c-form-helper-text",
                        { attrs: { id: "email-helper-text" } },
                        [
                          _vm._v(
                            "\n            Pascal case is a more standard way to name model\n          "
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "c-box",
                    {
                      attrs: {
                        d: "flex",
                        mb: "0",
                        "align-items": "center",
                        "justify-content": "space-between"
                      }
                    },
                    [
                      _c(
                        "c-text",
                        { attrs: { fontSize: "xl", htmlFor: "label" } },
                        [_vm._v("Fields")]
                      ),
                      _vm._v(" "),
                      _c(
                        "c-button",
                        {
                          attrs: {
                            opacity: _vm.curFieldIndex === -1 ? 1 : 0,
                            disabled: _vm.curFieldIndex !== -1,
                            alignSelf: "center",
                            variant: "ghost",
                            color: "orange.200"
                          },
                          on: { click: _vm.addField }
                        },
                        [
                          _c(
                            "c-box",
                            {
                              attrs: {
                                d: "inline-flex",
                                "align-items": "center"
                              }
                            },
                            [
                              _c(
                                "c-box",
                                { attrs: { mr: "2", mb: "1" } },
                                [
                                  _c("c-icon", {
                                    attrs: { name: "add", size: "14px" }
                                  })
                                ],
                                1
                              ),
                              _vm._v("\n              Add Field\n            ")
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
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
                            pt: "2",
                            pb: "3",
                            mb: "1",
                            background: "#222",
                            d: "flex",
                            "align-items": "center",
                            "justify-content": "space-between",
                            opacity: field.label || field.type.label ? 1 : 0.3,
                            cursor: _vm.curFieldIndex === -1 ? "pointer" : ""
                          },
                          on: {
                            click: function($event) {
                              _vm.curFieldIndex === -1
                                ? _vm.editField(index)
                                : null
                            }
                          }
                        },
                        [
                          _c("c-text", { attrs: { fontSize: "xl" } }, [
                            _vm._v(
                              "\n              " +
                                _vm._s(field.label) +
                                "  \n            "
                            )
                          ]),
                          _vm._v(" "),
                          _c("c-text", { attrs: { fontSize: "xl" } }, [
                            _vm._v(
                              "\n              " +
                                _vm._s(field.type.label) +
                                "\n            "
                            )
                          ])
                        ],
                        1
                      )
                    ]
                  })
                ],
                2
              ),
              _vm._v(" "),
              _vm.curFieldIndex === -1
                ? _c(
                    "c-button",
                    {
                      attrs: {
                        mt: "6",
                        size: "lg",
                        width: "100%",
                        "variant-color": "orange",
                        isLoading: _vm.saving,
                        disabled: !_vm.name.length || !_vm.fields.length
                      },
                      on: { click: _vm.saveModel }
                    },
                    [_vm._v("\n        Save Model\n      ")]
                  )
                : _vm._e()
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.curFieldIndex !== -1
        ? [
            _c(
              "c-box",
              { attrs: { width: "780px", p: "6" } },
              [
                _c(
                  "c-box",
                  {
                    attrs: {
                      mb: "6",
                      d: "flex",
                      "align-items": "center",
                      "justify-content": "space-between"
                    }
                  },
                  [
                    _c(
                      "c-text",
                      { attrs: { color: "#ddd", fontSize: "2xl" } },
                      [
                        _vm._v(
                          "\n          " +
                            _vm._s(!_vm.editing ? "Add New" : "Edit") +
                            " Field\n        "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "c-button",
                      {
                        attrs: {
                          disabled:
                            !_vm.fields[_vm.curFieldIndex].label ||
                            !_vm.fields[_vm.curFieldIndex].type.label,
                          px: "4",
                          "variant-color": "orange"
                        },
                        on: {
                          click: function($event) {
                            _vm.curFieldIndex = -1
                          }
                        }
                      },
                      [
                        _c(
                          "c-box",
                          {
                            attrs: { d: "inline-flex", "align-items": "center" }
                          },
                          [
                            _c(
                              "c-box",
                              { attrs: { mr: "3", mb: "1" } },
                              [
                                _c("c-icon", {
                                  attrs: { name: "check", size: "18px" }
                                })
                              ],
                              1
                            ),
                            _vm._v("\n            Done\n          ")
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "c-stack",
                  { attrs: { spacing: "6", color: "#999" } },
                  [
                    _c(
                      "c-form-control",
                      [
                        _c(
                          "c-form-label",
                          { attrs: { fontSize: "xl", htmlFor: "label" } },
                          [_vm._v("Field Label")]
                        ),
                        _vm._v(" "),
                        _c("c-input", {
                          ref: "fieldLabel",
                          attrs: {
                            id: "label",
                            type: "text",
                            placeholder: "E.g description",
                            size: "lg"
                          },
                          model: {
                            value: _vm.fields[_vm.curFieldIndex].label,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.fields[_vm.curFieldIndex],
                                "label",
                                $$v
                              )
                            },
                            expression: "fields[curFieldIndex].label"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "c-form-control",
                      [
                        _c(
                          "c-form-label",
                          { attrs: { fontSize: "xl", htmlFor: "type" } },
                          [_vm._v("Field Type")]
                        ),
                        _vm._v(" "),
                        _c("c-box", { attrs: { mt: "2" } }, [
                          _c(
                            "div",
                            { attrs: { id: "fieldTypeOptions" } },
                            [
                              _vm._l(_vm.dbFieldTypes, function(type, index) {
                                return [
                                  _c(
                                    "label",
                                    {
                                      key: index,
                                      staticClass: "action-label text-center",
                                      class: {
                                        "bg-blue-100 active":
                                          _vm.fields[_vm.curFieldIndex].type
                                            .value === type.value
                                      },
                                      attrs: {
                                        for: "dbFieldtype" + type.value
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.fields[
                                            _vm.curFieldIndex
                                          ].type = type
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "svg",
                                        {
                                          staticClass: "text-blue-800",
                                          attrs: {
                                            fill: "currentColor",
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24"
                                          }
                                        },
                                        [
                                          _c("path", {
                                            attrs: {
                                              d:
                                                "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                                            }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("span", [_vm._v(_vm._s(type.label))])
                                    ]
                                  )
                                ]
                              })
                            ],
                            2
                          )
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    !_vm.editing
                      ? _c(
                          "c-button",
                          {
                            attrs: {
                              "align-self": "flex-start",
                              variant: "outline",
                              color: "orange.200"
                            },
                            on: { click: _vm.cancelAddField }
                          },
                          [
                            _c("c-icon", {
                              attrs: { name: "close", size: "12px", mr: "3" }
                            }),
                            _vm._v(" Cancel\n        ")
                          ],
                          1
                        )
                      : _c(
                          "c-button",
                          {
                            attrs: {
                              "align-self": "flex-start",
                              variant: "outline",
                              color: "orange.200"
                            },
                            on: { click: _vm.removeField }
                          },
                          [
                            _c("c-icon", {
                              attrs: { name: "close", size: "12px", mr: "3" }
                            }),
                            _vm._v(" Remove Field\n        ")
                          ],
                          1
                        )
                  ],
                  1
                )
              ],
              1
            )
          ]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/UI/pages/Editor/Add.vue":
/*!**********************************************!*\
  !*** ./resources/js/UI/pages/Editor/Add.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Add_vue_vue_type_template_id_1b5ee2b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=1b5ee2b7& */ "./resources/js/UI/pages/Editor/Add.vue?vue&type=template&id=1b5ee2b7&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/js/UI/pages/Editor/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Add.vue?vue&type=style&index=0&lang=css& */ "./resources/js/UI/pages/Editor/Add.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_1b5ee2b7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Add_vue_vue_type_template_id_1b5ee2b7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/UI/pages/Editor/Add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/UI/pages/Editor/Add.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/UI/pages/Editor/Add.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/UI/pages/Editor/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/UI/pages/Editor/Add.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************!*\
  !*** ./resources/js/UI/pages/Editor/Add.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/UI/pages/Editor/Add.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/UI/pages/Editor/Add.vue?vue&type=template&id=1b5ee2b7&":
/*!*****************************************************************************!*\
  !*** ./resources/js/UI/pages/Editor/Add.vue?vue&type=template&id=1b5ee2b7& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_1b5ee2b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=template&id=1b5ee2b7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/UI/pages/Editor/Add.vue?vue&type=template&id=1b5ee2b7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_1b5ee2b7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_1b5ee2b7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/UI/pages/Editor/DbFieldTypes.js":
/*!******************************************************!*\
  !*** ./resources/js/UI/pages/Editor/DbFieldTypes.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  label: 'Image',
  value: 'image',
  icon: ''
}, {
  label: 'Video',
  value: 'video',
  icon: ''
}, {
  label: 'File',
  value: 'file',
  icon: ''
}, {
  label: 'Link',
  value: 'link',
  icon: ''
}, {
  label: 'Short Text',
  value: 'string',
  icon: ''
}, {
  label: 'Long Text',
  value: 'long text',
  icon: ''
}, {
  label: 'Number',
  value: 'number',
  icon: ''
}, {
  label: 'Toggle',
  value: 'boolean',
  icon: ''
}, {
  label: 'Date',
  value: 'date',
  icon: ''
}]);

/***/ })

}]);