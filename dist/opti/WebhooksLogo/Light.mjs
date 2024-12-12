var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      c.call(t, e) && i(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && c.call(a, r) && (e[r] = a[r]);
  return e;
};
import h, { forwardRef as A } from "react";
import L from "../../lib/OptiBase.mjs";
const d = A((r, e) => {
  var o = r, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ h.createElement(L, l({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M179.37,174H109.6a46,46,0,1,1-82.4-33.61,6,6,0,0,1,9.6,7.21A33.68,33.68,0,0,0,30,168a34,34,0,0,0,68,0,6,6,0,0,1,6-6h75.37a14,14,0,1,1,0,12ZM64,182a14,14,0,0,0,11.73-21.62l36.42-59.18a6,6,0,0,0-2-8.25,34,34,0,1,1,49-42.57,6,6,0,1,0,11-4.79A46,46,0,1,0,99,99.7L65.52,154.08c-.5-.05-1-.08-1.52-.08a14,14,0,0,0,0,28Zm128-60a46,46,0,0,0-18.8,4L139.73,71.61A14,14,0,1,0,128,78a12.79,12.79,0,0,0,1.52-.09l36.4,59.17a6.05,6.05,0,0,0,3.73,2.69,6,6,0,0,0,4.53-.73A34,34,0,1,1,192,202a6,6,0,0,0,0,12,46,46,0,0,0,0-92Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
