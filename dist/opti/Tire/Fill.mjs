var Z = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    s.call(t, e) && c(a, e, t[e]);
  if (l)
    for (var e of l(t))
      o.call(t, e) && c(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    s.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && l)
    for (var m of l(a))
      t.indexOf(m) < 0 && o.call(a, m) && (e[m] = a[m]);
  return e;
};
import L, { forwardRef as f } from "react";
import d from "../../lib/OptiBase.mjs";
const n = f((m, e) => {
  var r = m, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ L.createElement(d, i({ ref: e }, t), a, /* @__PURE__ */ L.createElement("path", { d: "M184,128c0,22.09-7.16,40-16,40s-16-17.91-16-40,7.16-40,16-40S184,105.91,184,128Zm56,96a8,8,0,0,1-8,8H92c-33.64,0-60-45.68-60-104S58.36,24,92,24h72c33.64,0,60,45.68,60,104,0,37.47-10.88,69.73-27.59,88H232A8,8,0,0,1,240,224ZM57.87,111.81a7.93,7.93,0,0,0,4.64-1.49L80,97.83l13.28,9.49a8,8,0,0,0,9.3-13L84.65,81.49a8,8,0,0,0-9.3,0L53.21,97.3a8,8,0,0,0,4.66,14.51Zm46.67,47.89L84.65,145.49a8,8,0,0,0-9.3,0L56,159.29a8,8,0,1,0,9.3,13L80,161.83l15.24,10.88a8,8,0,1,0,9.3-13Zm89.2,32.37c9.19-17,14.26-39.74,14.26-64.07s-5.07-47.09-14.26-64.07C185.38,48.5,174.82,40,164,40s-21.38,8.5-29.74,23.93C125.07,80.91,120,103.67,120,128s5.07,47.09,14.26,64.07C142.62,207.5,153.18,216,164,216S185.38,207.5,193.74,192.07Z" }));
});
n.displayName = "Fill";
export {
  n as Fill
};
