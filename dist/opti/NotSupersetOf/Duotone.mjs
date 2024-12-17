var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && H(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && H(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var o in a)
    c.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && l.call(a, o) && (e[o] = a[o]);
  return e;
};
import m, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((o, e) => {
  var p = o, { children: a } = p, t = i(p, ["children"]);
  return /* @__PURE__ */ m.createElement(h, n({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M208,104a56,56,0,0,1-56,56H56V48h96A56,56,0,0,1,208,104Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M208,192H80.63l21.82-24H152A64,64,0,0,0,199.54,61.2l14.38-15.82a8,8,0,0,0-11.84-10.76L187.43,50.73A63.66,63.66,0,0,0,152,40H56a8,8,0,0,0,0,16h96a47.72,47.72,0,0,1,24.51,6.75L95.37,152H56a8,8,0,0,0,0,16H80.82L42.08,210.62a8,8,0,1,0,11.84,10.76L66.08,208H208a8,8,0,0,0,0-16ZM188.71,73.12A48,48,0,0,1,152,152H117Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
