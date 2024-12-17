var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      h.call(t, e) && i(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && h.call(a, r) && (e[r] = a[r]);
  return e;
};
import l, { forwardRef as V } from "react";
import d from "../../lib/OptiBase.mjs";
const n = V((r, e) => {
  var o = r, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ l.createElement(d, c({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M246,180a34,34,0,0,1-58.29,23.79,6,6,0,0,1,8.58-8.39A22,22,0,1,0,212,158a6,6,0,0,1-4.92-9.44L228.48,118H192a6,6,0,0,1,0-12h48a6,6,0,0,1,4.91,9.44l-22.52,32.18A34.06,34.06,0,0,1,246,180ZM144,50a6,6,0,0,0-6,6v54H46V56a6,6,0,0,0-12,0V176a6,6,0,0,0,12,0V122h92v54a6,6,0,0,0,12,0V56A6,6,0,0,0,144,50Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
