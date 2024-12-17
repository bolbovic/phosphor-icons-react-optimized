var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      l.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(A, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M184,92a52.88,52.88,0,0,0-8.26.65,52,52,0,1,0-95.48,0A52.88,52.88,0,0,0,72,92a52,52,0,1,0,31.38,93.48L92.17,222.85A4,4,0,0,0,96,228h64a4,4,0,0,0,3.83-5.15l-11.21-37.37A52,52,0,1,0,184,92Zm0,96a43.92,43.92,0,0,1-36.73-19.77,4,4,0,0,0-7.17,3.36L154.62,220H101.38l14.52-48.41a4,4,0,0,0-7.17-3.36,44,44,0,1,1-21.91-65.67,4,4,0,0,0,4.66-6,44,44,0,1,1,73,0,4,4,0,0,0,4.66,6A44,44,0,1,1,184,188Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
