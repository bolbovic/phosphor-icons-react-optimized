var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var r = (a, l, e) => l in a ? s(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, c = (a, l) => {
  for (var e in l || (l = {}))
    p.call(l, e) && r(a, e, l[e]);
  if (m)
    for (var e of m(l))
      d.call(l, e) && r(a, e, l[e]);
  return a;
};
var f = (a, l) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      l.indexOf(t) < 0 && d.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as L } from "react";
import Z from "../../lib/OptiBase.mjs";
const n = L((t, e) => {
  var o = t, { children: a } = o, l = f(o, ["children"]);
  return /* @__PURE__ */ i.createElement(Z, c({ ref: e }, l), a, /* @__PURE__ */ i.createElement("path", { d: "M116,116a16,16,0,1,1-16-16A16,16,0,0,1,116,116Zm40-16a16,16,0,1,0,16,16A16,16,0,0,0,156,100Zm72,20v96a12,12,0,0,1-19.6,9.29L186.67,207.5l-21.74,17.79a12,12,0,0,1-15.2,0L128,207.5l-21.73,17.79a12,12,0,0,1-15.2,0L69.33,207.5,47.6,225.29A12,12,0,0,1,28,216V120a100,100,0,0,1,200,0Zm-24,0a76,76,0,0,0-152,0v70.68l9.73-8a12,12,0,0,1,15.2,0L98.67,200.5l21.73-17.79a12,12,0,0,1,15.2,0l21.73,17.79,21.74-17.79a12,12,0,0,1,15.2,0l9.73,8Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
