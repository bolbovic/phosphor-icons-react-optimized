var f = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, r, e) => r in a ? f(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, L = (a, r) => {
  for (var e in r || (r = {}))
    o.call(r, e) && c(a, e, r[e]);
  if (l)
    for (var e of l(r))
      p.call(r, e) && c(a, e, r[e]);
  return a;
};
var V = (a, r) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      r.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import Z, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const A = i((t, e) => {
  var m = t, { children: a } = m, r = V(m, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, L({ ref: e }, r), a, /* @__PURE__ */ Z.createElement("path", { d: "M147.81,196.31a20.82,20.82,0,0,1-9.19,15.23C133.43,215,127,216,121.13,216a60.63,60.63,0,0,1-15.19-2,8,8,0,0,1,4.31-15.41c4.38,1.21,15,2.71,19.55-.35.88-.6,1.83-1.52,2.14-3.93.34-2.67-.72-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.11a20.58,20.58,0,0,1,9-14.95c11.85-8,30.72-3.31,32.84-2.76a8,8,0,0,1-4.07,15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54,4.54,0,0,0-2,3.67c-.12.9-.14,1.08,1.11,1.9,2.31,1.49,6.45,2.68,10.45,3.84C133.49,174.17,150,179,147.81,196.31ZM72,144a8,8,0,0,0-8,8v38a10,10,0,0,1-20,0,8,8,0,0,0-16,0,26,26,0,0,0,52,0V152A8,8,0,0,0,72,144Zm140.65,1.49a8,8,0,0,0-11.16,1.86L188,166.24l-13.49-18.89a8,8,0,0,0-13,9.3L178.17,180l-16.68,23.35a8,8,0,0,0,13,9.3L188,193.76l13.49,18.89a8,8,0,0,0,13-9.3L197.83,180l16.68-23.35A8,8,0,0,0,212.65,145.49ZM216,88v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-27.31-8L160,51.31V80Z" }));
});
A.displayName = "Regular";
export {
  A as Regular
};