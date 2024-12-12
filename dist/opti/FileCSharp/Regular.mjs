var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var m = (a, h, e) => h in a ? f(a, h, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[h] = e, c = (a, h) => {
  for (var e in h || (h = {}))
    l.call(h, e) && m(a, e, h[e]);
  if (r)
    for (var e of r(h))
      o.call(h, e) && m(a, e, h[e]);
  return a;
};
var p = (a, h) => {
  var e = {};
  for (var t in a)
    l.call(a, t) && h.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      h.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import s, { forwardRef as V } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = V((t, e) => {
  var v = t, { children: a } = v, h = p(v, ["children"]);
  return /* @__PURE__ */ s.createElement(Z, c({ ref: e }, h), a, /* @__PURE__ */ s.createElement("path", { d: "M48,180c0,11,7.18,20,16,20a14.24,14.24,0,0,0,10.22-4.66A8,8,0,0,1,85.78,206.4,30.06,30.06,0,0,1,64,216c-17.65,0-32-16.15-32-36s14.35-36,32-36a30.06,30.06,0,0,1,21.78,9.6,8,8,0,0,1-11.56,11.06A14.24,14.24,0,0,0,64,160C55.18,160,48,169,48,180ZM216,88V224a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31Zm8,88v16h8a8,8,0,0,1,0,16h-8v8a8,8,0,0,1-16,0v-8H136v8a8,8,0,0,1-16,0v-8h-8a8,8,0,0,1,0-16h8V168h-8a8,8,0,0,1,0-16h8v-8a8,8,0,0,1,16,0v8h16v-8a8,8,0,0,1,16,0v8h8a8,8,0,0,1,0,16Zm-16,0H136v16h16Z" }));
});
d.displayName = "Regular";
export {
  d as Regular,
  d as default
};
