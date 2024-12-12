var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var r = (a, l, e) => l in a ? f(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, d = (a, l) => {
  for (var e in l || (l = {}))
    p.call(l, e) && r(a, e, l[e]);
  if (m)
    for (var e of m(l))
      H.call(l, e) && r(a, e, l[e]);
  return a;
};
var Z = (a, l) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      l.indexOf(t) < 0 && H.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as h } from "react";
import i from "../../lib/OptiBase.mjs";
const s = h((t, e) => {
  var o = t, { children: a } = o, l = Z(o, ["children"]);
  return /* @__PURE__ */ c.createElement(i, d({ ref: e }, l), a, /* @__PURE__ */ c.createElement("path", { d: "M219.27,211.9,168.77,73l7.63-21H184a12,12,0,0,0,0-24H88a12,12,0,0,0-1.11,23.94l-58.16,160a12,12,0,0,0,7.17,15.37A11.83,11.83,0,0,0,40,228a12,12,0,0,0,11.28-7.9L60,196H98.5l-5.78,15.9a12,12,0,0,0,7.18,15.37,11.79,11.79,0,0,0,4.1.73,12,12,0,0,0,11.28-7.9L132.77,172h46.46l17.49,48.1A12,12,0,0,0,208,228a11.83,11.83,0,0,0,4.1-.73A12,12,0,0,0,219.27,211.9ZM124.69,124H86.22L95,100h38.46Zm17.45-48H103.68l8.73-24h38.46ZM68.77,172l8.73-24H116l-8.73,24Zm72.73-24L156,108.11,170.5,148Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
