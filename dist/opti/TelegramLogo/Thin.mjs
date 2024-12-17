var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var L = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && L(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && L(a, e, t[e]);
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
import c, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const Z = s((m, e) => {
  var o = m, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ c.createElement(A, l({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M226.27,29.22a5,5,0,0,0-5.1-.87L18.51,107.66a10.22,10.22,0,0,0,1.75,19.56L76,138.16V200a12,12,0,0,0,7.51,11.13A12.1,12.1,0,0,0,88,212a12,12,0,0,0,8.62-3.68l28-29,43,37.71a12,12,0,0,0,7.89,3,12.47,12.47,0,0,0,3.74-.59,11.87,11.87,0,0,0,8-8.72L227.87,34.12A5,5,0,0,0,226.27,29.22ZM20,117.38a2.13,2.13,0,0,1,1.42-2.27L196.07,46.76l-117,83.85L21.81,119.37A2.12,2.12,0,0,1,20,117.38Zm70.87,85.38A4,4,0,0,1,84,200V143.7L118.58,174Zm88.58,6.14a4,4,0,0,1-6.57,2.09L86.43,135.18,218.13,40.8Z" }));
});
Z.displayName = "Thin";
export {
  Z as Thin
};
