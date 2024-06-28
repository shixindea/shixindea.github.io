var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj2, key, value) => key in obj2 ? __defProp(obj2, key, { enumerable: true, configurable: true, writable: true, value }) : obj2[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { useSlots, computed, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, createCommentVNode, createElementVNode, renderSlot, ref, createVNode, Transition, withCtx, Fragment, renderList, toDisplayString, reactive, withDirectives, createTextVNode, withModifiers, pushScopeId, popScopeId, onMounted, createBlock, vShow, render, watchEffect, Teleport, createApp, useCssVars, resolveComponent, TransitionGroup, onBeforeUnmount, getCurrentInstance, inject, watch, nextTick, onUpdated, resolveDynamicComponent, h, defineComponent, provide, markRaw, vModelText } from "vue";
import { ref as ref$1 } from "@vue/reactivity";
var index_vue_vue_type_style_index_0_lang$1 = "";
var index_vue_vue_type_style_index_1_scoped_true_lang = "";
var _export_sfc = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props2) {
    target[key] = val;
  }
  return target;
};
const __default__$t = {
  name: "mButton"
};
const _sfc_main$C = /* @__PURE__ */ Object.assign(__default__$t, {
  props: {
    type: {
      type: String,
      default: "default"
    },
    disabled: Boolean,
    round: Boolean,
    size: {
      type: String,
      default: "default"
    },
    customColor: {
      type: String,
      default: ""
    },
    leftIcon: String,
    rightIcon: String,
    localing: Boolean
  },
  setup(__props) {
    const props2 = __props;
    const mBtnDeaultStyle = {
      background: props2.customColor,
      border: props2.customColor,
      color: "#fff"
    };
    const $slot = useSlots();
    const isClass = computed(() => {
      return [
        props2.size == "default" ? "mzl-button" : props2.size == "medium" ? "mzl-button-medium" : props2.size == "small" ? "mzl-button-small" : props2.size == "mini" ? "mzl-button-mini" : "mzl-button",
        props2.type ? props2.disabled ? "" : `mzl-button-${props2.type}` : "",
        props2.disabled ? `mzl-button-${props2.type}-disabled` : "",
        {
          "mzl-button-round": props2.round
        }
      ];
    });
    const isIconClass = computed(() => {
      return [
        "iconfont",
        props2.leftIcon || props2.rightIcon,
        props2.localing ? props2.leftIcon == "m-icon-loading1" || props2.leftIcon == "m-icon-loading2" || props2.leftIcon == "m-icon-loading3" || props2.leftIcon == "m-icon-loading4" || props2.leftIcon == "m-icon-loading5" || props2.leftIcon == "m-icon-loading6" || props2.rightIcon == "m-icon-loading1" || props2.rightIcon == "m-icon-loading2" || props2.rightIcon == "m-icon-loading3" || props2.rightIcon == "m-icon-loading4" || props2.rightIcon == "m-icon-loading5" || props2.rightIcon == "m-icon-loading6" ? "mzl-icon-loading" : "" : ""
      ];
    });
    const styles = computed(() => {
      return [
        props2.customColor == "" ? {} : props2.type == "default" ? {} : mBtnDeaultStyle
      ];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(unref(isClass)),
        style: normalizeStyle(unref(styles))
      }, [
        __props.leftIcon ? (openBlock(), createElementBlock("i", {
          key: 0,
          class: normalizeClass(unref(isIconClass))
        }, null, 2)) : createCommentVNode("", true),
        createElementVNode("span", {
          style: normalizeStyle({
            "margin-left": unref($slot)["default"] == void 0 ? "0px" : __props.leftIcon ? "4px" : "0px",
            "margin-right": unref($slot)["default"] == void 0 ? "0px" : __props.rightIcon ? "4px" : "0px"
          })
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 4),
        __props.rightIcon ? (openBlock(), createElementBlock("i", {
          key: 1,
          class: normalizeClass(unref(isIconClass))
        }, null, 2)) : createCommentVNode("", true)
      ], 6);
    };
  }
});
var mButton = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["__scopeId", "data-v-07af7873"]]);
mButton.install = (app) => {
  app.component(mButton.name, mButton);
};
var index_vue_vue_type_style_index_0_scoped_true_lang$s = "";
const _hoisted_1$w = ["type", "value", "disabled", "placeholder", "autofocus", "readonly", "form"];
const __default__$s = {
  name: "mInput"
};
const _sfc_main$B = /* @__PURE__ */ Object.assign(__default__$s, {
  props: {
    modelValue: String | Number,
    disabled: Boolean,
    clearable: Boolean,
    showPassword: Boolean,
    type: String,
    size: {
      type: String,
      default: "default"
    },
    leftIcon: {
      type: String,
      default: ""
    },
    rightIcon: {
      type: String,
      default: ""
    },
    placeholder: String,
    autofocus: Boolean,
    focusColor: {
      type: String,
      default: "#0e80eb"
    },
    readonly: Boolean,
    form: String
  },
  emits: ["update:modelValue", "clear", "focus", "blur", "input", "change"],
  setup(__props, { emit }) {
    const props2 = __props;
    const slot = useSlots();
    const isStyle = ref({});
    const inptype = ref(props2.type);
    let focusStyle = {
      "width": !!slot.btn ? "auto" : "100%",
      "float": !!slot.btn ? "left" : "auto",
      "border-radius": !!slot.btn ? "4px 0 0 4px" : "4px",
      "border-color": "#dcdfe6f6"
    };
    isStyle.value = focusStyle;
    const focus = (e) => {
      focusStyle["border-color"] = "#0e80eb";
      isStyle.value = {
        "width": !!slot.btn ? "auto" : "100%",
        "float": !!slot.btn ? "left" : "auto",
        "border-radius": !!slot.btn ? "4px 0 0 4px" : "4px",
        "border-color": props2.focusColor
      };
      emit("focus", e);
    };
    const blur = (e) => {
      isStyle.value = {
        "width": !!slot.btn ? "auto" : "100%",
        "float": !!slot.btn ? "left" : "auto",
        "border-radius": !!slot.btn ? "4px 0 0 4px" : "4px"
      };
      emit("blur", e);
    };
    const iptChange = (e) => {
      emit("update:modelValue", e.target.value);
      emit("input", e.target.value);
    };
    const change = (e) => {
      emit("change", e);
    };
    const clear = (e) => {
      emit("update:modelValue", "");
      emit("clear");
    };
    const showPwd = (e) => {
      if (inptype.value == "text") {
        inptype.value = "password";
      } else {
        inptype.value = "text";
      }
      console.log(e);
    };
    const isClass = computed(() => {
      return [
        props2.clearable ? "mzl-input-clearable" : props2.size == "default" ? "mzl-input-default" : `mzl-input-${props2.size}`,
        props2.leftIcon != "" ? `mzl-input-left-icon-${props2.size}` : !props2.clearable ? props2.rightIcon != "" ? `mzl-input-right-icon-${props2.size}` : "" : "",
        props2.disabled ? "mzl-input-disabled" : "",
        props2.type == "password" ? props2.showPassword ? `mzl-input-password-showpassword-${props2.size}` : `mzl-input-password-${props2.size}` : ""
      ];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([`mzl-group-input-${__props.size}`]),
        style: { "min-width": "auto" }
      }, [
        createElementVNode("div", {
          class: normalizeClass(unref(isClass)),
          style: normalizeStyle([isStyle.value, {}])
        }, [
          !__props.showPassword && __props.leftIcon != "" ? (openBlock(), createElementBlock("i", {
            key: 0,
            class: normalizeClass(["left-icon", "iconfont", __props.leftIcon])
          }, null, 2)) : createCommentVNode("", true),
          createElementVNode("input", {
            type: inptype.value,
            onFocus: focus,
            onBlur: blur,
            value: __props.modelValue,
            onInput: iptChange,
            disabled: __props.disabled,
            onChange: change,
            placeholder: __props.placeholder,
            autofocus: __props.autofocus,
            readonly: __props.readonly,
            form: __props.form
          }, null, 40, _hoisted_1$w),
          createVNode(Transition, { name: "slide-fade" }, {
            default: withCtx(() => [
              !__props.showPassword && __props.clearable && __props.modelValue != "" ? (openBlock(), createElementBlock("i", {
                key: 0,
                class: "clearable-icon iconfont m-icon-close",
                onClick: clear
              })) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          !__props.showPassword && __props.rightIcon != "" ? (openBlock(), createElementBlock("i", {
            key: 1,
            class: normalizeClass(["right-icon", "iconfont", __props.rightIcon])
          }, null, 2)) : createCommentVNode("", true),
          __props.showPassword ? (openBlock(), createElementBlock("i", {
            key: 2,
            class: normalizeClass(["password-icon", "iconfont m-icon-browse"]),
            onClick: _cache[0] || (_cache[0] = ($event) => showPwd(__props.type))
          })) : createCommentVNode("", true)
        ], 6),
        renderSlot(_ctx.$slots, "btn", {}, void 0, true)
      ], 2);
    };
  }
});
var mInput = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["__scopeId", "data-v-0bf6b33a"]]);
mInput.install = (app) => {
  app.component(mInput.name, mInput);
};
var index_vue_vue_type_style_index_0_scoped_true_lang$r = "";
const _hoisted_1$v = { key: 0 };
const _hoisted_2$l = { key: 1 };
const _hoisted_3$f = { key: 1 };
const __default__$r = {
  name: "mTable"
};
const _sfc_main$A = /* @__PURE__ */ Object.assign(__default__$r, {
  props: {
    options: {
      type: Object,
      default: () => {
        return {
          fileds: [],
          datas: []
        };
      }
    },
    size: {
      type: String,
      default: "default"
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    headStyle: {
      type: Object,
      default: () => {
        return {};
      }
    },
    rowStyle: {
      type: Object,
      default: () => {
        return {};
      }
    },
    customClass: String
  },
  setup(__props) {
    const $slot = useSlots();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([`mzl-table-${__props.size}`, __props.customClass])
      }, [
        createElementVNode("table", null, [
          __props.showHeader ? (openBlock(), createElementBlock("thead", _hoisted_1$v, [
            createElementVNode("tr", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.options.fileds, (x, n) => {
                return openBlock(), createElementBlock("th", {
                  key: n,
                  style: normalizeStyle([__props.headStyle, { "text-align": x.align }])
                }, [
                  unref($slot)["head-" + x.field] ? renderSlot(_ctx.$slots, "head-" + x.field, {
                    key: 0,
                    scope: x
                  }, void 0, true) : (openBlock(), createElementBlock("div", _hoisted_2$l, toDisplayString(x.title), 1))
                ], 4);
              }), 128))
            ])
          ])) : createCommentVNode("", true),
          createElementVNode("tbody", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.options.datas, (v, i) => {
              return openBlock(), createElementBlock("tr", { key: i }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.options.fileds, (m, j) => {
                  return openBlock(), createElementBlock("td", {
                    key: j,
                    style: normalizeStyle([__props.rowStyle, { width: __props.options.fileds[j].width ? __props.options.fileds[j].width : "", "text-align": __props.options.fileds[j].align }])
                  }, [
                    unref($slot)[__props.options.fileds[j].field] ? renderSlot(_ctx.$slots, __props.options.fileds[j].field, {
                      key: 0,
                      scope: { rowIndex: i, cellIndex: j, row: v }
                    }, void 0, true) : (openBlock(), createElementBlock("div", _hoisted_3$f, toDisplayString(__props.options.datas[i][__props.options.fileds[j].field]), 1))
                  ], 4);
                }), 128))
              ]);
            }), 128))
          ])
        ])
      ], 2);
    };
  }
});
var mTable = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__scopeId", "data-v-7a48af02"]]);
mTable.install = (app) => {
  app.component(mTable.name, mTable);
};
var index_vue_vue_type_style_index_0_scoped_true_lang$q = "";
const _hoisted_1$u = ["readonly", "placeholder", "disabled", "value"];
const _hoisted_2$k = {
  key: 0,
  class: "mzl-select-option"
};
const _hoisted_3$e = { class: "mzl-select-option-find" };
const _hoisted_4$c = ["onClick"];
const _hoisted_5$8 = {
  key: 0,
  class: "iconfont m-icon-select-bold"
};
const __default__$q = {
  name: "mSelect"
};
const _sfc_main$z = /* @__PURE__ */ Object.assign(__default__$q, {
  props: {
    modelValue: String | Array,
    placeholder: String,
    customClass: String,
    disabled: Boolean,
    searchable: Boolean,
    size: {
      type: String,
      default: "default"
    },
    width: {
      type: String,
      default: "260px"
    },
    height: {
      type: String,
      default: ""
    },
    options: {
      type: Array,
      default: () => {
        return [];
      }
    },
    labelFiled: {
      type: String,
      default: "label"
    },
    valueFiled: {
      type: String,
      default: "value"
    },
    multiple: Boolean
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit }) {
    const props2 = __props;
    props2.options.forEach((item, index) => {
      if (!props2.multiple) {
        item.selected = false;
      } else {
        props2.modelValue.forEach((item1, index1) => {
          if (item[props2.valueFiled] == item1) {
            item.selected = true;
          }
        });
        console.log();
      }
    });
    const activeIndex = ref(-1);
    const isShow = ref(false);
    const rotate = ref("rotate(0deg)");
    const optionsData = ref(props2.options || []);
    const selVal = ref(props2.multiple ? props2.modelValue : props2.modelValue != "" ? props2.options.filter((item) => {
      return item[props2.valueFiled] == props2.modelValue;
    })[0][props2.labelFiled] : "");
    const fixIcon = reactive({});
    const iconClass = computed(() => {
      return ["select-icon iconfont m-icon-arrow-down"];
    });
    const customStyle = computed(() => {
      let styles = {};
      if (props2.height) {
        let height = parseInt(props2.height) < 25 ? "25px" : props2.height;
        styles.height = height;
        fixIcon.lineHeight = height;
        fixIcon.top = 0;
        fixIcon.height = "100%";
      }
      return styles;
    });
    const selectClass = computed(() => {
      return [
        `mzl-select-${props2.size}`,
        props2.disabled ? `mzl-select-${props2.size}-disabled` : ""
      ];
    });
    const selectInputClass = computed(() => {
      return [
        "mzl-select-input-box",
        `mzl-select-input-${props2.size}`,
        props2.disabled ? `mzl-select-input-${props2.size}-disabled` : ""
      ];
    });
    const blur = (e) => {
      isShow.value = false;
      rotate.value = "rotate(0deg)";
    };
    const input = (e) => {
      selVal.value = e.target.value;
      optionsData.value = [];
      let filterList = props2.options.filter((item) => {
        return item[props2.labelFiled].indexOf(e.target.value) != -1;
      });
      filterList.forEach((item, index) => {
        optionsData.value.push(item);
      });
    };
    const vClickOutside = {
      beforeMount(el) {
        let handler = (e) => {
          if (!props2.disabled) {
            if (!props2.multiple) {
              if (el.contains(e.target) && e.target.className.indexOf("mzl-select-option-li") == -1) {
                if (!isShow.value) {
                  isShow.value = !isShow.value;
                  if (isShow.value) {
                    rotate.value = "rotate(180deg)";
                  } else {
                    rotate.value = "rotate(0deg)";
                  }
                }
              } else {
                if (isShow.value) {
                  blur();
                }
              }
            } else {
              if (el.contains(e.target)) {
                if (!isShow.value) {
                  isShow.value = !isShow.value;
                  if (isShow.value) {
                    rotate.value = "rotate(180deg)";
                  } else {
                    rotate.value = "rotate(0deg)";
                  }
                }
              } else {
                if (isShow.value) {
                  blur();
                }
              }
            }
          }
        };
        el.handler = handler;
        if (typeof document !== "undefined") {
          document.addEventListener("click", handler);
        }
      },
      unmounted(el) {
        if (typeof document !== "undefined") {
          document.removeEventListener("click", el.handler);
        }
      }
    };
    let labels = [];
    let indexs = [];
    const selChange = (item, index) => {
      if (!props2.multiple) {
        if (!item.disabled) {
          activeIndex.value = index;
          selVal.value = item[props2.labelFiled];
          emit("update:modelValue", item[props2.valueFiled]);
          emit("change", { lable: item.label, value: item.value, index });
          blur();
        }
      } else {
        if (!item.disabled) {
          Array.prototype.indexOf = function(val) {
            for (var i = 0; i < this.length; i++) {
              if (this[i] == val)
                return i;
            }
            return -1;
          };
          item.selected = !item.selected;
          if (item.selected) {
            selVal.value.push(item[props2.valueFiled]);
            labels.push(item.label);
            indexs.push(index);
          } else {
            selVal.value.splice(selVal.value.indexOf(item[props2.valueFiled]), 1);
            labels.splice(labels.indexOf(item.label), 1);
            indexs.splice(indexs.indexOf(index), 1);
          }
          emit("update:modelValue", selVal.value);
          emit("change", { lable: labels, value: selVal.value, index: indexs });
        }
      }
    };
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(selectClass), __props.customClass]),
        style: normalizeStyle([
          __props.customClass ? {} : { width: parseInt(__props.width) < 100 ? "100px" : __props.width }
        ])
      }, [
        createElementVNode("div", {
          class: normalizeClass(unref(selectInputClass))
        }, [
          createElementVNode("input", {
            type: "text",
            readonly: !__props.searchable,
            placeholder: selVal.value == "" ? __props.placeholder : selVal.value,
            style: normalizeStyle([__props.customClass ? {} : unref(customStyle)]),
            class: normalizeClass([selVal.value == "" ? "mzl-select-input" : "mzl-select-input-value"]),
            disabled: __props.disabled,
            onInput: input,
            value: selVal.value
          }, null, 46, _hoisted_1$u),
          createElementVNode("i", {
            class: normalizeClass(unref(iconClass)),
            style: normalizeStyle([{ transform: rotate.value }, unref(fixIcon)])
          }, null, 6)
        ], 2),
        createVNode(Transition, { name: "slide-fade" }, {
          default: withCtx(() => [
            isShow.value ? (openBlock(), createElementBlock("div", _hoisted_2$k, [
              createElementVNode("div", _hoisted_3$e, [
                createElementVNode("ul", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(optionsData.value, (item, index) => {
                    return openBlock(), createElementBlock("li", {
                      class: normalizeClass(["mzl-select-option-li", {
                        "mzl-select-active": activeIndex.value == index || selVal.value == item[__props.labelFiled] || item.selected,
                        "mzl-select-disabled": item.disabled
                      }]),
                      key: index,
                      onClick: ($event) => selChange(item, index)
                    }, [
                      createTextVNode(toDisplayString(item[__props.labelFiled]) + " ", 1),
                      __props.multiple && item.selected ? (openBlock(), createElementBlock("i", _hoisted_5$8)) : createCommentVNode("", true)
                    ], 10, _hoisted_4$c);
                  }), 128))
                ])
              ])
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ], 6)), [
        [vClickOutside]
      ]);
    };
  }
});
var mSelect = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__scopeId", "data-v-997604f4"]]);
mSelect.install = (app) => {
  app.component(mSelect.name, mSelect);
};
var index_vue_vue_type_style_index_0_scoped_true_lang$p = "";
const _withScopeId$7 = (n) => (pushScopeId("data-v-63cf7d91"), n = n(), popScopeId(), n);
const _hoisted_1$t = /* @__PURE__ */ createTextVNode();
const _hoisted_2$j = /* @__PURE__ */ _withScopeId$7(() => /* @__PURE__ */ createElementVNode("i", { class: "m-icon-arrow-down" }, null, -1));
const _hoisted_3$d = {
  key: 0,
  class: "mzl-dropdown-item"
};
const _hoisted_4$b = { class: "mzl-dropdown-item-child" };
const _hoisted_5$7 = ["onClick"];
const __default__$p = {
  name: "mDropdown"
};
const _sfc_main$y = /* @__PURE__ */ Object.assign(__default__$p, {
  props: {
    title: String,
    trigger: {
      type: String,
      default: "hover"
    },
    options: {
      type: Array,
      default: () => {
        return [];
      }
    },
    size: {
      type: String,
      default: "default"
    },
    customClass: String
  },
  emits: ["change"],
  setup(__props, { emit }) {
    const proprs = __props;
    useSlots();
    const isShow = ref(false);
    reactive({
      isOpenStyles: {
        height: "0px",
        display: "none"
      }
    });
    const mouseover = () => {
      if (proprs.trigger == "hover") {
        isShow.value = true;
      }
    };
    const mouseleave = () => {
      if (proprs.trigger == "hover") {
        isShow.value = false;
      }
    };
    const handleChange = (item, index) => {
      emit("change", item, index);
      isShow.value = false;
    };
    const handleClick = () => {
      if (proprs.trigger == "click") {
        isShow.value = !isShow.value;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([`mzl-dropdown-${__props.size}`, __props.customClass]),
        onMouseover: mouseover,
        onMouseleave: mouseleave,
        onClick: handleClick
      }, [
        createElementVNode("div", {
          class: normalizeClass([`mzl-dropdown-${__props.size}-menu`])
        }, [
          renderSlot(_ctx.$slots, "Img"),
          createElementVNode("span", null, toDisplayString(__props.title), 1),
          _hoisted_1$t,
          _hoisted_2$j
        ], 2),
        createVNode(Transition, { name: "slide-fade" }, {
          default: withCtx(() => [
            isShow.value ? (openBlock(), createElementBlock("div", _hoisted_3$d, [
              createElementVNode("div", _hoisted_4$b, [
                createElementVNode("ul", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, (item, index) => {
                    return openBlock(), createElementBlock("li", {
                      key: index,
                      onClick: withModifiers(($event) => handleChange(item, index), ["stop"])
                    }, [
                      createElementVNode("i", {
                        class: normalizeClass(item.icon)
                      }, null, 2),
                      createTextVNode(" " + toDisplayString(item.label), 1)
                    ], 8, _hoisted_5$7);
                  }), 128))
                ])
              ])
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ], 34);
    };
  }
});
var mDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__scopeId", "data-v-63cf7d91"]]);
mDropdown.install = (app) => {
  app.component(mDropdown.name, mDropdown);
};
var index_vue_vue_type_style_index_0_scoped_true_lang$o = "";
const _hoisted_1$s = ["onClick"];
const __default__$o = {
  name: "mRadio"
};
const _sfc_main$x = /* @__PURE__ */ Object.assign(__default__$o, {
  props: {
    modelValue: String | Number,
    size: {
      type: String,
      default: "default"
    },
    options: {
      type: Array,
      default: () => {
        return [];
      }
    },
    labelFiled: {
      type: String,
      default: "label"
    },
    valueFiled: {
      type: String,
      default: "value"
    },
    customColor: String,
    customClass: String,
    inline: {
      type: Boolean,
      default: true
    }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit }) {
    const props2 = __props;
    const modelVal = ref$1(props2.modelValue || "");
    const change = (item, index) => {
      if (!item.disabled) {
        modelVal.value = item[props2.valueFiled];
        emit("update:modelValue", item[props2.valueFiled]);
        emit("change", { "value": item[props2.valueFiled], "index": index });
      }
    };
    ref$1(0);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([`mzl-radio-${__props.size}`, __props.customClass])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, (item, index) => {
          return openBlock(), createElementBlock("label", {
            key: index,
            class: normalizeClass([{ "mzl-radio-active": modelVal.value == item[__props.valueFiled] }, item.disabled ? modelVal.value == item[__props.valueFiled] ? "mzl-radio-active-disabled" : "mzl-radio-disabled" : ""]),
            onClick: ($event) => change(item, index),
            style: normalizeStyle({ "display": __props.inline ? "inline-block" : "table", "margin-bottom": __props.inline ? "0" : __props.size == "small" ? "8px" : __props.size == "mini" ? "6px" : "10px" })
          }, [
            createElementVNode("span", {
              class: "mzl-radio-round",
              style: normalizeStyle({ "border-color": __props.customColor == "" ? "" : item.disabled ? "" : modelVal.value != item[__props.valueFiled] ? "" : __props.customColor, "background": __props.customColor == "" ? "" : item.disabled ? "" : modelVal.value != item[__props.valueFiled] ? "" : __props.customColor })
            }, null, 4),
            createElementVNode("span", {
              style: normalizeStyle({ "color": __props.customColor == "" ? "" : item.disabled ? "" : modelVal.value != item[__props.valueFiled] ? "" : __props.customColor })
            }, toDisplayString(item[__props.labelFiled]), 5)
          ], 14, _hoisted_1$s);
        }), 128))
      ], 2);
    };
  }
});
var mRadio = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__scopeId", "data-v-06eba1b9"]]);
mRadio.install = (app) => {
  app.component(mRadio.name, mRadio);
};
var index_vue_vue_type_style_index_0_scoped_true_lang$n = "";
const _hoisted_1$r = ["onClick"];
const __default__$n = {
  name: "mCheckbox"
};
const _sfc_main$w = /* @__PURE__ */ Object.assign(__default__$n, {
  props: {
    modelValue: {
      type: Array,
      default: () => {
        return [];
      }
    },
    size: {
      type: String,
      default: "default"
    },
    options: {
      type: Array,
      default: () => {
        return [];
      }
    },
    labelFiled: {
      type: String,
      default: "label"
    },
    valueFiled: {
      type: String,
      default: "value"
    },
    inline: {
      type: Boolean,
      default: true
    },
    customColor: String,
    customClass: String
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit }) {
    const props2 = __props;
    const checkOptions = ref(props2.options || []);
    checkOptions.value.forEach((item) => {
      item.checked = false;
      props2.modelValue.forEach((item1) => {
        if (item[props2.valueFiled] === item1) {
          item.checked = true;
        }
      });
    });
    const checkChange = (item, index) => {
      let checkData = [];
      if (!item.disabled) {
        item.checked = !item.checked;
      }
      checkOptions.value.forEach((item2, index2) => {
        if (item2.checked) {
          checkData.push(item2[props2.valueFiled]);
        }
      });
      emit("update:modelValue", checkData);
      emit("change", { "value": checkData, "index": index });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([`mzl-checkbox-${__props.size}`, __props.customClass])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(checkOptions.value, (item, index) => {
          return openBlock(), createElementBlock("label", {
            key: index,
            class: normalizeClass(["mzl-checkbox-label", [{ "mzl-checkbox-label-active": item.checked }, item.checked ? item.disabled ? "mzl-checkbox-label-active-disabled" : "" : item.disabled ? "mzl-checkbox-label-disabled" : ""]]),
            onClick: ($event) => checkChange(item, index),
            style: normalizeStyle({ "display": __props.inline ? "inline-block" : "table", "margin-bottom": __props.inline ? "0" : __props.size == "small" ? "8px" : __props.size == "mini" ? "6px" : "10px" })
          }, [
            createElementVNode("span", {
              class: "mzl-checkbox-selectbox",
              style: normalizeStyle({ "border-color": __props.customColor == "" ? "" : item.disabled ? "" : item.checked ? __props.customColor : "", "background": __props.customColor == "" ? "" : item.disabled ? "" : item.checked ? __props.customColor : "" })
            }, null, 4),
            createElementVNode("span", {
              style: normalizeStyle({ "color": __props.customColor == "" ? "" : item.disabled ? "" : item.checked ? __props.customColor : "" })
            }, toDisplayString(item[__props.labelFiled]), 5)
          ], 14, _hoisted_1$r);
        }), 128))
      ], 2);
    };
  }
});
var mCheckbox = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__scopeId", "data-v-fee6d9e4"]]);
mCheckbox.install = (app) => {
  app.component(mCheckbox.name, mCheckbox);
};
var index_vue_vue_type_style_index_0_scoped_true_lang$m = "";
const _hoisted_1$q = { class: "text" };
const _sfc_main$v = {
  props: {
    text: {
      type: [String, Object],
      default: ""
    },
    type: {
      type: String,
      default: "info"
    },
    icon: String,
    textColor: String,
    bgColor: String,
    customClass: String
  },
  setup(__props) {
    const props2 = __props;
    const state = reactive({
      style: {
        info: {
          icon: props2.icon || "m-icon-prompt-filling",
          color: "#505050",
          backgroundColor: "rgb(229 227 224)",
          borderColor: "rgb(229 227 224)"
        },
        warn: {
          icon: props2.icon || "m-icon-warning",
          color: "#f57b29",
          backgroundColor: "rgb(243 233 220)",
          borderColor: "rgb(243 233 220)"
        },
        error: {
          icon: props2.icon || "m-icon-delete-filling",
          color: "#ec3437",
          backgroundColor: "rgb(251 228 228)",
          borderColor: "rgb(251 228 228)"
        },
        success: {
          icon: props2.icon || "m-icon-success",
          color: "#09b63d",
          backgroundColor: "rgb(223 243 212)",
          borderColor: "rgb(223 243 212)"
        },
        custom: {
          icon: props2.icon,
          color: props2.textColor,
          backgroundColor: props2.bgColor,
          borderColor: props2.bgColor
        }
      }
    });
    const isShow = ref(false);
    const { style } = state;
    const isText = computed(() => {
      return typeof props2.text === "string";
    });
    onMounted(() => {
      isShow.value = true;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: "slide-fade" }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("div", {
            class: normalizeClass(["mzl-message", __props.customClass]),
            style: normalizeStyle(unref(style)[__props.type])
          }, [
            unref(isText) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createElementVNode("i", {
                class: normalizeClass([unref(style)[__props.type].icon])
              }, null, 2),
              createElementVNode("span", _hoisted_1$q, toDisplayString(__props.text), 1)
            ], 64)) : renderSlot(_ctx.$slots, "default", { key: 1 }, void 0, true)
          ], 6), [
            [vShow, isShow.value]
          ])
        ]),
        _: 3
      });
    };
  }
};
var mMessage = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-612bb88c"]]);
var Message = ({ text, type, timeout, icon, textColor, bgColor, customClass }) => {
  const div = typeof document !== "undefined" ? typeof document.createElement !== "undefined" ? document.createElement("div") : "" : "";
  div.setAttribute("class", "mzlui-meassage-container");
  if (typeof document !== "undefined") {
    document.body.appendChild(div);
  }
  let timer = null;
  const vnode = createVNode(mMessage, { text, type, timeout, icon, textColor, bgColor, customClass }, [text]);
  render(vnode, div);
  clearTimeout(timer);
  timer = setTimeout(() => {
    render(null, div);
    if (typeof document !== "undefined") {
      document.body.removeChild(div);
    }
    clearTimeout(timer);
  }, timeout || 2500);
};
var index_vue_vue_type_style_index_0_scoped_true_lang$l = "";
const _hoisted_1$p = { class: "mzl-wrapper" };
const _hoisted_2$i = { class: "mzl-header" };
const _hoisted_3$c = { class: "mzl-body" };
const _hoisted_4$a = { class: "mzl-footer" };
const _sfc_main$u = {
  props: {
    title: {
      type: String,
      default: "\u63D0\u793A"
    },
    text: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: "m-icon-warning"
    },
    confirmText: {
      type: String,
      default: "\u786E\u8BA4"
    },
    cancelText: {
      type: String,
      default: "\u53D6\u6D88"
    },
    confirmShow: {
      type: Boolean,
      default: true
    },
    cancelShow: {
      type: Boolean,
      default: true
    },
    closeShow: {
      type: Boolean,
      default: true
    },
    customClass: String,
    confirmCallback: {
      type: Function,
      default: () => {
      }
    },
    cancelCallback: {
      type: Function,
      default: () => {
      }
    }
  },
  setup(__props) {
    const isShow = ref(false);
    onMounted(() => {
      isShow.value = true;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: "fade" }, {
        default: withCtx(() => [
          isShow.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(["mzl-confirm", __props.customClass])
          }, [
            createElementVNode("div", _hoisted_1$p, [
              createElementVNode("div", _hoisted_2$i, [
                createElementVNode("h3", null, toDisplayString(__props.title), 1),
                __props.closeShow ? (openBlock(), createElementBlock("a", {
                  key: 0,
                  href: "JavaScript:;",
                  class: "m-icon-close",
                  onClick: _cache[0] || (_cache[0] = (...args) => __props.cancelCallback && __props.cancelCallback(...args))
                })) : createCommentVNode("", true)
              ]),
              createElementVNode("div", _hoisted_3$c, [
                createElementVNode("i", {
                  class: normalizeClass(["icon-warning", __props.icon])
                }, null, 2),
                createElementVNode("span", null, toDisplayString(__props.text), 1)
              ]),
              createElementVNode("div", _hoisted_4$a, [
                __props.cancelShow ? (openBlock(), createBlock(unref(mButton), {
                  key: 0,
                  onClick: __props.cancelCallback,
                  size: "small",
                  style: { "margin-right": "10px" }
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(__props.cancelText), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])) : createCommentVNode("", true),
                __props.confirmShow ? (openBlock(), createBlock(unref(mButton), {
                  key: 1,
                  onClick: __props.confirmCallback,
                  size: "small",
                  type: "primary"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(__props.confirmText), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])) : createCommentVNode("", true)
              ])
            ])
          ], 2)) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
};
var mConfirm = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-31ad20f7"]]);
const divNode = createVNode("div", { class: "mzlui-confirm-container" });
render(divNode, typeof document !== "undefined" ? document.body : "");
const container = divNode.el;
const Confirm = ({ title, text, icon, confirmText, cancelText, confirmShow, cancelShow, closeShow, customClass }) => {
  if (typeof document !== "undefined") {
    document.body.style = "overflow:hidden";
  }
  return new Promise((resolve, reject) => {
    const confirmCallback = () => {
      resolve();
      render(null, container);
      if (typeof document !== "undefined") {
        document.body.style = "overflow:initial";
      }
    };
    const cancelCallback = () => {
      reject();
      render(null, container);
      if (typeof document !== "undefined") {
        document.body.style = "overflow:initial";
      }
    };
    const VNode = createVNode(mConfirm, { title, text, icon, confirmText, cancelText, confirmShow, cancelShow, closeShow, customClass, confirmCallback, cancelCallback });
    render(VNode, container);
  });
};
var index_vue_vue_type_style_index_0_scoped_true_lang$k = "";
const _hoisted_1$o = { class: "mzl-modal-header" };
const _hoisted_2$h = { key: 1 };
const _hoisted_3$b = { class: "mzl-modal-content" };
const __default__$m = {
  name: "mModal"
};
const _sfc_main$t = /* @__PURE__ */ Object.assign(__default__$m, {
  props: {
    title: {
      type: String,
      default: "\u6807\u9898"
    },
    modelValue: Boolean,
    align: {
      type: String,
      default: ""
    },
    scrollLock: {
      type: Boolean,
      default: true
    },
    width: {
      type: String,
      default: "35%"
    },
    top: {
      type: String,
      default: "15%"
    },
    showClose: {
      type: Boolean,
      default: true
    },
    closeOnModal: {
      type: Boolean,
      default: true
    },
    customClass: String
  },
  emits: ["update:modelValue", "close"],
  setup(__props, { emit }) {
    const props2 = __props;
    const $slot = useSlots();
    const close = () => {
      emit("close");
      emit("update:modelValue", false);
    };
    onMounted(() => {
      watchEffect(() => {
        if (props2.modelValue) {
          if (props2.scrollLock) {
            if (typeof document !== "undefined") {
              document.body.style["overflow"] = "hidden";
            }
          }
        } else {
          if (typeof document !== "undefined") {
            document.body.style["overflow"] = "initial";
          }
        }
      });
    });
    const closeModal = (e) => {
      if (props2.closeOnModal) {
        if (e.target.className == "mzl-modal-default") {
          emit("update:modelValue", false);
          emit("close");
        }
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, { to: "body" }, [
        createVNode(Transition, { name: "fade" }, {
          default: withCtx(() => [
            __props.modelValue ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(["mzl-modal-default", __props.customClass]),
              onClick: _cache[0] || (_cache[0] = ($event) => closeModal($event))
            }, [
              createElementVNode("div", {
                class: "mzl-modal-contentbox",
                style: normalizeStyle({ "width": __props.width, "top": __props.top })
              }, [
                createElementVNode("div", _hoisted_1$o, [
                  createElementVNode("p", {
                    class: "mzl-modal-title",
                    style: normalizeStyle({ "text-align": __props.align == "center" ? __props.align : "" })
                  }, [
                    unref($slot)["header"] ? renderSlot(_ctx.$slots, "header", { key: 0 }, void 0, true) : (openBlock(), createElementBlock("span", _hoisted_2$h, toDisplayString(__props.title), 1))
                  ], 4),
                  __props.showClose ? (openBlock(), createElementBlock("i", {
                    key: 0,
                    class: "mzl-modal-close m-icon-close",
                    onClick: close
                  })) : createCommentVNode("", true)
                ]),
                createElementVNode("div", _hoisted_3$b, [
                  renderSlot(_ctx.$slots, "content", {}, void 0, true)
                ]),
                createElementVNode("div", {
                  class: "mzl-modal-footer",
                  style: normalizeStyle({ "text-align": __props.align == "center" ? __props.align : "" })
                }, [
                  renderSlot(_ctx.$slots, "footer", {}, void 0, true)
                ], 4)
              ], 4)
            ], 2)) : createCommentVNode("", true)
          ]),
          _: 3
        })
      ]);
    };
  }
});
var mModal = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-2d2a1c4d"]]);
mModal.install = (app) => {
  app.component(mModal.name, mModal);
};
var index_vue_vue_type_style_index_0_scoped_true_lang$j = "";
const _hoisted_1$n = { class: "mzl-drawer-contain-box" };
const _hoisted_2$g = { key: 2 };
const _hoisted_3$a = {
  key: 3,
  class: "mzl-drawer-header-btn"
};
const _hoisted_4$9 = {
  key: 1,
  class: "mzl-drawer-contain-box-footer"
};
const _hoisted_5$6 = { key: 1 };
const __default__$l = {
  name: "mDrawer"
};
const _sfc_main$s = /* @__PURE__ */ Object.assign(__default__$l, {
  props: {
    modelValue: Boolean,
    title: {
      type: String,
      default: "\u6807\u9898"
    },
    width: {
      type: String,
      default: "30%"
    },
    height: {
      type: String,
      default: "40%"
    },
    direction: {
      type: String,
      default: "left"
    },
    closeOnModal: {
      type: Boolean,
      default: true
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    showFooter: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    confirmText: {
      type: String,
      default: "\u786E\u5B9A"
    },
    cancelText: {
      type: String,
      default: "\u53D6\u6D88"
    },
    confirmShow: {
      type: Boolean,
      default: true
    },
    cancelShow: {
      type: Boolean,
      default: true
    },
    customClass: String
  },
  emits: ["update:modelValue", "close", "confirm", "cancel"],
  setup(__props, { emit }) {
    const props2 = __props;
    const $slot = useSlots();
    const styles = computed(() => {
      return [
        props2.direction == "left" ? { "top": 0, "left": 0, "width": props2.width, "height": "100%" } : props2.direction == "top" ? { "top": 0, "left": 0, "width": "100%", "height": props2.height } : props2.direction == "right" ? { "top": 0, "right": 0, "width": props2.width, "height": "100%" } : props2.direction == "bottom" ? { "bottom": 0, "left": 0, "width": "100%", "height": props2.height } : {}
      ];
    });
    const animateName = computed(() => {
      return props2.direction == "left" ? "slide-left" : props2.direction == "top" ? "slide-top" : props2.direction == "right" ? "slide-right" : props2.direction == "bottom" ? "slide-bottom" : "";
    });
    const close = () => {
      emit("update:modelValue", false);
      emit("close");
    };
    const confirmBtn = () => {
      emit("confirm");
    };
    const cancelBtn = () => {
      emit("cancel");
    };
    watchEffect(() => {
      if (props2.modelValue) {
        if (typeof document !== "undefined") {
          document.body.style = "overflow:hidden";
        }
      } else {
        if (typeof document !== "undefined") {
          document.body.style = "overflow:initial";
        }
      }
    });
    const closeOfModal = (e) => {
      if (props2.closeOnModal) {
        if (e.target.className == "mzl-drawer-pupop") {
          emit("update:modelValue", false);
          emit("close");
        }
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(Transition, { name: "fade-pupop" }, {
          default: withCtx(() => [
            __props.modelValue ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "mzl-drawer-pupop",
              onClick: _cache[0] || (_cache[0] = ($event) => closeOfModal($event))
            })) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(Transition, { name: unref(animateName) }, {
          default: withCtx(() => [
            __props.modelValue ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(["mzl-drawer-contain", __props.customClass]),
              style: normalizeStyle(unref(styles))
            }, [
              createElementVNode("div", _hoisted_1$n, [
                __props.showHeader ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: "mzl-drawer-contain-box-header",
                  style: normalizeStyle({ "padding": __props.showClose ? "0 20px 0 45px" : "0 20px 0 20px" })
                }, [
                  unref($slot)["header"] ? renderSlot(_ctx.$slots, "header", { key: 0 }, void 0, true) : createCommentVNode("", true),
                  __props.showClose ? (openBlock(), createElementBlock("i", {
                    key: 1,
                    class: "m-icon-close",
                    onClick: close
                  })) : createCommentVNode("", true),
                  !unref($slot)["header"] ? (openBlock(), createElementBlock("span", _hoisted_2$g, toDisplayString(__props.title), 1)) : createCommentVNode("", true),
                  !unref($slot)["header"] ? (openBlock(), createElementBlock("div", _hoisted_3$a, [
                    __props.cancelShow ? (openBlock(), createBlock(unref(mButton), {
                      key: 0,
                      size: "small",
                      style: normalizeStyle({ "margin-right": __props.confirmShow ? "10px" : "0" }),
                      onClick: cancelBtn
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(__props.cancelText), 1)
                      ]),
                      _: 1
                    }, 8, ["style"])) : createCommentVNode("", true),
                    __props.confirmShow ? (openBlock(), createBlock(unref(mButton), {
                      key: 1,
                      size: "small",
                      type: "primary",
                      onClick: confirmBtn
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(__props.confirmText), 1)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true)
                ], 4)) : createCommentVNode("", true),
                createElementVNode("div", {
                  class: "mzl-drawer-contain-box-content",
                  style: normalizeStyle({ "height": __props.showHeader ? __props.showFooter ? "calc(100% - 110px)" : "calc(100% - 55px)" : __props.showFooter ? "calc(100% - 55px)" : "100%" })
                }, [
                  renderSlot(_ctx.$slots, "content", {}, void 0, true)
                ], 4),
                __props.showFooter ? (openBlock(), createElementBlock("div", _hoisted_4$9, [
                  unref($slot)["footer"] ? renderSlot(_ctx.$slots, "footer", { key: 0 }, void 0, true) : (openBlock(), createElementBlock("span", _hoisted_5$6, "\u4F60\uFF0C\u6211\u751F\u547D\u4E2D\u4E00\u4E2A\u91CD\u8981\u7684\u8FC7\u5BA2\uFF0C\u4E4B\u6240\u4EE5\u662F\u8FC7\u5BA2\uFF0C\u56E0\u4E3A\u4F60\u672A\u66FE\u4E3A\u6211\u505C\u7559\uFF01"))
                ])) : createCommentVNode("", true)
              ])
            ], 6)) : createCommentVNode("", true)
          ]),
          _: 3
        }, 8, ["name"])
      ], 64);
    };
  }
});
var mDrawer = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-2c1c455e"]]);
mDrawer.install = (app) => {
  app.component(mDrawer.name, mDrawer);
};
var index_vue_vue_type_style_index_0_scoped_true_lang$i = "";
var index_vue_vue_type_style_index_1_lang = "";
const _hoisted_1$m = ["src"];
const _hoisted_2$f = { key: 2 };
const _sfc_main$r = {
  props: {
    obj: Object
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: "fade-pupop" }, {
        default: withCtx(() => [
          __props.obj.show ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "mzl-loading",
            style: normalizeStyle({ "position": __props.obj.position, "background-color": __props.obj.bgColor })
          }, [
            createElementVNode("div", {
              style: normalizeStyle({ color: __props.obj.textColor }),
              class: "mzl-loading-center"
            }, [
              __props.obj.showIcon && __props.obj.img == "" ? (openBlock(), createElementBlock("i", {
                key: 0,
                class: normalizeClass(["loading-icon", __props.obj.icon])
              }, null, 2)) : createCommentVNode("", true),
              __props.obj.img != "" ? (openBlock(), createElementBlock("img", {
                key: 1,
                src: __props.obj.img,
                alt: "",
                class: "loading-img"
              }, null, 8, _hoisted_1$m)) : createCommentVNode("", true),
              __props.obj.text != "" ? (openBlock(), createElementBlock("span", _hoisted_2$f, toDisplayString(__props.obj.text), 1)) : createCommentVNode("", true)
            ], 4)
          ], 4)) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
};
var mLoading = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-2568864a"]]);
const obj = reactive({
  show: false,
  text: "\u52A0\u8F7D\u4E2D...",
  icon: "m-icon-loading1",
  img: "",
  target: "body",
  textColor: "#fff",
  bgColor: "rgba(0, 0, 0, 0.6)",
  showIcon: true,
  position: "fixed",
  scrollLock: true
});
const $loading = createApp(mLoading, { obj }).mount(typeof document !== "undefined" ? typeof document.createElement !== "undefined" ? document.createElement("div") : "" : "");
const Loading = {
  show(data) {
    obj.show = true;
    if (data != void 0) {
      obj.text = data.text != void 0 ? data.text : obj.text;
      obj.target = data.target != void 0 ? data.target : obj.target;
      obj.scrollLock = data.scrollLock != void 0 ? data.scrollLock : obj.scrollLock;
      obj.icon = data.icon != void 0 ? data.icon == "m-icon-loading1" || data.icon == "m-icon-loading2" || data.icon == "m-icon-loading3" || data.icon == "m-icon-loading4" || data.icon == "m-icon-loading5" || data.icon == "m-icon-loading6" ? data.icon : obj.icon : obj.icon;
      obj.textColor = data.textColor != void 0 ? data.textColor : obj.textColor;
      obj.bgColor = data.bgColor != void 0 ? data.bgColor : obj.bgColor;
      obj.showIcon = data.showIcon != void 0 ? data.showIcon : obj.showIcon;
      obj.img = data.img != void 0 ? data.img : obj.img;
      watchEffect(() => {
        if (data.target != void 0) {
          if (obj.scrollLock) {
            if (typeof document !== "undefined") {
              document.querySelector(data.target).classList.add("mzl-loading-parentClass");
            }
          } else {
            setTimeout(() => {
              if (typeof document !== "undefined") {
                document.querySelector(data.target).classList.remove("mzl-loading-parentClass");
              }
            }, 500);
          }
        } else {
          if (obj.scrollLock) {
            if (typeof document !== "undefined") {
              document.body.classList.add("mzl-loading-parentClass");
            }
          } else {
            if (typeof document !== "undefined") {
              document.body.classList.remove("mzl-loading-parentClass");
            }
          }
        }
      });
      if (data.target != void 0) {
        if (typeof document !== "undefined") {
          document.querySelector(data.target).appendChild($loading.$el);
        }
        obj.position = "absolute";
      } else {
        if (typeof document !== "undefined") {
          document.body.appendChild($loading.$el);
        }
        obj.position = "fixed";
      }
    } else {
      if (typeof document !== "undefined") {
        document.body.appendChild($loading.$el);
      }
    }
  },
  hide() {
    obj.show = false;
    if (obj.target != "body") {
      setTimeout(() => {
        if (typeof document !== "undefined") {
          document.querySelector(obj.target).classList.remove("mzl-loading-parentClass");
        }
      }, 500);
    } else {
      if (typeof document !== "undefined") {
        document.body.classList.remove("mzl-loading-parentClass");
      }
    }
  }
};
var index_vue_vue_type_style_index_0_scoped_true_lang$h = "";
const __default__$k = {
  name: "mSwitch"
};
const _sfc_main$q = /* @__PURE__ */ Object.assign(__default__$k, {
  props: {
    modelValue: Boolean,
    width: {
      type: Number,
      default: 45
    },
    closeColor: {
      type: String,
      default: "#BFBFBF"
    },
    activeColor: {
      type: String,
      default: "#0e80eb"
    },
    closeText: {
      type: String,
      default: ""
    },
    activeText: {
      type: String,
      default: ""
    },
    textAlign: {
      type: String,
      default: "left"
    },
    showTipsText: Boolean,
    disabled: Boolean,
    customClass: String
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit }) {
    const props2 = __props;
    const roundStyle = reactive({ "left": "2px" });
    const flagTextStyle = reactive({ "left": props2.width - 20 + "px" });
    const switchStyle = reactive({ "background": props2.closeColor });
    const flagText = ref("\u5173");
    const switchText = ref(props2.modelValue ? props2.activeText : props2.closeText);
    const flag = ref(props2.modelValue);
    const handleSwitch = () => {
      if (!props2.disabled) {
        flag.value = !flag.value;
        emit("update:modelValue", flag.value);
        emit("change", flag.value);
      }
    };
    watchEffect(() => {
      roundStyle.left = props2.modelValue ? props2.width - 20 + "px" : "2px";
      flagTextStyle.left = props2.modelValue ? "6px" : props2.width - 20 + "px";
      switchStyle.background = props2.modelValue ? props2.activeColor : props2.closeColor;
      if (props2.modelValue) {
        flagText.value = "\u5F00";
        switchText.value = props2.activeText;
      } else {
        flagText.value = "\u5173";
        switchText.value = props2.closeText;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["mzl-switch-default", __props.customClass])
      }, [
        __props.textAlign == "left" && __props.closeText != "" && __props.activeText != "" ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: "mzl-switch-left-text",
          style: normalizeStyle({ "color": __props.modelValue ? __props.activeColor : __props.closeColor })
        }, toDisplayString(switchText.value), 5)) : createCommentVNode("", true),
        createElementVNode("div", {
          class: normalizeClass(["mzl-switch-content", { "mzl-switch-disabled": __props.disabled }]),
          onClick: handleSwitch,
          style: normalizeStyle([unref(switchStyle), { "width": __props.width + "px" }])
        }, [
          createElementVNode("span", {
            class: "mzl-switch-round",
            style: normalizeStyle([unref(roundStyle)])
          }, null, 4),
          __props.showTipsText ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: "mzl-switch-flagtext",
            style: normalizeStyle(unref(flagTextStyle))
          }, toDisplayString(flagText.value), 5)) : createCommentVNode("", true)
        ], 6),
        __props.textAlign == "right" && __props.closeText != "" && __props.activeText != "" ? (openBlock(), createElementBlock("span", {
          key: 1,
          class: "mzl-switch-right-text",
          style: normalizeStyle({ "color": __props.modelValue ? __props.activeColor : __props.closeColor })
        }, toDisplayString(switchText.value), 5)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
var mSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-64626ef6"]]);
mSwitch.install = (app) => {
  app.component(mSwitch.name, mSwitch);
};
var treeItem_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$l = {
  class: /* @__PURE__ */ normalizeClass(["mzl-tree-item-box"])
};
const _hoisted_2$e = ["data-key"];
const _hoisted_3$9 = { class: "mzl-tree-label" };
const _hoisted_4$8 = {
  key: 0,
  class: "mzl-tree-ul-box"
};
const _sfc_main$p = {
  props: {
    items: {
      type: Object,
      default: () => {
      }
    },
    dataKey: String | Number,
    index: Number,
    icon: {
      type: String,
      default: "m-icon-arrow-right-filling"
    },
    defaultOpenNodes: {
      type: Array,
      default: () => []
    },
    options: {
      type: Object,
      default: () => {
        return {};
      }
    },
    tabIndexs: String | Number,
    multiple: Boolean,
    defaultSelectNodes: {
      type: Array,
      default: () => []
    }
  },
  emits: ["nodeClick", "change", "selectClick"],
  setup(__props, { emit }) {
    const props2 = __props;
    useCssVars((_ctx) => ({
      "ee0d81c6": height.value
    }));
    props2.items.key = props2.dataKey;
    const height = ref(26 + "px");
    const selectedLen = ref(0);
    const selectList = ref([]);
    var recursiveFunction = function(items) {
      var str = "";
      const getStr = function(items2) {
        if (items2.isOpen) {
          items2.children.forEach((v, i) => {
            if (v.children) {
              getStr(v);
              str += v.label + ";";
            } else {
              str += v.label + ";";
            }
          });
        }
      };
      getStr(items);
      return str.split(";");
    };
    const isFolder = computed(() => {
      return props2.children.items && props2.items.children.length;
    });
    const toggle = (item) => {
      if (!item.disabled) {
        if (isFolder && item.children && item.children.length) {
          item.isOpen = !item.isOpen;
          if (!item.isOpen) {
            setTimeout(() => {
              height.value = "26px";
            }, 100);
          } else {
            height.value = (recursiveFunction(item).length - 1) * 26 + "px";
          }
        }
        emit("nodeClick", item);
        emit("change", item.key);
      }
    };
    const outClick = (item, e) => {
      emit("nodeClick", item);
      emit("change", item.key);
    };
    const getParents = (option, key) => {
      for (var i in option) {
        if (option[i].key == key) {
          return [option[i]];
        }
        if (option[i].children) {
          var ro = getParents(option[i].children, key);
          if (ro !== void 0) {
            return ro.concat(option[i]);
          }
        }
      }
    };
    const setSelectted = (item, flag) => {
      item.forEach((v, i) => {
        v.isSelected = flag;
        if (v.children) {
          setSelectted(v.children, flag);
        }
      });
    };
    let n = 0;
    const isParentSel = (item) => {
      item.forEach((v, i) => {
        n += 1;
        if (v.isSelected) {
          selectedLen.value += 1;
        }
        if (v.children) {
          isParentSel(v.children);
        }
      });
    };
    const getSameLevelChile = (item, item1) => {
      let n1 = 0;
      item.children.forEach((v, i) => {
        if (v.isSelected) {
          n1 += 1;
        }
      });
      isParentSel(item1.children);
      if (n1 == item.children.length) {
        selectedLen.value + 1;
        item.isSelected = true;
        item.semiSelected = false;
      } else if (n1 == 0) {
        item.isSelected = false;
        item.semiSelected = false;
      } else {
        item.semiSelected = true;
      }
      if (selectedLen.value == n) {
        item1.isSelected = true;
        item1.semiSelected = false;
      } else if (selectedLen.value == 0) {
        item1.isSelected = false;
        item1.semiSelected = false;
      } else {
        item1.isSelected = false;
        item1.semiSelected = true;
      }
    };
    const getIsSelectNode = (option) => {
      option.forEach((v, i) => {
        if (v.isSelected) {
          selectList.value.push(v);
        }
        if (v.children) {
          getIsSelectNode(v.children);
        }
      });
      return selectList.value;
    };
    const selectClick = (item, index) => {
      if (!item.disabled) {
        item.isSelected = !item.isSelected;
        item.semiSelected = false;
        selectList.value = [];
        let nodeItems = getParents(props2.options, item.key);
        if (item.isSelected) {
          if (item.children) {
            setSelectted(item.children, true);
          }
          if (nodeItems.length > 1) {
            n = selectedLen.value = 0;
            getSameLevelChile(nodeItems[1], nodeItems[nodeItems.length - 1]);
          }
        } else {
          if (item.children) {
            setSelectted(item.children, false);
          }
          if (nodeItems.length > 1) {
            n = selectedLen.value = 0;
            getSameLevelChile(nodeItems[1], nodeItems[nodeItems.length - 1]);
          }
        }
        emit("selectClick", item);
        emit("nodeClick", getIsSelectNode(props2.options));
      }
    };
    const setSelect = (option, key) => {
      option.forEach((v, i) => {
        if (v.key == key) {
          v.isSelected = true;
        }
        if (v.children) {
          setSelect(v.children, key);
        }
      });
    };
    onMounted(() => {
      if (props2.defaultOpenNodes && props2.defaultOpenNodes.length) {
        props2.defaultOpenNodes.forEach((v, i) => {
          getParents(props2.options, v).forEach((item, index) => {
            item.isOpen = true;
            setTimeout(() => {
              if (item.children) {
                height.value = (recursiveFunction(item).length - 1) * 26 + "px";
              }
            }, 100);
          });
        });
      }
      if (props2.multiple) {
        if (props2.defaultSelectNodes && props2.defaultSelectNodes.length) {
          props2.defaultSelectNodes.forEach((v, i) => {
            setSelect(props2.options, v);
            getParents(props2.options, v).forEach((item, index) => {
              item.isOpen = true;
              setTimeout(() => {
                if (item.children) {
                  height.value = (recursiveFunction(item).length - 1) * 26 + "px";
                }
              }, 100);
            });
            let nodeItems = getParents(props2.options, v);
            getSameLevelChile(nodeItems[1], nodeItems[nodeItems.length - 1]);
          });
        }
      }
    });
    return (_ctx, _cache) => {
      const _component_tree_item = resolveComponent("tree-item", true);
      return openBlock(), createElementBlock("div", _hoisted_1$l, [
        createElementVNode("li", null, [
          createElementVNode("div", {
            class: normalizeClass(["mzl-tree-lable-box", { "label-active": __props.tabIndexs === __props.items.key, "mzl-tree-lable-disabled": __props.items.disabled }]),
            onClick: _cache[1] || (_cache[1] = withModifiers(($event) => toggle(__props.items), ["stop", "prevent"])),
            "data-key": __props.dataKey,
            style: normalizeStyle({ "padding-left": __props.index * 15 + "px" })
          }, [
            createElementVNode("span", {
              class: normalizeClass([{ rotate: __props.icon != "m-icon-arrow-right-filling" ? false : __props.items.isOpen }, "mzl-tree-lable-span"])
            }, [
              createElementVNode("i", {
                class: normalizeClass([{ "m-icon-arrow-right-filling": __props.items.children && __props.items.children.length }])
              }, null, 2)
            ], 2),
            __props.multiple ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass(["mzl-tree-label-select-span", { "mzl-tree-label-select-span-active": __props.items.isSelected, "mzl-tree-label-select-span-active-1": __props.items.semiSelected }]),
              onClick: _cache[0] || (_cache[0] = withModifiers(($event) => selectClick(__props.items, __props.index), ["stop"]))
            }, null, 2)) : createCommentVNode("", true),
            createElementVNode("span", _hoisted_3$9, toDisplayString(__props.items.label), 1)
          ], 14, _hoisted_2$e),
          createVNode(Transition, { name: "slide-fade" }, {
            default: withCtx(() => [
              __props.items.children && __props.items.children.length ? withDirectives((openBlock(), createElementBlock("div", _hoisted_4$8, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items.children, (v, i) => {
                  return openBlock(), createBlock(_component_tree_item, {
                    key: i,
                    items: v,
                    "data-key": __props.dataKey + "-" + i,
                    defaultOpenNodes: __props.defaultOpenNodes,
                    icon: __props.icon,
                    onNodeClick: _cache[2] || (_cache[2] = ($event) => outClick($event, __props.items)),
                    options: __props.options,
                    index: __props.index + 1,
                    tabIndexs: __props.tabIndexs,
                    onSelectClick: _cache[3] || (_cache[3] = ($event) => emit("selectClick", $event)),
                    multiple: __props.multiple,
                    defaultSelectNodes: __props.defaultSelectNodes
                  }, null, 8, ["items", "data-key", "defaultOpenNodes", "icon", "options", "index", "tabIndexs", "multiple", "defaultSelectNodes"]);
                }), 128))
              ], 512)), [
                [vShow, __props.items.isOpen]
              ]) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
};
var treeItem = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-51b342d9"]]);
const __default__$j = {
  name: "mTree"
};
const _sfc_main$o = /* @__PURE__ */ Object.assign(__default__$j, {
  props: {
    options: {
      type: Object,
      default: () => {
        return {};
      }
    },
    icon: String,
    defaultOpenNodes: Array,
    customClass: String,
    multiple: Boolean,
    defaultSelectNodes: {
      type: Array,
      default: () => []
    }
  },
  emits: ["nodeClick", "selectClick"],
  setup(__props, { emit }) {
    const props2 = __props;
    props2.options.forEach((item, index) => {
      item.key = index.toString();
    });
    const tabKey = ref("");
    const changeKey = (e) => {
      tabKey.value = e;
    };
    const nClick = (item) => {
      emit("nodeClick", item);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["mzl-tree-content-box", __props.customClass])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, (item, index) => {
          return openBlock(), createBlock(treeItem, {
            key: index,
            items: item,
            "data-key": index,
            icon: __props.icon,
            defaultOpenNodes: __props.defaultOpenNodes,
            onNodeClick: _cache[0] || (_cache[0] = ($event) => nClick($event)),
            options: __props.options,
            index: 0,
            onChange: _cache[1] || (_cache[1] = ($event) => changeKey($event)),
            tabIndexs: tabKey.value,
            onSelectClick: _cache[2] || (_cache[2] = ($event) => emit("selectClick", $event)),
            multiple: __props.multiple,
            defaultSelectNodes: __props.defaultSelectNodes
          }, null, 8, ["items", "data-key", "icon", "defaultOpenNodes", "options", "tabIndexs", "multiple", "defaultSelectNodes"]);
        }), 128))
      ], 2);
    };
  }
});
_sfc_main$o.install = (app) => {
  app.component(_sfc_main$o.name, _sfc_main$o);
};
var index_vue_vue_type_style_index_0_scoped_true_lang$g = "";
const _withScopeId$6 = (n) => (pushScopeId("data-v-7dd573b6"), n = n(), popScopeId(), n);
const _hoisted_1$k = ["accept", "multiple"];
const _hoisted_2$d = { class: "mzl-preview-img-box" };
const _hoisted_3$8 = { class: "mzl-previre-img-actions" };
const _hoisted_4$7 = ["src"];
const _hoisted_5$5 = { class: "customArea" };
const _hoisted_6$4 = ["onClick"];
const _hoisted_7$3 = { class: "mzl-optfile-text-pos" };
const _hoisted_8$3 = { key: 0 };
const _hoisted_9$3 = {
  key: 0,
  class: "mzl-optfile-filelist"
};
const _hoisted_10$3 = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createElementVNode("i", { class: "file-icon m-icon-file" }, null, -1));
const _hoisted_11$3 = ["onClick"];
const __default__$i = {
  name: "mOptfile"
};
const _sfc_main$n = /* @__PURE__ */ Object.assign(__default__$i, {
  props: {
    accept: String,
    multiple: Boolean,
    type: String,
    label: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: ""
    },
    targetType: {
      type: String,
      default: "btn"
    },
    icon: {
      type: String,
      default: "m-icon-add-bold"
    },
    fileList: {
      type: Array,
      default: () => {
        return [];
      }
    },
    drop: Boolean,
    customClass: String,
    showFileList: Boolean,
    imgListShow: Boolean
  },
  emits: ["change", "update:fileList", "beforeChange"],
  setup(__props, { emit }) {
    const props2 = __props;
    const $slot = useSlots();
    const windowURL = typeof window !== "undefined" ? window.URL || window.webkitURL : "";
    const File = reactive([]);
    const FileList = reactive(props2.fileList || []);
    ref("");
    const lableText = ref(props2.label);
    const activeFile = ref(false);
    const refInp = ref(null);
    const refDiv = ref(null);
    const changeFile = () => {
      emit("beforeChange");
      console.log(refInp);
      refInp.value.click();
    };
    const testchange = (e) => {
      File.unshift(...e.target.files);
      FileList.unshift(...e.target.files);
      File.forEach((item, index) => {
        item.preImgUrl = windowURL.createObjectURL(item);
      });
      emit("change", File);
      emit("update:fileList", File);
    };
    const deleteImg = (index) => {
      File.splice(index, 1);
      FileList.splice(index, 1);
      emit("update:fileList", File);
    };
    onMounted(() => {
      if (props2.drop && props2.targetType == "box") {
        let dropArea = refDiv.value;
        dropArea.addEventListener("drop", (e) => {
          e.stopPropagation();
          e.preventDefault();
          File.unshift(...e.dataTransfer.files);
          FileList.unshift(...e.dataTransfer.files);
          File.forEach((item, index) => {
            item.preImgUrl = windowURL.createObjectURL(item);
          });
          emit("change", File);
          emit("update:fileList", File);
          lableText.value = props2.label;
          activeFile.value = false;
        }, false);
        dropArea.addEventListener("dragleave", (e) => {
          e.stopPropagation();
          e.preventDefault();
          activeFile.value = false;
          lableText.value = props2.label;
        });
        dropArea.addEventListener("dragenter", (e) => {
          e.stopPropagation();
          e.preventDefault();
          activeFile.value = true;
          lableText.value = "\u677E\u5F00\u9F20\u6807\u5B8C\u6210";
          emit("beforeChange");
        });
        dropArea.addEventListener("dragover", (e) => {
          e.stopPropagation();
          e.preventDefault();
          activeFile.value = true;
          lableText.value = "\u677E\u5F00\u9F20\u6807\u5B8C\u6210";
        });
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["mzl-optfile-default", __props.customClass])
      }, [
        createElementVNode("input", {
          type: "file",
          accept: __props.accept,
          multiple: __props.multiple,
          onChange: testchange,
          hidden: "",
          ref_key: "refInp",
          ref: refInp
        }, null, 40, _hoisted_1$k),
        createElementVNode("div", _hoisted_2$d, [
          createVNode(TransitionGroup, { name: "list-img" }, {
            default: withCtx(() => [
              __props.targetType == "box" && __props.imgListShow && !__props.showFileList ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(File), (item, index) => {
                return openBlock(), createElementBlock("div", {
                  class: "mzl-preview-img-img",
                  key: index
                }, [
                  createElementVNode("div", _hoisted_3$8, [
                    createElementVNode("img", {
                      src: item.preImgUrl,
                      alt: ""
                    }, null, 8, _hoisted_4$7),
                    createElementVNode("div", _hoisted_5$5, [
                      unref($slot)["defalut"] ? renderSlot(_ctx.$slots, "default", { key: 0 }, void 0, true) : (openBlock(), createElementBlock("i", {
                        key: 1,
                        class: "customIcon m-icon-ashbin",
                        onClick: ($event) => deleteImg(index)
                      }, null, 8, _hoisted_6$4))
                    ])
                  ])
                ]);
              }), 128)) : createCommentVNode("", true)
            ]),
            _: 3
          }),
          __props.targetType == "btn" ? (openBlock(), createBlock(unref(mButton), {
            key: 0,
            type: __props.type,
            leftIcon: __props.icon,
            onClick: changeFile
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(__props.label), 1)
            ]),
            _: 1
          }, 8, ["type", "leftIcon"])) : createCommentVNode("", true),
          __props.targetType == "box" ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(["mzl-optfie-area", { "mzl-optfie-area-big": __props.size == "big", "mzl-opfile-area-active": activeFile.value }]),
            ref_key: "refDiv",
            ref: refDiv
          }, [
            createElementVNode("div", {
              class: "mzl-optfile-area-text",
              onClick: changeFile
            }, [
              createElementVNode("div", _hoisted_7$3, [
                createElementVNode("i", {
                  class: normalizeClass([__props.icon, "icon-file"])
                }, null, 2),
                __props.label != "" ? (openBlock(), createElementBlock("p", _hoisted_8$3, toDisplayString(lableText.value), 1)) : createCommentVNode("", true)
              ])
            ])
          ], 2)) : createCommentVNode("", true)
        ]),
        unref(FileList).length > 0 && __props.showFileList ? (openBlock(), createElementBlock("div", _hoisted_9$3, [
          createElementVNode("ul", null, [
            createVNode(TransitionGroup, { name: "list" }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(FileList), (item, index) => {
                  return openBlock(), createElementBlock("li", { key: index }, [
                    createElementVNode("div", null, [
                      _hoisted_10$3,
                      createElementVNode("span", null, toDisplayString(item.name), 1),
                      createElementVNode("i", {
                        class: "delete m-icon-ashbin",
                        onClick: ($event) => deleteImg(index)
                      }, null, 8, _hoisted_11$3)
                    ])
                  ]);
                }), 128))
              ]),
              _: 1
            })
          ])
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
var mOptfile = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-7dd573b6"]]);
mOptfile.install = (app) => {
  app.component(mOptfile.name, mOptfile);
};
var index_vue_vue_type_style_index_0_scoped_true_lang$f = "";
const _hoisted_1$j = ["form", "cols", "rows", "placeholder", "maxlength", "value", "disabled", "readonly"];
const _hoisted_2$c = {
  key: 0,
  class: "max-length-box"
};
const __default__$h = {
  name: "mTextarea"
};
const _sfc_main$m = /* @__PURE__ */ Object.assign(__default__$h, {
  props: {
    modelValue: String,
    customClass: String,
    placeholder: String,
    disabled: Boolean,
    resize: {
      type: Boolean,
      default: true
    },
    form: String,
    rows: {
      type: Number,
      default: 4
    },
    cols: {
      type: Number,
      default: 50
    },
    readonly: Boolean,
    maxlength: Number,
    focusColor: {
      type: String,
      default: "#0e80eb"
    }
  },
  emits: ["update:modelValue", "focus", "blur", "input"],
  setup(__props, { emit }) {
    const props2 = __props;
    const textareaMzl = ref(null);
    const n = ref(props2.modelValue.length || 0);
    const tStyle = ref({ "resize": props2.resize ? "auto" : "none", "border-color": "" });
    const input = () => {
      emit("update:modelValue", textareaMzl.value.value);
      n.value = textareaMzl.value.value.length;
      if (n.value >= props2.maxlength) {
        n.value = props2.maxlength;
      }
      emit("input", textareaMzl.value.value);
    };
    const focus = (e) => {
      emit("focus", e.target.value);
      tStyle.value["border-color"] = props2.focusColor;
    };
    const blur = (e) => {
      emit("blur", e.target.value);
      tStyle.value["border-color"] = "";
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["mzl-textarea-default", __props.customClass, { "mzl-textarea-disabled": __props.disabled }])
      }, [
        createElementVNode("textarea", {
          form: __props.form,
          cols: __props.cols,
          rows: __props.rows,
          placeholder: __props.placeholder,
          maxlength: __props.maxlength,
          value: __props.modelValue,
          onInput: input,
          ref_key: "textareaMzl",
          ref: textareaMzl,
          disabled: __props.disabled,
          style: normalizeStyle(tStyle.value),
          onFocus: focus,
          onBlur: blur,
          readonly: __props.readonly
        }, null, 44, _hoisted_1$j),
        __props.maxlength != void 0 && __props.maxlength > 0 ? (openBlock(), createElementBlock("div", _hoisted_2$c, toDisplayString(`${n.value}/${__props.maxlength}`), 1)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
var mTextarea = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-055a31e2"]]);
mTextarea.install = (app) => {
  app.component(mTextarea.name, mTextarea);
};
var index_vue_vue_type_style_index_0_scoped_true_lang$e = "";
const _sfc_main$l = {
  name: "mRow"
};
const _hoisted_1$i = { class: "mzl-row-default" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$i, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ]);
}
var mRow = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$2], ["__scopeId", "data-v-1d1ea6a4"]]);
mRow.install = (app) => {
  app.component(mRow.name, mRow);
};
var index_vue_vue_type_style_index_0_scoped_true_lang$d = "";
const _hoisted_1$h = { class: "mzl-col-default" };
const __default__$g = {
  name: "mCol"
};
const _sfc_main$k = /* @__PURE__ */ Object.assign(__default__$g, {
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: Number
  },
  setup(__props) {
    const props2 = __props;
    useCssVars((_ctx) => ({
      "39b9da93": width.value,
      "209d5d34": offset.value
    }));
    const width = ref(props2.span <= 24 ? props2.span % 1 == 0 ? 100 / 24 * props2.span + "%" : "" : "");
    const offset = ref(props2.offset <= 24 ? props2.offset % 1 == 0 ? 100 / 24 * props2.offset + "%" : "" : "");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$h, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]);
    };
  }
});
var mCol = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-cc55ad60"]]);
mCol.install = (app) => {
  app.component(mCol.name, mCol);
};
var index_vue_vue_type_style_index_0_scoped_true_lang$c = "";
const _withScopeId$5 = (n) => (pushScopeId("data-v-7333769d"), n = n(), popScopeId(), n);
const _hoisted_1$g = { class: "mzl-pagination-inlinebox" };
const _hoisted_2$b = { class: "mzl-pagination-pagebox" };
const _hoisted_3$7 = {
  key: 0,
  class: "mzl-total"
};
const _hoisted_4$6 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createElementVNode("i", { class: "m-icon-arrow-left-bold" }, null, -1));
const _hoisted_5$4 = [
  _hoisted_4$6
];
const _hoisted_6$3 = ["onClick"];
const _hoisted_7$2 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createElementVNode("i", { class: "m-icon-arrow-right-bold" }, null, -1));
const _hoisted_8$2 = [
  _hoisted_7$2
];
const _hoisted_9$2 = {
  key: 5,
  class: "to-next-page-box"
};
const _hoisted_10$2 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createElementVNode("span", null, "\u8DF3\u81F3", -1));
const _hoisted_11$2 = { class: "input-span" };
const _hoisted_12$1 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createElementVNode("span", null, "\u9875", -1));
const __default__$f = {
  name: "mPagination"
};
const _sfc_main$j = /* @__PURE__ */ Object.assign(__default__$f, {
  props: {
    total: Number,
    current: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    maxSize: {
      type: Number,
      default: 10
    },
    align: {
      type: String,
      default: "left"
    },
    prevText: String,
    nextText: String,
    disabled: Boolean,
    activeColors: {
      type: Object,
      default: () => {
        return {
          "background": "#fff",
          "hoverBackground": "#fff",
          "borderColor": "#d9d9d9",
          "hoverBorderColor": "#0e80eb",
          "color": "#505050",
          "hoverColor": "#0e80eb"
        };
      }
    },
    border: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: "default"
    },
    showTotal: Boolean,
    jumper: Boolean
  },
  emits: ["update:current", "change"],
  setup(__props, { emit }) {
    const props2 = __props;
    useCssVars((_ctx) => ({
      "480fc361": border.value ? "1px solid #d9d9d9" : _ctx.none,
      "f6c99696": colors.value.borderColor,
      "afcd67fe": colors.value.color,
      "ca952960": colors.value.background,
      "8a160746": colors.value.hoverBorderColor,
      "0ea81cae": colors.value.hoverColor,
      "f89fe2b0": colors.value.hoverBackground
    }));
    const currentPage = ref(props2.current || 0);
    const marginLeft = ref(0);
    const colors = ref(props2.activeColors);
    const border = ref(props2.border);
    const prevChange = () => {
      if (!props2.disabled) {
        if (currentPage.value > 1) {
          currentPage.value -= 1;
          emit("update:current", currentPage.value);
          emit("change", currentPage.value);
          if (Math.ceil(props2.total / props2.pageSize) > props2.maxSize) {
            if (currentPage.value > props2.maxSize / 2 && Math.ceil(props2.total / props2.pageSize) - currentPage.value >= props2.maxSize / 2) {
              marginLeft.value += props2.size == "small" ? 32 : 36;
            }
          }
        }
      }
    };
    const nextChange = () => {
      if (!props2.disabled) {
        if (currentPage.value < Math.ceil(props2.total / props2.pageSize)) {
          currentPage.value += 1;
          emit("update:current", currentPage.value);
          emit("change", currentPage.value);
          if (Math.ceil(props2.total / props2.pageSize) > props2.maxSize) {
            if (currentPage.value > props2.maxSize / 2 && Math.ceil(props2.total / props2.pageSize) - currentPage.value >= props2.maxSize / 2) {
              marginLeft.value -= props2.size == "small" ? 32 : 36;
            }
          }
        }
      }
    };
    const change = (index) => {
      if (!props2.disabled) {
        currentPage.value = index;
        emit("update:current", currentPage.value);
        emit("change", currentPage.value);
        if (Math.ceil(props2.total / props2.pageSize) > props2.maxSize) {
          if (currentPage.value > props2.maxSize / 2 && Math.ceil(props2.total / props2.pageSize) - currentPage.value >= props2.maxSize / 2) {
            marginLeft.value = (currentPage.value - props2.maxSize / 2) * -(props2.size == "small" ? 32 : 36);
          } else if (currentPage.value <= props2.maxSize / 2) {
            marginLeft.value = 0;
          } else if (props2.pageSize - currentPage.value < props2.maxSize / 2) {
            marginLeft.value = (Math.ceil(props2.total / props2.pageSize) - props2.maxSize) * -(props2.size == "small" ? 32 : 36);
          }
        }
      }
    };
    const topage = (e) => {
      if (!props2.disabled) {
        if (parseInt(e.target.value) <= Math.ceil(props2.total / props2.pageSize)) {
          currentPage.value = e.target.value;
          emit("update:current", currentPage.value);
          emit("change", currentPage.value);
          if (Math.ceil(props2.total / props2.pageSize) > props2.maxSize) {
            if (currentPage.value > props2.maxSize / 2 && Math.ceil(props2.total / props2.pageSize) - currentPage.value >= props2.maxSize / 2) {
              marginLeft.value = (currentPage.value - props2.maxSize / 2) * -(props2.size == "small" ? 32 : 36);
            } else if (currentPage.value <= props2.maxSize / 2) {
              marginLeft.value = 0;
            } else if (props2.pageSize - currentPage.value < props2.maxSize / 2) {
              marginLeft.value = (Math.ceil(props2.total / props2.pageSize) - props2.maxSize) * -(props2.size == "small" ? 32 : 36);
            }
          }
        } else {
          currentPage.value = Math.ceil(props2.total / props2.pageSize);
          emit("update:current", currentPage.value);
          emit("change", currentPage.value);
          if (Math.ceil(props2.total / props2.pageSize) > props2.maxSize) {
            if (currentPage.value > props2.maxSize / 2 && Math.ceil(props2.total / props2.pageSize) - currentPage.value >= props2.maxSize / 2) {
              marginLeft.value = (currentPage.value - props2.maxSize / 2) * -(props2.size == "small" ? 32 : 36);
            } else if (currentPage.value <= props2.maxSize / 2) {
              marginLeft.value = 0;
            } else if (props2.pageSize - currentPage.value < props2.maxSize / 2) {
              marginLeft.value = (Math.ceil(props2.total / props2.pageSize) - props2.maxSize) * -(props2.size == "small" ? 32 : 36);
            }
          }
        }
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["mzl-pagination-box", `mzl-pagination-${__props.size}`, { "mzl-pagination-disabled": __props.disabled }]),
        style: normalizeStyle({ "text-align": __props.align })
      }, [
        createElementVNode("div", _hoisted_1$g, [
          createElementVNode("div", _hoisted_2$b, [
            __props.showTotal ? (openBlock(), createElementBlock("span", _hoisted_3$7, "\u5171 " + toDisplayString(__props.total) + " \u6761", 1)) : createCommentVNode("", true),
            __props.prevText != "" ? (openBlock(), createElementBlock("span", {
              key: 1,
              class: normalizeClass(["mzl-prev-text-text", { "mzl-prev-text-text-disabled": currentPage.value <= 1 }]),
              onClick: prevChange
            }, toDisplayString(__props.prevText), 3)) : createCommentVNode("", true),
            __props.prevText == "" || __props.prevText == void 0 ? (openBlock(), createElementBlock("span", {
              key: 2,
              class: normalizeClass(["mzl-prev-text mzl-text-box", { "mzl-prev-text-disabled": currentPage.value <= 1 }]),
              onClick: prevChange
            }, _hoisted_5$4, 2)) : createCommentVNode("", true),
            createElementVNode("div", {
              class: "mzl-block-box",
              style: normalizeStyle({ "width": __props.pageSize <= 10 && Math.ceil(__props.total / __props.pageSize) <= 10 ? "auto" : (__props.size == "small" ? 32 : 36) * __props.maxSize + "px" })
            }, [
              createElementVNode("div", {
                class: "mzl-block-margin-box",
                style: normalizeStyle({ "width": __props.pageSize <= 10 && Math.ceil(__props.total / __props.pageSize) <= 10 ? "auto" : (__props.size == "small" ? 32 : 36) * Math.ceil(__props.total / __props.pageSize) + "px", "margin-left": marginLeft.value + "px" })
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(Math.ceil(__props.total / __props.pageSize), (item, index) => {
                  return openBlock(), createElementBlock("li", {
                    class: normalizeClass(["mzl-block-li", { "mzl-block-li-active": currentPage.value - 1 == index }]),
                    key: index,
                    onClick: ($event) => change(index + 1)
                  }, toDisplayString(index + 1), 11, _hoisted_6$3);
                }), 128))
              ], 4)
            ], 4),
            __props.nextText == "" || __props.nextText == void 0 ? (openBlock(), createElementBlock("span", {
              key: 3,
              class: normalizeClass(["mzl-next-text mzl-text-box", { "mzl-next-text-disabled": currentPage.value >= __props.total / __props.pageSize }]),
              onClick: nextChange
            }, _hoisted_8$2, 2)) : createCommentVNode("", true),
            __props.nextText != "" ? (openBlock(), createElementBlock("span", {
              key: 4,
              class: normalizeClass(["mzl-next-text-text", { "mzl-next-text-text-disabled": currentPage.value >= __props.total / __props.pageSize }]),
              onClick: nextChange
            }, toDisplayString(__props.nextText), 3)) : createCommentVNode("", true),
            __props.jumper ? (openBlock(), createElementBlock("div", _hoisted_9$2, [
              _hoisted_10$2,
              createElementVNode("span", _hoisted_11$2, [
                createVNode(unref(mInput), {
                  size: __props.size == "small" ? "mini" : "small",
                  modelValue: currentPage.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => currentPage.value = $event),
                  onChange: topage,
                  disabled: __props.disabled
                }, null, 8, ["size", "modelValue", "disabled"])
              ]),
              _hoisted_12$1
            ])) : createCommentVNode("", true)
          ])
        ])
      ], 6);
    };
  }
});
var mPagination = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-7333769d"]]);
mPagination.install = (app) => {
  app.component(mPagination.name, mPagination);
};
function padLeftZero(str) {
  return ("00" + str).substr(str.length);
}
const $mzl = {
  formatDate: (date, fmt) => {
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    let o = {
      "M+": date.getMonth() + 1,
      "d+": date.getDate(),
      "h+": date.getHours(),
      "m+": date.getMinutes(),
      "s+": date.getSeconds()
    };
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + "";
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
      }
    }
    return fmt;
  },
  formatTime: (strtime) => {
    return new Date(strtime.replace(/-/g, "/")).getTime();
  }
};
var index_vue_vue_type_style_index_0_scoped_true_lang$b = "";
const _withScopeId$4 = (n) => (pushScopeId("data-v-67ba6910"), n = n(), popScopeId(), n);
const _hoisted_1$f = {
  class: /* @__PURE__ */ normalizeClass(["mzl-date-box", "mzl-date-default"])
};
const _hoisted_2$a = { class: "mzl-date-inner-box" };
const _hoisted_3$6 = { class: "mzl-date-fipx-box" };
const _hoisted_4$5 = { class: "mzl-date-date-box" };
const _hoisted_5$3 = { class: "mzl-date-btn-left" };
const _hoisted_6$2 = { key: 0 };
const _hoisted_7$1 = { key: 1 };
const _hoisted_8$1 = { key: 2 };
const _hoisted_9$1 = {
  key: 3,
  class: "mzl-i-rotate"
};
const _hoisted_10$1 = { class: "mzl-date-btn-center" };
const _hoisted_11$1 = { class: "mzl-date-btn-right" };
const _hoisted_12 = { key: 0 };
const _hoisted_13 = { key: 1 };
const _hoisted_14 = { key: 2 };
const _hoisted_15 = { key: 3 };
const _hoisted_16 = { class: "mzl-date-year-month-box" };
const _hoisted_17 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createElementVNode("tr", null, [
  /* @__PURE__ */ createElementVNode("th", null, [
    /* @__PURE__ */ createElementVNode("span", null, "\u4E00")
  ]),
  /* @__PURE__ */ createElementVNode("th", null, [
    /* @__PURE__ */ createElementVNode("span", null, "\u4E8C")
  ]),
  /* @__PURE__ */ createElementVNode("th", null, [
    /* @__PURE__ */ createElementVNode("span", null, "\u4E09")
  ]),
  /* @__PURE__ */ createElementVNode("th", null, [
    /* @__PURE__ */ createElementVNode("span", null, "\u56DB")
  ]),
  /* @__PURE__ */ createElementVNode("th", null, [
    /* @__PURE__ */ createElementVNode("span", null, "\u4E94")
  ]),
  /* @__PURE__ */ createElementVNode("th", null, [
    /* @__PURE__ */ createElementVNode("span", null, "\u516D")
  ]),
  /* @__PURE__ */ createElementVNode("th", null, [
    /* @__PURE__ */ createElementVNode("span", null, "\u65E5")
  ])
], -1));
const _hoisted_18 = ["onClick"];
const _hoisted_19 = ["title"];
const _hoisted_20 = ["onClick"];
const _hoisted_21 = ["title"];
const _hoisted_22 = ["onClick"];
const _hoisted_23 = ["title"];
const _hoisted_24 = ["onClick"];
const _hoisted_25 = ["title"];
const _hoisted_26 = ["onClick"];
const _hoisted_27 = ["title"];
const _hoisted_28 = ["onClick"];
const _hoisted_29 = ["title"];
const _hoisted_30 = {
  key: 0,
  class: "mzl-today-box"
};
const _hoisted_31 = ["onClick"];
const _hoisted_32 = ["onClick"];
const __default__$e = {
  name: "mDate"
};
const _sfc_main$i = /* @__PURE__ */ Object.assign(__default__$e, {
  props: {
    modelValue: String | Number,
    size: {
      type: String,
      default: "default"
    },
    disabled: Boolean,
    placeholder: String,
    format: {
      type: String,
      default: "yyyy/MM/dd"
    },
    clearable: Boolean,
    type: {
      type: String,
      default: "date"
    },
    showToday: {
      type: Boolean,
      default: true
    },
    startDate: {
      type: String,
      default: "1000/01/01"
    },
    endDate: {
      type: String,
      default: "9999/12/31"
    },
    customClass: String,
    customActiveColor: {
      type: String,
      default: "#0e80eb"
    },
    form: String
  },
  emits: ["update:modelValue", "clear", "open", "close", "change"],
  setup(__props, { emit }) {
    const props2 = __props;
    useCssVars((_ctx) => ({
      "81d65cea": color.value
    }));
    Date.prototype.format = function(fmt) {
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      let o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds()
      };
      for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
          let str = o[k] + "";
          fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero2(str));
        }
      }
      return fmt;
    };
    const disStartDate = ref(new Date(props2.startDate + " 00:00:00").getTime());
    const disEndDate = ref(new Date(props2.endDate + " 00:00:00").getTime());
    const dateVal = ref(props2.modelValue);
    const show = ref(false);
    const daysList = ref([]);
    const placeholders = ref(props2.placeholder || "");
    const dateShow = ref(true);
    const yearList = ref([]);
    const monthList = ref([]);
    const monthShow = ref(false);
    const color = ref(props2.customActiveColor);
    function padLeftZero2(str) {
      return ("00" + str).substr(str.length);
    }
    const dateObj = function() {
      var _date = dateVal.value == "" ? new Date() : new Date(dateVal.value);
      return {
        getDate: function() {
          return _date;
        },
        setDate: function(date) {
          _date = date;
        }
      };
    }();
    const getDays = (year, month, start) => {
      daysList.value = [];
      for (let i = start; i <= 42; i++) {
        daysList.value.push({
          dates: new Date(year, month, i).format(props2.format),
          time: new Date(year, month, i).getTime(),
          year: new Date(year, month, i).getFullYear(),
          month: new Date(year, month, i).getMonth() + 1,
          day: new Date(year, month, i).getDate()
        });
      }
    };
    const selDate = ref({
      date: dateObj.getDate().format(props2.format),
      year: dateObj.getDate().getFullYear(),
      month: dateObj.getDate().getMonth() + 1,
      day: dateObj.getDate().getDate()
    });
    const getWeek = (date) => {
      return new Date(date).getDay() == 0 ? 7 : new Date(date).getDay();
    };
    const setDate = () => {
      selDate.value.date = dateObj.getDate().format(props2.format);
      selDate.value.year = dateObj.getDate().getFullYear();
      selDate.value.month = dateObj.getDate().getMonth() + 1;
    };
    const prevMonth = () => {
      var date = dateObj.getDate();
      dateObj.setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
      setDate();
      getDays(dateObj.getDate().getFullYear(), dateObj.getDate().getMonth(), 2 - getWeek(selDate.value.date));
    };
    const nextMonth = () => {
      var date = dateObj.getDate();
      dateObj.setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
      setDate();
      getDays(dateObj.getDate().getFullYear(), dateObj.getDate().getMonth(), 2 - getWeek(selDate.value.date));
    };
    const prevYear = () => {
      var date = dateObj.getDate();
      dateObj.setDate(new Date(date.getFullYear() - 1, dateObj.getDate().getMonth(), 1));
      setDate();
      getDays(dateObj.getDate().getFullYear(), dateObj.getDate().getMonth(), 2 - getWeek(selDate.value.date));
    };
    const nextYear = () => {
      var date = dateObj.getDate();
      dateObj.setDate(new Date(date.getFullYear() + 1, dateObj.getDate().getMonth(), 1));
      setDate();
      getDays(dateObj.getDate().getFullYear(), dateObj.getDate().getMonth(), 2 - getWeek(selDate.value.date));
    };
    const focus = (e) => {
      show.value = true;
      var date = dateObj.getDate();
      dateObj.setDate(new Date(date.getFullYear(), date.getMonth(), 1));
      getDays(dateObj.getDate().getFullYear(), dateObj.getDate().getMonth(), 2 - getWeek(dateObj.getDate().toLocaleDateString()));
      emit("open");
    };
    const blur = (e) => {
      show.value = false;
      if (props2.type == "date") {
        dateShow.value = true;
        monthShow.value = false;
      }
      emit("close");
    };
    const clear = () => {
      dateVal.value = "";
      emit("update:modelValue", dateVal.value);
      emit("clear");
    };
    const vClickOutside = {
      beforeMount(el) {
        let handler = (e) => {
          if (!props2.disabled) {
            if (props2.type == "year") {
              if (el.contains(e.target) && e.target.className.indexOf("choosDateSpan") == -1 && e.target.className.indexOf("clearable-icon") == -1 && e.target.className.indexOf("mzl-chooseYear-span") == -1) {
                if (!show.value) {
                  focus();
                }
              } else {
                if (show.value) {
                  blur();
                }
              }
            } else if (props2.type == "month") {
              if (el.contains(e.target) && e.target.className.indexOf("choosDateSpan") == -1 && e.target.className.indexOf("clearable-icon") == -1 && e.target.className.indexOf("mzl-chooseMonth-span") == -1) {
                if (!show.value) {
                  focus();
                }
              } else {
                if (show.value) {
                  blur();
                }
              }
            } else {
              if (el.contains(e.target) && e.target.className.indexOf("choosDateSpan") == -1 && e.target.className.indexOf("clearable-icon") == -1 && e.target.className.indexOf("mzl-today-span") == -1) {
                if (!show.value) {
                  focus();
                }
              } else if (e.target.className.indexOf("date-span-disabled") == -1) {
                if (show.value) {
                  blur();
                }
              }
            }
          }
        };
        el.handler = handler;
        if (typeof document !== "undefined") {
          document.addEventListener("click", handler);
        }
      },
      unmounted(el) {
        if (typeof document !== "undefined") {
          document.removeEventListener("click", el.handler);
        }
      }
    };
    const selectDate = (item) => {
      if (item.time >= disStartDate.value && item.time <= disEndDate.value) {
        if (item.month > selDate.value.month) {
          nextMonth();
        } else if (item.month < selDate.value.month) {
          prevMonth();
        }
        dateVal.value = item.dates;
        selDate.value.date = dateVal.value;
        selDate.value.day = item.day;
        emit("update:modelValue", dateVal.value);
        emit("change", dateVal.value);
        blur();
      }
    };
    const getYearList = (startYear) => {
      let list = [];
      for (let i = 0; i < 10; i++) {
        list.push(new Date(selDate.value.year) - parseInt(new Date(selDate.value.year) % 10) + i);
      }
      return list;
    };
    const getPrevYear = () => {
      selDate.value.year = selDate.value.year - 10;
      yearList.value = getYearList(selDate.value.year);
    };
    const getNextYear = () => {
      selDate.value.year = selDate.value.year + 10;
      yearList.value = getYearList(selDate.value.year);
    };
    const chooseYear = () => {
      dateShow.value = false;
      yearList.value = getYearList(selDate.value.year);
    };
    const chooseMonth = () => {
      dateShow.value = false;
      monthShow.value = true;
    };
    const dateYearSel = (item) => {
      if (props2.type == "date") {
        monthShow.value = true;
        selDate.value.year = item;
        dateObj.setDate(new Date(selDate.value.year, selDate.value.month - 1, 1));
        setDate();
        getDays(dateObj.getDate().getFullYear(), dateObj.getDate().getMonth(), 2 - getWeek(dateObj.getDate().toLocaleDateString()));
      } else if (props2.type == "year") {
        dateVal.value = item;
        selDate.value.year = item;
        monthShow.value = false;
        dateShow.value = false;
        emit("update:modelValue", dateVal.value);
        emit("change", dateVal.value);
        blur();
      } else {
        monthShow.value = true;
        dateShow.value = false;
        selDate.value.year = item;
      }
    };
    const dateMonthSel = (item) => {
      if (props2.type == "month") {
        dateVal.value = new Date(selDate.value.year + "-" + item.m1).format("yyyy-MM");
        selDate.value.month = item.m1;
        emit("update:modelValue", dateVal.value);
        emit("change", dateVal.value);
        blur();
      } else {
        monthShow.value = false;
        dateShow.value = true;
        selDate.value.month = item.m1 - 1;
        dateObj.setDate(new Date(selDate.value.year, selDate.value.month, 1));
        setDate();
        getDays(dateObj.getDate().getFullYear(), dateObj.getDate().getMonth(), 2 - getWeek(dateObj.getDate().toLocaleDateString()));
      }
    };
    const onlyYearPrev = () => {
      selDate.value.year = selDate.value.year - 1;
    };
    const onlyYearNext = () => {
      selDate.value.year = selDate.value.year + 1;
    };
    const showYaer = () => {
      dateShow.value = false;
      monthShow.value = false;
      yearList.value = getYearList(selDate.value.year);
    };
    const today = () => {
      var date = new Date();
      dateObj.setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate()));
      setDate();
      getDays(dateObj.getDate().getFullYear(), dateObj.getDate().getMonth(), 2 - getWeek(new Date(date.getFullYear(), date.getMonth(), 1)));
      dateVal.value = dateObj.getDate().format(props2.format);
      emit("update:modelValue", dateVal.value);
      emit("change", dateVal.value);
      blur();
    };
    onMounted(() => {
      monthList.value = [];
      for (let i = 0; i < 12; i++) {
        monthList.value.push({ m: i + 1 + "\u6708", m1: i + 1 });
      }
      if (props2.type == "year") {
        dateShow.value = false;
        monthShow.value = false;
        yearList.value = getYearList(selDate.value.year);
      }
      if (props2.type == "month") {
        dateShow.value = false;
        monthShow.value = true;
      }
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", _hoisted_1$f, [
        createElementVNode("div", _hoisted_2$a, [
          createVNode(unref(mInput), {
            modelValue: dateVal.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => dateVal.value = $event),
            leftIcon: "m-icon-calendar",
            onClear: clear,
            size: __props.size,
            clearable: __props.clearable,
            readonly: "",
            placeholder: placeholders.value,
            disabled: __props.disabled,
            focusColor: __props.customActiveColor,
            form: __props.form
          }, null, 8, ["modelValue", "size", "clearable", "placeholder", "disabled", "focusColor", "form"]),
          createVNode(Transition, { name: "slide-fade" }, {
            default: withCtx(() => [
              show.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(["mzl-date-option", `mzl-date-option-${__props.size}`, __props.customClass])
              }, [
                createElementVNode("div", _hoisted_3$6, [
                  createElementVNode("div", _hoisted_4$5, [
                    createElementVNode("div", {
                      class: normalizeClass(["mzl-date-header", `mzl-date-header-${__props.size}`])
                    }, [
                      createElementVNode("div", _hoisted_5$3, [
                        monthShow.value ? (openBlock(), createElementBlock("span", _hoisted_6$2, [
                          createElementVNode("i", {
                            class: "m-icon-arrow-double-left",
                            onClick: onlyYearPrev
                          })
                        ])) : createCommentVNode("", true),
                        !dateShow.value && !monthShow.value ? (openBlock(), createElementBlock("span", _hoisted_7$1, [
                          createElementVNode("i", {
                            class: "m-icon-arrow-double-left",
                            onClick: getPrevYear
                          })
                        ])) : createCommentVNode("", true),
                        dateShow.value ? (openBlock(), createElementBlock("span", _hoisted_8$1, [
                          createElementVNode("i", {
                            class: "m-icon-arrow-double-left",
                            onClick: prevYear
                          })
                        ])) : createCommentVNode("", true),
                        dateShow.value && __props.type == "date" ? (openBlock(), createElementBlock("span", _hoisted_9$1, [
                          createElementVNode("i", {
                            class: "m-icon-arrow-right",
                            onClick: prevMonth
                          })
                        ])) : createCommentVNode("", true)
                      ]),
                      createElementVNode("div", _hoisted_10$1, [
                        withDirectives(createElementVNode("span", {
                          class: "chooseYear",
                          onClick: chooseYear
                        }, toDisplayString(selDate.value.year) + " \u5E74 ", 513), [
                          [vShow, dateShow.value && __props.type == "date"]
                        ]),
                        withDirectives(createElementVNode("span", {
                          class: "chooseMonth",
                          onClick: chooseMonth
                        }, toDisplayString(selDate.value.month) + " \u6708", 513), [
                          [vShow, dateShow.value && __props.type == "date"]
                        ]),
                        withDirectives(createElementVNode("span", {
                          class: "chooseMonth",
                          onClick: showYaer
                        }, toDisplayString(selDate.value.year) + " \u5E74 ", 513), [
                          [vShow, monthShow.value]
                        ]),
                        withDirectives(createElementVNode("span", null, toDisplayString(yearList.value[0] + " \u5E74 - " + yearList.value[yearList.value.length - 1] + " \u5E74"), 513), [
                          [vShow, !dateShow.value && !monthShow.value || __props.type == "year"]
                        ])
                      ]),
                      createElementVNode("div", _hoisted_11$1, [
                        dateShow.value && __props.type == "date" ? (openBlock(), createElementBlock("span", _hoisted_12, [
                          createElementVNode("i", {
                            class: "m-icon-arrow-right",
                            onClick: nextMonth
                          })
                        ])) : createCommentVNode("", true),
                        dateShow.value ? (openBlock(), createElementBlock("span", _hoisted_13, [
                          createElementVNode("i", {
                            class: "m-icon-arrow-double-right",
                            onClick: nextYear
                          })
                        ])) : createCommentVNode("", true),
                        !dateShow.value && !monthShow.value ? (openBlock(), createElementBlock("span", _hoisted_14, [
                          createElementVNode("i", {
                            class: "m-icon-arrow-double-right",
                            onClick: getNextYear
                          })
                        ])) : createCommentVNode("", true),
                        monthShow.value ? (openBlock(), createElementBlock("span", _hoisted_15, [
                          createElementVNode("i", {
                            class: "m-icon-arrow-double-right",
                            onClick: onlyYearNext
                          })
                        ])) : createCommentVNode("", true)
                      ])
                    ], 2),
                    withDirectives(createElementVNode("div", {
                      class: normalizeClass(["mzl-date-content-box", `mzl-date-content-box-${__props.size}`])
                    }, [
                      createElementVNode("div", _hoisted_16, [
                        createElementVNode("table", null, [
                          createElementVNode("tbody", null, [
                            _hoisted_17,
                            createElementVNode("tr", null, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(daysList.value, (item, index) => {
                                return openBlock(), createElementBlock(Fragment, { key: index }, [
                                  index < 7 ? (openBlock(), createElementBlock("td", {
                                    key: 0,
                                    onClick: ($event) => selectDate(item),
                                    class: normalizeClass({ "date-span-disabled": item.time < disStartDate.value || item.time > disEndDate.value })
                                  }, [
                                    createElementVNode("span", {
                                      class: normalizeClass(["choosDateSpan", { active: selDate.value.date == item.dates }, item.month < selDate.value.month ? "prev-month" : item.month == selDate.value.month ? "" : "next-month", { "date-span-disabled": item.time < disStartDate.value || item.time > disEndDate.value }]),
                                      title: item.dates
                                    }, toDisplayString(item.day), 11, _hoisted_19)
                                  ], 10, _hoisted_18)) : createCommentVNode("", true)
                                ], 64);
                              }), 128))
                            ]),
                            createElementVNode("tr", null, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(daysList.value, (item, index) => {
                                return openBlock(), createElementBlock(Fragment, { key: index }, [
                                  index >= 7 && index < 14 ? (openBlock(), createElementBlock("td", {
                                    key: 0,
                                    onClick: ($event) => selectDate(item),
                                    class: normalizeClass({ "date-span-disabled": item.time < disStartDate.value || item.time > disEndDate.value })
                                  }, [
                                    createElementVNode("span", {
                                      class: normalizeClass(["choosDateSpan", { active: selDate.value.date == item.dates }, item.month < selDate.value.month ? "prev-month" : item.month == selDate.value.month ? "" : "next-month", { "date-span-disabled": item.time < disStartDate.value || item.time > disEndDate.value }]),
                                      title: item.dates
                                    }, toDisplayString(item.day), 11, _hoisted_21)
                                  ], 10, _hoisted_20)) : createCommentVNode("", true)
                                ], 64);
                              }), 128))
                            ]),
                            createElementVNode("tr", null, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(daysList.value, (item, index) => {
                                return openBlock(), createElementBlock(Fragment, { key: index }, [
                                  index >= 14 && index < 21 ? (openBlock(), createElementBlock("td", {
                                    key: 0,
                                    onClick: ($event) => selectDate(item),
                                    class: normalizeClass({ "date-span-disabled": item.time < disStartDate.value || item.time > disEndDate.value })
                                  }, [
                                    createElementVNode("span", {
                                      class: normalizeClass(["choosDateSpan", { active: selDate.value.date == item.dates }, item.month < selDate.value.month ? "prev-month" : item.month == selDate.value.month ? "" : "next-month", { "date-span-disabled": item.time < disStartDate.value || item.time > disEndDate.value }]),
                                      title: item.dates
                                    }, toDisplayString(item.day), 11, _hoisted_23)
                                  ], 10, _hoisted_22)) : createCommentVNode("", true)
                                ], 64);
                              }), 128))
                            ]),
                            createElementVNode("tr", null, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(daysList.value, (item, index) => {
                                return openBlock(), createElementBlock(Fragment, { key: index }, [
                                  index >= 21 && index < 28 ? (openBlock(), createElementBlock("td", {
                                    key: 0,
                                    onClick: ($event) => selectDate(item),
                                    class: normalizeClass({ "date-span-disabled": item.time < disStartDate.value || item.time > disEndDate.value })
                                  }, [
                                    createElementVNode("span", {
                                      class: normalizeClass(["choosDateSpan", { active: selDate.value.date == item.dates }, item.month < selDate.value.month ? "prev-month" : item.month == selDate.value.month ? "" : "next-month", { "date-span-disabled": item.time < disStartDate.value || item.time > disEndDate.value }]),
                                      title: item.dates
                                    }, toDisplayString(item.day), 11, _hoisted_25)
                                  ], 10, _hoisted_24)) : createCommentVNode("", true)
                                ], 64);
                              }), 128))
                            ]),
                            createElementVNode("tr", null, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(daysList.value, (item, index) => {
                                return openBlock(), createElementBlock(Fragment, { key: index }, [
                                  index >= 28 && index < 35 ? (openBlock(), createElementBlock("td", {
                                    key: 0,
                                    onClick: ($event) => selectDate(item),
                                    class: normalizeClass({ "date-span-disabled": item.time < disStartDate.value || item.time > disEndDate.value })
                                  }, [
                                    createElementVNode("span", {
                                      class: normalizeClass(["choosDateSpan", { active: selDate.value.date == item.dates }, item.month < selDate.value.month ? "prev-month" : item.month == selDate.value.month ? "" : "next-month", { "date-span-disabled": item.time < disStartDate.value || item.time > disEndDate.value }]),
                                      title: item.dates
                                    }, toDisplayString(item.day), 11, _hoisted_27)
                                  ], 10, _hoisted_26)) : createCommentVNode("", true)
                                ], 64);
                              }), 128))
                            ]),
                            createElementVNode("tr", null, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(daysList.value, (item, index) => {
                                return openBlock(), createElementBlock(Fragment, { key: index }, [
                                  index >= 35 && index < 42 ? (openBlock(), createElementBlock("td", {
                                    key: 0,
                                    onClick: ($event) => selectDate(item),
                                    class: normalizeClass({ "date-span-disabled": item.time < disStartDate.value || item.time > disEndDate.value })
                                  }, [
                                    createElementVNode("span", {
                                      class: normalizeClass(["choosDateSpan", { active: selDate.value.date == item.dates }, item.month < selDate.value.month ? "prev-month" : item.month == selDate.value.month ? "" : "next-month", { "date-span-disabled": item.time < disStartDate.value || item.time > disEndDate.value }]),
                                      title: item.dates
                                    }, toDisplayString(item.day), 11, _hoisted_29)
                                  ], 10, _hoisted_28)) : createCommentVNode("", true)
                                ], 64);
                              }), 128))
                            ])
                          ])
                        ])
                      ]),
                      __props.showToday && __props.type == "date" ? (openBlock(), createElementBlock("div", _hoisted_30, [
                        createElementVNode("span", {
                          onClick: today,
                          class: "mzl-today-span"
                        }, "\u4ECA\u5929")
                      ])) : createCommentVNode("", true)
                    ], 2), [
                      [vShow, dateShow.value && __props.type == "date"]
                    ]),
                    withDirectives(createElementVNode("div", {
                      class: normalizeClass(["mzl-choose-year-box", `mzl-choose-year-box-${__props.size}`])
                    }, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(yearList.value, (item, index) => {
                        return openBlock(), createElementBlock("div", { key: index }, [
                          createElementVNode("span", {
                            class: normalizeClass([{ "active": selDate.value.year == item }, "mzl-chooseYear-span"]),
                            onClick: ($event) => dateYearSel(item)
                          }, toDisplayString(item), 11, _hoisted_31)
                        ]);
                      }), 128))
                    ], 2), [
                      [vShow, !dateShow.value && !monthShow.value || __props.type == "year"]
                    ]),
                    withDirectives(createElementVNode("div", {
                      class: normalizeClass(["mzl-choose-month-box", `mzl-choose-month-box-${__props.size}`])
                    }, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(monthList.value, (item, index) => {
                        return openBlock(), createElementBlock("div", { key: index }, [
                          createElementVNode("span", {
                            class: normalizeClass([{ "active": selDate.value.month == item.m1 }, "mzl-chooseMonth-span"]),
                            onClick: ($event) => dateMonthSel(item)
                          }, toDisplayString(item.m), 11, _hoisted_32)
                        ]);
                      }), 128))
                    ], 2), [
                      [vShow, monthShow.value]
                    ])
                  ])
                ])
              ], 2)) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ])
      ])), [
        [vClickOutside]
      ]);
    };
  }
});
var mDate = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-67ba6910"]]);
mDate.install = (app) => {
  app.component(mDate.name, mDate);
};
var index_vue_vue_type_style_index_0_scoped_true_lang$a = "";
const _withScopeId$3 = (n) => (pushScopeId("data-v-60b6acd7"), n = n(), popScopeId(), n);
const _hoisted_1$e = {
  key: 1,
  class: "mzl-backtop-default-box"
};
const _hoisted_2$9 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createElementVNode("span", { class: "default-backtop-icon" }, [
  /* @__PURE__ */ createElementVNode("i", { class: "m-icon-arrow-up-filling" })
], -1));
const _hoisted_3$5 = [
  _hoisted_2$9
];
const __default__$d = {
  name: "mBacktop"
};
const _sfc_main$h = /* @__PURE__ */ Object.assign(__default__$d, {
  props: {
    target: {
      type: String,
      default: "body"
    },
    visibilityHeight: {
      type: Number,
      default: 240
    },
    right: {
      type: Number,
      default: 20
    },
    bottom: {
      type: Number,
      default: 40
    },
    customClass: String
  },
  setup(__props) {
    const props2 = __props;
    useCssVars((_ctx) => ({
      "198ccea4": bottom.value,
      "09f39a83": right.value
    }));
    const backtopShow = ref(false);
    const scrollTop = ref(0);
    const timer = ref(null);
    const slot = useSlots();
    const right = ref(props2.right + "px");
    const bottom = ref(props2.bottom + "px");
    const backtop = () => {
      clearInterval(timer.value);
      timer.value = setInterval(() => {
        scrollTop.value -= 30;
        if (props2.target == "body") {
          if (typeof document !== "undefined") {
            document.body.scrollTop = scrollTop.value = document.documentElement.scrollTop = scrollTop.value;
          }
        } else {
          if (typeof document !== "undefined") {
            document.querySelector(props2.target).scrollTop = scrollTop.value;
          }
        }
        if (scrollTop.value <= 0) {
          scrollTop.value = 0;
          clearInterval(timer.value);
        }
      });
    };
    const handleScroll = () => {
      if (typeof document !== "undefined") {
        scrollTop.value = props2.target == "body" ? document.body.scrollTop || document.documentElement.scrollTop : document.querySelector(props2.target).scrollTop;
      }
      if (scrollTop.value >= props2.visibilityHeight) {
        backtopShow.value = true;
      } else {
        backtopShow.value = false;
      }
    };
    onMounted(() => {
      if (props2.target == "body") {
        if (typeof window !== "undefined") {
          window.addEventListener("scroll", handleScroll, false);
        }
      } else {
        if (typeof document !== "undefined") {
          document.querySelector(props2.target).addEventListener("scroll", handleScroll, false);
        }
      }
    });
    onBeforeUnmount(() => {
      if (props2.target == "body") {
        if (typeof window !== "undefined") {
          window.removeEventListener("scroll", handleScroll);
        }
      } else {
        if (typeof document !== "undefined") {
          document.querySelector(props2.target).removeEventListener("scroll", handleScroll);
        }
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: "fade" }, {
        default: withCtx(() => [
          backtopShow.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(["mzl-backtop-box", __props.customClass]),
            onClick: backtop
          }, [
            unref(slot)["default"] ? renderSlot(_ctx.$slots, "default", { key: 0 }, void 0, true) : (openBlock(), createElementBlock("div", _hoisted_1$e, _hoisted_3$5))
          ], 2)) : createCommentVNode("", true)
        ]),
        _: 3
      });
    };
  }
});
var mBacktop = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-60b6acd7"]]);
mBacktop.install = (app) => {
  app.component(mBacktop.name, mBacktop);
};
var index_vue_vue_type_style_index_0_scoped_true_lang$9 = "";
const _withScopeId$2 = (n) => (pushScopeId("data-v-435f8e6a"), n = n(), popScopeId(), n);
const _hoisted_1$d = { class: "mzl-default-collapse-item-box" };
const _hoisted_2$8 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createElementVNode("span", null, "\u6807\u9898", -1));
const _hoisted_3$4 = { class: "mzl-collapse-slot-box" };
const _hoisted_4$4 = { class: "mzl-slot-item-box" };
const __default__$c = {
  name: "mCollapseItem"
};
const _sfc_main$g = /* @__PURE__ */ Object.assign(__default__$c, {
  props: {
    name: String
  },
  setup(__props) {
    getCurrentInstance();
    useSlots();
    const boxshow = ref(false);
    const togger = (e) => {
      boxshow.value = !boxshow.value;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$d, [
        createElementVNode("div", {
          class: "mzl-collapse-item-title",
          onClick: _cache[0] || (_cache[0] = ($event) => togger())
        }, [
          _hoisted_2$8,
          createElementVNode("i", {
            class: normalizeClass(["m-icon-arrow-right", { rotate: boxshow.value }])
          }, null, 2)
        ]),
        createVNode(Transition, { name: "slide-fade" }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("div", _hoisted_3$4, [
              createElementVNode("div", _hoisted_4$4, [
                renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ])
            ], 512), [
              [vShow, boxshow.value]
            ])
          ]),
          _: 3
        })
      ]);
    };
  }
});
var mCollapseItem = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-435f8e6a"]]);
var index_vue_vue_type_style_index_0_scoped_true_lang$8 = "";
const __default__$b = {
  name: "mCollapse"
};
const _sfc_main$f = /* @__PURE__ */ Object.assign(__default__$b, {
  setup(__props) {
    const collapseRef = ref(null);
    getCurrentInstance();
    onMounted(() => {
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "mzl-defalu-collapse-box",
        ref_key: "collapseRef",
        ref: collapseRef
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 512);
    };
  }
});
var mCollapse = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-09b98fe7"]]);
mCollapse.install = (app) => {
  app.component(mCollapse.name, mCollapse);
};
mCollapseItem.install = (app) => {
  app.component(mCollapseItem.name, mCollapseItem);
};
var menuItem_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$c = ["data-key"];
const _hoisted_2$7 = { class: "mzl-menu-item-title-box" };
const _sfc_main$e = {
  props: {
    items: {
      type: Object,
      default: () => {
      }
    },
    index: Number,
    option: {
      type: Array,
      default: () => []
    },
    dataKey: String | Number,
    theme: {
      type: [Object, String]
    },
    type: String
  },
  emits: ["change"],
  setup(__props, { emit }) {
    const props2 = __props;
    useCssVars((_ctx) => ({
      "5b0a36d6": float.value,
      "4576a2f6": themes.value.color,
      "3c42995a": themes.value.activeBgColor,
      "5a0454c0": themes.value.bgColor
    }));
    const float = ref(props2.type == "horizontal" ? "initial" : "left");
    const themes = ref({
      bgColor: typeof props2.theme == "string" ? props2.theme == "black" ? "#20222a" : "#fff" : props2.theme.bgColor,
      activeBgColor: typeof props2.theme == "string" ? props2.theme == "black" ? "#000" : "#eaeaea" : props2.theme.activeBgColor,
      color: typeof props2.theme == "string" ? props2.theme == "black" ? "#fff" : "#333" : props2.theme.color,
      activeColor: props2.theme.activeColor
    });
    const meunIconRotate = ref(false);
    const tabkey = ref("");
    const mentItemStyle = computed(() => {
      return {
        left: props2.index === 0 ? "0" : "242px",
        top: props2.index == 0 ? "61px" : "0px"
      };
    });
    const itemLiStyle = computed(() => {
      return {
        height: props2.index == 0 ? "58px" : "40px",
        "line-height": props2.index == 0 ? "58px" : "40px",
        padding: props2.index == 0 ? "0 20px" : !props2.items.icon ? "0 10px 0 5px" : "0 10px 0 10px"
      };
    });
    const iconClass = computed(() => {
      return {
        "m-icon-arrow-down-bold": props2.index == 0,
        "m-icon-arrow-right": props2.index != 0,
        menuIconRotate: props2.index == 0 && meunIconRotate.value,
        menuItemIconRotate: props2.index != 0 && meunIconRotate.value
      };
    });
    const activeColots = computed(() => {
      return {
        color: props2.items.isActive ? themes.value.activeColor : ""
      };
    });
    const spanClass = computed(() => {
      return {
        menitemDisabled: props2.items.disabled
      };
    });
    const IconRotate = (flag) => {
      meunIconRotate.value = flag;
    };
    props2.items.key = props2.dataKey;
    const getParents = (option, key) => {
      for (var i in option) {
        if (option[i].key == key) {
          return [option[i]];
        }
        if (option[i].children) {
          var ro = getParents(option[i].children, key);
          if (ro !== void 0) {
            return ro.concat(option[i]);
          }
        }
      }
    };
    let timer = null;
    let timer1 = null;
    const toggler = (item) => {
      if (props2.type == "vertical") {
        if (item.children && item.children.length) {
          clearTimeout(timer);
          clearTimeout(timer1);
          timer = setTimeout(() => {
            item.isOpen = true;
          }, 50);
          IconRotate(true);
        }
      }
    };
    const hide = (item) => {
      if (props2.type == "vertical") {
        clearTimeout(timer);
        clearTimeout(timer1);
        timer1 = setTimeout(() => {
          item.isOpen = false;
        }, 50);
        if (item.children && item.children.length) {
          IconRotate(false);
        }
      }
    };
    const setActive = (options) => {
      options.forEach((v, i) => {
        v.isActive = false;
        if (v.children && v.children.length) {
          setActive(v.children);
        }
      });
    };
    const handelClick = (item) => {
      if (!item.disabled) {
        tabkey.value = item.key;
        setActive(props2.option);
        getParents(props2.option, item.key).forEach((v, i) => {
          v.isActive = true;
        });
        getParents(props2.option, item.key)[getParents(props2.option, item.key).length - 1].isOpen = false;
        emit("change", item);
      }
    };
    return (_ctx, _cache) => {
      const _component_menu_item = resolveComponent("menu-item", true);
      return openBlock(), createElementBlock("div", {
        class: "mzl-menu-div-box",
        style: normalizeStyle({ width: __props.index != 0 ? "100%" : "" })
      }, [
        createElementVNode("li", {
          onMouseover: _cache[1] || (_cache[1] = ($event) => toggler(__props.items)),
          onMouseleave: _cache[2] || (_cache[2] = ($event) => hide(__props.items)),
          "data-key": __props.dataKey,
          onClick: _cache[3] || (_cache[3] = withModifiers(($event) => handelClick(__props.items), ["stop"])),
          style: normalizeStyle(unref(itemLiStyle)),
          class: normalizeClass({
            activeMenuItem: __props.items.isActive,
            menitemDisabled: __props.items.disabled
          })
        }, [
          createElementVNode("div", _hoisted_2$7, [
            createElementVNode("span", {
              class: normalizeClass(["menu-icon", unref(spanClass)]),
              style: normalizeStyle(unref(activeColots))
            }, [
              __props.items.icon ? (openBlock(), createElementBlock("i", {
                key: 0,
                class: normalizeClass(__props.items.icon)
              }, null, 2)) : createCommentVNode("", true)
            ], 6),
            createElementVNode("span", {
              class: normalizeClass(["menu-title", unref(spanClass)]),
              style: normalizeStyle(unref(activeColots))
            }, toDisplayString(__props.items.title), 7),
            __props.items.children && __props.items.children.length ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass(["menu-icon-arrow", unref(spanClass)]),
              style: normalizeStyle(unref(activeColots))
            }, [
              createElementVNode("i", {
                class: normalizeClass(unref(iconClass))
              }, null, 2)
            ], 6)) : createCommentVNode("", true)
          ]),
          createVNode(Transition, { name: "slide-fade" }, {
            default: withCtx(() => [
              __props.items.children && __props.items.children.length ? withDirectives((openBlock(), createElementBlock("div", {
                key: 0,
                class: "mzl-menu-item-position-box",
                style: normalizeStyle(unref(mentItemStyle))
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items.children, (item, i) => {
                  return openBlock(), createBlock(_component_menu_item, {
                    key: i,
                    items: item,
                    index: __props.index + (i + 1),
                    option: __props.option,
                    "data-key": __props.dataKey + "-" + i,
                    onChange: _cache[0] || (_cache[0] = ($event) => emit("change", $event)),
                    theme: __props.theme,
                    type: __props.type
                  }, null, 8, ["items", "index", "option", "data-key", "theme", "type"]);
                }), 128))
              ], 4)), [
                [vShow, __props.items.isOpen]
              ]) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ], 46, _hoisted_1$c)
      ], 4);
    };
  }
};
var menuItem = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-56fe8d04"]]);
var index_vue_vue_type_style_index_0_scoped_true_lang$7 = "";
const _hoisted_1$b = { class: "mzl-menu-default-box" };
const _hoisted_2$6 = {
  key: 0,
  class: "rightCoustom"
};
const __default__$a = {
  name: "mMenu"
};
const _sfc_main$d = /* @__PURE__ */ Object.assign(__default__$a, {
  props: {
    options: {
      type: Array,
      default: () => []
    },
    theme: {
      type: [Object, String],
      default: "white"
    },
    type: {
      type: String,
      default: "vertical"
    }
  },
  emits: ["change"],
  setup(__props, { emit }) {
    const props2 = __props;
    useCssVars((_ctx) => ({
      "175bdf70": height.value,
      "2223e0fa": themes.value.backgroundColor,
      "196e4b3c": themes.value.borderColor
    }));
    const height = ref(props2.type == "horizontal" ? "auto" : "60px");
    props2.options.forEach((item, index) => {
      item.key = index.toString();
    });
    const themes = ref({
      backgroundColor: typeof props2.theme == "string" ? props2.theme == "black" ? "#20222a" : "#fff" : props2.theme.bgColor,
      borderColor: typeof props2.theme == "string" ? props2.theme == "black" ? "#20222a" : "#f5f5f5" : props2.theme.borderColor
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$b, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, (item, index) => {
          return openBlock(), createBlock(menuItem, {
            key: index,
            items: item,
            index: 0,
            option: __props.options,
            "data-key": index,
            onChange: _cache[0] || (_cache[0] = ($event) => emit("change", $event)),
            theme: __props.theme,
            type: __props.type
          }, null, 8, ["items", "option", "data-key", "theme", "type"]);
        }), 128)),
        __props.type == "vertical" ? (openBlock(), createElementBlock("div", _hoisted_2$6, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
var mMenu = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-1ca0e931"]]);
mMenu.install = (app) => {
  app.component(mMenu.name, mMenu);
};
var nav_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$1 = (n) => (pushScopeId("data-v-bf943a32"), n = n(), popScopeId(), n);
const _hoisted_1$a = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("i", { class: "m-icon-arrow-left-bold" }, null, -1));
const _hoisted_2$5 = [
  _hoisted_1$a
];
const _hoisted_3$3 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("i", { class: "m-icon-add-bold add_icon" }, null, -1));
const _hoisted_4$3 = [
  _hoisted_3$3
];
const _hoisted_5$2 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("i", { class: "m-icon-arrow-right-bold" }, null, -1));
const _hoisted_6$1 = [
  _hoisted_5$2
];
const __default__$9 = {
  name: "mTabsNav"
};
const _sfc_main$c = /* @__PURE__ */ Object.assign(__default__$9, {
  props: {
    panes: {
      type: Array,
      default: []
    },
    currentName: {
      type: String
    },
    active_color: {
      type: String
    },
    color: {
      type: String
    },
    addable: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "line"
    }
  },
  emits: ["onTabClick"],
  setup(__props, { emit: emits }) {
    const props2 = __props;
    const tabsContext = inject("tabsContext");
    const typeClass = computed(() => {
      return props2.type === "card" ? "tabs_header_card" : "tabs_header_line";
    });
    const active_bar_style = computed(() => {
      return {
        width: `${active_bar_info.offsetWidth}px`,
        transform: `translate3d(${active_bar_info.offsetLeft}px,0px,0px)`,
        "background-color": props2.active_color
      };
    });
    const scrollable = ref(false);
    const navWrap = ref(null);
    const navScroll = ref(null);
    const active_bar_info = reactive({
      width: 0,
      offsetLeft: 0
    });
    const navWrap_offset = ref(0);
    function getLabelNode(pane) {
      const close_btn = h("i", {
        class: { "m-icon-close": true, close_btn: true },
        style: { display: props2.type === "line" || props2.type === "" || pane.active ? "inline-block" : "" },
        onClick: (event) => {
          tabsContext.emits("onTabRemove", pane.props.name || pane.index);
          event.stopPropagation();
        }
      });
      const icon = h("i", { class: [`${pane.props.icon}`, "tab-icon"] });
      const label = defineComponent({
        render() {
          var _a, _b;
          return h("div", {
            class: {
              nav_item: true,
              active: pane.active,
              disabled: pane.props.disabled,
              "is-closable": pane.active || pane.props.disabled ? "" : pane.props.closable || tabsContext.props.closable ? true : false
            },
            style: { color: pane.active ? props2.active_color : props2.color },
            onClick: pane.props.disabled ? null : ($event) => onTabClick(pane)
          }, [
            pane.props.icon ? icon : "",
            ((_b = (_a = pane.slots).label) == null ? void 0 : _b.call(_a)) || pane.props.label,
            pane.props.disabled ? "" : pane.props.closable || tabsContext.props.closable ? close_btn : ""
          ]);
        }
      });
      return label;
    }
    function getNavInfo() {
      return {
        displayOffsetRight: navWrap_offset.value + navScroll.value.offsetWidth,
        displayOffsetLeft: navWrap_offset.value,
        navScrollWidth: navScroll.value.offsetWidth,
        navWrapWidth: navWrap.value.offsetWidth,
        navItem: navWrap.value.querySelectorAll(".nav_item")
      };
    }
    function scrollPrev() {
      if (navWrap_offset.value == 0)
        return;
      const {
        displayOffsetRight,
        displayOffsetLeft,
        navItem,
        navScrollWidth,
        navWrapWidth
      } = getNavInfo();
      const offsetLeft = Array.from(navItem).reduce((pre, cur) => {
        return pre ? pre : cur.offsetLeft >= displayOffsetLeft ? cur.offsetLeft : 0;
      }, 0);
      if (offsetLeft < navScrollWidth) {
        navWrap_offset.value = 0;
      } else {
        navWrap_offset.value = offsetLeft - navScrollWidth;
      }
    }
    function scrollNext() {
      const { displayOffsetRight, navItem, navScrollWidth, navWrapWidth } = getNavInfo();
      if (displayOffsetRight >= navWrapWidth) {
        return;
      }
      const offsetLeft = Array.from(navItem).reduce((pre, cur) => {
        return cur.offsetLeft > displayOffsetRight ? pre : cur.offsetLeft;
      }, 0);
      navWrap_offset.value = navWrapWidth - offsetLeft <= navScrollWidth ? navWrapWidth - navScrollWidth : offsetLeft;
    }
    function navScrollReSize() {
      navWrap.value.offsetWidth > navScroll.value.offsetWidth ? scrollable.value = true : scrollable.value = false;
      if (!scrollable.value || !navWrap_offset.value)
        return;
      const { displayOffsetRight, navScrollWidth, navWrapWidth } = getNavInfo();
      if (navScrollWidth >= navWrapWidth) {
        navWrap_offset.value = 0;
      } else if (displayOffsetRight >= navWrapWidth - navWrap_offset.value) {
        const newOffset = navWrapWidth - navScrollWidth;
        if (navWrap_offset.value > newOffset)
          navWrap_offset.value = newOffset;
      }
    }
    function update() {
      if (!navWrap.value || !navScroll)
        return;
      navScrollReSize();
      upDateBar();
    }
    watch(() => props2.currentName, () => {
      scrollToActiveTab();
    });
    async function scrollToActiveTab() {
      await nextTick();
      const { displayOffsetRight, displayOffsetLeft, navScrollWidth } = getNavInfo();
      const mLabels = navWrap.value.querySelector(".active");
      if (displayOffsetLeft > mLabels.offsetLeft) {
        navWrap_offset.value = mLabels.offsetLeft;
      } else if (displayOffsetRight < mLabels.offsetLeft + mLabels.offsetWidth) {
        navWrap_offset.value = mLabels.offsetLeft + mLabels.offsetWidth - navScrollWidth;
      }
    }
    function upDateBar() {
      const mLabels = navWrap.value.querySelector(".active");
      if (!mLabels)
        return;
      let offsetLeft = mLabels.offsetLeft;
      active_bar_info.offsetWidth = mLabels.offsetWidth;
      active_bar_info.offsetLeft = offsetLeft - navWrap_offset.value;
    }
    function onTabClick(pane) {
      const tabName = pane.props.name || pane.index;
      emits("onTabClick", pane, tabName);
    }
    const vResize = {
      mounted(el, binding) {
        function reSize(fn) {
          let t = null;
          return (params) => {
            if (t) {
              clearTimeout(t);
            }
            t = setTimeout(() => {
              fn(el);
            }, 10);
          };
        }
        el._resizer = new window.ResizeObserver(reSize(binding.value));
        el._resizer.observe(el);
      },
      unmounted(el) {
        el._resizer.disconnect();
      }
    };
    onUpdated(() => {
      update();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["tabs_header", unref(typeClass)])
      }, [
        scrollable.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "tab-nav-prev",
          onClick: scrollPrev
        }, _hoisted_2$5)) : createCommentVNode("", true),
        props2.addable ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: "tab_add_btn",
          onClick: _cache[0] || (_cache[0] = ($event) => unref(tabsContext).emits("onTabAdd"))
        }, _hoisted_4$3)) : createCommentVNode("", true),
        scrollable.value ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: "tab-nav-next",
          onClick: scrollNext
        }, _hoisted_6$1)) : createCommentVNode("", true),
        withDirectives((openBlock(), createElementBlock("div", {
          class: "tabs_nav_scroll",
          ref_key: "navScroll",
          ref: navScroll,
          style: normalizeStyle({ "margin-right": scrollable.value ? "30px" : "" })
        }, [
          createElementVNode("div", {
            class: "tabs_nav",
            ref_key: "navWrap",
            ref: navWrap,
            style: normalizeStyle({ transform: `translate3d(${-navWrap_offset.value}px,0px,0px)` })
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(props2.panes, (pane) => {
              return withDirectives((openBlock(), createBlock(resolveDynamicComponent(getLabelNode(pane)), {
                key: pane.uid
              })), [
                [vResize, upDateBar]
              ]);
            }), 128))
          ], 4),
          props2.type != "card" ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "active-bar",
            style: normalizeStyle(unref(active_bar_style))
          }, null, 4)) : createCommentVNode("", true)
        ], 4)), [
          [vResize, navScrollReSize]
        ])
      ], 2);
    };
  }
});
var mTabsNav = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-bf943a32"]]);
var index_vue_vue_type_style_index_0_scoped_true_lang$6 = "";
const _hoisted_1$9 = { class: "tabs" };
const _hoisted_2$4 = { class: "tabs-content" };
const __default__$8 = {
  name: "mTabs"
};
const _sfc_main$b = /* @__PURE__ */ Object.assign(__default__$8, {
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    activeName: {
      type: [String, Number],
      default: ""
    },
    type: {
      type: String,
      default: "line"
    },
    active_color: {
      type: String,
      default: ""
    },
    addable: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ""
    },
    beforeLeave: {
      type: Function,
      default: () => true
    }
  },
  emits: ["update:modelValue", "update:activeName", "onTabclick", "onChangeTab", "onTabAdd", "onTabRemove"],
  setup(__props, { emit: emits }) {
    const props2 = __props;
    const instance = getCurrentInstance();
    const panes = ref([]);
    const paneStatesMap = {};
    const currentName = ref(props2.modelValue || props2.activeName || "0");
    provide("tabsContext", {
      emits,
      currentName,
      props: props2,
      updatePaneState: (pane) => paneStatesMap[pane.uid] = pane
    });
    function getTabPanes(content, paneInstanceList = []) {
      const children = content.children || [];
      children.forEach((node) => {
        let type = node.type.name || node.type;
        if (type === "mTabPane" && node.component) {
          paneInstanceList.push(node.component);
        } else if (type === Fragment || type === "template") {
          getTabPanes(node, paneInstanceList);
        }
      });
      return paneInstanceList.map((paneComponent, index) => {
        const pane = paneStatesMap[paneComponent.uid];
        pane.index = `${index}`;
        return pane;
      });
    }
    function checkPanesChanged(paneInstanceList) {
      return !(paneInstanceList.length === panes.value.length && paneInstanceList.every((pane, index) => pane.uid === panes.value[index].uid));
    }
    function updatePaneInstances() {
      if (!useSlots().default) {
        panes.value = [];
        return;
      }
      const content = instance.subTree.children.find(({ props: props3 }) => (props3 == null ? void 0 : props3.class) === "tabs-content");
      if (!content)
        return;
      const paneInstanceList = getTabPanes(content);
      if (!checkPanesChanged(paneInstanceList))
        return;
      if (currentName.value === "0")
        setCurrentName(paneInstanceList[0].props.name || "0");
      panes.value = paneInstanceList;
    }
    onMounted(() => {
      updatePaneInstances();
    });
    onUpdated(() => {
      updatePaneInstances();
    });
    function changeCurrentName(tabName) {
      currentName.value = tabName;
      emits("update:modelValue", tabName);
      emits("update:activeName", tabName);
      emits("onChangeTab", tabName);
    }
    function setCurrentName(tabName) {
      var _a;
      if (currentName.value === tabName)
        return;
      const canLeave = (_a = props2.beforeLeave) == null ? void 0 : _a.call(props2, currentName.value, tabName);
      if (!!canLeave && (typeof canLeave === "object" || typeof canLeave === "function") && typeof canLeave.then === "function") {
        canLeave.then(() => {
          changeCurrentName(tabName);
        }, () => {
        });
      } else if (canLeave !== false) {
        changeCurrentName(tabName);
      }
    }
    watch(() => props2.activeName, (modelValue) => {
      setCurrentName(modelValue);
    });
    watch(() => props2.modelValue, (modelValue) => {
      setCurrentName(modelValue);
    });
    function handleTabClick(pane, tabName) {
      setCurrentName(tabName);
      emits("onTabclick", tabName);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$9, [
        createVNode(mTabsNav, {
          panes: panes.value,
          currentName: currentName.value,
          active_color: props2.active_color,
          type: props2.type,
          color: props2.color,
          addable: props2.addable,
          onOnTabClick: handleTabClick
        }, null, 8, ["panes", "currentName", "active_color", "type", "color", "addable"]),
        createElementVNode("div", _hoisted_2$4, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])
      ]);
    };
  }
});
var mTabs = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-6127cba8"]]);
var pane_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$8 = {
  key: 0,
  class: "tab_pane"
};
const __default__$7 = {
  name: "mTabPane"
};
const _sfc_main$a = /* @__PURE__ */ Object.assign(__default__$7, {
  props: {
    name: {
      type: String,
      default: ""
    },
    label: {
      type: [String, Object],
      default: ""
    },
    icon: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: false
    },
    lazy: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props2 = __props;
    const instance = getCurrentInstance();
    const index = ref("");
    const loaded = ref(false);
    const tabsContext = inject("tabsContext");
    const active = computed(() => tabsContext.currentName.value === (props2.name || index.value));
    const shouldRender = computed(() => !props2.lazy || loaded.value || active.value);
    watch(active, (val) => {
      if (val)
        loaded.value = true;
    });
    tabsContext.updatePaneState(reactive({
      uid: instance.uid,
      instance: markRaw(instance),
      slots: instance.slots,
      props: props2,
      index,
      active
    }));
    return (_ctx, _cache) => {
      return unref(shouldRender) ? withDirectives((openBlock(), createElementBlock("div", _hoisted_1$8, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 512)), [
        [vShow, unref(active)]
      ]) : createCommentVNode("", true);
    };
  }
});
var mTabPane = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-33de5621"]]);
mTabs.install = (app) => {
  app.component(mTabs.name, mTabs);
  app.component(mTabPane.name, mTabPane);
};
var index_vue_vue_type_style_index_0_scoped_true_lang$5 = "";
const _hoisted_1$7 = ["aria-hidden"];
const _hoisted_2$3 = ["textContent"];
const __default__$6 = {
  name: "mPopover"
};
const _sfc_main$9 = /* @__PURE__ */ Object.assign(__default__$6, {
  props: {
    width: {
      type: [String, Number]
    },
    placement: {
      type: [String],
      default: "top"
    },
    modelValue: {
      type: Boolean,
      default: true
    },
    content: {
      type: [String]
    },
    popperClass: {
      type: [String]
    },
    title: {
      type: [String]
    },
    transition: {
      type: String,
      default: "slide-fade"
    },
    disabled: {
      type: [Boolean],
      default: false
    },
    trigger: {
      type: [String],
      default: "click"
    }
  },
  emits: ["after-enter", "after-leave"],
  setup(__props, { emit }) {
    const props2 = __props;
    const visible = ref(false);
    const showPopover = computed(() => {
      if (props2.trigger !== "manual") {
        return visible.value;
      } else {
        console.log(props2.modelValue);
        return props2.modelValue;
      }
    });
    const popoverStyles = computed(() => {
      var _a;
      let style = {};
      if ((_a = props2.width) != null ? _a : null) {
        style.width = props2.width + "px";
      }
      return style;
    });
    const reference = ref(null);
    const popoverArrow = ref(null);
    onMounted(() => {
      console.log(reference.value.clientWidth);
      if (props2.placement.includes("top") || props2.placement.includes("bottom")) {
        let clientWidth = reference.value.clientWidth;
        popoverArrow.value.style.setProperty("--geticonsite", clientWidth / 2 + "px");
      } else if (props2.placement.includes("left") || props2.placement.includes("right")) {
        let clientHeight = reference.value.clientHeight;
        popoverArrow.value.style.setProperty("--geticonsite", clientHeight / 2 + "px");
      }
    });
    const timer = ref(null);
    function clickTriggerHandler() {
      if (props2.trigger.toLowerCase() == "click") {
        if (!props2.disabled) {
          visible.value = !visible.value;
        }
      }
    }
    function focusTriggerHandler() {
      if (props2.trigger.toLowerCase() == "focus") {
        if (!props2.disabled) {
          visible.value = true;
        }
      }
    }
    function blurTriggerHandler() {
      if (props2.trigger.toLowerCase() == "focus") {
        if (!props2.disabled) {
          visible.value = false;
        }
      }
    }
    function hoverTriggerEnterHandler() {
      if (props2.trigger.toLowerCase() == "hover") {
        if (!props2.disabled) {
          clearTimeout(timer.value);
          visible.value = true;
        }
      }
    }
    function hoverTriggerLeaveHandler() {
      if (props2.trigger.toLowerCase() == "hover") {
        if (!props2.disabled) {
          timer.value = setTimeout(() => {
            visible.value = false;
          }, 300);
        }
      }
    }
    function handleAfterEnter() {
      emit("after-enter");
    }
    function handleAfterLeave() {
      emit("after-leave");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "popover-box",
        onMouseenter: hoverTriggerEnterHandler,
        onMouseleave: hoverTriggerLeaveHandler
      }, [
        createVNode(Transition, {
          name: __props.transition,
          onAfterEnter: handleAfterEnter,
          onAfterLeave: handleAfterLeave
        }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("div", {
              class: normalizeClass(["popover-outbox", __props.placement, __props.popperClass]),
              "aria-hidden": __props.disabled || !unref(showPopover) ? "true" : "false"
            }, [
              createElementVNode("div", {
                class: "popover-arrow",
                ref_key: "popoverArrow",
                ref: popoverArrow
              }, null, 512),
              createElementVNode("div", {
                class: normalizeClass(["popover-box-content"]),
                style: normalizeStyle(unref(popoverStyles))
              }, [
                __props.title ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  textContent: toDisplayString(__props.title),
                  class: "popover-title"
                }, null, 8, _hoisted_2$3)) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "default", {}, () => [
                  createTextVNode(toDisplayString(__props.content), 1)
                ], true)
              ], 4)
            ], 10, _hoisted_1$7), [
              [vShow, !__props.disabled && unref(showPopover)]
            ])
          ]),
          _: 3
        }, 8, ["name"]),
        createElementVNode("div", {
          ref_key: "reference",
          ref: reference,
          class: "reference-content",
          onClick: clickTriggerHandler,
          onMousedown: focusTriggerHandler,
          onMouseup: blurTriggerHandler
        }, [
          renderSlot(_ctx.$slots, "reference", {}, void 0, true)
        ], 544)
      ], 32);
    };
  }
});
var mPopover = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-2e7c35a3"]]);
mPopover.install = (app) => {
  app.component(mPopover.name, mPopover);
};
var index_vue_vue_type_style_index_0_scoped_true_lang$4 = "";
const _hoisted_1$6 = { class: "mzl-progress" };
const _hoisted_2$2 = {
  key: 0,
  class: "mzl-progress-default"
};
const _hoisted_3$2 = { class: "mzl-progress-status" };
const _hoisted_4$2 = ["stroke-dasharray", "stroke-dashoffset"];
const _hoisted_5$1 = ["stroke", "stroke-dasharray", "stroke-dashoffset"];
const __default__$5 = {
  name: "mProgress"
};
const _sfc_main$8 = /* @__PURE__ */ Object.assign(__default__$5, {
  props: {
    percent: {
      type: Number,
      default: 0
    },
    progressType: {
      type: String,
      default: "line"
    },
    progressHeight: {
      type: Number,
      default: 16
    },
    circleSize: {
      type: Number,
      default: 200
    },
    circleHeight: {
      type: Number,
      default: 8
    },
    isShowText: {
      type: Boolean,
      default: false
    },
    currentStatus: {
      type: String,
      default: ""
    },
    bgColor: {
      type: [String, Function],
      default: ""
    },
    progressSpeed: {
      type: Number,
      default: 3
    },
    isAnimation: {
      type: Boolean,
      default: false
    },
    roundCorner: Boolean,
    setPercentText: {
      type: Function,
      default: (percent) => `${percent >= 100 ? 100 : percent}%`
    }
  },
  setup(__props) {
    const props2 = __props;
    const progressCircleText = computed(() => {
      return props2.percent >= 100 ? 100 + "%" : props2.percent + "%";
    });
    const backClass = computed(() => {
      return ["mzl-progress-back", props2.roundCorner ? "mzl-progress-b-r" : ""];
    });
    const speedClass = computed(() => {
      return props2.progressType === "line" ? [
        "mzl-progress-speed",
        props2.isAnimation ? "mzl-progress-animation" : "",
        props2.roundCorner ? "mzl-progress-b-r" : ""
      ] : [
        "mzl-progress-circle",
        props2.isAnimation ? "mzl-progress-circle-animation" : "",
        props2.roundCorner ? "mzl-progress-circle-b-r" : ""
      ];
    });
    let girth = "";
    const formatPercent = computed(() => {
      if (props2.progressType === "line") {
        return {
          text: props2.setPercentText(props2.percent),
          width: props2.percent >= 100 ? 100 + "%" : props2.percent + "%"
        };
      } else {
        let circlePercent = props2.percent >= 100 ? 100 : props2.percent;
        const percentCircle = circlePercent / 100;
        const perimeter = Math.PI * 2 * (props2.circleSize / 2 - props2.circleHeight / 2);
        girth = perimeter;
        if (props2.progressType === "dashboard") {
          return {
            bgCircle: `${perimeter / 2}`,
            progressCircle: `${perimeter / 2 * percentCircle},${perimeter / 2}`,
            dashoffset: `-${perimeter / 2}`
          };
        } else {
          return circlePercent >= 100 ? {
            bgCircle: perimeter,
            progressCircle: `${perimeter * percentCircle} 0`
          } : {
            bgCircle: perimeter,
            progressCircle: `${perimeter * percentCircle} ${perimeter * (1 - percentCircle)}`
          };
        }
      }
    });
    const progressDashboardStyle = computed(() => {
      if (props2.progressType === "dashboard") {
        return {
          top: "40%"
        };
      }
      return {};
    });
    const progressDefaultStyle = computed(() => {
      if (props2.progressType === "line") {
        return {
          width: formatPercent.value.width,
          height: props2.progressHeight + "px",
          lineHeight: props2.progressHeight - 1 + "px",
          backgroundColor: progressBg.value,
          animationDuration: props2.progressSpeed + "s"
        };
      } else {
        const styleObj = {
          cx: props2.circleSize / 2,
          cy: props2.circleSize / 2,
          r: props2.circleSize / 2 - props2.circleHeight / 2,
          strokeWidth: props2.circleHeight,
          fill: "none",
          transform: `matrix(0,-1,1,0,0,${props2.circleSize})`,
          animationDuration: props2.progressSpeed + "s"
        };
        if (props2.progressType === "dashboard") {
          delete styleObj.transform;
        }
        return styleObj;
      }
    });
    const progressBg = computed(() => {
      let color;
      if (props2.bgColor && typeof props2.bgColor === "string") {
        return props2.bgColor;
      } else if (props2.bgColor && typeof props2.bgColor === "function") {
        return props2.bgColor(props2.percent);
      } else {
        switch (props2.currentStatus) {
          case "SUCCESS":
            color = "#09b63d";
            break;
          case "FAIL":
            color = "#ec3437";
            break;
          case "OTHER":
            color = "#f57b29";
            break;
          default:
            color = "#0e80eb";
        }
        return color;
      }
    });
    onUpdated(() => {
      const { progressType, isAnimation } = props2;
      if (progressType === "circle" && isAnimation) {
        findNoLinkSheet();
        addKeyframes();
      }
    });
    const animationArr = `100% {stroke-dasharray: ${formatPercent.value};stroke-dashoffset: ${-girth};}`;
    let sheetsIndex = "";
    const addKeyframes = () => {
      const styleSheets = document.styleSheets;
      if (styleSheets[0].cssRules[0][0] && styleSheets[0].cssRules[0][0].parentRule && styleSheets[0].cssRules[0][0].parentRule.name === "rotateAnimation") {
        return;
      }
      const Keyframes = `@keyframes rotateAnimation {${animationArr}}`;
      if (styleSheets[sheetsIndex].appendRule) {
        styleSheets[sheetsIndex].insertRule = styleSheets[sheetsIndex].appendRule;
      }
      styleSheets[sheetsIndex].insertRule(Keyframes);
    };
    const findNoLinkSheet = () => {
      const styleSheets = document.styleSheets;
      let ssLength = styleSheets.length;
      for (let i = 0; i < ssLength; i++) {
        try {
          styleSheets[i].cssRules || styleSheets[i].rules;
          if (!styleSheets[i].cssRules && !styleSheets[i].rules) {
            continue;
          }
        } catch {
          continue;
        }
        sheetsIndex = i;
        break;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        __props.progressType === "line" ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
          createElementVNode("div", {
            class: normalizeClass(unref(backClass)),
            style: normalizeStyle({ height: unref(progressDefaultStyle).height })
          }, [
            createElementVNode("div", {
              class: normalizeClass(unref(speedClass)),
              style: normalizeStyle({
                width: unref(progressDefaultStyle).width,
                lineHeight: unref(progressDefaultStyle).lineHeight,
                backgroundColor: unref(progressDefaultStyle).backgroundColor,
                animationDuration: unref(progressDefaultStyle).animationDuration
              })
            }, [
              withDirectives(createElementVNode("span", null, [
                renderSlot(_ctx.$slots, "default", {}, () => [
                  createTextVNode(toDisplayString(unref(formatPercent).text), 1)
                ], true)
              ], 512), [
                [vShow, __props.isShowText]
              ])
            ], 6)
          ], 6),
          withDirectives(createElementVNode("div", _hoisted_3$2, [
            createElementVNode("span", null, [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createTextVNode(toDisplayString(unref(formatPercent).text), 1)
              ], true)
            ])
          ], 512), [
            [vShow, !__props.isShowText]
          ])
        ])) : (openBlock(), createElementBlock("div", {
          key: 1,
          class: "mzl-progress-default-circle",
          style: normalizeStyle({ width: `${__props.circleSize}px`, height: `${__props.circleSize}px` })
        }, [
          (openBlock(), createElementBlock("svg", {
            style: normalizeStyle({ width: `${__props.circleSize}px`, height: `${__props.circleSize}px` }),
            viewbox: "0 0 100 100"
          }, [
            createElementVNode("circle", {
              stroke: "#dcdcdc",
              style: normalizeStyle(unref(progressDefaultStyle)),
              "stroke-dasharray": unref(formatPercent).bgCircle,
              "stroke-dashoffset": unref(formatPercent).dashoffset
            }, null, 12, _hoisted_4$2),
            createElementVNode("circle", {
              class: normalizeClass(unref(speedClass)),
              stroke: unref(progressBg),
              style: normalizeStyle(unref(progressDefaultStyle)),
              "stroke-dasharray": unref(formatPercent).progressCircle,
              "stroke-dashoffset": unref(formatPercent).dashoffset
            }, null, 14, _hoisted_5$1)
          ], 4)),
          __props.isShowText ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "mzl-progress-circle-slot",
            style: normalizeStyle(unref(progressDashboardStyle))
          }, [
            renderSlot(_ctx.$slots, "default", {}, () => [
              createTextVNode(toDisplayString(unref(progressCircleText)), 1)
            ], true)
          ], 4)) : createCommentVNode("", true)
        ], 4))
      ]);
    };
  }
});
var mProgress = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-2b0f9c05"]]);
mProgress.install = (app) => {
  app.component(mProgress.name, mProgress);
};
var index_vue_vue_type_style_index_0_scoped_true_lang$3 = "";
const _withScopeId = (n) => (pushScopeId("data-v-4730ac18"), n = n(), popScopeId(), n);
const _hoisted_1$5 = { class: "mzl-color-picker-hd" };
const _hoisted_2$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("span", { class: "hd-color-preview" }, null, -1));
const _hoisted_3$1 = { class: "mzl-color-picker-bd" };
const _hoisted_4$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("p", null, "\u4E3B\u9898\u989C\u8272", -1));
const _hoisted_5 = { class: "t-color" };
const _hoisted_6 = ["onMouseenter", "onClick"];
const _hoisted_7 = { class: "color-panel" };
const _hoisted_8 = ["onMouseenter", "onClick"];
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("p", null, "\u6807\u51C6\u989C\u8272", -1));
const _hoisted_10 = { class: "t-color" };
const _hoisted_11 = ["onMouseenter", "onClick"];
const __default__$4 = {
  name: "mColorPicker"
};
const _sfc_main$7 = /* @__PURE__ */ Object.assign(__default__$4, {
  props: {
    modelValue: {
      type: String
    },
    defaultColor: {
      type: String,
      default: "#000000"
    },
    customClass: {
      type: String,
      require: false
    },
    autoClose: {
      type: Boolean,
      require: false,
      default: false
    }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { expose, emit }) {
    const props2 = __props;
    useCssVars((_ctx) => ({
      "4e63f567": unref(showColor)
    }));
    const hoverColor = ref(null);
    const showColor = computed(() => {
      var _a, _b;
      return (_b = (_a = hoverColor.value) != null ? _a : props2.modelValue) != null ? _b : props2.defaultColor;
    });
    const handleMouseEnter = (color) => {
      hoverColor.value = color;
    };
    const handleMouseLeave = () => {
      hoverColor.value = null;
    };
    const setColor = (color) => {
      emit("update:modelValue", color);
      emit("change", color);
      if (props2.autoClose) {
        close();
      }
    };
    onMounted(() => {
      const colorPicker = ref();
      const vm = getCurrentInstance();
      window.addEventListener("click", (e) => {
        if (colorPicker && !vm.vnode.el.contains(e.target)) {
          close();
        }
      });
    });
    const h5Color = ref("");
    const h5ColorRef = ref(null);
    const showH5ColorPanel = () => {
      h5ColorRef.value.click();
    };
    const tColor = [
      "#000000",
      "#ffffff",
      "#eeece1",
      "#1e497b",
      "#4e81bb",
      "#e2534d",
      "#9aba60",
      "#8165a0",
      "#47acc5",
      "#f9974c"
    ];
    const colorConfig = [
      ["#7f7f7f", "#f2f2f2"],
      ["#0d0d0d", "#808080"],
      ["#1c1a10", "#ddd8c3"],
      ["#0e243d", "#c6d9f0"],
      ["#233f5e", "#dae5f0"],
      ["#632623", "#f2dbdb"],
      ["#4d602c", "#eaf1de"],
      ["#3f3150", "#e6e0ec"],
      ["#1e5867", "#d9eef3"],
      ["#99490f", "#fee9da"]
    ];
    const colorPanel = computed(() => {
      const list = [];
      for (let item of colorConfig) {
        list.push(gradient(item[1], item[0], 5));
      }
      return list;
    });
    const bColor = [
      "#c21401",
      "#ff1e02",
      "#ffc12a",
      "#ffff3a",
      "#90cf5b",
      "#00af57",
      "#00afee",
      "#0071be",
      "#00215f",
      "#72349d"
    ];
    const gradient = (startColor, endColor, step) => {
      let sColor = hexToRgb(startColor);
      let eColor = hexToRgb(endColor);
      let rStep = (eColor[0] - sColor[0]) / step;
      let gStep = (eColor[1] - sColor[1]) / step;
      let bStep = (eColor[2] - sColor[2]) / step;
      let gradientColorArr = [];
      for (let i = 0; i < step; i++) {
        gradientColorArr.push(rgbToHex(parseInt(rStep * i + sColor[0]), parseInt(gStep * i + sColor[1]), parseInt(bStep * i + sColor[2])));
      }
      return gradientColorArr;
    };
    const parseColor = (hexStr) => {
      if (hexStr.length === 4) {
        hexStr = "#" + hexStr[1] + hexStr[1] + hexStr[2] + hexStr[2] + hexStr[3] + hexStr[3];
      } else {
        return hexStr;
      }
    };
    const rgbToHex = (r, g, b) => {
      let hex = (r << 16 | g << 8 | b).toString(16);
      return "#" + new Array(Math.abs(hex.length - 7)).join("0") + hex;
    };
    const hexToRgb = (hex) => {
      hex = parseColor(hex);
      let rgb = [];
      for (let i = 1; i < 7; i += 2) {
        rgb.push(parseInt("0x" + hex.slice(i, i + 2)));
      }
      return rgb;
    };
    const isShow = ref(false);
    const show = () => {
      isShow.value = true;
    };
    const close = () => {
      isShow.value = false;
    };
    const toggle = () => {
      isShow.value = !isShow.value;
    };
    expose({
      show,
      close,
      toggle
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: "fade" }, {
        default: withCtx(() => [
          isShow.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            ref: "colorPicker",
            class: normalizeClass(["mzl-color-picker", __props.customClass])
          }, [
            createElementVNode("div", _hoisted_1$5, [
              _hoisted_2$1,
              createElementVNode("span", {
                class: "default-color-text",
                onClick: _cache[0] || (_cache[0] = ($event) => setColor(props2.defaultColor))
              }, "\u9ED8\u8BA4\u989C\u8272")
            ]),
            createElementVNode("div", _hoisted_3$1, [
              _hoisted_4$1,
              createElementVNode("ul", _hoisted_5, [
                (openBlock(), createElementBlock(Fragment, null, renderList(tColor, (color, index) => {
                  return createElementVNode("li", {
                    key: index,
                    style: normalizeStyle({ backgroundColor: color }),
                    onMouseenter: ($event) => handleMouseEnter(color),
                    onMouseleave: handleMouseLeave,
                    onClick: ($event) => setColor(color)
                  }, null, 44, _hoisted_6);
                }), 64))
              ]),
              createElementVNode("ul", _hoisted_7, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(colorPanel), (item, index) => {
                  return openBlock(), createElementBlock("li", { key: index }, [
                    createElementVNode("ul", null, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(item, (color, innerIndex) => {
                        return openBlock(), createElementBlock("li", {
                          key: innerIndex,
                          style: normalizeStyle({ backgroundColor: color }),
                          onMouseenter: ($event) => handleMouseEnter(color),
                          onMouseleave: handleMouseLeave,
                          onClick: ($event) => setColor(color)
                        }, null, 44, _hoisted_8);
                      }), 128))
                    ])
                  ]);
                }), 128))
              ]),
              _hoisted_9,
              createElementVNode("ul", _hoisted_10, [
                (openBlock(), createElementBlock(Fragment, null, renderList(bColor, (color, index) => {
                  return createElementVNode("li", {
                    key: index,
                    style: normalizeStyle({ backgroundColor: color }),
                    onMouseenter: ($event) => handleMouseEnter(color),
                    onMouseleave: handleMouseLeave,
                    onClick: ($event) => setColor(color)
                  }, null, 44, _hoisted_11);
                }), 64))
              ]),
              createElementVNode("p", { onClick: showH5ColorPanel }, "\u66F4\u591A\u989C\u8272"),
              withDirectives(createElementVNode("input", {
                type: "color",
                hidden: "",
                ref_key: "h5ColorRef",
                ref: h5ColorRef,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => h5Color.value = $event),
                onChange: _cache[2] || (_cache[2] = ($event) => setColor(h5Color.value))
              }, null, 544), [
                [vModelText, h5Color.value]
              ])
            ])
          ], 2)) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
