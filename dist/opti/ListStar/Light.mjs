var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import Z, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((l, e) => {
  var r = l, { children: a } = r, t = L(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(h, H({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M34,64a6,6,0,0,1,6-6H216a6,6,0,0,1,0,12H40A6,6,0,0,1,34,64Zm6,70H96a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12Zm72,52H40a6,6,0,0,0,0,12h72a6,6,0,0,0,0-12Zm123.82-43.76-23.49,19.39,7.16,28.93a6,6,0,0,1-8.87,6.61L184,181.5l-26.62,15.67a6,6,0,0,1-8.87-6.61l7.16-28.93-23.49-19.39a6,6,0,0,1,3.36-10.61l31-2.4,11.91-27.61a6,6,0,0,1,11,0l11.91,27.61,31,2.4a6,6,0,0,1,3.36,10.61Zm-19.1.21-19.83-1.53a6,6,0,0,1-5-3.61L184,119.14l-7.84,18.17a6,6,0,0,1-5,3.61l-19.83,1.53,14.94,12.33a6,6,0,0,1,2,6.07l-4.63,18.74L181,169.37a6,6,0,0,1,6.08,0l17.37,10.22-4.63-18.74a6,6,0,0,1,2-6.07Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
