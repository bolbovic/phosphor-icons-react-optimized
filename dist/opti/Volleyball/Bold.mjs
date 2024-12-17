var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && A(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && A(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    Z.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const M = i((m, e) => {
  var r = m, { children: a } = r, t = l(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20ZM96.83,50a83.49,83.49,0,0,1,17.92-5A84,84,0,0,1,161.26,116H134.93Zm38.1,90h76.2a83.37,83.37,0,0,1-4.69,18,84.07,84.07,0,0,1-84.68,4.79Zm76.2-24H185.29a107.43,107.43,0,0,0-14.4-49.71A108.71,108.71,0,0,0,159.5,50.15,84.21,84.21,0,0,1,211.13,116ZM76.07,62.05,89,84.39a107.44,107.44,0,0,0-35.85,37.32,108.9,108.9,0,0,0-8.28,18A83.65,83.65,0,0,1,76.07,62.05ZM62.79,180.87A84,84,0,0,1,101,105.2L114.14,128,76.07,194A84.68,84.68,0,0,1,62.79,180.87Zm34,25.11,12.92-22.37A107.41,107.41,0,0,0,160,196a109,109,0,0,0,19.59-1.78A83.72,83.72,0,0,1,96.83,206Z" }));
});
M.displayName = "Bold";
export {
  M as Bold
};
