var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var c = (e, t, a) => t in e ? H(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, Z = (e, t) => {
  for (var a in t || (t = {}))
    l.call(t, a) && c(e, a, t[a]);
  if (r)
    for (var a of r(t))
      n.call(t, a) && c(e, a, t[a]);
  return e;
};
var i = (e, t) => {
  var a = {};
  for (var o in e)
    l.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && n.call(e, o) && (a[o] = e[o]);
  return a;
};
import m, { forwardRef as M } from "react";
import d from "../../lib/OptiBase.mjs";
const f = M((o, a) => {
  var p = o, { children: e } = p, t = i(p, ["children"]);
  return /* @__PURE__ */ m.createElement(d, Z({ ref: a }, t), e, /* @__PURE__ */ m.createElement("path", { d: "M80,88v80H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M155.51,24.81a8,8,0,0,0-8.42.88L77.25,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V32A8,8,0,0,0,155.51,24.81ZM32,96H72v64H32ZM144,207.64,88,164.09V91.91l56-43.55Zm54-106.08a40,40,0,0,1,0,52.88,8,8,0,0,1-12-10.58,24,24,0,0,0,0-31.72,8,8,0,0,1,12-10.58ZM248,128a79.9,79.9,0,0,1-20.37,53.34,8,8,0,0,1-11.92-10.67,64,64,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67A79.83,79.83,0,0,1,248,128Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
