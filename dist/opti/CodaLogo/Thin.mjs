var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && c(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import V, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((r, e) => {
  var o = r, { children: a } = o, t = H(o, ["children"]);
  return /* @__PURE__ */ V.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M176,84a43.82,43.82,0,0,1,23.69,6.73A8,8,0,0,0,212,84V48a12,12,0,0,0-12-12H56A12,12,0,0,0,44,48V208a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V172a8,8,0,0,0-12.28-6.75c-8,5.14-14.82,7.09-23.56,6.74H176a44,44,0,0,1,0-88Zm-52,44a52.05,52.05,0,0,0,51.92,52c10.35.4,18.76-2,28.08-8v36a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H200a4,4,0,0,1,4,4V84a52.24,52.24,0,0,0-80,44Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
