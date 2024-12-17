var f = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import v from "../../lib/OptiBase.mjs";
const A = s((r, e) => {
  var m = r, { children: a } = m, t = V(m, ["children"]);
  return /* @__PURE__ */ c.createElement(v, H({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M247.87,30.59a8,8,0,0,0-9.28-6.46l-224,40A8,8,0,0,0,16,80a8.6,8.6,0,0,0,1.42-.12L120,61.56V96H64a32,32,0,0,0-32,32v64a32,32,0,0,0,32,32H192a32,32,0,0,0,32-32V128a32,32,0,0,0-32-32H136V58.7L241.4,39.88A8,8,0,0,0,247.87,30.59ZM104,160V112h48v48ZM64,112H88v48H48V128A16,16,0,0,1,64,112Zm144,16v32H168V112h24A16,16,0,0,1,208,128Z" }));
});
A.displayName = "Fill";
export {
  A as Fill
};
