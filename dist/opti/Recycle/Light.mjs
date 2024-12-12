var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, e, l) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, A = (a, e) => {
  for (var l in e || (e = {}))
    i.call(e, l) && o(a, l, e[l]);
  if (r)
    for (var l of r(e))
      p.call(e, l) && o(a, l, e[l]);
  return a;
};
var L = (a, e) => {
  var l = {};
  for (var t in a)
    i.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      e.indexOf(t) < 0 && p.call(a, t) && (l[t] = a[t]);
  return l;
};
import c, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const d = s((t, l) => {
  var m = t, { children: a } = m, e = L(m, ["children"]);
  return /* @__PURE__ */ c.createElement(H, A({ ref: l }, e), a, /* @__PURE__ */ c.createElement("path", { d: "M94,208a6,6,0,0,1-6,6H40a22,22,0,0,1-19-33l36.71-63.44-18.76,5a6,6,0,0,1-3.1-11.6l32.77-8.77A6,6,0,0,1,76,106.45l8.8,32.76a6,6,0,0,1-4.24,7.35,6.09,6.09,0,0,1-1.56.21,6,6,0,0,1-5.79-4.45l-5-18.8L31.38,187A10,10,0,0,0,40,202H88A6,6,0,0,1,94,208Zm141-27-23.14-40a6,6,0,0,0-10.38,6l23.14,40A10,10,0,0,1,216,202H142.48l13.76-13.76a6,6,0,0,0-8.48-8.48l-24,24a6,6,0,0,0,0,8.48l24,24a6,6,0,0,0,8.48-8.48L142.48,214H216a22,22,0,0,0,19-33ZM136.65,35l36.72,63.44-18.76-5A6,6,0,0,0,151.5,105l32.78,8.79a6,6,0,0,0,7.34-4.25l8.79-32.78a6,6,0,1,0-11.58-3.11l-5.05,18.82L147,29A22,22,0,0,0,109,29L85.8,69a6,6,0,0,0,10.39,6l23.16-40a10,10,0,0,1,17.3,0Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
