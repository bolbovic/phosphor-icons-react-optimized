var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && H(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && H(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    l.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const V = i((m, e) => {
  var r = m, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M48,128a12,12,0,0,1,12-12H76a12,12,0,0,1,0,24H60A12,12,0,0,1,48,128Zm168.88,79.93a12,12,0,1,1-17.76,16.14l-11-12.07H32a20,20,0,0,1-20-20V64A20,20,0,0,1,32,44h4.68a12,12,0,0,1,20.2-12.07ZM166.33,188l-10.91-12H60a12,12,0,0,1,0-24h73.6l-10.91-12H116a12,12,0,0,1-10.1-18.47L57.24,68H36V188ZM224,44H116.6a12,12,0,0,0,0,24H220V182.94a12,12,0,0,0,24,0V64A20,20,0,0,0,224,44Zm-28,96a12,12,0,0,0,0-24H182.06a12,12,0,0,0,0,24Z" }));
});
V.displayName = "Bold";
export {
  V as Bold
};
