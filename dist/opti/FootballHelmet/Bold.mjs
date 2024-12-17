var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var H = (a, l, e) => l in a ? f(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, c = (a, l) => {
  for (var e in l || (l = {}))
    m.call(l, e) && H(a, e, l[e]);
  if (o)
    for (var e of o(l))
      p.call(l, e) && H(a, e, l[e]);
  return a;
};
var d = (a, l) => {
  var e = {};
  for (var t in a)
    m.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import A, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const M = i((t, e) => {
  var r = t, { children: a } = r, l = d(r, ["children"]);
  return /* @__PURE__ */ A.createElement(s, c({ ref: e }, l), a, /* @__PURE__ */ A.createElement("path", { d: "M216,156H168.79l-4.73-16H216a12,12,0,0,0,12-12v-4A104,104,0,0,0,122.52,20C66,20.8,20,67.43,20,124a104,104,0,0,0,45.37,85.94A12,12,0,0,0,72.14,212H116a20,20,0,0,0,19.52-24.34q-.09-.41-.21-.81l-2-6.85h17.58l10,33.67A20.11,20.11,0,0,0,180,228h36a20,20,0,0,0,20-20V176A20,20,0,0,0,216,156ZM100.4,123.48a19.94,19.94,0,0,0-3.92,16.86q.09.41.21.81L110.61,188H76a80,80,0,0,1-32-64c0-43.48,35.39-79.36,78.86-80H124a80,80,0,0,1,79.61,72H116A19.94,19.94,0,0,0,100.4,123.48ZM126.14,156l-4.75-16H139l4.73,16ZM212,204H183l-7.09-24H212Z" }));
});
M.displayName = "Bold";
export {
  M as Bold
};
