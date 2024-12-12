var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var Z = (a, m, e) => m in a ? f(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, d = (a, m) => {
  for (var e in m || (m = {}))
    p.call(m, e) && Z(a, e, m[e]);
  if (o)
    for (var e of o(m))
      A.call(m, e) && Z(a, e, m[e]);
  return a;
};
var l = (a, m) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      m.indexOf(t) < 0 && A.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((t, e) => {
  var r = t, { children: a } = r, m = l(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: e }, m), a, /* @__PURE__ */ c.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm84,108a84.26,84.26,0,0,1-1.32,14.74,204.79,204.79,0,0,0-18.52-31.49,176.78,176.78,0,0,1,19.08,5.62A85,85,0,0,1,212,128Zm-9.61-38.94a204.25,204.25,0,0,0-30-5.47,204.25,204.25,0,0,0-5.47-30A84.53,84.53,0,0,1,202.39,89.06Zm-63.26-44.3a176.78,176.78,0,0,1,5.62,19.08,204.79,204.79,0,0,0-31.49-18.52,82.49,82.49,0,0,1,25.87-.56ZM81.07,58.36a179.84,179.84,0,0,1,49.8,25.06,204.19,204.19,0,0,0-85.23,28.05A84.23,84.23,0,0,1,81.07,58.36ZM45,140.65a180.19,180.19,0,0,1,104.62-34.22,180.19,180.19,0,0,1-34.22,104.62A84.22,84.22,0,0,1,45,140.65Zm99.58,69.71a204.19,204.19,0,0,0,28.05-85.23,179.84,179.84,0,0,1,25.06,49.8A84.23,84.23,0,0,1,144.53,210.36Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
