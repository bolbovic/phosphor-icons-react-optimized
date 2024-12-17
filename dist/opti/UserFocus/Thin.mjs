var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      H.call(t, e) && i(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && H.call(a, m) && (e[m] = a[m]);
  return e;
};
import h, { forwardRef as A } from "react";
import c from "../../lib/OptiBase.mjs";
const f = A((m, e) => {
  var o = m, { children: a } = o, t = Z(o, ["children"]);
  return /* @__PURE__ */ h.createElement(c, V({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M220,40V76a4,4,0,0,1-8,0V44H180a4,4,0,0,1,0-8h36A4,4,0,0,1,220,40Zm-4,136a4,4,0,0,0-4,4v32H180a4,4,0,0,0,0,8h36a4,4,0,0,0,4-4V180A4,4,0,0,0,216,176ZM76,212H44V180a4,4,0,0,0-8,0v36a4,4,0,0,0,4,4H76a4,4,0,0,0,0-8ZM40,80a4,4,0,0,0,4-4V44H76a4,4,0,0,0,0-8H40a4,4,0,0,0-4,4V76A4,4,0,0,0,40,80Zm136,92a4,4,0,0,1-3.2-1.6,56,56,0,0,0-89.6,0,4,4,0,1,1-6.4-4.8,63.65,63.65,0,0,1,32.5-22.85,36,36,0,1,1,37.4,0,63.65,63.65,0,0,1,32.5,22.85A4,4,0,0,1,176,172Zm-48-32a28,28,0,1,0-28-28A28,28,0,0,0,128,140Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
