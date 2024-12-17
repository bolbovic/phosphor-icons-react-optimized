var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && A(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && A(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const M = s((r, e) => {
  var o = r, { children: a } = o, t = Z(o, ["children"]);
  return /* @__PURE__ */ c.createElement(L, l({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M214,96A86,86,0,1,0,74,162.87V240a6,6,0,0,0,2.85,5.1A5.93,5.93,0,0,0,80,246a6,6,0,0,0,2.68-.63L128,222.71l45.33,22.66A6,6,0,0,0,182,240V162.87A85.87,85.87,0,0,0,214,96ZM54,96a74,74,0,1,1,74,74A74.09,74.09,0,0,1,54,96ZM170,230.29l-39.33-19.66a6,6,0,0,0-5.36,0L86,230.29V171a85.75,85.75,0,0,0,84,0ZM128,150A54,54,0,1,0,74,96,54.06,54.06,0,0,0,128,150Zm0-96A42,42,0,1,1,86,96,42,42,0,0,1,128,54Z" }));
});
M.displayName = "Light";
export {
  M as Light
};
