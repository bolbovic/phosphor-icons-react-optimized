var M = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var Z = (e, a, t) => a in e ? M(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, i = (e, a) => {
  for (var t in a || (a = {}))
    o.call(a, t) && Z(e, t, a[t]);
  if (r)
    for (var t of r(a))
      V.call(a, t) && Z(e, t, a[t]);
  return e;
};
var l = (e, a) => {
  var t = {};
  for (var m in e)
    o.call(e, m) && a.indexOf(m) < 0 && (t[m] = e[m]);
  if (e != null && r)
    for (var m of r(e))
      a.indexOf(m) < 0 && V.call(e, m) && (t[m] = e[m]);
  return t;
};
import p, { forwardRef as h } from "react";
import c from "../../lib/OptiBase.mjs";
const f = h((m, t) => {
  var H = m, { children: e } = H, a = l(H, ["children"]);
  return /* @__PURE__ */ p.createElement(c, i({ ref: t }, a), e, /* @__PURE__ */ p.createElement("path", { d: "M220.24,91.75,164,35.56A5.93,5.93,0,0,0,160,34H40a6,6,0,0,0-6,6V160a6,6,0,0,0,1.76,4.25l56,56A6,6,0,0,0,96,222H216a6,6,0,0,0,6-6V96A6,6,0,0,0,220.24,91.75ZM166,54.48,201.52,90H166Zm-76,147L54.48,166H90ZM90,154H46V54.48l44,44ZM54.48,46H154V90H98.48ZM154,102v52H102V102ZM102,210V166h55.52l44,44Zm108-8.48-44-44V102h44Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
