var s = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (c)
    for (var e of c(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && c)
    for (var r of c(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as d } from "react";
import l from "../../lib/OptiBase.mjs";
const n = d((r, e) => {
  var m = r, { children: a } = m, t = A(m, ["children"]);
  return /* @__PURE__ */ f.createElement(l, h({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M183.05,58H72A70,70,0,0,0,2.08,131.3C3.72,167,33,196.24,68.62,197.92c15.31.71,31-5.77,48-19.84a17.89,17.89,0,0,1,22.8,0C149.75,186.66,165.6,198,184,198a70,70,0,0,0,70-70.93C253.5,89,221.67,58,183.05,58Zm42.23,110.74A57.57,57.57,0,0,1,184,186c-14.53,0-28-9.77-36.93-17.13a29.9,29.9,0,0,0-38.09,0h0c-14.58,12.09-27.6,17.67-39.78,17.1a58.36,58.36,0,0,1-55.12-55.18A58,58,0,0,1,72,70H183.05c32.09,0,58.54,25.67,58.95,57.23A57.62,57.62,0,0,1,225.28,168.74ZM182,96a6,6,0,0,1-6,6H80a6,6,0,0,1,0-12h96A6,6,0,0,1,182,96Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
