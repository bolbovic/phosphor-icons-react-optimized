var Z = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && c(a, e, t[e]);
  if (o)
    for (var e of o(t))
      s.call(t, e) && c(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && s.call(a, m) && (e[m] = a[m]);
  return e;
};
import A, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const C = f((m, e) => {
  var r = m, { children: a } = r, t = l(r, ["children"]);
  return /* @__PURE__ */ A.createElement(i, d({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M128,12A100.11,100.11,0,0,0,28,112c0,24.86,12.86,56.8,34.41,85.44C70.63,208.36,99.64,244,128,244s57.37-35.64,65.59-46.56C215.14,168.8,228,136.86,228,112A100.11,100.11,0,0,0,128,12Zm46.41,171c-13.83,18.38-34.21,37-46.41,37s-32.58-18.61-46.41-37C63.34,158.75,52,131.54,52,112a76,76,0,0,1,152,0C204,131.54,192.66,158.75,174.41,183ZM104,148a36,36,0,0,1-36-36,12,12,0,0,1,12-12,36,36,0,0,1,36,36A12,12,0,0,1,104,148Zm84-36a36,36,0,0,1-36,36,12,12,0,0,1-12-12,36,36,0,0,1,36-36A12,12,0,0,1,188,112Zm-36,72a12,12,0,0,1-12,12H116a12,12,0,0,1,0-24h24A12,12,0,0,1,152,184Z" }));
});
C.displayName = "Bold";
export {
  C as Bold
};
