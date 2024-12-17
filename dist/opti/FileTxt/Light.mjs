var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      h.call(t, e) && o(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    H.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && h.call(a, m) && (e[m] = a[m]);
  return e;
};
import L, { forwardRef as V } from "react";
import Z from "../../lib/OptiBase.mjs";
const c = V((m, e) => {
  var l = m, { children: a } = l, t = p(l, ["children"]);
  return /* @__PURE__ */ L.createElement(Z, i({ ref: e }, t), a, /* @__PURE__ */ L.createElement("path", { d: "M48,118a6,6,0,0,0,6-6V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50v18a6,6,0,0,0,12,0V88a6,6,0,0,0-1.76-4.24l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40v72A6,6,0,0,0,48,118ZM158,46.48,193.52,82H158Zm-5.12,109L135.37,180l17.51,24.51a6,6,0,1,1-9.76,7L128,190.32l-15.12,21.17a6,6,0,0,1-9.76-7L120.63,180l-17.51-24.51a6,6,0,1,1,9.76-7L128,169.68l15.12-21.17a6,6,0,0,1,9.76,7ZM90,152a6,6,0,0,1-6,6H70v50a6,6,0,0,1-12,0V158H44a6,6,0,0,1,0-12H84A6,6,0,0,1,90,152Zm128,0a6,6,0,0,1-6,6H198v50a6,6,0,0,1-12,0V158H172a6,6,0,0,1,0-12h40A6,6,0,0,1,218,152Z" }));
});
c.displayName = "Light";
export {
  c as Light
};
