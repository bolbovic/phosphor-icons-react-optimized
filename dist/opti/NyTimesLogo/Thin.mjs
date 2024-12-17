var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && A(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && A(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    c.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const d = l((m, e) => {
  var o = m, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M172,140a8,8,0,1,1-8,8A8,8,0,0,1,172,140Zm14.31-40.38L119.57,68.48A76,76,0,0,0,52,144c0,1.32,0,2.64.1,3.95l74-39.48A4,4,0,0,1,132,112V219.88a75.64,75.64,0,0,0,68.52-53.08,4,4,0,1,1,7.63,2.4A84,84,0,1,1,57.57,98.25,32,32,0,0,1,68,36a4,4,0,0,1,1.69.38L188.85,92A24,24,0,0,0,188,44a4,4,0,0,1,0-8,32,32,0,0,1,0,64A4,4,0,0,1,186.31,99.62Zm-62.31,19-24,12.8v83.16a75.45,75.45,0,0,0,24,5.26ZM53.05,156.51a76.15,76.15,0,0,0,39,54.4V135.73Zm54-93.86L67.15,44a24,24,0,0,0-4.6,47.36c1.1-1.37,2.22-2.71,3.41-4A83.89,83.89,0,0,1,107.08,62.65Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
