var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && r(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && r(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var l in a)
    c.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const n = s((l, e) => {
  var o = l, { children: a } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ f.createElement(L, d({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M143.52,112.48a12,12,0,0,1,0-17L171,68H160a12,12,0,0,1,0-24h40a12,12,0,0,1,12,12V96a12,12,0,0,1-24,0V85l-27.51,27.51a12,12,0,0,1-17,0Zm84.33,71.1A60.27,60.27,0,0,1,168,236C86.39,236,20,169.61,20,88A60.27,60.27,0,0,1,72.42,28.15,20.05,20.05,0,0,1,93.2,40l21.11,47.13a1.42,1.42,0,0,0,.08.18,20,20,0,0,1-1.66,18.83,10.67,10.67,0,0,1-.85,1.15L92.82,130c7.06,12.84,20.5,26.16,33.49,33.21l22.31-19a13.08,13.08,0,0,1,1.12-.84,19.91,19.91,0,0,1,19-1.74l.18.08L216,162.8A20.06,20.06,0,0,1,227.85,183.58Zm-24.31-.06-42-18.81-22.43,19.07a11.63,11.63,0,0,1-1.11.85A20,20,0,0,1,118.31,186c-19.48-9.4-38.89-28.68-48.31-48a20,20,0,0,1,1.28-19.64,10.75,10.75,0,0,1,.86-1.15L91.3,94.5l-18.82-42A36.29,36.29,0,0,0,44,88,124.15,124.15,0,0,0,168,212,36.29,36.29,0,0,0,203.54,183.52Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
