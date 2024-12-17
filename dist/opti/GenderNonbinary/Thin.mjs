var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      l.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as L } from "react";
import d from "../../lib/OptiBase.mjs";
const h = L((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M132,100.13V55.07l33.94,20.36a4,4,0,1,0,4.12-6.86L135.77,48l34.29-20.57a4,4,0,1,0-4.12-6.86L128,43.34,90.06,20.57a4,4,0,1,0-4.12,6.86L120.23,48,85.94,68.57a4,4,0,0,0,4.12,6.86L124,55.07v45.06a68,68,0,1,0,8,0ZM128,228a60,60,0,1,1,60-60A60.07,60.07,0,0,1,128,228Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
