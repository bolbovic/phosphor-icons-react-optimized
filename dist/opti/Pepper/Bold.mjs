var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    m.call(t, e) && c(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var l in a)
    m.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as s } from "react";
import n from "../../lib/OptiBase.mjs";
const B = s((l, e) => {
  var r = l, { children: a } = r, t = A(r, ["children"]);
  return /* @__PURE__ */ f.createElement(n, d({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M170.56,36.82A44.08,44.08,0,0,0,128,4a12,12,0,0,0,0,24,20,20,0,0,1,17.09,9.66A68.11,68.11,0,0,0,92,104c0,21.74-5.83,40.14-17.32,54.69-12.22,15.47-31.18,27.08-56.34,34.49a20,20,0,0,0,2.2,38.91A268.22,268.22,0,0,0,66.64,236c41.61,0,88-9.38,120.21-36.38C214.16,176.72,228,144.55,228,104h0A68.11,68.11,0,0,0,170.56,36.82ZM160,60a44,44,0,0,1,40.32,26.41L192,90.58,165.37,77.26a12,12,0,0,0-10.74,0L128,90.58l-8.32-4.17A44,44,0,0,1,160,60Zm11.43,121.23c-17.4,14.59-42.33,24.47-72.1,28.58a251.28,251.28,0,0,1-58.21.89c46.68-18.51,72.28-52.54,74.68-99.39l6.83,3.42a12.07,12.07,0,0,0,10.74,0L160,101.41l26.63,13.32a12.07,12.07,0,0,0,10.74,0l6.43-3.22C202.24,141.07,191.38,164.5,171.43,181.23Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
