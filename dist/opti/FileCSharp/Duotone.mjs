var Z = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && r(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && r(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var h in a)
    c.call(a, h) && t.indexOf(h) < 0 && (e[h] = a[h]);
  if (a != null && o)
    for (var h of o(a))
      t.indexOf(h) < 0 && p.call(a, h) && (e[h] = a[h]);
  return e;
};
import m, { forwardRef as i } from "react";
import l from "../../lib/OptiBase.mjs";
const s = i((h, e) => {
  var v = h, { children: a } = v, t = V(v, ["children"]);
  return /* @__PURE__ */ m.createElement(l, n({ ref: e }, t), a, /* @__PURE__ */ m.createElement("path", { d: "M208,88H152V32Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M48,180c0,11,7.18,20,16,20a14.18,14.18,0,0,0,10.22-4.66A8,8,0,0,1,85.78,206.4,30.06,30.06,0,0,1,64,216c-17.65,0-32-16.15-32-36s14.35-36,32-36a30.06,30.06,0,0,1,21.78,9.6,8,8,0,0,1-11.56,11.06A14.18,14.18,0,0,0,64,160C55.18,160,48,169,48,180ZM216,88V224a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31Zm8,88v16h8a8,8,0,0,1,0,16h-8v8a8,8,0,0,1-16,0v-8H136v8a8,8,0,0,1-16,0v-8h-8a8,8,0,0,1,0-16h8V168h-8a8,8,0,0,1,0-16h8v-8a8,8,0,0,1,16,0v8h16v-8a8,8,0,0,1,16,0v8h8a8,8,0,0,1,0,16Zm-16,0H136v16h16Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
