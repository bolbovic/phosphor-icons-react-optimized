var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import c, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const d = s((l, e) => {
  var r = l, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ c.createElement(A, L({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M86,180a10,10,0,1,1-10-10A10,10,0,0,1,86,180Zm152-23.81V208a14,14,0,0,1-14,14H76a44.18,44.18,0,0,1-7.58-.65,42,42,0,0,1-33.81-48.64l25-143.13A13.94,13.94,0,0,1,75.82,18.22l54.67,9.72a14,14,0,0,1,11.3,16.21l-12.67,72.44,71-25.75a14,14,0,0,1,17.89,8.32l19.09,52.22A15.66,15.66,0,0,1,238,156.19Zm-133.07,29L130,42.08a2,2,0,0,0-1.58-2.32L73.72,30l-.34,0a1.84,1.84,0,0,0-1.07.35,2,2,0,0,0-.82,1.3l-25,143.13a30,30,0,0,0,24.09,34.76,29.25,29.25,0,0,0,22-4.89,29.81,29.81,0,0,0,12.33-19.44Zm8.25,13.17L224.71,158a2,2,0,0,0,1.11-1,1.86,1.86,0,0,0,.06-1.46l-19.09-52.21a2,2,0,0,0-2.53-1.17l-77.53,28.09-10,57.07A41.9,41.9,0,0,1,113.18,198.38ZM226,170.27,116.35,210H224a2,2,0,0,0,2-2Z" }));
});
d.displayName = "Light";
export {
  d as Light
};