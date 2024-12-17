var L = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? L(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, Z = (a, l) => {
  for (var e in l || (l = {}))
    i.call(l, e) && o(a, e, l[e]);
  if (m)
    for (var e of m(l))
      p.call(l, e) && o(a, e, l[e]);
  return a;
};
var h = (a, l) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import n, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((t, e) => {
  var r = t, { children: a } = r, l = h(r, ["children"]);
  return /* @__PURE__ */ n.createElement(f, Z({ ref: e }, l), a, /* @__PURE__ */ n.createElement("path", { d: "M92,24V16a4,4,0,0,1,8,0v8a4,4,0,0,1-8,0ZM16,100h8a4,4,0,0,0,0-8H16a4,4,0,0,0,0,8ZM126.21,35.58a4,4,0,0,0,5.37-1.79l8-16a4,4,0,0,0-7.16-3.58l-8,16A4,4,0,0,0,126.21,35.58Zm-96,88.84-16,8a4,4,0,0,0,3.58,7.16l16-8a4,4,0,1,0-3.58-7.16Zm186.28,62.41a12,12,0,0,1,0,17L203.8,216.49a12,12,0,0,1-17,0l-51.31-51.31a3.93,3.93,0,0,0-3.58-1.11,4,4,0,0,0-2.89,2.27l-17.78,46.31a.77.77,0,0,1-.07.16A11.85,11.85,0,0,1,100.26,220h-.59a11.88,11.88,0,0,1-10.8-8.23L36.6,51.68A12,12,0,0,1,51.68,36.6L211.76,88.87a12,12,0,0,1,1.05,22.33l-.16.07-46.31,17.78a4,4,0,0,0-1.17,6.47Zm-5.66,5.66-51.31-51.32a12,12,0,0,1,3.7-19.49l.16-.06,46.31-17.79a3.95,3.95,0,0,0-.42-7.35L49.2,44.21a4,4,0,0,0-5,5L96.48,209.27a4,4,0,0,0,7.36.42l17.78-46.31a1.11,1.11,0,0,1,.07-.16,12,12,0,0,1,8.76-7,12.21,12.21,0,0,1,2.24-.21,12,12,0,0,1,8.49,3.52l51.31,51.31a4,4,0,0,0,5.65,0l12.69-12.69A4,4,0,0,0,210.83,192.49Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
