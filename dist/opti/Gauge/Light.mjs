var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      H.call(t, e) && i(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && H.call(a, r) && (e[r] = a[r]);
  return e;
};
import V, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const A = l((r, e) => {
  var o = r, { children: a } = o, t = h(o, ["children"]);
  return /* @__PURE__ */ V.createElement(s, c({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M205.65,74.08A109.26,109.26,0,0,0,128,42h-.39C67.17,42.21,18,92.06,18,153.13V176a14,14,0,0,0,14,14H224a14,14,0,0,0,14-14V152A109.3,109.3,0,0,0,205.65,74.08ZM226,176a2,2,0,0,1-2,2H115.78l57.07-78.47a6,6,0,0,0-9.7-7.06L100.94,178H32a2,2,0,0,1-2-2V153.13A102.36,102.36,0,0,1,30.62,142H56a6,6,0,0,0,0-12H32.71C42.6,88.4,78.53,56.86,122,54.19V80a6,6,0,0,0,12,0V54.19A98.05,98.05,0,0,1,223.53,130H200a6,6,0,0,0,0,12h25.5c.33,3.3.5,6.64.5,10Z" }));
});
A.displayName = "Light";
export {
  A as Light
};
