var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const h = Z((r, e) => {
  var A = r, { children: a } = A, t = c(A, ["children"]);
  return /* @__PURE__ */ f.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M104.08,151.92A67.52,67.52,0,0,1,124,200a4,4,0,0,1-8,0,60,60,0,0,0-60-60,4,4,0,0,1,0-8A67.52,67.52,0,0,1,104.08,151.92ZM56,84a4,4,0,0,0,0,8A108,108,0,0,1,164,200a4,4,0,0,0,8,0A116,116,0,0,0,56,84Zm116,0A162.92,162.92,0,0,0,56,36a4,4,0,0,0,0,8A155,155,0,0,1,166.31,89.69,155,155,0,0,1,212,200a4,4,0,0,0,8,0A162.92,162.92,0,0,0,172,84ZM60,188a8,8,0,1,0,8,8A8,8,0,0,0,60,188Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
