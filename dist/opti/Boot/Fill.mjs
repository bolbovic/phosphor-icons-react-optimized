var f = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var m = (a, l, e) => l in a ? f(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, i = (a, l) => {
  for (var e in l || (l = {}))
    o.call(l, e) && m(a, e, l[e]);
  if (H)
    for (var e of H(l))
      h.call(l, e) && m(a, e, l[e]);
  return a;
};
var p = (a, l) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && H)
    for (var t of H(a))
      l.indexOf(t) < 0 && h.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const L = s((t, e) => {
  var r = t, { children: a } = r, l = p(r, ["children"]);
  return /* @__PURE__ */ c.createElement(A, i({ ref: e }, l), a, /* @__PURE__ */ c.createElement("path", { d: "M192,112H112.27a8.17,8.17,0,0,1-8.25-7.47A8,8,0,0,1,112,96h44a4,4,0,0,0,4-4V84a4,4,0,0,0-4-4H112.27A8.17,8.17,0,0,1,104,72.53,8,8,0,0,1,112,64h44a4,4,0,0,0,4-4V56a16,16,0,0,0-16-16H32.22a8.23,8.23,0,0,0-5.08,1.64,8,8,0,0,0-2.61,9.22c11.06,28.84,8.76,83.71-.22,114.93A8,8,0,0,0,24,168v32a16,16,0,0,0,16,16H66.11a16,16,0,0,0,7.16-1.69L85.89,208h16.22l12.62,6.31a16,16,0,0,0,7.16,1.69h28.22a16,16,0,0,0,7.16-1.69L169.89,208h16.22l12.62,6.31a16,16,0,0,0,7.16,1.69H232a16,16,0,0,0,16-16V168A56,56,0,0,0,192,112Zm40,88H205.89l-12.62-6.31a16,16,0,0,0-7.16-1.69H169.89a16,16,0,0,0-7.16,1.69L150.11,200H121.89l-12.62-6.31a16,16,0,0,0-7.16-1.69H85.89a16,16,0,0,0-7.16,1.69L66.11,200H40V176H232Z" }));
});
L.displayName = "Fill";
export {
  L as Fill
};
