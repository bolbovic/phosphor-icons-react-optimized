var s = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && m(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var l in a)
    p.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && d.call(a, l) && (e[l] = a[l]);
  return e;
};
import i, { forwardRef as n } from "react";
import B from "../../lib/OptiBase.mjs";
const H = n((l, e) => {
  var r = l, { children: a } = r, t = f(r, ["children"]);
  return /* @__PURE__ */ i.createElement(B, c({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M140,40V216a12,12,0,0,1-24,0V40a12,12,0,0,1,24,0ZM88,116H45l11.52-11.51a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17l32,32a12,12,0,0,0,17-17L45,140H88a12,12,0,0,0,0-24Zm160.49,3.51-32-32a12,12,0,0,0-17,17L211,116H168a12,12,0,0,0,0,24h43l-11.52,11.51a12,12,0,0,0,17,17l32-32A12,12,0,0,0,248.49,119.51Z" }));
});
H.displayName = "Bold";
export {
  H as Bold
};
