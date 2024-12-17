var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      h.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && h.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as d } from "react";
import l from "../../lib/OptiBase.mjs";
const n = d((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(l, H({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M190,208a6,6,0,0,1-6,6H56a6,6,0,0,1,0-12h4a30,30,0,0,0,30-30V134H56a6,6,0,0,1,0-12H90V84a50,50,0,0,1,81.81-38.58,6,6,0,1,1-7.64,9.26A38,38,0,0,0,102,84v38h34a6,6,0,0,1,0,12H102v38a41.88,41.88,0,0,1-12.63,30H184A6,6,0,0,1,190,208Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
