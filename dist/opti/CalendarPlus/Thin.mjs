var A = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var m = (a, e, V) => e in a ? A(a, e, { enumerable: !0, configurable: !0, writable: !0, value: V }) : a[e] = V, i = (a, e) => {
  for (var V in e || (e = {}))
    h.call(e, V) && m(a, V, e[V]);
  if (H)
    for (var V of H(e))
      o.call(e, V) && m(a, V, e[V]);
  return a;
};
var p = (a, e) => {
  var V = {};
  for (var t in a)
    h.call(a, t) && e.indexOf(t) < 0 && (V[t] = a[t]);
  if (a != null && H)
    for (var t of H(a))
      e.indexOf(t) < 0 && o.call(a, t) && (V[t] = a[t]);
  return V;
};
import n, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((t, V) => {
  var r = t, { children: a } = r, e = p(r, ["children"]);
  return /* @__PURE__ */ n.createElement(f, i({ ref: V }, e), a, /* @__PURE__ */ n.createElement("path", { d: "M208,36H180V24a4,4,0,0,0-8,0V36H84V24a4,4,0,0,0-8,0V36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM48,44H76V56a4,4,0,0,0,8,0V44h88V56a4,4,0,0,0,8,0V44h28a4,4,0,0,1,4,4V84H44V48A4,4,0,0,1,48,44ZM208,212H48a4,4,0,0,1-4-4V92H212V208A4,4,0,0,1,208,212Zm-52-60a4,4,0,0,1-4,4H132v20a4,4,0,0,1-8,0V156H104a4,4,0,0,1,0-8h20V128a4,4,0,0,1,8,0v20h20A4,4,0,0,1,156,152Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
