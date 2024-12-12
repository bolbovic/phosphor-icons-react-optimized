var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && m(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var l in a)
    p.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && d.call(a, l) && (e[l] = a[l]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const A = i((l, e) => {
  var r = l, { children: a } = r, t = H(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, h({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M249.87,119.06l-40-80A19.89,19.89,0,0,0,192,28H64A19.89,19.89,0,0,0,46.13,39.06l-40,80A20,20,0,0,0,24,148h92v56H96a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24H140V148h92a20,20,0,0,0,17.89-28.94ZM30.49,124l36-72h123l36,72ZM192,100a12,12,0,0,1-12,12H76a12,12,0,0,1,0-24H180A12,12,0,0,1,192,100Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
