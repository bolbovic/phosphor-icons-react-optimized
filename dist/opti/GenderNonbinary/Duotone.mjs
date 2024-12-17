var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      n.call(t, e) && c(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var o in a)
    l.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && n.call(a, o) && (e[o] = a[o]);
  return e;
};
import m, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const E = s((o, e) => {
  var p = o, { children: a } = p, t = d(p, ["children"]);
  return /* @__PURE__ */ m.createElement(L, i({ ref: e }, t), a, /* @__PURE__ */ m.createElement("path", { d: "M192,168a64,64,0,1,1-64-64A64,64,0,0,1,192,168Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M136,96.46V62.13l27.88,16.73a8,8,0,1,0,8.24-13.72L143.55,48l28.57-17.14a8,8,0,0,0-8.24-13.72L128,38.67,92.12,17.14a8,8,0,0,0-8.24,13.72L112.45,48,83.88,65.14a8,8,0,0,0,8.24,13.72L120,62.13V96.46a72,72,0,1,0,16,0ZM128,224a56,56,0,1,1,56-56A56.06,56.06,0,0,1,128,224Z" }));
});
E.displayName = "Duotone";
export {
  E as Duotone
};
