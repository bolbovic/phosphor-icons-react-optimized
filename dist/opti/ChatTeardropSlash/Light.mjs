var l = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      A.call(t, e) && i(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && A.call(a, r) && (e[r] = a[r]);
  return e;
};
import h, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var o = r, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ h.createElement(L, c({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M52.44,36A6,6,0,0,0,43.56,44l14.37,15.8A97.42,97.42,0,0,0,34,124v84a14,14,0,0,0,14,14h84a98.24,98.24,0,0,0,56.82-18.18L203.56,220a6,6,0,0,0,8.88-8.08ZM132,210H48a2,2,0,0,1-2-2V124A85.46,85.46,0,0,1,66.08,68.8L180.7,194.88A84.91,84.91,0,0,1,132,210Zm98-86a97.86,97.86,0,0,1-14.06,50.61,6,6,0,0,1-5.15,2.9,6,6,0,0,1-5.12-9.1,86,86,0,0,0-110.88-122,6,6,0,1,1-5.2-10.81A97.09,97.09,0,0,1,132,26,98.11,98.11,0,0,1,230,124Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
