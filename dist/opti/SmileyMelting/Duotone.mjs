var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && p(a, e, t[e]);
  if (r)
    for (var e of r(t))
      n.call(t, e) && p(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var o in a)
    A.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && n.call(a, o) && (e[o] = a[o]);
  return e;
};
import m, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const l = d((o, e) => {
  var c = o, { children: a } = c, t = i(c, ["children"]);
  return /* @__PURE__ */ m.createElement(f, h({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M224,128a95.63,95.63,0,0,1-24.44,64H56.44A95.67,95.67,0,0,1,32,126.06C33,74.58,75.15,32.73,126.63,32A96,96,0,0,1,224,128Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M176,140a12,12,0,1,1-12-12A12,12,0,0,1,176,140ZM128,92a12,12,0,1,0-12,12A12,12,0,0,0,128,92Zm73-38A103.24,103.24,0,0,0,128,24h-1.49a104,104,0,0,0-76,173.32A8,8,0,1,0,62.4,186.67a88,88,0,1,1,131.19,0,8,8,0,0,0,11.93,10.66A104,104,0,0,0,201,54ZM152,168H136c-21.74,0-48-17.84-48-40a41.33,41.33,0,0,1,.55-6.68,8,8,0,1,0-15.78-2.64A56.9,56.9,0,0,0,72,128c0,14.88,7.46,29.13,21,40.15C105.4,178.22,121.07,184,136,184h16a8,8,0,0,1,0,16H96a24,24,0,0,0,0,48,8,8,0,0,0,0-16,8,8,0,0,1,0-16h56a24,24,0,0,0,0-48Z" }));
});
l.displayName = "Duotone";
export {
  l as Duotone
};