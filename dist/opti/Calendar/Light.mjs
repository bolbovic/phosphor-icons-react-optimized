var l = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var H = (a, e, V) => e in a ? l(a, e, { enumerable: !0, configurable: !0, writable: !0, value: V }) : a[e] = V, i = (a, e) => {
  for (var V in e || (e = {}))
    o.call(e, V) && H(a, V, e[V]);
  if (m)
    for (var V of m(e))
      h.call(e, V) && H(a, V, e[V]);
  return a;
};
var p = (a, e) => {
  var V = {};
  for (var t in a)
    o.call(a, t) && e.indexOf(t) < 0 && (V[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && h.call(a, t) && (V[t] = a[t]);
  return V;
};
import A, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((t, V) => {
  var r = t, { children: a } = r, e = p(r, ["children"]);
  return /* @__PURE__ */ A.createElement(c, i({ ref: V }, e), a, /* @__PURE__ */ A.createElement("path", { d: "M208,34H182V24a6,6,0,0,0-12,0V34H86V24a6,6,0,0,0-12,0V34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM48,46H74V56a6,6,0,0,0,12,0V46h84V56a6,6,0,0,0,12,0V46h26a2,2,0,0,1,2,2V82H46V48A2,2,0,0,1,48,46ZM208,210H48a2,2,0,0,1-2-2V94H210V208A2,2,0,0,1,208,210Zm-98-90v64a6,6,0,0,1-12,0V129.71l-7.32,3.66a6,6,0,1,1-5.36-10.74l16-8A6,6,0,0,1,110,120Zm59.57,29.25L148,178h20a6,6,0,0,1,0,12H136a6,6,0,0,1-4.8-9.6L160,142a10,10,0,1,0-16.65-11A6,6,0,1,1,133,125a22,22,0,1,1,36.62,24.26Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
