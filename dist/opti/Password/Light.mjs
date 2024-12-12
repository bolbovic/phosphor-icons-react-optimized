var L = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? L(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import s, { forwardRef as V } from "react";
import d from "../../lib/OptiBase.mjs";
const h = V((l, e) => {
  var r = l, { children: a } = r, t = f(r, ["children"]);
  return /* @__PURE__ */ s.createElement(d, c({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M46,56V200a6,6,0,0,1-12,0V56a6,6,0,0,1,12,0Zm94.58,56.41L118,119.74V96a6,6,0,0,0-12,0v23.74l-22.58-7.33a6,6,0,1,0-3.71,11.41l22.58,7.33-14,19.21a6,6,0,1,0,9.7,7.06l14-19.21,14,19.21a6,6,0,0,0,9.7-7.06l-14-19.21,22.58-7.33a6,6,0,1,0-3.71-11.41Zm103.56,3.85a6,6,0,0,0-7.56-3.85L214,119.74V96a6,6,0,0,0-12,0v23.74l-22.58-7.33a6,6,0,1,0-3.71,11.41l22.58,7.33-13.95,19.21a6,6,0,1,0,9.7,7.06l14-19.21,14,19.21a6,6,0,0,0,9.7-7.06l-13.95-19.21,22.58-7.33A6,6,0,0,0,244.14,116.26Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
