var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && H(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && H(a, e, t[e]);
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
import c, { forwardRef as h } from "react";
import i from "../../lib/OptiBase.mjs";
const s = h((m, e) => {
  var r = m, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ c.createElement(i, l({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M232,44a12,12,0,0,1-12,12H60a12,12,0,0,1,0-24H220A12,12,0,0,1,232,44ZM176,88a12,12,0,0,0-12-12H44a12,12,0,0,0,0,24H164A12,12,0,0,0,176,88Zm0,44a12,12,0,0,0-12-12H76a12,12,0,0,0,0,24h88A12,12,0,0,0,176,132Zm-4,32H132a12,12,0,0,0,0,24h40a12,12,0,0,0,0-24Zm-32,44H124a12,12,0,0,0,0,24h16a12,12,0,0,0,0-24Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