var mColorPicker = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-4730ac18"]]);
mColorPicker.install = (app) => {
  app.component(mColorPicker.name, mColorPicker);
};
var index_vue_vue_type_style_index_0_lang = "";
const props = {
  customClass: String,
  separator: {
    type: String,
    default: "/"
  },
  space: {
    type: Number,
    default: 5
  }
};
const _sfc_main$6 = {
  name: "mBreadcrumb",
  props,
  render(props2) {
    var _a;
    const slots = useSlots();
    const items = slots.default();
    const wrapItems = [];
    items.forEach((item, index) => {
      wrapItems.push(item);
      if (index < items.length - 1) {
        wrapItems.push(h("span", {
          style: { margin: `0 ${props2.space}px` }
        }, props2.separator));
      }
    });
    return h("div", {
      class: `m-breadcrumb ${(_a = props2.customClass) != null ? _a : ""}`
    }, wrapItems);
  }
};
const __default__$3 = {
  name: "mBreadcrumbItem"
};
const _sfc_main$5 = /* @__PURE__ */ Object.assign(__default__$3, {
  props: {
    customClass: String
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["mzl-breadcrumb-item", __props.customClass])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
_sfc_main$6.install = (app) => {
  app.component(_sfc_main$6.name, _sfc_main$6);
  app.component(_sfc_main$5.name, _sfc_main$5);
};
var index_vue_vue_type_style_index_0_scoped_true_lang$2 = "";
const _hoisted_1$4 = { class: "mzl-badge" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { key: 1 };
const _hoisted_4 = {
  key: 1,
  class: "isdot"
};
const __default__$2 = {
  name: "mBadge"
};
const _sfc_main$4 = /* @__PURE__ */ Object.assign(__default__$2, {
  props: {
    value: String | Number,
    hidden: {
      type: Boolean,
      default: false
    },
    isDot: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "danger"
    },
    max: {
      type: Number,
      default: 99
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true),
        withDirectives(createElementVNode("div", null, [
          !__props.isDot ? (openBlock(), createElementBlock("sup", {
            key: 0,
            class: normalizeClass([__props.type, "badge"])
          }, [
            typeof __props.value === "number" ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(__props.value <= __props.max ? __props.value : `${__props.max}+`), 1)) : (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(__props.value), 1))
          ], 2)) : (openBlock(), createElementBlock("sup", _hoisted_4))
        ], 512), [
          [vShow, !__props.hidden]
        ])
      ]);
    };
  }
});
var mBadge = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-a26a34c4"]]);
mBadge.install = (app) => {
  app.component(mBadge.name, mBadge);
};
var index_vue_vue_type_style_index_0_scoped_true_lang$1 = "";
const _hoisted_1$3 = {
  key: 0,
  class: "mzl-divider-title"
};
const __default__$1 = {
  name: "mDivider"
};
const _sfc_main$3 = /* @__PURE__ */ Object.assign(__default__$1, {
  props: {
    position: {
      type: String,
      default: "left"
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    lineStyle: {
      type: String,
      default: "solid"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["mzl-divider", { "mzl-vertical": __props.direction === "vertical" }]),
        style: normalizeStyle({ "justify-content": __props.position, "border-top": `1px ${__props.lineStyle} #dcdfe6` })
      }, [
        __props.position ? (openBlock(), createElementBlock("div", _hoisted_1$3, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])) : createCommentVNode("", true)
      ], 6);
    };
  }
});
var mDivider = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-6c7d38c2"]]);
mDivider.install = (app) => {
  app.component(mDivider.name, mDivider);
};
const _sfc_main$2 = {
  name: "gSpace",
  props: {
    inline: {
      type: Boolean,
      default: true
    },
    size: {
      type: Object,
      default: [10, 10]
    },
    alignItems: {
      type: String,
      default: "center"
    },
    justifyContent: {
      type: String,
      default: "flex-start"
    },
    align: {
      type: String,
      default: "flex-start"
    },
    class: {
      type: String,
      default: ""
    },
    childrenClass: {
      type: Object,
      default: () => {
      }
    },
    style: {
      type: Object,
      default: () => {
      }
    },
    widthFill: {
      type: Boolean,
      default: false
    },
    innerWidthFill: {
      type: Boolean,
      default: false
    }
  },
  setup(props2) {
    const $slot = useSlots();
    const slotList = ref([]);
    const styles = computed(() => {
      return __spreadValues({
        display: props2.inline ? "inline-flex" : "flex",
        gap: props2.size.length == 2 ? `${props2.size[0]}px ${props2.size[1]}px` : `${props2.size[0]}px`,
        "flex-direction": !props2.inline ? "column" : "",
        "flex-wrap": "wrap",
        margin: `${props2.size[0] / 2}px 0px`,
        width: props2.inline || props2.widthFill ? "100%" : "fit-content",
        "justify-content": props2.justifyContent,
        "align-items": props2.align,
        align: props2.align
      }, props2.style);
    });
    $slot.default().forEach((item, index, arr) => {
      slotList.value.push(item);
    });
    return () => [
      h("div", {
        className: `g-space-box ${props2.class}`,
        style: styles.value
      }, slotList.value)
    ];
  }
};
const _hoisted_1$2 = {
  class: "g-space",
  ref: "spaceRef"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, null, 512);
}
var gSpace = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1]]);
gSpace.install = (app) => {
  app.component(gSpace.name, gSpace);
};
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$1 = ["aria-hidden"];
const __default__ = {
  name: "gTooltip"
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__, {
  props: {
    width: {
      type: [String, Number]
    },
    placement: {
      type: [String],
      default: "top"
    },
    color: {
      type: String,
      default: ""
    },
    tooltipClass: {
      type: [String]
    },
    transition: {
      type: String,
      default: "slide-fade"
    },
    disabled: {
      type: [Boolean],
      default: false
    },
    theme: {
      type: String,
      default: "dark"
    }
  },
  emits: ["after-enter", "after-leave"],
  setup(__props, { emit }) {
    const props2 = __props;
    const visible = ref(false);
    const reference = ref(null);
    const tooltipArrow = ref(null);
    onMounted(() => {
      if (props2.placement == "top" || props2.placement == "bottom") {
        const clientWidth = reference.value.clientWidth;
        tooltipArrow.value.style.setProperty("--geticonsite", clientWidth / 2 + "px");
      } else if (props2.placement.includes("top") || props2.placement.includes("bottom")) {
        tooltipArrow.value.style.setProperty("--geticonsite", 10 + "px");
      } else if (props2.placement == "left" || props2.placement == "right") {
        const clientHeight = reference.value.clientHeight;
        tooltipArrow.value.style.setProperty("--geticonsite", clientHeight / 2 + "px");
      } else if (props2.placement == "left-start" || props2.placement.includes("right-start")) {
        tooltipArrow.value.style.setProperty("--geticonsite", 10 + "px");
      } else if (props2.placement == "left-end" || props2.placement.includes("right-end")) {
        tooltipArrow.value.style.setProperty("--geticonsite", 0 + "px");
      }
    });
    function hoverTriggerEnterHandler() {
      if (!props2.disabled) {
        visible.value = true;
      }
    }
    function hoverTriggerLeaveHandler() {
      if (!props2.disabled) {
        visible.value = false;
      }
    }
    function handleAfterEnter() {
      emit("after-enter");
    }
    function handleAfterLeave() {
      emit("after-leave");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "tooltip-box",
        onMouseenter: hoverTriggerEnterHandler,
        onMouseleave: hoverTriggerLeaveHandler
      }, [
        createVNode(Transition, {
          name: __props.transition,
          onAfterEnter: handleAfterEnter,
          onAfterLeave: handleAfterLeave
        }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("div", {
              class: normalizeClass(["tooltip-outbox", [__props.theme == "light" ? "tooltip-outbox-light" : __props.theme == "dark" ? "tooltip-outbox-dark" : __props.theme == "block" ? "tooltip-outbox-block" : "", __props.placement, __props.tooltipClass]]),
              "aria-hidden": __props.disabled || !visible.value ? "true" : "false",
              style: normalizeStyle({
                backgroundColor: __props.color,
                color: __props.theme == "light" || __props.theme == "none" ? "#303133" : "#fff"
              })
            }, [
              createElementVNode("div", {
                class: "tooltip-arrow",
                ref_key: "tooltipArrow",
                ref: tooltipArrow,
                style: normalizeStyle({ "border-top": __props.color ? `6px solid ${__props.color}` : "" })
              }, null, 4),
              renderSlot(_ctx.$slots, "content", {}, void 0, true)
            ], 14, _hoisted_1$1), [
              [vShow, !__props.disabled && visible.value]
            ])
          ]),
          _: 3
        }, 8, ["name"]),
        createElementVNode("div", {
          ref_key: "reference",
          ref: reference,
          class: "reference-content"
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 512)
      ], 32);
    };
  }
});
var gTooltip = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d0bb0e70"]]);
gTooltip.install = (app) => {
  app.component(gTooltip.name, gTooltip);
};
const globalColor = {
  primary: "#0e80eb",
  info: "rgba(0,0,0,0.45)",
  gray: "rgba(0,0,0,0.45)",
  success: "#09b63d",
  warning: "#f57b29",
  danger: "#ec3437",
  boder: "#f0f0f0",
  shadow: "0 2px 12px 0 rgba(0, 0, 0, 0.1)",
  default: "rgba(0,0,0,0.85)"
};
const theColors = {
  default: globalColor.default,
  primary: globalColor.primary,
  success: globalColor.success,
  warning: globalColor.warning,
  danger: globalColor.danger,
  gray: globalColor.gray,
  link: globalColor.primary
};
const theSizes = {
  small: "12px",
  default: "14px",
  large: "16px",
  5: "12px",
  4: "14px",
  3: "16px",
  2: "18px",
  1: "20px"
};
const _sfc_main = {
  name: "gText",
  props: {
    size: {
      type: String,
      default: "default"
    },
    type: {
      type: String,
      default: "default"
    },
    color: {
      type: String,
      default: ""
    },
    underline: {
      type: Boolean,
      default: false
    },
    delete: {
      type: Boolean,
      default: false
    },
    strong: {
      type: Boolean,
      default: false
    },
    link: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    cursor: {
      type: Boolean,
      default: false
    },
    noSelect: {
      type: Boolean,
      default: false
    },
    number: {
      type: Boolean,
      default: false
    },
    copyable: {
      type: [Boolean, Object],
      default: false
    }
  },
  setup(props2) {
    var _a;
    const theSlot = ref([]);
    ref(true);
    const $slot = useSlots();
    const styles = computed(() => {
      return __spreadValues({
        "font-weight": props2.strong ? 700 : "",
        color: props2.color != "" ? props2.color : props2.link ? "#0e80eb" : props2.disabled ? theColors["gray"] : theColors[props2.type],
        "text-decoration": props2.delete ? "line-through" : props2.underline ? "underline" : "",
        cursor: props2.cursor ? "pointer" : props2.disabled ? "not-allowed" : "",
        "user-select": props2.disabled ? "none" : "",
        "caret-color": props2.cursor || props2.noSelect ? "transparent" : "",
        "font-size": theSizes[props2.size],
        "font-family": props2.number ? "DIN-Medium" : ""
      }, props2.style);
    });
    if ($slot["default"] == void 0) {
      theSlot.value = [];
    } else if (props2.copyable) {
      const baseSlot = [
        h("span", {
          className: `g-text`,
          style: styles.value
        }, $slot.default())
      ];
      const copySlotHideText = [
        h("span", {
          className: `m-icon-copy`,
          style: {
            color: "red",
            cursor: "pointer",
            "user-select": "none",
            "padding-left": "5px"
          },
          onClick: () => {
            navigator.clipboard.writeText($slot.default()[0].children).then(() => {
              theSlot.value = [h("g-space", {}, [...baseSlot, ...successSlotHideText])];
              setTimeout(() => {
                theSlot.value = [h("g-space", {}, [...baseSlot, ...copySlotHideText])];
              }, 3e3);
            });
          }
        }, {})
      ];
      const successSlotHideText = [
        h("span", {
          className: `m-icon-select`,
          style: {
            color: "red",
            cursor: "pointer",
            "padding-left": "5px"
          }
        }, {})
      ];
      const copySlot = [
        h(gTooltip, {}, {
          default: () => [
            h("span", {
              className: `m-icon-copy`,
              style: {
                color: "red",
                cursor: "pointer",
                "user-select": "none",
                padding: "0 5px"
              },
              onClick: () => {
                navigator.clipboard.writeText($slot.default()[0].children).then(() => {
                  theSlot.value = [h("g-space", {}, [...baseSlot, ...successSlot])];
                  setTimeout(() => {
                    theSlot.value = [h("g-space", {}, [...baseSlot, ...copySlot])];
                  }, 3e3);
                });
              }
            }, {})
          ],
          content: () => "\u590D\u5236"
        })
      ];
      const successSlot = [
        h(gTooltip, {}, {
          default: () => [
            h("span", {
              className: `m-icon-select`,
              style: {
                color: "red",
                cursor: "pointer",
                padding: "0 5px"
              }
            }, {})
          ],
          content: () => "\u590D\u5236\u6210\u529F"
        })
      ];
      if (typeof props2.copyable == "object") {
        theSlot.value = [h("g-space", {}, ((_a = props2.copyable) == null ? void 0 : _a.tooltip) ? [...baseSlot, ...copySlot] : [...baseSlot, ...copySlotHideText])];
      } else {
        theSlot.value = [h("g-space", {}, [...baseSlot, ...copySlot])];
      }
    } else {
      theSlot.value = [
        h("span", {
          className: `g-text`,
          style: styles.value
        }, $slot.default())
      ];
    }
    return () => theSlot.value;
  }
};
const _hoisted_1 = {
  class: "g-text",
  ref: "textRef"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, null, 512);
}
var gText = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
gText.install = (app) => {
  app.component(gText.name, gText);
};
const components = [
  mButton,
  mInput,
  mTable,
  mSelect,
  mDropdown,
  mRadio,
  mCheckbox,
  mModal,
  mDrawer,
  mSwitch,
  _sfc_main$o,
  mOptfile,
  mTextarea,
  mRow,
  mCol,
  mPagination,
  mDate,
  mBacktop,
  mCollapse,
  mCollapseItem,
  mMenu,
  mTabs,
  gSpace,
  mPopover,
  mProgress,
  mColorPicker,
  _sfc_main$6,
  mBadge,
  mDivider,
  gText,
  gTooltip
];
const install = (app) => {
  components.forEach((i) => {
    app.use(i);
  });
  app.config.globalProperties.$message = Message;
  app.config.globalProperties.$Confirm = Confirm;
  app.config.globalProperties.$Loading = Loading;
  app.config.globalProperties.$mzl = $mzl;
};
const mzlUi = {
  version: "0.4.1",
  install
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export { $mzl, Confirm, Loading, Message, mzlUi as default, gSpace, gText, gTooltip, install, mBacktop, mBadge, _sfc_main$6 as mBreadcrumb, mButton, mCheckbox, mCol, mCollapse, mCollapseItem, mColorPicker, mDate, mDivider, mDrawer, mDropdown, mInput, mMenu, mModal, mOptfile, mPagination, mPopover, mProgress, mRadio, mRow, mSelect, mSwitch, mTable, mTabs, mTextarea, _sfc_main$o as mTree };
