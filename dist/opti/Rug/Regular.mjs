var i = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, V, e) => V in a ? i(a, V, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[V] = e, H = (a, V) => {
  for (var e in V || (V = {}))
    o.call(V, e) && m(a, e, V[e]);
  if (t)
    for (var e of t(V))
      p.call(V, e) && m(a, e, V[e]);
  return a;
};
var c = (a, V) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && V.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      V.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import R from "../../lib/OptiBase.mjs";
const Z = s((r, e) => {
  var l = r, { children: a } = l, V = c(l, ["children"]);
  return /* @__PURE__ */ f.createElement(R, H({ ref: e }, V), a, /* @__PURE__ */ f.createElement("path", { d: "M200,16a8,8,0,0,0-8,8V40H160V24a8,8,0,0,0-16,0V40H112V24a8,8,0,0,0-16,0V40H64V24a8,8,0,0,0-16,0V232a8,8,0,0,0,16,0V216H96v16a8,8,0,0,0,16,0V216h32v16a8,8,0,0,0,16,0V216h32v16a8,8,0,0,0,16,0V24A8,8,0,0,0,200,16ZM64,56H192V200H64Zm64,120a8,8,0,0,0,6.86-3.88l24-40a8,8,0,0,0,0-8.24l-24-40a8,8,0,0,0-13.72,0l-24,40a8,8,0,0,0,0,8.24l24,40A8,8,0,0,0,128,176Zm0-72.45L142.67,128,128,152.45,113.33,128Z" }));
});
Z.displayName = "Regular";
export {
  Z as Regular
};
