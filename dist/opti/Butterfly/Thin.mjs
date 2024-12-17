var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var c in a)
    i.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && r)
    for (var c of r(a))
      t.indexOf(c) < 0 && p.call(a, c) && (e[c] = a[c]);
  return e;
};
import C, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((c, e) => {
  var m = c, { children: a } = m, t = A(m, ["children"]);
  return /* @__PURE__ */ C.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ C.createElement("path", { d: "M229.5,52.94C224.89,47,218,44,208.93,44c-25.86,0-61.28,28.73-76.93,57.28V56a4,4,0,0,0-8,0v45.28C108.35,72.73,72.93,44,47.07,44c-9,0-16,3-20.57,8.94-11.1,14.26-6,42.25.5,67.75,3.67,14.42,10.55,24.64,20.48,30.38a36.79,36.79,0,0,0,12.75,4.45A40,40,0,1,0,128,197.43a40,40,0,1,0,67.77-41.9,36.82,36.82,0,0,0,12.75-4.46c9.93-5.74,16.81-16,20.48-30.38C235.47,95.19,240.6,67.2,229.5,52.94ZM92,212a32.12,32.12,0,0,1-3.56-64,4,4,0,0,0-.88-8A39.64,39.64,0,0,0,67.78,148c-22.8,1.24-30.68-20-33-29.24-5.65-22.24-11-49.26-1.95-60.87C35.87,53.91,40.54,52,47.07,52,76.55,52,124,98.68,124,127.67V180A32,32,0,0,1,92,212Zm129.24-93.28c-2.34,9.22-10.22,30.47-33,29.24A39.68,39.68,0,0,0,168.44,140a4,4,0,0,0-.88,8A32.1,32.1,0,1,1,132,180V127.67c0-29,47.45-75.67,76.93-75.67,6.53,0,11.2,1.91,14.26,5.85C232.22,69.46,226.89,96.48,221.24,118.72Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
