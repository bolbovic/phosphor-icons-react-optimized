var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var m = (a, l, e) => l in a ? f(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, d = (a, l) => {
  for (var e in l || (l = {}))
    p.call(l, e) && m(a, e, l[e]);
  if (o)
    for (var e of o(l))
      Z.call(l, e) && m(a, e, l[e]);
  return a;
};
var M = (a, l) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      l.indexOf(t) < 0 && Z.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((t, e) => {
  var r = t, { children: a } = r, l = M(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: e }, l), a, /* @__PURE__ */ c.createElement("path", { d: "M195.8,60.2a28,28,0,0,0-39.51-.09L144.68,72.28a12,12,0,1,1-17.36-16.56L139,43.43l.2-.2a52,52,0,0,1,73.54,73.54l-.2.2-12.29,11.71a12,12,0,0,1-16.56-17.36l12.17-11.61A28,28,0,0,0,195.8,60.2ZM111.32,183.72,99.71,195.89a28,28,0,0,1-39.6-39.6l12.17-11.61a12,12,0,0,0-16.56-17.36L43.43,139l-.2.2a52,52,0,0,0,73.54,73.54l.2-.2,11.71-12.29a12,12,0,1,0-17.36-16.56ZM216,148H192a12,12,0,0,0,0,24h24a12,12,0,0,0,0-24ZM40,108H64a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24Zm120,72a12,12,0,0,0-12,12v24a12,12,0,0,0,24,0V192A12,12,0,0,0,160,180ZM96,76a12,12,0,0,0,12-12V40a12,12,0,0,0-24,0V64A12,12,0,0,0,96,76Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
