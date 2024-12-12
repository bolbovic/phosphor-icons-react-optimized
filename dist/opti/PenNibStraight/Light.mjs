var V = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import A, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var l = m, { children: a } = l, t = h(l, ["children"]);
  return /* @__PURE__ */ A.createElement(f, L({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M220.54,124.77a1.91,1.91,0,0,0-.15-.28L190,70.42V32a14,14,0,0,0-14-14H80A14,14,0,0,0,66,32V70.44l-30.4,54.05a1.91,1.91,0,0,0-.15.28,14,14,0,0,0,1.27,14.5.76.76,0,0,1,.08.11l86.44,112.28a6,6,0,0,0,9.51,0l86.43-112.28a.76.76,0,0,1,.08-.11A14,14,0,0,0,220.54,124.77ZM80,30h96a2,2,0,0,1,2,2V66H78V32A2,2,0,0,1,80,30Zm48,116a14,14,0,1,1,14-14A14,14,0,0,1,128,146Zm81.63-13.88L134,230.38V157.29a26,26,0,1,0-12,0v73.07L46.37,132.12a2,2,0,0,1-.2-1.93L75.52,78h105l29.34,52.19A2,2,0,0,1,209.63,132.12Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
