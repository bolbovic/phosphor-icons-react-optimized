var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      H.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && H.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as A } from "react";
import L from "../../lib/OptiBase.mjs";
const Z = A((m, e) => {
  var o = m, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(L, l({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M200,58H32A22,22,0,0,0,10,80v96a22,22,0,0,0,22,22H200a22,22,0,0,0,22-22V80A22,22,0,0,0,200,58Zm10,118a10,10,0,0,1-10,10H32a10,10,0,0,1-10-10V80A10,10,0,0,1,32,70H200a10,10,0,0,1,10,10Zm44-80v64a6,6,0,0,1-12,0V96a6,6,0,0,1,12,0ZM137.1,124.85a6,6,0,0,1,.27,5.83l-16,32a6,6,0,1,1-10.74-5.36L122.29,134H100a6,6,0,0,1-5.37-8.68l16-32a6,6,0,0,1,10.74,5.36L109.71,122H132A6,6,0,0,1,137.1,124.85Z" }));
});
Z.displayName = "Light";
export {
  Z as Light
};
