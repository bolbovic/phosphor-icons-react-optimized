var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      h.call(t, e) && o(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    c.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && h.call(a, m) && (e[m] = a[m]);
  return e;
};
import l, { forwardRef as H } from "react";
import f from "../../lib/OptiBase.mjs";
const s = H((m, e) => {
  var A = m, { children: a } = A, t = p(A, ["children"]);
  return /* @__PURE__ */ l.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M164,224a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,224Zm-20-84H119.47l27.86-41.78A4,4,0,0,0,144,92H112a4,4,0,0,0,0,8h24.53l-27.86,41.78A4,4,0,0,0,112,148h32a4,4,0,0,0,0-8Zm74.38,50A11.84,11.84,0,0,1,208,196H48A12,12,0,0,1,37.65,178C43.42,168,52,140.13,52,104a76,76,0,1,1,152,0c0,36.13,8.59,64,14.36,73.95A11.92,11.92,0,0,1,218.38,190Zm-6.95-8C204,169.17,196,139.31,196,104a68,68,0,1,0-136,0c0,35.32-8,65.17-15.44,78a4,4,0,0,0,0,4A3.91,3.91,0,0,0,48,188H208a3.91,3.91,0,0,0,3.44-2A4,4,0,0,0,211.43,182Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
