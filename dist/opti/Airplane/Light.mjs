var v = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, m = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? v(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, o = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && V(a, e, t[e]);
  if (l)
    for (var e of l(t))
      m.call(t, e) && V(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var L in a)
    A.call(a, L) && t.indexOf(L) < 0 && (e[L] = a[L]);
  if (a != null && l)
    for (var L of l(a))
      t.indexOf(L) < 0 && m.call(a, L) && (e[L] = a[L]);
  return e;
};
import p, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((L, e) => {
  var r = L, { children: a } = r, t = i(r, ["children"]);
  return /* @__PURE__ */ p.createElement(f, o({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M234.68,130.63,158,92.29V48a30,30,0,0,0-60,0V92.29L21.32,130.63A6,6,0,0,0,18,136v32a6,6,0,0,0,7.18,5.88L98,159.32v22.19L83.76,195.76A6,6,0,0,0,82,200v32a6,6,0,0,0,8.23,5.57L128,222.46l37.77,15.11A6,6,0,0,0,174,232V200a6,6,0,0,0-1.76-4.24L158,181.51V159.32l72.82,14.56A6,6,0,0,0,238,168V136A6,6,0,0,0,234.68,130.63ZM226,160.68l-72.82-14.56A6,6,0,0,0,146,152v32a6,6,0,0,0,1.76,4.24L162,202.49v20.65l-31.77-12.71a6,6,0,0,0-4.46,0L94,223.14V202.49l14.24-14.25A6,6,0,0,0,110,184V152a6,6,0,0,0-7.18-5.88L30,160.68v-21l76.68-38.34A6,6,0,0,0,110,96V48a18,18,0,0,1,36,0V96a6,6,0,0,0,3.32,5.37L226,139.71Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
