var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var l = (e, m, t) => m in e ? h(e, m, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[m] = t, p = (e, m) => {
  for (var t in m || (m = {}))
    o.call(m, t) && l(e, t, m[t]);
  if (r)
    for (var t of r(m))
      i.call(m, t) && l(e, t, m[t]);
  return e;
};
var Z = (e, m) => {
  var t = {};
  for (var a in e)
    o.call(e, a) && m.indexOf(a) < 0 && (t[a] = e[a]);
  if (e != null && r)
    for (var a of r(e))
      m.indexOf(a) < 0 && i.call(e, a) && (t[a] = e[a]);
  return t;
};
import f, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const n = s((a, t) => {
  var c = a, { children: e } = c, m = Z(c, ["children"]);
  return /* @__PURE__ */ f.createElement(d, p({ ref: t }, m), e, /* @__PURE__ */ f.createElement("path", { d: "M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm87.62,96H175.79C174,83.49,159.94,57.67,148.41,42.4A88.19,88.19,0,0,1,215.63,120ZM96.23,136h63.54c-2.31,41.61-22.23,67.11-31.77,77C118.45,203.1,98.54,177.6,96.23,136Zm0-16C98.54,78.39,118.46,52.89,128,43c9.55,9.93,29.46,35.43,31.77,77Zm52.18,93.6c11.53-15.27,25.56-41.09,27.38-77.6h39.84A88.19,88.19,0,0,1,148.41,213.6Z" }));
});
n.displayName = "Fill";
export {
  n as Fill
};
