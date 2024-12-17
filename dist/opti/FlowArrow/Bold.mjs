var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && m(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var o in a)
    c.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && p.call(a, o) && (e[o] = a[o]);
  return e;
};
import i, { forwardRef as h } from "react";
import n from "../../lib/OptiBase.mjs";
const B = h((o, e) => {
  var l = o, { children: a } = l, t = f(l, ["children"]);
  return /* @__PURE__ */ i.createElement(n, d({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M248.49,71.51l-32-32a12,12,0,0,0-17,17L211,68h-3c-52,0-64.8,30.71-75.08,55.38-8.82,21.17-15.45,37.05-42.75,40.09a44,44,0,1,0,.28,24.08c43.34-3.87,55.07-32,64.63-54.93C164.9,109,172,92,208,92h3l-11.52,11.51a12,12,0,0,0,17,17l32-32A12,12,0,0,0,248.49,71.51ZM48,196a20,20,0,1,1,20-20A20,20,0,0,1,48,196Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
