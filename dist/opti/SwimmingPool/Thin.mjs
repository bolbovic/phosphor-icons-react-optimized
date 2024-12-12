var n = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var r = (c, s, a) => s in c ? n(c, s, { enumerable: !0, configurable: !0, writable: !0, value: a }) : c[s] = a, i = (c, s) => {
  for (var a in s || (s = {}))
    V.call(s, a) && r(c, a, s[a]);
  if (t)
    for (var a of t(s))
      o.call(s, a) && r(c, a, s[a]);
  return c;
};
var p = (c, s) => {
  var a = {};
  for (var e in c)
    V.call(c, e) && s.indexOf(e) < 0 && (a[e] = c[e]);
  if (c != null && t)
    for (var e of t(c))
      s.indexOf(e) < 0 && o.call(c, e) && (a[e] = c[e]);
  return a;
};
import h, { forwardRef as Z } from "react";
import f from "../../lib/OptiBase.mjs";
const d = Z((e, a) => {
  var m = e, { children: c } = m, s = p(m, ["children"]);
  return /* @__PURE__ */ h.createElement(f, i({ ref: a }, s), c, /* @__PURE__ */ h.createElement("path", { d: "M88,145.39a4,4,0,0,0,4-4V124h72v19.29a4,4,0,0,0,8,0V32a4,4,0,0,0-8,0V52H92V32a4,4,0,0,0-8,0V141.39A4,4,0,0,0,88,145.39ZM92,116V92h72v24Zm72-56V84H92V60ZM28,168a4,4,0,0,1,4-4c13.21,0,20.12,4.61,26.22,8.67,5.9,3.93,11,7.33,21.78,7.33s15.88-3.4,21.78-7.33c6.09-4.06,13-8.67,26.21-8.67s20.13,4.61,26.22,8.67c5.9,3.93,11,7.33,21.79,7.33s15.88-3.4,21.78-7.33c6.1-4.06,13-8.67,26.22-8.67a4,4,0,0,1,0,8c-10.79,0-15.88,3.4-21.78,7.33-6.1,4.06-13,8.67-26.22,8.67s-20.13-4.61-26.22-8.67c-5.9-3.93-11-7.33-21.79-7.33s-15.88,3.4-21.78,7.33c-6.09,4.06-13,8.67-26.21,8.67s-20.12-4.61-26.22-8.67C47.88,175.4,42.79,172,32,172A4,4,0,0,1,28,168Zm200,40a4,4,0,0,1-4,4c-10.79,0-15.88,3.4-21.78,7.33-6.1,4.06-13,8.67-26.22,8.67s-20.13-4.61-26.22-8.67c-5.9-3.93-11-7.33-21.79-7.33s-15.88,3.4-21.78,7.33c-6.09,4.06-13,8.67-26.21,8.67s-20.12-4.61-26.22-8.67C47.88,215.4,42.79,212,32,212a4,4,0,0,1,0-8c13.21,0,20.12,4.61,26.22,8.67,5.9,3.93,11,7.33,21.78,7.33s15.88-3.4,21.78-7.33c6.09-4.06,13-8.67,26.21-8.67s20.13,4.61,26.22,8.67c5.9,3.93,11,7.33,21.79,7.33s15.88-3.4,21.78-7.33c6.1-4.06,13-8.67,26.22-8.67A4,4,0,0,1,228,208Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
