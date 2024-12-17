var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    d.call(t, a) && p(e, a, t[a]);
  if (r)
    for (var a of r(t))
      l.call(t, a) && p(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var o in e)
    d.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && l.call(e, o) && (a[o] = e[o]);
  return a;
};
import i, { forwardRef as n } from "react";
import B from "../../lib/OptiBase.mjs";
const A = n((o, a) => {
  var m = o, { children: e } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(B, c({ ref: a }, t), e, /* @__PURE__ */ i.createElement("path", { d: "M250,138a12,12,0,0,1-24,0,94.11,94.11,0,0,0-94-94,84.09,84.09,0,0,0-84,84,74.09,74.09,0,0,0,74,74,64.07,64.07,0,0,0,64-64,54.06,54.06,0,0,0-54-54,44.05,44.05,0,0,0-44,44,34,34,0,0,0,34,34,24,24,0,0,0,24-24,14,14,0,0,0-14-14,4,4,0,0,0-2.82,1.17A12,12,0,0,1,124,148a20,20,0,0,1-20-20,28,28,0,0,1,28-28,38,38,0,0,1,38,38,48.05,48.05,0,0,1-48,48,58.07,58.07,0,0,1-58-58,68.07,68.07,0,0,1,68-68,78.09,78.09,0,0,1,78,78,88.1,88.1,0,0,1-88,88,98.11,98.11,0,0,1-98-98A108.12,108.12,0,0,1,132,20,118.13,118.13,0,0,1,250,138Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
