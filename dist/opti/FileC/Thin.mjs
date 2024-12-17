var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && c(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && c(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    h.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as l } from "react";
import A from "../../lib/OptiBase.mjs";
const V = l((r, e) => {
  var o = r, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ s.createElement(A, p({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M44,180c0,13.23,9,24,20,24a18.15,18.15,0,0,0,13.11-5.9,4,4,0,1,1,5.78,5.54A26.11,26.11,0,0,1,64,212c-15.44,0-28-14.36-28-32s12.56-32,28-32a26.11,26.11,0,0,1,18.89,8.36,4,4,0,1,1-5.78,5.54A18.15,18.15,0,0,0,64,156C53,156,44,166.77,44,180ZM212,88V216a12,12,0,0,1-12,12H120a4,4,0,0,1,0-8h80a4,4,0,0,0,4-4V92H152a4,4,0,0,1-4-4V36H56a4,4,0,0,0-4,4v72a4,4,0,0,1-8,0V40A12,12,0,0,1,56,28h96a4,4,0,0,1,2.83,1.17l56,56A4,4,0,0,1,212,88Zm-56-4h42.34L156,41.65Z" }));
});
V.displayName = "Thin";
export {
  V as Thin
};
