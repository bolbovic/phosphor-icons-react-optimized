var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && l(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && l(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const d = s((m, e) => {
  var c = m, { children: a } = c, t = Z(c, ["children"]);
  return /* @__PURE__ */ f.createElement(A, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M128,18a86.1,86.1,0,0,0-86,86c0,23,9.24,48.52,24.71,68.27,12.37,15.79,27.23,26.42,43.05,31.07l-11.27,26.3A6,6,0,0,0,104,238h48a6,6,0,0,0,5.51-8.36l-11.27-26.3c15.82-4.65,30.68-15.28,43-31.07C204.76,152.52,214,127,214,104A86.1,86.1,0,0,0,128,18ZM112.17,204l.58.14a2.05,2.05,0,0,1-.58-.14Zm30.73,22H113.1l8.7-20.31a62.15,62.15,0,0,0,12.4,0ZM128,194c-33.52,0-74-40.15-74-90a74,74,0,0,1,148,0C202,153.85,161.52,194,128,194Zm49-92.08a6.74,6.74,0,0,1-1,.08,6,6,0,0,1-5.91-5A43.29,43.29,0,0,0,135,61.92a6,6,0,1,1,2-11.84A55.48,55.48,0,0,1,181.92,95,6,6,0,0,1,177,101.92Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
