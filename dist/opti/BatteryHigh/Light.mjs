var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      V.call(t, e) && i(a, e, t[e]);
  return a;
};
var v = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && V.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const d = s((m, e) => {
  var o = m, { children: a } = o, t = v(o, ["children"]);
  return /* @__PURE__ */ c.createElement(H, Z({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M200,58H32A22,22,0,0,0,10,80v96a22,22,0,0,0,22,22H200a22,22,0,0,0,22-22V80A22,22,0,0,0,200,58Zm10,118a10,10,0,0,1-10,10H32a10,10,0,0,1-10-10V80A10,10,0,0,1,32,70H200a10,10,0,0,1,10,10ZM142,96v64a6,6,0,0,1-12,0V96a6,6,0,0,1,12,0Zm-40,0v64a6,6,0,0,1-12,0V96a6,6,0,0,1,12,0ZM62,96v64a6,6,0,0,1-12,0V96a6,6,0,0,1,12,0Zm192,0v64a6,6,0,0,1-12,0V96a6,6,0,0,1,12,0Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
