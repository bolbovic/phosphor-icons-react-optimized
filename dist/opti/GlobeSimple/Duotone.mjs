var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (e, a, t) => a in e ? i(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, A = (e, a) => {
  for (var t in a || (a = {}))
    Z.call(a, t) && p(e, t, a[t]);
  if (o)
    for (var t of o(a))
      n.call(a, t) && p(e, t, a[t]);
  return e;
};
var h = (e, a) => {
  var t = {};
  for (var m in e)
    Z.call(e, m) && a.indexOf(m) < 0 && (t[m] = e[m]);
  if (e != null && o)
    for (var m of o(e))
      a.indexOf(m) < 0 && n.call(e, m) && (t[m] = e[m]);
  return t;
};
import c, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const l = d((m, t) => {
  var r = m, { children: e } = r, a = h(r, ["children"]);
  return /* @__PURE__ */ c.createElement(f, A({ ref: t }, a), e, /* @__PURE__ */ c.createElement("path", { d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z", opacity: "0.2" }), /* @__PURE__ */ c.createElement("path", { d: "M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm87.62,96H175.79C174,83.49,159.94,57.67,148.41,42.4A88.19,88.19,0,0,1,215.63,120ZM96.23,136h63.54c-2.31,41.61-22.23,67.11-31.77,77C118.45,203.1,98.54,177.6,96.23,136Zm0-16C98.54,78.39,118.46,52.89,128,43c9.55,9.93,29.46,35.43,31.77,77Zm11.36-77.6C96.06,57.67,82,83.49,80.21,120H40.37A88.19,88.19,0,0,1,107.59,42.4ZM40.37,136H80.21c1.82,36.51,15.85,62.33,27.38,77.6A88.19,88.19,0,0,1,40.37,136Zm108,77.6c11.53-15.27,25.56-41.09,27.38-77.6h39.84A88.19,88.19,0,0,1,148.41,213.6Z" }));
});
l.displayName = "Duotone";
export {
  l as Duotone
};
