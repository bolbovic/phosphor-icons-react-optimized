var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var r = (a, e, l) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, A = (a, e) => {
  for (var l in e || (e = {}))
    p.call(e, l) && r(a, l, e[l]);
  if (m)
    for (var l of m(e))
      d.call(e, l) && r(a, l, e[l]);
  return a;
};
var L = (a, e) => {
  var l = {};
  for (var t in a)
    p.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && d.call(a, t) && (l[t] = a[t]);
  return l;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = i((t, l) => {
  var o = t, { children: a } = o, e = L(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, A({ ref: l }, e), a, /* @__PURE__ */ c.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,24a83.57,83.57,0,0,1,44,12.48v16L151.79,96l-28.47,3.85L104.62,87.6a20,20,0,0,0-28.07,5.28l-20.94,31.3a19.89,19.89,0,0,0-3.38,11l-.16,28.69A84,84,0,0,1,128,44ZM68.41,187.14A20,20,0,0,0,76,171.55l.2-35,18.07-27,16.62,10.88a19.92,19.92,0,0,0,14.14,3.42l31.47-4.26A20,20,0,0,0,169,112.79L191.16,87a20.15,20.15,0,0,0,4.39-8.9,83.78,83.78,0,0,1,14.12,69.48l-11.34-10.37a20.08,20.08,0,0,0-21.17-3.71l-30.45,12.66a20.1,20.1,0,0,0-12.11,15.55l-2.39,16.2a20,20,0,0,0,14.71,22.26l16,4.18a83.78,83.78,0,0,1-94.47-17.24Zm116.77,2.32-1.63-1.63a20.05,20.05,0,0,0-9.08-5.22l-18-4.72L158,167.48l26-10.81L200,171.26A84.84,84.84,0,0,1,185.18,189.46Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
