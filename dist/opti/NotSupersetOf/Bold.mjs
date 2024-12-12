var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && m(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var l in a)
    H.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as s } from "react";
import n from "../../lib/OptiBase.mjs";
const A = s((l, e) => {
  var r = l, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(n, d({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M208,188H89.67l14.55-16H152A68,68,0,0,0,204.86,61.29l12-13.22a12,12,0,0,0-17.76-16.14l-12.4,13.63A67.62,67.62,0,0,0,152,36H56a12,12,0,0,0,0,24h96a43.74,43.74,0,0,1,18.06,3.89L93.6,148H56a12,12,0,0,0,0,24H71.78L39.12,207.93a12,12,0,1,0,17.76,16.14l11-12.07H208a12,12,0,0,0,0-24ZM188.44,79.36A44,44,0,0,1,152,148H126Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
