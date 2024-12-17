var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (e, t, a) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, d = (e, t) => {
  for (var a in t || (t = {}))
    m.call(t, a) && c(e, a, t[a]);
  if (r)
    for (var a of r(t))
      p.call(t, a) && c(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var o in e)
    m.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && p.call(e, o) && (a[o] = e[o]);
  return a;
};
import i, { forwardRef as n } from "react";
import B from "../../lib/OptiBase.mjs";
const A = n((o, a) => {
  var l = o, { children: e } = l, t = f(l, ["children"]);
  return /* @__PURE__ */ i.createElement(B, d({ ref: a }, t), e, /* @__PURE__ */ i.createElement("path", { d: "M228,112c0,23.6-8.29,45.23-23.35,60.88C190.52,187.57,171.33,196,152,196c-15.45,0-26.78-4.18-34.89-9.31l-9.43,40.06a12,12,0,1,1-23.36-5.5l32-136a12,12,0,1,1,23.36,5.5l-16.45,69.93C126.72,164.86,135.16,172,152,172c25.56,0,52-22.45,52-60A68,68,0,1,0,77.09,146a12,12,0,0,1-20.77,12A92,92,0,1,1,228,112Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
