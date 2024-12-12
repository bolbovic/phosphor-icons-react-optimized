var i = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var L = (e, m, a) => m in e ? i(e, m, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[m] = a, p = (e, m) => {
  for (var a in m || (m = {}))
    Z.call(m, a) && L(e, a, m[a]);
  if (t)
    for (var a of t(m))
      o.call(m, a) && L(e, a, m[a]);
  return e;
};
var c = (e, m) => {
  var a = {};
  for (var r in e)
    Z.call(e, r) && m.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && t)
    for (var r of t(e))
      m.indexOf(r) < 0 && o.call(e, r) && (a[r] = e[r]);
  return a;
};
import f, { forwardRef as s } from "react";
import R from "../../lib/OptiBase.mjs";
const V = s((r, a) => {
  var l = r, { children: e } = l, m = c(l, ["children"]);
  return /* @__PURE__ */ f.createElement(R, p({ ref: a }, m), e, /* @__PURE__ */ f.createElement("path", { d: "M235.79,89l-104-56a8,8,0,0,0-7.58,0l-104,56A8,8,0,0,0,16,96v64a8,8,0,0,0,4.21,7.05l104,56a8,8,0,0,0,7.58,0l104-56A8,8,0,0,0,240,160V96A8,8,0,0,0,235.79,89ZM224,146.61,189.45,128,224,109.39Zm-51.43-27.7L136,99.22V53.39L215.13,96Zm-44.57,24L100.3,128,128,113.09,155.7,128Zm-8-89.52V99.22L83.43,118.91,40.87,96Zm-88,56L66.55,128,32,146.61Zm51.43,27.7L120,156.78v45.83L40.87,160ZM136,202.61V156.78l36.57-19.69L215.13,160Z" }));
});
V.displayName = "Regular";
export {
  V as Regular
};
