var H = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && V(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && V(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const l = d((r, e) => {
  var o = r, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ s.createElement(h, c({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M192,26a6,6,0,0,0-6,6V66H70V32a6,6,0,0,0-12,0V224a6,6,0,0,0,12,0V190H186v34a6,6,0,0,0,12,0V32A6,6,0,0,0,192,26Zm-6,52v44H70V78ZM70,178V134H186v44Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
