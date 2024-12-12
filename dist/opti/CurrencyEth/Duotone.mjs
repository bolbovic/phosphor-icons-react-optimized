var d = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (e, a, t) => a in e ? d(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, Z = (e, a) => {
  for (var t in a || (a = {}))
    c.call(a, t) && p(e, t, a[t]);
  if (l)
    for (var t of l(a))
      n.call(a, t) && p(e, t, a[t]);
  return e;
};
var i = (e, a) => {
  var t = {};
  for (var o in e)
    c.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && l)
    for (var o of l(e))
      a.indexOf(o) < 0 && n.call(e, o) && (t[o] = e[o]);
  return t;
};
import m, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const M = f((o, t) => {
  var r = o, { children: e } = r, a = i(r, ["children"]);
  return /* @__PURE__ */ m.createElement(s, Z({ ref: t }, a), e, /* @__PURE__ */ m.createElement("path", { d: "M216,128,128,240,40,128l88,40Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M222.29,123.06l-88-112a8,8,0,0,0-12.58,0l-88,112a8,8,0,0,0,0,9.88l88,112a8,8,0,0,0,12.58,0l88-112A8,8,0,0,0,222.29,123.06ZM136,39.13l67.42,85.8L136,155.58ZM120,155.58,52.58,124.93,120,39.13Zm0,17.57v43.72l-53.43-68Zm16,0,53.43-24.29-53.43,68Z" }));
});
M.displayName = "Duotone";
export {
  M as Duotone
};
