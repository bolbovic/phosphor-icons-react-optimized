var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import l, { forwardRef as A } from "react";
import d from "../../lib/OptiBase.mjs";
const h = A((m, e) => {
  var o = m, { children: a } = o, t = Z(o, ["children"]);
  return /* @__PURE__ */ l.createElement(d, s({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M92,150a10,10,0,1,1,10-10A10,10,0,0,1,92,150Zm72-20a10,10,0,1,0,10,10A10,10,0,0,0,164,130Zm66-2A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128ZM172.67,83,128,112.79,83.33,83a6,6,0,0,0-6.66,10l48,32a6,6,0,0,0,6.66,0l48-32a6,6,0,1,0-6.66-10Zm-17.35,96c-8.13-5.4-15.88-9-27.32-9s-19.19,3.6-27.32,9a6,6,0,0,0,6.64,10c6.67-4.43,12.19-7,20.68-7s14,2.57,20.68,7a5.94,5.94,0,0,0,3.31,1,6,6,0,0,0,3.33-11Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
