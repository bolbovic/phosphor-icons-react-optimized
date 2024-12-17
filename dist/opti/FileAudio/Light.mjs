var L = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? L(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      h.call(t, e) && o(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    H.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && h.call(a, m) && (e[m] = a[m]);
  return e;
};
import V, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((m, e) => {
  var A = m, { children: a } = A, t = p(A, ["children"]);
  return /* @__PURE__ */ V.createElement(c, i({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M98.3,130.46a6,6,0,0,0-6.54,1.3L69.51,154H48a6,6,0,0,0-6,6v40a6,6,0,0,0,6,6H69.51l22.25,22.24A6,6,0,0,0,102,224V136A6,6,0,0,0,98.3,130.46Zm-8.3,79L76.24,195.76A6,6,0,0,0,72,194H54V166H72a6,6,0,0,0,4.24-1.76L90,150.49ZM150,180a38.53,38.53,0,0,1-19,33.18A6,6,0,0,1,125,202.82a26.5,26.5,0,0,0,0-45.64A6,6,0,0,1,131,146.82,38.53,38.53,0,0,1,150,180Zm62.24-96.24-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40v80a6,6,0,0,0,12,0V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50V216a2,2,0,0,1-2,2H168a6,6,0,0,0,0,12h32a14,14,0,0,0,14-14V88A6,6,0,0,0,212.24,83.76ZM158,46.48,193.52,82H158Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
