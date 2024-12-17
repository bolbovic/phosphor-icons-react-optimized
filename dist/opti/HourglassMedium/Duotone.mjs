var H = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var l = (e, t, a) => t in e ? H(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, V = (e, t) => {
  for (var a in t || (t = {}))
    c.call(t, a) && l(e, a, t[a]);
  if (m)
    for (var a of m(t))
      n.call(t, a) && l(e, a, t[a]);
  return e;
};
var i = (e, t) => {
  var a = {};
  for (var o in e)
    c.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && m)
    for (var o of m(e))
      t.indexOf(o) < 0 && n.call(e, o) && (a[o] = e[o]);
  return a;
};
import r, { forwardRef as L } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = L((o, a) => {
  var p = o, { children: e } = p, t = i(p, ["children"]);
  return /* @__PURE__ */ r.createElement(Z, V({ ref: a }, t), e, /* @__PURE__ */ r.createElement("path", { d: "M180.92,88,128,128,74.67,88Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M200,75.64V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V76a16.07,16.07,0,0,0,6.4,12.8L114.67,128,62.4,167.2A16.07,16.07,0,0,0,56,180v36a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V180.36a16.09,16.09,0,0,0-6.35-12.77L141.27,128l52.38-39.59A16.09,16.09,0,0,0,200,75.64ZM72,40H184V75.64L178.23,80H77.33L72,76Zm56,78L98.67,96h58.4Zm56,98H72V180l48-36v24a8,8,0,0,0,16,0V144.08l48,36.28Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
