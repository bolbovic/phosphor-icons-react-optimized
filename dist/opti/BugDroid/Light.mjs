var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && A(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && A(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const M = l((r, e) => {
  var o = r, { children: a } = o, t = Z(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, L({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M189,51.47l15.22-15.23a6,6,0,1,0-8.48-8.48L180,43.54A85.76,85.76,0,0,0,76,43.54L60.24,27.76a6,6,0,0,0-8.48,8.48L67,51.47A85.7,85.7,0,0,0,42,112v40a86,86,0,0,0,172,0V112A85.7,85.7,0,0,0,189,51.47ZM128,38a74.09,74.09,0,0,1,74,74v10H54V112A74.09,74.09,0,0,1,128,38Zm0,188a74.09,74.09,0,0,1-74-74V134H202v18A74.09,74.09,0,0,1,128,226ZM146,92a10,10,0,1,1,10,10A10,10,0,0,1,146,92ZM90,92a10,10,0,1,1,10,10A10,10,0,0,1,90,92Z" }));
});
M.displayName = "Light";
export {
  M as Light
};
