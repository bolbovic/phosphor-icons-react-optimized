var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var Z = (e, a, t) => a in e ? i(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, c = (e, a) => {
  for (var t in a || (a = {}))
    p.call(a, t) && Z(e, t, a[t]);
  if (o)
    for (var t of o(a))
      L.call(a, t) && Z(e, t, a[t]);
  return e;
};
var n = (e, a) => {
  var t = {};
  for (var m in e)
    p.call(e, m) && a.indexOf(m) < 0 && (t[m] = e[m]);
  if (e != null && o)
    for (var m of o(e))
      a.indexOf(m) < 0 && L.call(e, m) && (t[m] = e[m]);
  return t;
};
import l, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const s = d((m, t) => {
  var r = m, { children: e } = r, a = n(r, ["children"]);
  return /* @__PURE__ */ l.createElement(f, c({ ref: t }, a), e, /* @__PURE__ */ l.createElement("path", { d: "M232,160,128,216,24,160l104-56Z", opacity: "0.2" }), /* @__PURE__ */ l.createElement("path", { d: "M235.79,89l-104-56a8,8,0,0,0-7.58,0l-104,56A8,8,0,0,0,16,96v64a8,8,0,0,0,4.21,7.05l104,56a8,8,0,0,0,7.58,0l104-56A8,8,0,0,0,240,160V96A8,8,0,0,0,235.79,89ZM224,146.61,189.45,128,224,109.39Zm-51.43-27.7L136,99.22V53.39L215.13,96Zm-44.57,24L100.3,128,128,113.09,155.7,128Zm-8-89.52V99.22L83.43,118.91,40.87,96Zm-88,56L66.55,128,32,146.61Zm51.43,27.7L120,156.78v45.83L40.87,160ZM136,202.61V156.78l36.57-19.69L215.13,160Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
