var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      A.call(t, e) && i(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as L } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = L((m, e) => {
  var o = m, { children: a } = o, t = l(o, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, c({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M128,98a30,30,0,1,0,30,30A30,30,0,0,0,128,98Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,128,146Zm27.91-99.37L165.8,9.54a6,6,0,0,0-7.06-7.41,193.94,193.94,0,0,0-58,24.82C62.32,51.66,42,86.6,42,128a86.1,86.1,0,0,0,58.09,81.37L90.2,246.45a6,6,0,0,0,7.06,7.42,193.94,193.94,0,0,0,58-24.82C193.68,204.34,214,169.4,214,128A86.09,86.09,0,0,0,155.91,46.63Zm-6.86,172.13a187.63,187.63,0,0,1-44.55,20.67l8.68-32.57a6,6,0,0,0-4.26-7.34A74.06,74.06,0,0,1,54,128c0-37.53,17.82-68.07,53-90.77A187.93,187.93,0,0,1,151.5,16.57l-8.68,32.57a6,6,0,0,0,4.26,7.34A74.06,74.06,0,0,1,202,128C202,165.53,184.18,196.07,149.05,218.76Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
