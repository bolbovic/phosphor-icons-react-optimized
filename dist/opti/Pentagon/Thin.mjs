var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((l, e) => {
  var m = l, { children: a } = m, t = A(m, ["children"]);
  return /* @__PURE__ */ c.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M223.14,90.74,135.19,22.4l-.09-.07a12,12,0,0,0-14.19,0l-.09.07L32.87,90.74A12,12,0,0,0,28.57,104l32,107.7A12,12,0,0,0,72,220H184a12,12,0,0,0,11.44-8.41l32-107.53A12,12,0,0,0,223.14,90.74Zm-3.36,11-32,107.54A4,4,0,0,1,184,212H72a4,4,0,0,1-3.79-2.69l-32-107.7a4,4,0,0,1,1.44-4.45l.09-.07,87.94-68.33a4,4,0,0,1,4.65,0l87.94,68.33.09.07A4,4,0,0,1,219.78,101.69Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
