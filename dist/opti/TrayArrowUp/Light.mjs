var A = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (H)
    for (var e of H(t))
      V.call(t, e) && m(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && H)
    for (var r of H(a))
      t.indexOf(r) < 0 && V.call(a, r) && (e[r] = a[r]);
  return e;
};
import L, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const h = c((r, e) => {
  var l = r, { children: a } = l, t = p(l, ["children"]);
  return /* @__PURE__ */ L.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ L.createElement("path", { d: "M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM48,46H208a2,2,0,0,1,2,2V154H179.31a13.9,13.9,0,0,0-9.89,4.1L150.1,177.41a2,2,0,0,1-1.41.59H107.31a2,2,0,0,1-1.41-.59L86.59,158.1a13.94,13.94,0,0,0-9.9-4.1H46V48A2,2,0,0,1,48,46ZM208,210H48a2,2,0,0,1-2-2V166H76.69a2,2,0,0,1,1.41.59L97.41,185.9a13.94,13.94,0,0,0,9.9,4.1h41.38a13.9,13.9,0,0,0,9.89-4.1l19.32-19.31a2,2,0,0,1,1.41-.59H210v42A2,2,0,0,1,208,210ZM91.76,108.24a6,6,0,0,1,0-8.48l32-32a6,6,0,0,1,8.48,0l32,32a6,6,0,1,1-8.48,8.48L134,86.49V152a6,6,0,0,1-12,0V86.49l-21.76,21.75A6,6,0,0,1,91.76,108.24Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
