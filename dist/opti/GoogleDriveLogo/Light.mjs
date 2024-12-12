var M = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var l = (e, a, t) => a in e ? M(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, H = (e, a) => {
  for (var t in a || (a = {}))
    Z.call(a, t) && l(e, t, a[t]);
  if (r)
    for (var t of r(a))
      o.call(a, t) && l(e, t, a[t]);
  return e;
};
var i = (e, a) => {
  var t = {};
  for (var m in e)
    Z.call(e, m) && a.indexOf(m) < 0 && (t[m] = e[m]);
  if (e != null && r)
    for (var m of r(e))
      a.indexOf(m) < 0 && o.call(e, m) && (t[m] = e[m]);
  return t;
};
import p, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const h = c((m, t) => {
  var L = m, { children: e } = L, a = i(L, ["children"]);
  return /* @__PURE__ */ p.createElement(f, H({ ref: t }, a), e, /* @__PURE__ */ p.createElement("path", { d: "M235.9,144.82,167.43,32.58A13.91,13.91,0,0,0,155.56,26H100.43a13.92,13.92,0,0,0-11.87,6.58l0,.05L20.13,144.76a14,14,0,0,0-.28,14.37L47.17,207A14,14,0,0,0,59.32,214H196.67A14,14,0,0,0,208.83,207l27.32-47.82A14,14,0,0,0,235.9,144.82ZM222.56,146H171.39L135,85.33l25.08-41.79Zm-124,0L128,97l29.4,49Zm66,12L191,202H65l26.4-44ZM128,73.67,106.6,38h42.8ZM95.93,43.54,121,85.33,84.6,146H33.43ZM33,158H77.4L54.67,195.89Zm168.3,37.89L178.59,158H223Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
