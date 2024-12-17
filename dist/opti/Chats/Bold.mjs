var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && l(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && l(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var o in a)
    V.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && p.call(a, o) && (e[o] = a[o]);
  return e;
};
import c, { forwardRef as h } from "react";
import i from "../../lib/OptiBase.mjs";
const s = h((o, e) => {
  var m = o, { children: a } = m, t = H(m, ["children"]);
  return /* @__PURE__ */ c.createElement(i, d({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M216,76H188V48a20,20,0,0,0-20-20H40A20,20,0,0,0,20,48V176a12,12,0,0,0,19.54,9.33l28.46-23V184a20,20,0,0,0,20,20h92.17l36.29,29.33A12,12,0,0,0,236,224V96A20,20,0,0,0,216,76ZM44,150.87V52H164v80H71.58A12,12,0,0,0,64,134.67Zm168,48-20-16.2a12,12,0,0,0-7.54-2.67H92V156h76a20,20,0,0,0,20-20V100h24Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
