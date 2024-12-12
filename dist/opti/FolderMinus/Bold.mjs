var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var H = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, d = (e, t) => {
  for (var a in t || (t = {}))
    l.call(t, a) && H(e, a, t[a]);
  if (r)
    for (var a of r(t))
      p.call(t, a) && H(e, a, t[a]);
  return e;
};
var A = (e, t) => {
  var a = {};
  for (var o in e)
    l.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && p.call(e, o) && (a[o] = e[o]);
  return a;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const M = i((o, a) => {
  var m = o, { children: e } = m, t = A(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: a }, t), e, /* @__PURE__ */ c.createElement("path", { d: "M92,144a12,12,0,0,1,12-12h48a12,12,0,0,1,0,24H104A12,12,0,0,1,92,144ZM236,88V200.89A19.13,19.13,0,0,1,216.89,220H39.38A19.41,19.41,0,0,1,20,200.62V52A20,20,0,0,1,40,32H92.41a20,20,0,0,1,15,6.71l26,29.29H216A20,20,0,0,1,236,88ZM44,68h57.28L90.61,56H44ZM212,92H44V196H212Z" }));
});
M.displayName = "Bold";
export {
  M as Bold
};
