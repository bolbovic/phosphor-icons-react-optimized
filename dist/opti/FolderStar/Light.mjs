var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, e, l) => e in a ? c(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, A = (a, e) => {
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
import H, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((t, l) => {
  var m = t, { children: a } = m, e = L(m, ["children"]);
  return /* @__PURE__ */ H.createElement(h, A({ ref: l }, e), a, /* @__PURE__ */ H.createElement("path", { d: "M216,86a2,2,0,0,1,2,2v32a6,6,0,0,0,12,0V88a14,14,0,0,0-14-14H130.48l-27.9-27.9A13.9,13.9,0,0,0,92.69,42H40A14,14,0,0,0,26,56V200.61A13.39,13.39,0,0,0,39.38,214h81.18a6,6,0,0,0,0-12H39.38A1.4,1.4,0,0,1,38,200.61V86ZM40,54H92.69a2,2,0,0,1,1.41.58L113.52,74H38V56A2,2,0,0,1,40,54ZM237.72,159.8a6,6,0,0,0-5.26-4.17l-31-2.4-11.91-27.61a6,6,0,0,0-11,0l-11.91,27.61-31,2.4a6,6,0,0,0-3.36,10.61l23.49,19.39-7.16,28.93a6,6,0,0,0,8.87,6.61L184,205.5l26.62,15.67a6,6,0,0,0,8.87-6.61l-7.16-28.93,23.49-19.39A6,6,0,0,0,237.72,159.8Zm-35.94,19a6,6,0,0,0-2,6.07l4.64,18.74L187,193.36a6,6,0,0,0-6.08,0l-17.37,10.23,4.63-18.74a6,6,0,0,0-2-6.07l-14.94-12.33,19.83-1.53a6,6,0,0,0,5-3.61L184,143.14l7.84,18.17a6,6,0,0,0,5,3.61l19.83,1.53Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
