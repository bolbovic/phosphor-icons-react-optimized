var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && l(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && d.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const A = i((m, e) => {
  var r = m, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, H({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M28,64A12,12,0,0,1,40,52H216a12,12,0,0,1,0,24H40A12,12,0,0,1,28,64Zm12,76H156a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24Zm68,40H40a12,12,0,0,0,0,24h68a12,12,0,0,0,0-24Zm143.49-52.55a12,12,0,0,1-14.94,8L212,128.13V192a36,36,0,1,1-24-33.94V112a12,12,0,0,1,15.45-11.49l40,12A12,12,0,0,1,251.49,127.45ZM188,192a12,12,0,1,0-12,12A12,12,0,0,0,188,192Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
