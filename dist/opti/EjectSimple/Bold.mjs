var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && l(a, e, t[e]);
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
import i, { forwardRef as H } from "react";
import n from "../../lib/OptiBase.mjs";
const A = H((o, e) => {
  var m = o, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(n, c({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M236,200a12,12,0,0,1-12,12H32a12,12,0,1,1,0-24H224A12,12,0,0,1,236,200ZM22,152.57a20,20,0,0,1,2.52-21.32L106.16,30.43a28.08,28.08,0,0,1,43.68,0l81.65,100.82A20.1,20.1,0,0,1,215.91,164H40.09A19.9,19.9,0,0,1,22,152.57ZM48.3,140H207.7L131.2,45.53a4.11,4.11,0,0,0-6.4,0Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
