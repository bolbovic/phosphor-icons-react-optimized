var Z = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (c)
    for (var e of c(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && c)
    for (var r of c(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import H, { forwardRef as f } from "react";
import M from "../../lib/OptiBase.mjs";
const d = f((r, e) => {
  var m = r, { children: a } = m, t = s(m, ["children"]);
  return /* @__PURE__ */ H.createElement(M, h({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M144,74a6,6,0,0,0-6,6v96a6,6,0,0,0,6,6h24a54,54,0,0,0,0-108Zm66,54a42,42,0,0,1-42,42H150V86h18A42,42,0,0,1,210,128ZM26,48a6,6,0,0,1,6-6H224a6,6,0,0,1,0,12H32A6,6,0,0,1,26,48ZM230,208a6,6,0,0,1-6,6H32a6,6,0,0,1,0-12H224A6,6,0,0,1,230,208ZM106,152c0-11.21-10.7-15.1-28.33-20.18-15.89-4.58-33.89-9.77-33.89-27.82,0-17.1,15.57-30,36.22-30,15,0,27.74,6.88,33.34,18a6,6,0,0,1-10.71,5.42C99.08,90.36,90.41,86,80,86c-13.81,0-24.22,7.74-24.22,18,0,8.41,9.52,11.76,25.21,16.29C97.48,125,118,131,118,152c0,16.54-17,30-38,30s-38-13.46-38-30a6,6,0,0,1,12,0c0,9.76,11.91,18,26,18S106,161.76,106,152Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
