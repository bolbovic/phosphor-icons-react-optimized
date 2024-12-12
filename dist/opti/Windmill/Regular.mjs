var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, e, l) => e in a ? c(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, Z = (a, e) => {
  for (var l in e || (e = {}))
    L.call(e, l) && o(a, l, e[l]);
  if (r)
    for (var l of r(e))
      p.call(e, l) && o(a, l, e[l]);
  return a;
};
var f = (a, e) => {
  var l = {};
  for (var t in a)
    L.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      e.indexOf(t) < 0 && p.call(a, t) && (l[t] = a[t]);
  return l;
};
import s, { forwardRef as d } from "react";
import i from "../../lib/OptiBase.mjs";
const M = d((t, l) => {
  var m = t, { children: a } = m, e = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(i, Z({ ref: l }, e), a, /* @__PURE__ */ s.createElement("path", { d: "M224,224H182.94l-6.3-44.12,3.24,1.91a16,16,0,0,0,21.91-5.67l12-20.34a16,16,0,0,0-5.67-21.91l-35-20.61,40.69-69.13a16,16,0,0,0-5.67-21.91l-20.34-12a16,16,0,0,0-21.91,5.67l-20.61,35L76.12,10.22a16,16,0,0,0-21.91,5.67l-12,20.33a16,16,0,0,0,5.67,21.92l35,20.61L42.21,147.88a16,16,0,0,0,5.67,21.91l20.34,12a15.57,15.57,0,0,0,10.58,2L73.06,224H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16Zm-24-76.34L188,168l-69.13-40.69,12-20.35ZM179.66,24,200,36l-40.69,69.14L139,93.17ZM56,44.35,68,24,137.14,64.7l-12,20.35ZM76.34,168,56,156,96.69,86.86l20.36,12Zm12.88,56L98,162.8l12.77-21.7L159,169.5l7.79,54.5Z" }));
});
M.displayName = "Regular";
export {
  M as Regular,
  M as default
};
