var Z = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (l)
    for (var e of l(t))
      h.call(t, e) && m(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var L in a)
    o.call(a, L) && t.indexOf(L) < 0 && (e[L] = a[L]);
  if (a != null && l)
    for (var L of l(a))
      t.indexOf(L) < 0 && h.call(a, L) && (e[L] = a[L]);
  return e;
};
import H, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((L, e) => {
  var r = L, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ H.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M200,26H123.31a13.94,13.94,0,0,0-9.9,4.1L101.66,41.86,89.9,30.1a14,14,0,0,0-19.8,0l-24,24a14,14,0,0,0,0,19.8L57.86,85.66,46.1,97.41a13.94,13.94,0,0,0-4.1,9.9V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V40A14,14,0,0,0,200,26ZM54.59,65.41a2,2,0,0,1,0-2.82l24-24a2,2,0,0,1,2.82,0L93.17,50.34,66.34,77.17ZM202,216a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V107.31a2,2,0,0,1,.59-1.41l16-16h0L105.9,54.59h0l16-16a2,2,0,0,1,1.41-.59H200a2,2,0,0,1,2,2ZM182,64a6,6,0,0,1-6,6H136a6,6,0,0,1,0-12h40A6,6,0,0,1,182,64Zm-2.4,60.8L138,156l41.6,31.2a6,6,0,1,1-7.2,9.6L128,163.5,83.6,196.8a6,6,0,0,1-7.2-9.6L118,156,76.4,124.8a6,6,0,0,1,7.2-9.6L128,148.5l44.4-33.3a6,6,0,1,1,7.2,9.6Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
