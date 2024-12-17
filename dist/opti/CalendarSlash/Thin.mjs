var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && H(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && H(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var V in a)
    o.call(a, V) && t.indexOf(V) < 0 && (e[V] = a[V]);
  if (a != null && r)
    for (var V of r(a))
      t.indexOf(V) < 0 && i.call(a, V) && (e[V] = a[V]);
  return e;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = h((V, e) => {
  var m = V, { children: a } = m, t = n(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M51,37.31A4,4,0,0,0,48,36,12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a4,4,0,0,0,3-6.69Zm-4.46,7L82.59,84H44V48A4,4,0,0,1,46.5,44.29ZM48,212a4,4,0,0,1-4-4V92H89.87L199,212ZM220,48V177.23a4,4,0,1,1-8,0V92H134.88a4,4,0,0,1,0-8H212V48a4,4,0,0,0-4-4H180V56a4,4,0,0,1-8,0V44H91.25a4,4,0,0,1,0-8H172V24a4,4,0,0,1,8,0V36h28A12,12,0,0,1,220,48Z" }));
});
Z.displayName = "Thin";
export {
  Z as Thin
};
