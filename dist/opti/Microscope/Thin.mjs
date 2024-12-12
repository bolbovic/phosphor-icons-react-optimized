var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && h(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && h(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var o = r, { children: a } = o, t = H(o, ["children"]);
  return /* @__PURE__ */ c.createElement(V, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M224,212H194.8A83.2,83.2,0,0,0,220,152a84.1,84.1,0,0,0-80-83.9V32a12,12,0,0,0-12-12H80A12,12,0,0,0,68,32V136a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V76.11A76,76,0,0,1,182.64,212H32a4,4,0,0,0,0,8H224a4,4,0,0,0,0-8Zm-92-76a4,4,0,0,1-4,4H80a4,4,0,0,1-4-4V32a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4ZM72,180a4,4,0,0,1,0-8h64a4,4,0,0,1,0,8Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
