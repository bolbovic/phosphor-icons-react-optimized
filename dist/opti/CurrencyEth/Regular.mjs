var s = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var o = (e, l, a) => l in e ? s(e, l, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[l] = a, c = (e, l) => {
  for (var a in l || (l = {}))
    p.call(l, a) && o(e, a, l[a]);
  if (t)
    for (var a of t(l))
      Z.call(l, a) && o(e, a, l[a]);
  return e;
};
var f = (e, l) => {
  var a = {};
  for (var r in e)
    p.call(e, r) && l.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && t)
    for (var r of t(e))
      l.indexOf(r) < 0 && Z.call(e, r) && (a[r] = e[r]);
  return a;
};
import i, { forwardRef as R } from "react";
import d from "../../lib/OptiBase.mjs";
const n = R((r, a) => {
  var m = r, { children: e } = m, l = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(d, c({ ref: a }, l), e, /* @__PURE__ */ i.createElement("path", { d: "M222.29,123.06l-88-112a8,8,0,0,0-12.58,0l-88,112a8,8,0,0,0,0,9.88l88,112a8,8,0,0,0,12.58,0l88-112A8,8,0,0,0,222.29,123.06ZM136,39.13l67.42,85.8L136,155.58ZM120,155.58,52.58,124.93,120,39.13Zm0,17.57v43.72l-53.43-68Zm16,0,53.43-24.29-53.43,68Z" }));
});
n.displayName = "Regular";
export {
  n as Regular
};
