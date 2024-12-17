var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      n.call(t, e) && i(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && n.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((m, e) => {
  var o = m, { children: a } = o, t = Z(o, ["children"]);
  return /* @__PURE__ */ c.createElement(d, A({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M93.54,102.13a55.39,55.39,0,0,1,0,51.74A4,4,0,0,1,90,156a4.07,4.07,0,0,1-1.87-.46,4,4,0,0,1-1.67-5.41,46.73,46.73,0,0,0,0-44.26,4,4,0,1,1,7.08-3.74Zm50.58-33.66a4,4,0,0,0-1.65,5.41,114.67,114.67,0,0,1,0,108.24,4,4,0,1,0,7.06,3.76,122.65,122.65,0,0,0,0-115.76A4,4,0,0,0,144.12,68.47Zm-28,16a4,4,0,0,0-1.65,5.41,81,81,0,0,1,0,76.24,4,4,0,1,0,7.06,3.76,89,89,0,0,0,0-83.76A4,4,0,0,0,116.12,84.47ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
