var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const v = h((m, e) => {
  var A = m, { children: a } = A, t = c(A, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M232,158a6,6,0,0,0,0-12,230.11,230.11,0,0,0-66.11,9.65,260.34,260.34,0,0,0-23.07-13.28A248.25,248.25,0,0,1,232,126a6,6,0,0,0,0-12c-6,0-12,.22-18,.62V80a6,6,0,0,0-2.4-4.8l-64-48a6,6,0,0,0-7.2,0l-64,48A6,6,0,0,0,74,80v38.77A264.25,264.25,0,0,0,24,114a6,6,0,0,0,0,12,249,249,0,0,1,195.17,93.75,6,6,0,0,0,4.69,2.25,6,6,0,0,0,4.67-9.75,265,265,0,0,0-18.69-20.94A190.58,190.58,0,0,1,232,190a6,6,0,0,0,0-12,199.1,199.1,0,0,0-33.21,2.79q-9.63-8.65-20-16.25A218.72,218.72,0,0,1,232,158ZM126,134.56V102h36v21.46a259.11,259.11,0,0,0-33.93,12ZM86,83l58-43.5L202,83v32.71a260.51,260.51,0,0,0-28,4.73V96a6,6,0,0,0-6-6H120a6,6,0,0,0-6,6v33.85a258.87,258.87,0,0,0-28-8.46Zm49.17,136.32a6,6,0,0,1-8.32,1.68A185.14,185.14,0,0,0,24,190a6,6,0,0,1,0-12,197.1,197.1,0,0,1,109.49,33A6,6,0,0,1,135.17,219.32Zm49.8-7.61a6,6,0,1,1-8.4,8.57A216.79,216.79,0,0,0,24,158a6,6,0,0,1,0-12A228.74,228.74,0,0,1,185,211.71Z" }));
});
v.displayName = "Light";
export {
  v as Light
};
