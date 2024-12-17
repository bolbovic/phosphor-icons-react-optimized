var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      H.call(t, e) && i(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && H.call(a, r) && (e[r] = a[r]);
  return e;
};
import v, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const V = f((r, e) => {
  var o = r, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ v.createElement(s, h({ ref: e }, t), a, /* @__PURE__ */ v.createElement("path", { d: "M208,44H163.77a36,36,0,0,0-71.54,0H48a4,4,0,0,0,0,8H92.23a36.06,36.06,0,0,0,17.34,26.91A60.11,60.11,0,0,0,68,136v64a12,12,0,0,0,12,12h20v4a28,28,0,0,0,56,0v-4h20a12,12,0,0,0,12-12V136a60.11,60.11,0,0,0-41.57-57.09A36.06,36.06,0,0,0,163.77,52H208a4,4,0,0,0,0-8ZM148,216a20,20,0,0,1-40,0V168a20,20,0,0,1,40,0Zm32-80v64a4,4,0,0,1-4,4H156V168a28,28,0,0,0-56,0v36H80a4,4,0,0,1-4-4V136a52,52,0,0,1,104,0ZM128,76a28,28,0,1,1,28-28A28,28,0,0,1,128,76Z" }));
});
V.displayName = "Thin";
export {
  V as Thin
};
