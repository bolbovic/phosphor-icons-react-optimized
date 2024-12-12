var V = Object.defineProperty;
var L = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (L)
    for (var e of L(t))
      i.call(t, e) && m(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var l in a)
    o.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && L)
    for (var l of L(a))
      t.indexOf(l) < 0 && i.call(a, l) && (e[l] = a[l]);
  return e;
};
import H, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((l, e) => {
  var r = l, { children: a } = r, t = A(r, ["children"]);
  return /* @__PURE__ */ H.createElement(c, p({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14h64a6,6,0,0,0,5.69-4.1l15.12-45.36,37.42-15a6,6,0,0,0,3.34-3.34l15-37.42L225.9,93.69A6,6,0,0,0,230,88V56A14,14,0,0,0,216,42ZM117.77,154.43a6,6,0,0,0-3.46,3.67L99.68,202H40a2,2,0,0,1-2-2V171.17l52.58-52.58a2,2,0,0,1,2.83,0L126,151.15ZM218,83.68,174.1,98.31a6,6,0,0,0-3.67,3.46l-15.05,37.61L138.1,146.3l-36.2-36.2a14,14,0,0,0-19.8,0L38,154.2V56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2Zm9.51,33.18a6,6,0,0,0-5.41-.82L198.3,124a6,6,0,0,0-3.67,3.47L180,164l-36.56,14.63A6,6,0,0,0,140,182.3L132,206.1a6,6,0,0,0,5.69,7.9H216a14,14,0,0,0,14-14V121.73A6,6,0,0,0,227.51,116.86ZM218,200a2,2,0,0,1-2,2H146.06l4.42-13.26,36.37-14.55a6,6,0,0,0,3.34-3.34l14.55-36.37L218,130.06Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
