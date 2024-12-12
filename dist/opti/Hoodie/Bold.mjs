var f = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (a, e, l) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, d = (a, e) => {
  for (var l in e || (e = {}))
    m.call(e, l) && r(a, l, e[l]);
  if (V)
    for (var l of V(e))
      p.call(e, l) && r(a, l, e[l]);
  return a;
};
var Z = (a, e) => {
  var l = {};
  for (var t in a)
    m.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && V)
    for (var t of V(a))
      e.indexOf(t) < 0 && p.call(a, t) && (l[t] = a[t]);
  return l;
};
import c, { forwardRef as h } from "react";
import i from "../../lib/OptiBase.mjs";
const s = h((t, l) => {
  var o = t, { children: a } = o, e = Z(o, ["children"]);
  return /* @__PURE__ */ c.createElement(i, d({ ref: l }, e), a, /* @__PURE__ */ c.createElement("path", { d: "M244.64,118.31l-54.27-81.4A20,20,0,0,0,173.73,28H82.27a20,20,0,0,0-16.64,8.91l-54.27,81.4a20,20,0,0,0-2.65,16.36l21.43,78.59A20,20,0,0,0,49.43,228H76a20,20,0,0,0,20-20V196h64v12a20,20,0,0,0,20,20h26.57a20,20,0,0,0,19.29-14.74l21.43-78.59A20,20,0,0,0,244.64,118.31ZM84,172V70.64l12,7.5V136a12,12,0,0,0,24,0V93.15l1.64,1a12,12,0,0,0,12.72,0l1.64-1V128a12,12,0,0,0,24,0V78.14l12-7.5V172ZM128,69.85,99.46,52h57.08ZM52.49,204,32.34,130.11,60,88.62V176a20,20,0,0,0,12,18.32V204Zm151,0H184v-9.68A20,20,0,0,0,196,176V88.62l27.66,41.49Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
