var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && H(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && H(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const d = s((m, e) => {
  var o = m, { children: a } = o, t = Z(o, ["children"]);
  return /* @__PURE__ */ c.createElement(L, h({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M98,148a22,22,0,0,0-22-22,6,6,0,0,1-4.92-9.44L92.48,86H56a6,6,0,0,1,0-12h48a6,6,0,0,1,4.92,9.44L86.39,115.62a34,34,0,1,1-34.68,56.17,6,6,0,0,1,8.58-8.39A22,22,0,0,0,98,148Zm62-74a54,54,0,0,1,0,108H136a6,6,0,0,1-6-6V80a6,6,0,0,1,6-6Zm0,12H142v84h18a42,42,0,0,0,0-84ZM32,54H224a6,6,0,0,0,0-12H32a6,6,0,0,0,0,12ZM224,202H32a6,6,0,0,0,0,12H224a6,6,0,0,0,0-12Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
