var f = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, p = (e, t) => {
  for (var a in t || (t = {}))
    A.call(t, a) && o(e, a, t[a]);
  if (l)
    for (var a of l(t))
      i.call(t, a) && o(e, a, t[a]);
  return e;
};
var H = (e, t) => {
  var a = {};
  for (var r in e)
    A.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && l)
    for (var r of l(e))
      t.indexOf(r) < 0 && i.call(e, r) && (a[r] = e[r]);
  return a;
};
import c, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const d = s((r, a) => {
  var m = r, { children: e } = m, t = H(m, ["children"]);
  return /* @__PURE__ */ c.createElement(V, p({ ref: a }, t), e, /* @__PURE__ */ c.createElement("path", { d: "M231.73,221.94A8,8,0,0,1,224,232H160A8,8,0,0,1,152.27,222a40,40,0,0,1,17.11-23.33,32,32,0,1,1,45.24,0A40,40,0,0,1,231.73,221.94ZM232,88v32a8,8,0,0,1-16,0V88H40V200h80.56a8,8,0,0,1,0,16H39.38A15.4,15.4,0,0,1,24,200.62V56A16,16,0,0,1,40,40H92.69A15.86,15.86,0,0,1,104,44.69L131.31,72H216A16,16,0,0,1,232,88ZM108.69,72l-16-16H40V72Z" }));
});
d.displayName = "Fill";
export {
  d as Fill
};
