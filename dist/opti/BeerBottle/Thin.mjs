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
var L = (a, l) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = s((t, e) => {
  var m = t, { children: a } = m, l = L(m, ["children"]);
  return /* @__PURE__ */ c.createElement(Z, n({ ref: e }, l), a, /* @__PURE__ */ c.createElement("path", { d: "M242.83,45.17l-32-32a4,4,0,0,0-5.66,5.66l4.74,4.74L150.33,68.26l-39.11,7.82a4,4,0,0,0-2,1.09L25.86,160.49a20,20,0,0,0,0,28.28l41.37,41.37a20,20,0,0,0,28.28,0l83.32-83.31a4,4,0,0,0,1.09-2.05l7.82-39.11,44.69-59.58,4.74,4.74a4,4,0,1,0,5.66-5.66Zm-153,179.31a12,12,0,0,1-17,0L31.51,183.11a12,12,0,0,1,0-17L40,157.66,98.34,216ZM104,210.34,45.66,152,96,101.66,154.34,160ZM180.8,101.6a3.89,3.89,0,0,0-.72,1.62L172.32,142,160,154.34,101.66,96,114,83.68l38.81-7.76a3.89,3.89,0,0,0,1.62-.72l61.22-45.92,11.1,11.1Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
