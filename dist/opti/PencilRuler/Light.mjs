var M = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? M(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    m.call(t, e) && r(a, e, t[e]);
  if (H)
    for (var e of H(t))
      o.call(t, e) && r(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var V in a)
    m.call(a, V) && t.indexOf(V) < 0 && (e[V] = a[V]);
  if (a != null && H)
    for (var V of H(a))
      t.indexOf(V) < 0 && o.call(a, V) && (e[V] = a[V]);
  return e;
};
import p, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const l = c((V, e) => {
  var h = V, { children: a } = h, t = i(h, ["children"]);
  return /* @__PURE__ */ p.createElement(f, Z({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M208,34H160a14,14,0,0,0-14,14V208a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Zm2,174a2,2,0,0,1-2,2H160a2,2,0,0,1-2-2V174h26a6,6,0,0,0,0-12H158V134h26a6,6,0,0,0,0-12H158V94h26a6,6,0,0,0,0-12H158V48a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2ZM76.24,27.76a6,6,0,0,0-8.48,0l-32,32A6,6,0,0,0,34,64V208a14,14,0,0,0,14,14H96a14,14,0,0,0,14-14V64a6,6,0,0,0-1.76-4.24ZM46,178V78H66V178ZM78,78H98V178H78ZM72,40.49,97.51,66h-51ZM96,210H48a2,2,0,0,1-2-2V190H98v18A2,2,0,0,1,96,210Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
