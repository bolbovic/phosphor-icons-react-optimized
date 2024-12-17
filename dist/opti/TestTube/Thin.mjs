var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var c = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, p = (e, t) => {
  for (var a in t || (t = {}))
    i.call(t, a) && c(e, a, t[a]);
  if (m)
    for (var a of m(t))
      l.call(t, a) && c(e, a, t[a]);
  return e;
};
var n = (e, t) => {
  var a = {};
  for (var r in e)
    i.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      t.indexOf(r) < 0 && l.call(e, r) && (a[r] = e[r]);
  return a;
};
import L, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((r, a) => {
  var o = r, { children: e } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ L.createElement(d, p({ ref: a }, t), e, /* @__PURE__ */ L.createElement("path", { d: "M234.83,89.18l-60-60a4,4,0,0,0-5.66,0L39.94,158.41A40.78,40.78,0,0,0,97.6,216.08L210.16,103.5l23.1-7.7a4,4,0,0,0,1.57-6.62ZM91.94,210.42A32.77,32.77,0,1,1,45.6,164.07L75,134.63c9.2-3.38,23.94-5.08,43.11,4.93,12.09,6.31,22.74,8.48,31.66,8.48,1.64,0,3.2-.09,4.73-.22ZM206.74,96.21a4.06,4.06,0,0,0-1.57,1L165,137.39c-9.2,3.38-23.94,5.08-43.11-4.93-14.3-7.47-26.58-9.13-36.38-8.27L172,37.66l52.6,52.6Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
