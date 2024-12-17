var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      A.call(t, e) && c(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && A.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as s } from "react";
import n from "../../lib/OptiBase.mjs";
const v = s((o, e) => {
  var m = o, { children: a } = m, t = l(m, ["children"]);
  return /* @__PURE__ */ f.createElement(n, d({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M252,168v32a12,12,0,0,1-24,0v-3.09C215.56,208.41,180.25,236,128,236c-64.6,0-103.3-42.18-104.92-44A12,12,0,1,1,40.92,176c.3.33,33.48,36,87.08,36,42.65,0,72.34-22.58,82.87-32H208a12,12,0,0,1,0-24h32A12,12,0,0,1,252,168ZM156,86.08V84A32,32,0,0,0,97.17,66.55a12,12,0,0,1-20.11-13.1A56,56,0,0,1,180,84v92a12,12,0,0,1-23.85,1.81A56,56,0,1,1,156,86.08ZM156,132a32,32,0,1,0-32,32A32,32,0,0,0,156,132Z" }));
});
v.displayName = "Bold";
export {
  v as Bold
};
