var H = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && r(a, e, t[e]);
  if (l)
    for (var e of l(t))
      V.call(t, e) && r(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var m in a)
    A.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && l)
    for (var m of l(a))
      t.indexOf(m) < 0 && V.call(a, m) && (e[m] = a[m]);
  return e;
};
import h, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((m, e) => {
  var o = m, { children: a } = o, t = d(o, ["children"]);
  return /* @__PURE__ */ h.createElement(c, p({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M228,96V208a12,12,0,0,1-24,0V96a52.06,52.06,0,0,0-52-52H104A52.06,52.06,0,0,0,52,96V208a12,12,0,0,1-24,0V96a76.08,76.08,0,0,1,76-76h48A76.08,76.08,0,0,1,228,96Zm-40,0v72a28,28,0,0,1-18.89,26.47l2,5.07a12,12,0,0,1-6.68,15.6A11.86,11.86,0,0,1,160,216a12,12,0,0,1-11.14-7.54l-5-12.46H112.12l-5,12.46A12,12,0,0,1,96,216a11.86,11.86,0,0,1-4.46-.86,12,12,0,0,1-6.68-15.6l2-5.07A28,28,0,0,1,68,168V96A28,28,0,0,1,96,68h64A28,28,0,0,1,188,96ZM92,96v36h72V96a4,4,0,0,0-4-4H96A4,4,0,0,0,92,96Zm72,72V156H140v16h20A4,4,0,0,0,164,168Zm-48,4V156H92v12a4,4,0,0,0,4,4Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
