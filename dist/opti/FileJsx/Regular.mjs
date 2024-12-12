var V = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var l in a)
    o.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import L, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const i = Z((l, e) => {
  var m = l, { children: a } = m, t = s(m, ["children"]);
  return /* @__PURE__ */ L.createElement(d, f({ ref: e }, t), a, /* @__PURE__ */ L.createElement("path", { d: "M147.81,196.31a20.82,20.82,0,0,1-9.19,15.23C133.43,215,127,216,121.13,216a60.63,60.63,0,0,1-15.19-2,8,8,0,0,1,4.31-15.41c4.38,1.21,15,2.71,19.55-.35.88-.6,1.83-1.52,2.14-3.93.34-2.67-.72-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.11a20.58,20.58,0,0,1,9-14.95c11.85-8,30.72-3.31,32.84-2.76a8,8,0,0,1-4.07,15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54,4.54,0,0,0-2,3.67c-.12.9-.14,1.08,1.11,1.9,2.31,1.49,6.45,2.68,10.45,3.84C133.49,174.17,150,179,147.81,196.31ZM72,144a8,8,0,0,0-8,8v38a10,10,0,0,1-20,0,8,8,0,0,0-16,0,26,26,0,0,0,52,0V152A8,8,0,0,0,72,144Zm140.65,1.49a8,8,0,0,0-11.16,1.86L188,166.24l-13.49-18.89a8,8,0,0,0-13,9.3L178.17,180l-16.68,23.35a8,8,0,0,0,13,9.3L188,193.76l13.49,18.89a8,8,0,0,0,13-9.3L197.83,180l16.68-23.35A8,8,0,0,0,212.65,145.49ZM216,88v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-27.31-8L160,51.31V80Z" }));
});
i.displayName = "Regular";
export {
  i as Regular,
  i as default
};
