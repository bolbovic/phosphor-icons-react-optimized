var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && m(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var V in a)
    o.call(a, V) && t.indexOf(V) < 0 && (e[V] = a[V]);
  if (a != null && r)
    for (var V of r(a))
      t.indexOf(V) < 0 && p.call(a, V) && (e[V] = a[V]);
  return e;
};
import s, { forwardRef as d } from "react";
import i from "../../lib/OptiBase.mjs";
const R = d((V, e) => {
  var l = V, { children: a } = l, t = f(l, ["children"]);
  return /* @__PURE__ */ s.createElement(i, H({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M200,16a8,8,0,0,0-8,8V40H160V24a8,8,0,0,0-16,0V40H112V24a8,8,0,0,0-16,0V40H64V24a8,8,0,0,0-16,0V232a8,8,0,0,0,16,0V216H96v16a8,8,0,0,0,16,0V216h32v16a8,8,0,0,0,16,0V216h32v16a8,8,0,0,0,16,0V24A8,8,0,0,0,200,16ZM64,56H192V200H64Zm64,120a8,8,0,0,0,6.86-3.88l24-40a8,8,0,0,0,0-8.24l-24-40a8,8,0,0,0-13.72,0l-24,40a8,8,0,0,0,0,8.24l24,40A8,8,0,0,0,128,176Zm0-72.45L142.67,128,128,152.45,113.33,128Z" }));
});
R.displayName = "Regular";
export {
  R as Regular,
  R as default
};
