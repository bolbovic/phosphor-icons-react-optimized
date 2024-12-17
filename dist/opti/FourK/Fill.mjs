var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import c, { forwardRef as A } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = A((l, e) => {
  var m = l, { children: a } = m, t = s(m, ["children"]);
  return /* @__PURE__ */ c.createElement(Z, V({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M79.55,136,96,113v23ZM232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM124,144a8,8,0,0,0-8-8h-4V88a8,8,0,0,0-14.51-4.65l-40,56A8,8,0,0,0,64,152H96v16a8,8,0,0,0,16,0V152h4A8,8,0,0,0,124,144Zm49.59-22.23,24.48-28.56a8,8,0,0,0-12.14-10.42L157.8,115.6s0,0,0,0L152,122.37V88a8,8,0,0,0-16,0v80a8,8,0,0,0,16,0V147l10.62-12.39,22.52,37.55a8,8,0,1,0,13.72-8.24Z" }));
});
d.displayName = "Fill";
export {
  d as Fill
};
