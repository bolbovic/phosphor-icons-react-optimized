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
var n = (a, l) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      l.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const d = s((t, e) => {
  var r = t, { children: a } = r, l = n(r, ["children"]);
  return /* @__PURE__ */ c.createElement(V, p({ ref: e }, l), a, /* @__PURE__ */ c.createElement("path", { d: "M44,56V200a4,4,0,0,1-8,0V56a4,4,0,0,1,8,0Zm97.2,58.31L116,122.49V96a4,4,0,0,0-8,0v26.49l-25.2-8.18a4,4,0,0,0-2.47,7.61l25.2,8.18L90,151.54a4,4,0,1,0,6.47,4.7L112,134.81l15.57,21.43a4,4,0,0,0,3.24,1.65,4,4,0,0,0,3.23-6.35L118.47,130.1l25.2-8.18a4,4,0,0,0-2.47-7.61Zm101,2.57a4,4,0,0,0-5-2.57L212,122.49V96a4,4,0,0,0-8,0v26.49l-25.2-8.18a4,4,0,0,0-2.47,7.61l25.2,8.18L186,151.54a4,4,0,1,0,6.47,4.7L208,134.81l15.57,21.43a4,4,0,0,0,3.24,1.65,4,4,0,0,0,3.23-6.35L214.47,130.1l25.2-8.18A4,4,0,0,0,242.24,116.88Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
