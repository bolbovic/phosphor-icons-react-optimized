var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? f(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, n = (a, l) => {
  for (var e in l || (l = {}))
    i.call(l, e) && o(a, e, l[e]);
  if (r)
    for (var e of r(l))
      p.call(l, e) && o(a, e, l[e]);
  return a;
};
var V = (a, l) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as s } from "react";
import M from "../../lib/OptiBase.mjs";
const Z = s((t, e) => {
  var m = t, { children: a } = m, l = V(m, ["children"]);
  return /* @__PURE__ */ c.createElement(M, n({ ref: e }, l), a, /* @__PURE__ */ c.createElement("path", { d: "M226.46,52.85a4,4,0,0,0-3.43-.73L160.47,67.76,97.79,36.42a4,4,0,0,0-2.76-.3l-64,16A4,4,0,0,0,28,56V200a4,4,0,0,0,5,3.88l62.56-15.64,62.68,31.34a4,4,0,0,0,2.76.3l64-16a4,4,0,0,0,3-3.88V56A4,4,0,0,0,226.46,52.85ZM100,46.47l56,28V209.53l-56-28ZM36,59.12l56-14V180.88l-56,14ZM220,196.88l-56,14V75.12l56-14Z" }));
});
Z.displayName = "Thin";
export {
  Z as Thin
};
