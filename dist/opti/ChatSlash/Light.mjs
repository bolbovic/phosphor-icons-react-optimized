var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as A } from "react";
import L from "../../lib/OptiBase.mjs";
const V = A((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(L, H({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M52.44,36A6,6,0,0,0,43.56,44L49,50H40A14,14,0,0,0,26,64V224a13.86,13.86,0,0,0,8.09,12.69,13.89,13.89,0,0,0,15-2L82.23,206H190.8l12.76,14a6,6,0,1,0,8.88-8.07ZM80,194a6,6,0,0,0-3.92,1.46l-34.79,30A2,2,0,0,1,38,224V64a2,2,0,0,1,2-2H59.89l120,132ZM230,64V186a6,6,0,0,1-12,0V64a2,2,0,0,0-2-2H105.79a6,6,0,0,1,0-12H216A14,14,0,0,1,230,64Z" }));
});
V.displayName = "Light";
export {
  V as Light
};
