var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var L = (a, l, e) => l in a ? f(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, p = (a, l) => {
  for (var e in l || (l = {}))
    o.call(l, e) && L(a, e, l[e]);
  if (m)
    for (var e of m(l))
      i.call(l, e) && L(a, e, l[e]);
  return a;
};
var Z = (a, l) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      l.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const n = s((t, e) => {
  var r = t, { children: a } = r, l = Z(r, ["children"]);
  return /* @__PURE__ */ c.createElement(d, p({ ref: e }, l), a, /* @__PURE__ */ c.createElement("path", { d: "M188,120,128,80l55.56-37a8,8,0,0,1,8.88,0L238,73.34a8,8,0,0,1,0,13.32ZM72.44,43a8,8,0,0,0-8.88,0L18,73.34a8,8,0,0,0,0,13.32L68,120l60-40ZM238,153.34,188,120l-60,40,55.56,37a8,8,0,0,0,8.88,0L238,166.66A8,8,0,0,0,238,153.34Zm-220,0a8,8,0,0,0,0,13.32L63.56,197a8,8,0,0,0,8.88,0L128,160,68,120Zm150.61,52.95-38.37-25.58a4,4,0,0,0-4.44,0L87.41,206.29a4,4,0,0,0,0,6.65L123.56,237a8,8,0,0,0,8.88,0l36.15-24.1A4,4,0,0,0,168.59,206.29Z" }));
});
n.displayName = "Fill";
export {
  n as Fill
};
