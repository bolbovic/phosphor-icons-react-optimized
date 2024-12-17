var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && A(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && A(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = l((m, e) => {
  var o = m, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, H({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M235.18,69.58A4,4,0,0,0,232,68H54.15L43.85,30.93A4,4,0,0,0,40,28H16a4,4,0,0,0,0,8H37L72.89,165.35A20.06,20.06,0,0,0,92.16,180H191a20.06,20.06,0,0,0,19.27-14.65l25.63-92.28A4,4,0,0,0,235.18,69.58Zm-32.67,93.63A12,12,0,0,1,191,172H92.16a12,12,0,0,1-11.56-8.79L56.37,76H226.74ZM100,216a12,12,0,1,1-12-12A12,12,0,0,1,100,216Zm104,0a12,12,0,1,1-12-12A12,12,0,0,1,204,216Z" }));
});
Z.displayName = "Thin";
export {
  Z as Thin
};
