var h = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && r(a, e, t[e]);
  if (V)
    for (var e of V(t))
      L.call(t, e) && r(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var l in a)
    o.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && V)
    for (var l of V(a))
      t.indexOf(l) < 0 && L.call(a, l) && (e[l] = a[l]);
  return e;
};
import H, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((l, e) => {
  var m = l, { children: a } = m, t = p(m, ["children"]);
  return /* @__PURE__ */ H.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M208,34H182V24a6,6,0,0,0-12,0V34H86V24a6,6,0,0,0-12,0V34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Zm2,174a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H74V56a6,6,0,0,0,12,0V46h84V56a6,6,0,0,0,12,0V46h26a2,2,0,0,1,2,2Zm-33.54-92.37-31-2.4L133.51,85.62a6,6,0,0,0-11,0l-11.91,27.61-31,2.4a6,6,0,0,0-3.36,10.61l23.49,19.39-7.16,28.93a6,6,0,0,0,8.87,6.61L128,165.5l26.62,15.67a6,6,0,0,0,8.87-6.61l-7.16-28.93,23.49-19.39a6,6,0,0,0-3.36-10.61Zm-30.68,23.15a6,6,0,0,0-2,6.07l4.63,18.74L131,153.37a6,6,0,0,0-6.08,0l-17.37,10.22,4.63-18.74a6,6,0,0,0-2-6.07L95.28,126.45l19.83-1.53a6,6,0,0,0,5-3.61L128,103.14l7.84,18.17a6,6,0,0,0,5,3.61l19.83,1.53Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
