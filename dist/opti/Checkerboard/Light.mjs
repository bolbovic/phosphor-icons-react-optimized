var p = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var H = (e, a, t) => a in e ? p(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, h = (e, a) => {
  for (var t in a || (a = {}))
    Z.call(a, t) && H(e, t, a[t]);
  if (m)
    for (var t of m(a))
      L.call(a, t) && H(e, t, a[t]);
  return e;
};
var o = (e, a) => {
  var t = {};
  for (var V in e)
    Z.call(e, V) && a.indexOf(V) < 0 && (t[V] = e[V]);
  if (e != null && m)
    for (var V of m(e))
      a.indexOf(V) < 0 && L.call(e, V) && (t[V] = e[V]);
  return t;
};
import i, { forwardRef as A } from "react";
import M from "../../lib/OptiBase.mjs";
const c = A((V, t) => {
  var r = V, { children: e } = r, a = o(r, ["children"]);
  return /* @__PURE__ */ i.createElement(M, h({ ref: t }, a), e, /* @__PURE__ */ i.createElement("path", { d: "M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Zm-13.52,88L134,61.52V46h15.52L210,106.48V122ZM134,78.48,177.52,122H134ZM210,48V89.52L166.48,46H208A2,2,0,0,1,210,48ZM48,46h74v76H46V48A2,2,0,0,1,48,46Zm58.48,164L46,149.52V134H61.52L122,194.48V210ZM122,177.52,78.48,134H122ZM46,208V166.48L89.52,210H48A2,2,0,0,1,46,208Zm162,2H134V192h0V134h76v74A2,2,0,0,1,208,210Z" }));
});
c.displayName = "Light";
export {
  c as Light
};
