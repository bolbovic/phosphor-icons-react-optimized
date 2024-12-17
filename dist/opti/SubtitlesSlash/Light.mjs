var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && l(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && l(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var H in a)
    o.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && m)
    for (var H of m(a))
      t.indexOf(H) < 0 && i.call(a, H) && (e[H] = a[H]);
  return e;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const A = h((H, e) => {
  var r = H, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M52.44,36A6,6,0,0,0,43.56,44L49,50H32A14,14,0,0,0,18,64V192a14,14,0,0,0,14,14H190.8l12.76,14a6,6,0,0,0,8.88-8.08ZM32,194a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H59.89l61.82,68H104a6,6,0,0,0,0,12h28.62l18.18,20H56a6,6,0,0,0,0,12H161.71l18.18,20Zm18-58a6,6,0,0,1,6-6H72a6,6,0,0,1,0,12H56A6,6,0,0,1,50,136ZM238,64V194.83a6,6,0,1,1-12,0V64a2,2,0,0,0-2-2H105.79a6,6,0,0,1,0-12H224A14,14,0,0,1,238,64Zm-59.48,78a6,6,0,1,1,0-12H200a6,6,0,0,1,0,12Z" }));
});
A.displayName = "Light";
export {
  A as Light
};
