var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      V.call(t, e) && o(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var m in a)
    A.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && V.call(a, m) && (e[m] = a[m]);
  return e;
};
import p, { forwardRef as n } from "react";
import c from "../../lib/OptiBase.mjs";
const f = n((m, e) => {
  var h = m, { children: a } = h, t = i(h, ["children"]);
  return /* @__PURE__ */ p.createElement(c, Z({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M100,120a8,8,0,1,1,8-8A8,8,0,0,1,100,120Zm56-16a8,8,0,1,0,8,8A8,8,0,0,0,156,104Zm-2.13,44.62a49,49,0,0,1-51.74,0,4,4,0,0,0-4.26,6.77,57,57,0,0,0,60.26,0,4,4,0,0,0-4.26-6.76ZM212,80v96a28,28,0,0,1-24,27.71V224a12,12,0,0,1-12,12H80a12,12,0,0,1-12-12V203.71A28,28,0,0,1,44,176V80A28,28,0,0,1,72,52H92V32a12,12,0,0,1,12-12h48a12,12,0,0,1,12,12V52h20A28,28,0,0,1,212,80ZM100,52h56V32a4,4,0,0,0-4-4H104a4,4,0,0,0-4,4Zm80,172V204H76v20a4,4,0,0,0,4,4h96A4,4,0,0,0,180,224ZM204,80a20,20,0,0,0-20-20H72A20,20,0,0,0,52,80v96a20,20,0,0,0,20,20H184a20,20,0,0,0,20-20Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
