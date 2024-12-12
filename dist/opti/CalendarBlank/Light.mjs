var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (a, e, V) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: V }) : a[e] = V, p = (a, e) => {
  for (var V in e || (e = {}))
    o.call(e, V) && m(a, V, e[V]);
  if (r)
    for (var V of r(e))
      i.call(e, V) && m(a, V, e[V]);
  return a;
};
var h = (a, e) => {
  var V = {};
  for (var t in a)
    o.call(a, t) && e.indexOf(t) < 0 && (V[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      e.indexOf(t) < 0 && i.call(a, t) && (V[t] = a[t]);
  return V;
};
import c, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const d = s((t, V) => {
  var H = t, { children: a } = H, e = h(H, ["children"]);
  return /* @__PURE__ */ c.createElement(A, p({ ref: V }, e), a, /* @__PURE__ */ c.createElement("path", { d: "M208,34H182V24a6,6,0,0,0-12,0V34H86V24a6,6,0,0,0-12,0V34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM48,46H74V56a6,6,0,0,0,12,0V46h84V56a6,6,0,0,0,12,0V46h26a2,2,0,0,1,2,2V82H46V48A2,2,0,0,1,48,46ZM208,210H48a2,2,0,0,1-2-2V94H210V208A2,2,0,0,1,208,210Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
