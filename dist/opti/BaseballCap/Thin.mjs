var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as f } from "react";
import d from "../../lib/OptiBase.mjs";
const h = f((m, e) => {
  var A = m, { children: a } = A, t = n(A, ["children"]);
  return /* @__PURE__ */ Z.createElement(d, s({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M128,28A100.12,100.12,0,0,0,28,128v56a20,20,0,0,0,31.84,16.12C72.46,191,94.53,180,128,180s55.54,10.94,68.16,20.12a20,20,0,0,0,21,1.67A19.87,19.87,0,0,0,228,184V128A100.12,100.12,0,0,0,128,28Zm92,100v16.23a162.31,162.31,0,0,0-48.67-22.47,162.56,162.56,0,0,0-34.15-85.31A92.12,92.12,0,0,1,220,128Zm-56.9-8.26a166.58,166.58,0,0,0-70.2,0C97.64,76.93,120,47.31,128,38,136,47.32,158.36,76.93,163.1,119.75ZM118.82,36.46a162.56,162.56,0,0,0-34.15,85.31A162.31,162.31,0,0,0,36,144.24V128A92.12,92.12,0,0,1,118.82,36.46Zm94.66,158.21a11.88,11.88,0,0,1-12.61-1C187.29,183.78,163.62,172,128,172s-59.29,11.77-72.87,21.65a11.88,11.88,0,0,1-12.61,1A11.75,11.75,0,0,1,36,184V154a156,156,0,0,1,184,0v30A11.75,11.75,0,0,1,213.48,194.67Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
