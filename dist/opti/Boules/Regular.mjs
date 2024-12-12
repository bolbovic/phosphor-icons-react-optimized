var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (m)
    for (var e of m(t))
      f.call(t, e) && l(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && f.call(a, r) && (e[r] = a[r]);
  return e;
};
import L, { forwardRef as c } from "react";
import d from "../../lib/OptiBase.mjs";
const i = c((r, e) => {
  var o = r, { children: a } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ L.createElement(d, s({ ref: e }, t), a, /* @__PURE__ */ L.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56.28,36.41L60.4,184.28A88.33,88.33,0,0,1,50.21,169.1L169.1,50.21A87.8,87.8,0,0,1,184.28,60.41Zm11.31,11.31a87.8,87.8,0,0,1,10.2,15.18L86.9,205.79a87.8,87.8,0,0,1-15.18-10.2ZM128,40a87.81,87.81,0,0,1,25.05,3.64L43.64,153.05A88,88,0,0,1,128,40Zm0,176a87.81,87.81,0,0,1-25-3.64L212.36,103A88,88,0,0,1,128,216Z" }));
});
i.displayName = "Regular";
export {
  i as Regular,
  i as default
};
