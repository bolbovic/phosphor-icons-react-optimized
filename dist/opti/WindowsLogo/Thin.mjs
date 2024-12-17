var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && l(a, e, t[e]);
  if (r)
    for (var e of r(t))
      o.call(t, e) && l(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    Z.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && o.call(a, m) && (e[m] = a[m]);
  return e;
};
import A, { forwardRef as M } from "react";
import h from "../../lib/OptiBase.mjs";
const n = M((m, e) => {
  var V = m, { children: a } = V, t = p(V, ["children"]);
  return /* @__PURE__ */ A.createElement(h, i({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M208,140H128a4,4,0,0,0-4,4v57.45a4,4,0,0,0,3.28,3.94l80,14.55a4.37,4.37,0,0,0,.72.06,4,4,0,0,0,2.56-.93A4,4,0,0,0,212,216V144A4,4,0,0,0,208,140Zm-4,71.21-72-13.09V148h72ZM96,140H32a4,4,0,0,0-4,4v40a4,4,0,0,0,3.28,3.94l64,11.63a3.51,3.51,0,0,0,.72.07,4,4,0,0,0,4-4V144A4,4,0,0,0,96,140Zm-4,50.84L36,180.66V148H92ZM210.56,36.93a4,4,0,0,0-3.28-.87l-80,14.55A4,4,0,0,0,124,54.55V112a4,4,0,0,0,4,4h80a4,4,0,0,0,4-4V40A4,4,0,0,0,210.56,36.93ZM204,108H132V57.88l72-13.09ZM95.28,56.43l-64,11.63A4,4,0,0,0,28,72v40a4,4,0,0,0,4,4H96a4,4,0,0,0,4-4V60.36a4,4,0,0,0-4.72-3.93ZM92,108H36V75.34L92,65.16Z" }));
});
n.displayName = "Thin";
export {
  n as Thin
};
