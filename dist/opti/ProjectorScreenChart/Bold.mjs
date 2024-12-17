var l = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var V = (a, m, e) => m in a ? l(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, H = (a, m) => {
  for (var e in m || (m = {}))
    p.call(m, e) && V(a, e, m[e]);
  if (o)
    for (var e of o(m))
      v.call(m, e) && V(a, e, m[e]);
  return a;
};
var Z = (a, m) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      m.indexOf(t) < 0 && v.call(a, t) && (e[t] = a[t]);
  return e;
};
import d, { forwardRef as A } from "react";
import c from "../../lib/OptiBase.mjs";
const f = A((t, e) => {
  var r = t, { children: a } = r, m = Z(r, ["children"]);
  return /* @__PURE__ */ d.createElement(c, H({ ref: e }, m), a, /* @__PURE__ */ d.createElement("path", { d: "M104,128v8a12,12,0,0,1-24,0v-8a12,12,0,0,1,24,0Zm24-16a12,12,0,0,0-12,12v12a12,12,0,0,0,24,0V124A12,12,0,0,0,128,112Zm36-4a12,12,0,0,0-12,12v16a12,12,0,0,0,24,0V120A12,12,0,0,0,164,108Zm56-16.4V164h4a12,12,0,0,1,0,24H140v23.22a24,24,0,1,1-24,0V188H32a12,12,0,0,1,0-24h4V91.6A20,20,0,0,1,20,72V48A20,20,0,0,1,40,28H216a20,20,0,0,1,20,20V72A20,20,0,0,1,220,91.6ZM44,68H212V52H44Zm152,96V92H60v72Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
