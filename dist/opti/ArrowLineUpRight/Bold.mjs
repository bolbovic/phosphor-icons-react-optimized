var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    d.call(t, e) && p(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && p(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var o in a)
    d.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && l.call(a, o) && (e[o] = a[o]);
  return e;
};
import i, { forwardRef as n } from "react";
import B from "../../lib/OptiBase.mjs";
const H = n((o, e) => {
  var m = o, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(B, c({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M228,216a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,216ZM80,180a12,12,0,0,0,8.49-3.51L180,85v67a12,12,0,0,0,24,0V56a12,12,0,0,0-12-12H96a12,12,0,0,0,0,24h67L71.51,159.51A12,12,0,0,0,80,180Z" }));
});
H.displayName = "Bold";
export {
  H as Bold
};
