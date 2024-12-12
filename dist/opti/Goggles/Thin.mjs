var C = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? C(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && A(a, e, t[e]);
  if (c)
    for (var e of c(t))
      i.call(t, e) && A(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && c)
    for (var m of c(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const l = f((m, e) => {
  var r = m, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ n.createElement(h, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M252,136a68.07,68.07,0,0,0-68-68H72A68.07,68.07,0,0,0,4,136a20,20,0,0,0,16.35,19.65C23.91,174.84,54.81,188,72,188a36,36,0,0,0,35.77-32h40.46A36,36,0,0,0,184,188c17.19,0,48.09-13.16,51.65-32.35A20,20,0,0,0,252,136ZM28,152c0-7.75,7.92-15.25,17.81-20.53l43,42.95A27.89,27.89,0,0,1,72,180C55.45,180,28,166.44,28,152Zm66.42,16.76L53.58,127.92C60,125.46,66.58,124,72,124a28,28,0,0,1,22.42,44.76ZM156,152a27.94,27.94,0,0,1,9.42-20.92L208,173.65c-8,3.91-17,6.35-24,6.35A28,28,0,0,1,156,152Zm59.2,17.55-42.95-43A27.86,27.86,0,0,1,184,124c16.55,0,44,13.56,44,28C228,158.39,222.62,164.6,215.2,169.55Zm20.26-22.06C231.15,128.77,200.93,116,184,116a36,36,0,0,0-35.77,32H107.77A36,36,0,0,0,72,116c-16.93,0-47.15,12.77-51.46,31.49A12,12,0,0,1,12,136,60.07,60.07,0,0,1,72,76H184a60.07,60.07,0,0,1,60,60A12,12,0,0,1,235.46,147.49Z" }));
});
l.displayName = "Thin";
export {
  l as Thin
};
