var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && h(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && h(a, e, t[e]);
  return a;
};
var v = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import A, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const l = c((m, e) => {
  var H = m, { children: a } = H, t = v(H, ["children"]);
  return /* @__PURE__ */ A.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M184,34a5.92,5.92,0,0,0-1.72.25l-160,48h0A6,6,0,0,0,18,88v24a6,6,0,0,0,6,6h8a18.09,18.09,0,0,1,18,17.65,17.59,17.59,0,0,1-5.15,12.7A18.91,18.91,0,0,1,31.46,154H24a6,6,0,0,0-6,6v32a6,6,0,0,0,6,6H224a14,14,0,0,0,14-14V88A54.06,54.06,0,0,0,184,34Zm.85,12a42.07,42.07,0,0,1,40.72,36H64.88ZM194,104a26,26,0,1,1-50-10h48A25.87,25.87,0,0,1,194,104Zm-56,82H86v-2a26,26,0,0,1,52,0Zm88-2a2,2,0,0,1-2,2H150v-2a38,38,0,0,0-76,0v2H30V166h1.46a31,31,0,0,0,22-9.25A29.45,29.45,0,0,0,62,135.42,30.14,30.14,0,0,0,32,106H30V94H131.34a38,38,0,1,0,73.32,0H226Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
