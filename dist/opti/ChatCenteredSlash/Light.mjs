var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const V = s((r, e) => {
  var l = r, { children: a } = l, t = H(l, ["children"]);
  return /* @__PURE__ */ c.createElement(L, h({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M52.44,36a6,6,0,0,0-10.1,6H40A14,14,0,0,0,26,56V184a14,14,0,0,0,14,14h61.59L115.84,223a14,14,0,0,0,24.32,0L154.41,198h29.12l20,22a6,6,0,0,0,8.88-8.08Zm98.49,150a6,6,0,0,0-5.21,3l-16,28a2,2,0,0,1-3.48,0l-16-28a6,6,0,0,0-5.21-3H40a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H52.62l120,132ZM230,56V186a6,6,0,0,1-12,0V56a2,2,0,0,0-2-2H98.52a6,6,0,1,1,0-12H216A14,14,0,0,1,230,56Z" }));
});
V.displayName = "Light";
export {
  V as Light
};
