var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var m = (a, l, e) => l in a ? f(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, d = (a, l) => {
  for (var e in l || (l = {}))
    p.call(l, e) && m(a, e, l[e]);
  if (o)
    for (var e of o(l))
      A.call(l, e) && m(a, e, l[e]);
  return a;
};
var Z = (a, l) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      l.indexOf(t) < 0 && A.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const M = i((t, e) => {
  var r = t, { children: a } = r, l = Z(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: e }, l), a, /* @__PURE__ */ c.createElement("path", { d: "M240,200a12,12,0,0,1-12,12H188a12,12,0,0,1,0-24h40A12,12,0,0,1,240,200ZM218,117.63,128,170.11,38.05,117.63A12,12,0,0,0,26,138.37l96,56a12,12,0,0,0,12.1,0l96-56A12,12,0,1,0,218,117.63ZM20,80a12,12,0,0,1,6-10.37l96-56a12.06,12.06,0,0,1,12.1,0l96,56a12,12,0,0,1,0,20.74l-96,56a12,12,0,0,1-12.1,0l-96-56A12,12,0,0,1,20,80Zm35.82,0L128,122.11,200.18,80,128,37.89ZM138,212.3,128,218.11,38.05,165.63A12,12,0,0,0,26,186.37l96,56a12,12,0,0,0,12.1,0l16-9.34A12,12,0,1,0,138,212.3Z" }));
});
M.displayName = "Bold";
export {
  M as Bold
};
