var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && m(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import i, { forwardRef as A } from "react";
import h from "../../lib/OptiBase.mjs";
const n = A((o, e) => {
  var l = o, { children: a } = l, t = f(l, ["children"]);
  return /* @__PURE__ */ i.createElement(h, c({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M216.07,31.12a12,12,0,0,0-16.95.81L195.42,36H128A91.95,91.95,0,0,0,57.8,187.39L39.12,207.93a12,12,0,1,0,17.76,16.14l18.67-20.53A91.48,91.48,0,0,0,128,220h72a12,12,0,0,0,0-24H128a67.51,67.51,0,0,1-36.12-10.43l125-137.5A12,12,0,0,0,216.07,31.12ZM60,128a68.07,68.07,0,0,1,68-68h45.6L74.13,169.42A67.62,67.62,0,0,1,60,128Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
