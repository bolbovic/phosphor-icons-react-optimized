var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = s((m, e) => {
  var h = m, { children: a } = h, t = H(h, ["children"]);
  return /* @__PURE__ */ c.createElement(Z, l({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M228.24,115.76l-96-96a6,6,0,0,0-8.48,0l-96,96A6,6,0,0,0,32,126H74v26a6,6,0,0,0,6,6h96a6,6,0,0,0,6-6V126h42a6,6,0,0,0,4.24-10.24ZM176,114a6,6,0,0,0-6,6v26H86V120a6,6,0,0,0-6-6H46.49L128,32.49,209.51,114Zm6,102a6,6,0,0,1-6,6H80a6,6,0,0,1,0-12h96A6,6,0,0,1,182,216Zm0-32a6,6,0,0,1-6,6H80a6,6,0,0,1,0-12h96A6,6,0,0,1,182,184Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
