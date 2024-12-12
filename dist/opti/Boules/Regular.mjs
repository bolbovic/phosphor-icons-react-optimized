var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var p = (a, r, e) => r in a ? f(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, L = (a, r) => {
  for (var e in r || (r = {}))
    l.call(r, e) && p(a, e, r[e]);
  if (m)
    for (var e of m(r))
      A.call(r, e) && p(a, e, r[e]);
  return a;
};
var Z = (a, r) => {
  var e = {};
  for (var t in a)
    l.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && A.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const R = i((t, e) => {
  var o = t, { children: a } = o, r = Z(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, L({ ref: e }, r), a, /* @__PURE__ */ c.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56.28,36.41L60.4,184.28A88.33,88.33,0,0,1,50.21,169.1L169.1,50.21A87.8,87.8,0,0,1,184.28,60.41Zm11.31,11.31a87.8,87.8,0,0,1,10.2,15.18L86.9,205.79a87.8,87.8,0,0,1-15.18-10.2ZM128,40a87.81,87.81,0,0,1,25.05,3.64L43.64,153.05A88,88,0,0,1,128,40Zm0,176a87.81,87.81,0,0,1-25-3.64L212.36,103A88,88,0,0,1,128,216Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
