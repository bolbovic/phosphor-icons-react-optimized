var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, t, a) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    i.call(t, a) && o(e, a, t[a]);
  if (m)
    for (var a of m(t))
      p.call(t, a) && o(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var r in e)
    i.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      t.indexOf(r) < 0 && p.call(e, r) && (a[r] = e[r]);
  return a;
};
import h, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const A = d((r, a) => {
  var l = r, { children: e } = l, t = f(l, ["children"]);
  return /* @__PURE__ */ h.createElement(n, c({ ref: a }, t), e, /* @__PURE__ */ h.createElement("path", { d: "M240,126.63A112.21,112.21,0,0,0,128,24h0A112.21,112.21,0,0,0,16.05,126.63,16,16,0,0,0,32,144h88v56a32,32,0,0,0,64,0,8,8,0,0,0-16,0,16,16,0,0,1-32,0V144h88a16,16,0,0,0,16-17.37ZM32,128a96.15,96.15,0,0,1,76.2-85.89C96.48,58,81.85,86.11,80.17,128H32Zm143.83,0c-1.68-41.89-16.31-70-28-85.94A96.07,96.07,0,0,1,224,128Z" }));
});
A.displayName = "Fill";
export {
  A as Fill
};
