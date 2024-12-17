var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && h(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && h(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as A } from "react";
import f from "../../lib/OptiBase.mjs";
const s = A((m, e) => {
  var V = m, { children: a } = V, t = H(V, ["children"]);
  return /* @__PURE__ */ c.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M200,44H160a12,12,0,0,0-12,12v88a20,20,0,0,1-40,0V56A12,12,0,0,0,96,44H56A12,12,0,0,0,44,56v88a84,84,0,0,0,84,84h.64c46-.34,83.36-38.47,83.36-85V56A12,12,0,0,0,200,44Zm-40,8h40a4,4,0,0,1,4,4V92H156V56A4,4,0,0,1,160,52ZM56,52H96a4,4,0,0,1,4,4V92H52V56A4,4,0,0,1,56,52Zm72.58,168H128a76,76,0,0,1-76-76V100h48v44a28,28,0,0,0,56,0V100h48v43C204,185.15,170.17,219.69,128.58,220Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
