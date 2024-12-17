var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    L.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var l in a)
    L.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && i.call(a, l) && (e[l] = a[l]);
  return e;
};
import c, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const d = s((l, e) => {
  var m = l, { children: a } = m, t = h(m, ["children"]);
  return /* @__PURE__ */ c.createElement(H, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M38,64V200a2,2,0,0,0,2,2h80a6,6,0,0,1,0,12H40a14,14,0,0,1-14-14V64A14,14,0,0,1,40,50H93.33a14.06,14.06,0,0,1,8.4,2.8L130,74h86a14,14,0,0,1,14,14v32a6,6,0,0,1-12,0V88a2,2,0,0,0-2-2H128a6,6,0,0,1-3.6-1.2L94.53,62.4a2,2,0,0,0-1.2-.4H40A2,2,0,0,0,38,64ZM235.82,166.24l-23.49,19.39,7.16,28.93a6,6,0,0,1-8.87,6.61L184,205.5l-26.62,15.67a6,6,0,0,1-8.87-6.61l7.16-28.93-23.49-19.39a6,6,0,0,1,3.36-10.61l31-2.4,11.91-27.61a6,6,0,0,1,11,0l11.91,27.61,31,2.4a6,6,0,0,1,3.36,10.61Zm-19.1.21-19.83-1.53a6,6,0,0,1-5-3.61L184,143.14l-7.84,18.17a6,6,0,0,1-5,3.61l-19.83,1.53,14.94,12.33a6,6,0,0,1,2,6.07l-4.63,18.74L181,193.36a6,6,0,0,1,6.08,0l17.37,10.23-4.64-18.74a6,6,0,0,1,2-6.07Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
