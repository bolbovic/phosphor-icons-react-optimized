var p = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var m = (a, e, V) => e in a ? p(a, e, { enumerable: !0, configurable: !0, writable: !0, value: V }) : a[e] = V, h = (a, e) => {
  for (var V in e || (e = {}))
    o.call(e, V) && m(a, V, e[V]);
  if (r)
    for (var V of r(e))
      A.call(e, V) && m(a, V, e[V]);
  return a;
};
var i = (a, e) => {
  var V = {};
  for (var t in a)
    o.call(a, t) && e.indexOf(t) < 0 && (V[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      e.indexOf(t) < 0 && A.call(a, t) && (V[t] = a[t]);
  return V;
};
import l, { forwardRef as n } from "react";
import Z from "../../lib/OptiBase.mjs";
const c = n((t, V) => {
  var H = t, { children: a } = H, e = i(H, ["children"]);
  return /* @__PURE__ */ l.createElement(Z, h({ ref: V }, e), a, /* @__PURE__ */ l.createElement("path", { d: "M208,36H180V24a4,4,0,0,0-8,0V36H84V24a4,4,0,0,0-8,0V36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM48,44H76V56a4,4,0,0,0,8,0V44h88V56a4,4,0,0,0,8,0V44h28a4,4,0,0,1,4,4V84H44V48A4,4,0,0,1,48,44ZM208,212H48a4,4,0,0,1-4-4V92H212V208A4,4,0,0,1,208,212ZM108,120v64a4,4,0,0,1-8,0V126.47l-10.21,5.11a4,4,0,0,1-3.58-7.16l16-8A4,4,0,0,1,108,120Zm60,28-24,32h24a4,4,0,0,1,0,8H136a4,4,0,0,1-3.2-6.4l28.78-38.37A11.88,11.88,0,0,0,164,136a12,12,0,0,0-22.4-6,4,4,0,0,1-6.92-4A20,20,0,0,1,172,136,19.79,19.79,0,0,1,168,148Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};
