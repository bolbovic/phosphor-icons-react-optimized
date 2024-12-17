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
import i, { forwardRef as n } from "react";
import B from "../../lib/OptiBase.mjs";
const H = n((o, e) => {
  var l = o, { children: a } = l, t = f(l, ["children"]);
  return /* @__PURE__ */ i.createElement(B, c({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M58.89,178.86a12,12,0,0,0,16-5.75L90.44,140h75.12l15.58,33.11a12,12,0,0,0,21.72-10.22l-64-136a12,12,0,0,0-21.72,0l-64,136A12,12,0,0,0,58.89,178.86ZM128,60.18,154.27,116H101.73ZM228,216a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,216Z" }));
});
H.displayName = "Bold";
export {
  H as Bold
};
