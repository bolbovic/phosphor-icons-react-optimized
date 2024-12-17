var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import A, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((m, e) => {
  var c = m, { children: a } = c, t = n(c, ["children"]);
  return /* @__PURE__ */ A.createElement(d, l({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M152,76a28,28,0,1,0-28-28A28,28,0,0,0,152,76Zm0-48a20,20,0,1,1-20,20A20,20,0,0,1,152,28Zm60,116a4,4,0,0,1-4,4c-33.65,0-49.92-16.43-64.28-30.93-3.52-3.57-6.86-6.93-10.34-10-.66-.57-1.34-1.09-2-1.59l-16.86,38.77,39.84,28.45A4,4,0,0,1,156,176v56a4,4,0,0,1-8,0V178.06L111.23,151.8,75.67,233.59a4,4,0,1,1-7.34-3.19l55.93-128.62c-29.7-10.55-73,29.64-73.52,30.09A4,4,0,1,1,45.26,126,173.4,173.4,0,0,1,78.1,102.59c25.15-13.54,46.07-14.06,60.52-1.52,3.71,3.23,7.15,6.7,10.79,10.37,13.9,14,28.28,28.56,58.59,28.56A4,4,0,0,1,212,144Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
