var l = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      n.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && n.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = s((m, e) => {
  var o = m, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, A({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M128,108A40,40,0,1,0,88,68,40,40,0,0,0,128,108Zm0-72A32,32,0,1,1,96,68,32,32,0,0,1,128,36Zm76,188a4,4,0,0,1-4,4H56a4,4,0,0,1-2.65-7l103-90.84a68,68,0,0,0-95.44,51,4,4,0,0,1-3.94,3.37,4.48,4.48,0,0,1-.64-.05A4,4,0,0,1,53,179.89,76,76,0,0,1,162.8,124.43L189.35,101a4,4,0,1,1,5.3,6L66.58,220H200A4,4,0,0,1,204,224Zm-13.56-75.33A75.52,75.52,0,0,1,204,192a4,4,0,0,1-8,0,67.55,67.55,0,0,0-12.13-38.77,4,4,0,1,1,6.57-4.56Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
