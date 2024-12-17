var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && p(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && p(a, e, t[e]);
  return a;
};
var M = (a, t) => {
  var e = {};
  for (var o in a)
    H.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import Z, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((o, e) => {
  var m = o, { children: a } = m, t = M(m, ["children"]);
  return /* @__PURE__ */ Z.createElement(i, l({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M148,176a12,12,0,0,1-12,12H120a12,12,0,0,1,0-24h16A12,12,0,0,1,148,176ZM120,92h16a12,12,0,0,0,0-24H120a12,12,0,0,0,0,24ZM220,40V216a20,20,0,0,1-20,20H56a20,20,0,0,1-20-20V40A20,20,0,0,1,56,20H200A20,20,0,0,1,220,40ZM60,44v72H196V44ZM196,212V140H60v72Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
