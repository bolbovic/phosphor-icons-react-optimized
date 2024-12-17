var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var o = r, { children: a } = o, t = L(o, ["children"]);
  return /* @__PURE__ */ c.createElement(H, h({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M228.74,188.32,180.27,126H208a6,6,0,0,0,4.76-9.66l-80-104a6,6,0,0,0-9.52,0l-80,104A6,6,0,0,0,48,126H75.73L27.26,188.32A6,6,0,0,0,32,198h90v42a6,6,0,0,0,12,0V198h90a6,6,0,0,0,4.74-9.68ZM44.27,186l48.47-62.32A6,6,0,0,0,88,114H60.19L128,25.84,195.81,114H168a6,6,0,0,0-4.74,9.68L211.73,186Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
