var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const l = d((r, e) => {
  var A = r, { children: a } = A, t = f(A, ["children"]);
  return /* @__PURE__ */ s.createElement(h, c({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M105.5,150.5A69.54,69.54,0,0,1,126,200a6,6,0,0,1-12,0,58,58,0,0,0-58-58,6,6,0,0,1,0-12A69.54,69.54,0,0,1,105.5,150.5ZM56,82a6,6,0,0,0,0,12A106,106,0,0,1,162,200a6,6,0,0,0,12,0A118,118,0,0,0,56,82Zm117.38.62A164.92,164.92,0,0,0,56,34a6,6,0,0,0,0,12A153,153,0,0,1,164.89,91.11,153,153,0,0,1,210,200a6,6,0,0,0,12,0A164.92,164.92,0,0,0,173.38,82.62ZM60,186a10,10,0,1,0,10,10A10,10,0,0,0,60,186Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
