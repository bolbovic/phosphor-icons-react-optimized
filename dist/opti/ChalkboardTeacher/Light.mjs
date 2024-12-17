var f = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (H)
    for (var e of H(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && H)
    for (var r of H(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = h((r, e) => {
  var m = r, { children: a } = m, t = A(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, V({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H53.39a6,6,0,0,0,5.42-3.43,50,50,0,0,1,90.38,0,6,6,0,0,0,5.42,3.43H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM78,144a26,26,0,1,1,26,26A26,26,0,0,1,78,144Zm140,56a2,2,0,0,1-2,2H158.27a62.34,62.34,0,0,0-31.48-27.61,38,38,0,1,0-45.58,0A62.34,62.34,0,0,0,49.73,202H40a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2ZM198,80v96a6,6,0,0,1-6,6H176a6,6,0,0,1,0-12h10V86H70V96a6,6,0,0,1-12,0V80a6,6,0,0,1,6-6H192A6,6,0,0,1,198,80Z" }));
});
Z.displayName = "Light";
export {
  Z as Light
};
