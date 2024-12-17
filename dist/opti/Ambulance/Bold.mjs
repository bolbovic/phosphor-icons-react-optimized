var p = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var v = (a, m, e) => m in a ? p(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, l = (a, m) => {
  for (var e in m || (m = {}))
    H.call(m, e) && v(a, e, m[e]);
  if (o)
    for (var e of o(m))
      h.call(m, e) && v(a, e, m[e]);
  return a;
};
var A = (a, m) => {
  var e = {};
  for (var t in a)
    H.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      m.indexOf(t) < 0 && h.call(a, t) && (e[t] = a[t]);
  return e;
};
import Z, { forwardRef as d } from "react";
import c from "../../lib/OptiBase.mjs";
const f = d((t, e) => {
  var r = t, { children: a } = r, m = A(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(c, l({ ref: e }, m), a, /* @__PURE__ */ Z.createElement("path", { d: "M80,120a12,12,0,0,1,12-12h8v-8a12,12,0,0,1,24,0v8h8a12,12,0,0,1,0,24h-8v8a12,12,0,0,1-24,0v-8H92A12,12,0,0,1,80,120Zm176,0v64a20,20,0,0,1-20,20H225.94a36,36,0,0,1-67.88,0H113.94a36,36,0,0,1-67.88,0H32a20,20,0,0,1-20-20V72A20,20,0,0,1,32,52H184a12,12,0,0,1,12,12v4h26.58a19.9,19.9,0,0,1,18.57,12.57l14,35A12,12,0,0,1,256,120ZM196,92v16h30.28l-6.4-16ZM36,180H46.06a36,36,0,0,1,67.88,0h44.12A36.32,36.32,0,0,1,172,162.08V76H36Zm56,12a12,12,0,1,0-12,12A12,12,0,0,0,92,192Zm112,0a12,12,0,1,0-12,12A12,12,0,0,0,204,192Zm28-12V132H196v24.23A36.09,36.09,0,0,1,225.94,180Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
