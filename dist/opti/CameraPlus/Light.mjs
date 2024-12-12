var V = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    h.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import L, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var H = m, { children: a } = H, t = A(H, ["children"]);
  return /* @__PURE__ */ L.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ L.createElement("path", { d: "M166,136a6,6,0,0,1-6,6H134v26a6,6,0,0,1-12,0V142H96a6,6,0,0,1,0-12h26V104a6,6,0,0,1,12,0v26h26A6,6,0,0,1,166,136Zm64-56V192a22,22,0,0,1-22,22H48a22,22,0,0,1-22-22V80A22,22,0,0,1,48,58H76.79L88.63,40.23A14,14,0,0,1,100.28,34h55.44a14,14,0,0,1,11.65,6.23L179.21,58H208A22,22,0,0,1,230,80Zm-12,0a10,10,0,0,0-10-10H176a6,6,0,0,1-5-2.67L157.38,46.89a2,2,0,0,0-1.66-.89H100.28a2,2,0,0,0-1.66.89L85,67.33A6,6,0,0,1,80,70H48A10,10,0,0,0,38,80V192a10,10,0,0,0,10,10H208a10,10,0,0,0,10-10Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
