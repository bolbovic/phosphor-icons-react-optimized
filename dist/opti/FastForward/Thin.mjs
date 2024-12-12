var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && i(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((m, e) => {
  var o = m, { children: a } = o, t = L(o, ["children"]);
  return /* @__PURE__ */ c.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M246.52,118,158.33,61.87a12,12,0,0,0-12.18-.39A11.66,11.66,0,0,0,140,71.84v44.59L54.33,61.87a12,12,0,0,0-12.18-.39A11.66,11.66,0,0,0,36,71.84V184.16a11.66,11.66,0,0,0,6.15,10.36,12,12,0,0,0,12.18-.39L140,139.57v44.59a11.66,11.66,0,0,0,6.15,10.36,12,12,0,0,0,12.18-.39L246.52,138a11.81,11.81,0,0,0,0-19.94Zm-108.3,13.19L50,187.38a3.91,3.91,0,0,1-4,.13,3.76,3.76,0,0,1-2-3.35V71.84a3.76,3.76,0,0,1,2-3.35,4,4,0,0,1,1.91-.5,3.94,3.94,0,0,1,2.13.63l88.18,56.16a3.8,3.8,0,0,1,0,6.44Zm104,0L154,187.38a3.91,3.91,0,0,1-4,.13,3.76,3.76,0,0,1-2-3.35V71.84a3.76,3.76,0,0,1,2-3.35,4,4,0,0,1,1.91-.5,3.94,3.94,0,0,1,2.13.63l88.18,56.16a3.8,3.8,0,0,1,0,6.44Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
