var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
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
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const A = h((m, e) => {
  var l = m, { children: a } = l, t = n(l, ["children"]);
  return /* @__PURE__ */ c.createElement(s, Z({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M201.46,54.54a36.06,36.06,0,0,0-50.92,0L138.89,66.76a4,4,0,0,1-5.78-5.52L144.82,49a44,44,0,1,1,62.29,62.15l-12.35,11.78a4,4,0,0,1-5.52-5.78l12.28-11.72A36,36,0,0,0,201.46,54.54Zm-84.35,134.7-11.65,12.22a36,36,0,0,1-51-50.85l12.28-11.72a4,4,0,0,0-5.52-5.78L48.89,144.89A44,44,0,1,0,111.18,207l11.71-12.28a4,4,0,1,0-5.78-5.52ZM216,156H192a4,4,0,0,0,0,8h24a4,4,0,0,0,0-8ZM40,100H64a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8Zm120,88a4,4,0,0,0-4,4v24a4,4,0,0,0,8,0V192A4,4,0,0,0,160,188ZM96,68a4,4,0,0,0,4-4V40a4,4,0,0,0-8,0V64A4,4,0,0,0,96,68Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
