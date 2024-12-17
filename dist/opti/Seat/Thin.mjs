var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? f(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, H = (a, l) => {
  for (var e in l || (l = {}))
    i.call(l, e) && o(a, e, l[e]);
  if (m)
    for (var e of m(l))
      p.call(l, e) && o(a, e, l[e]);
  return a;
};
var n = (a, l) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const d = s((t, e) => {
  var r = t, { children: a } = r, l = n(r, ["children"]);
  return /* @__PURE__ */ c.createElement(A, H({ ref: e }, l), a, /* @__PURE__ */ c.createElement("path", { d: "M220,232a4,4,0,0,1-4,4H112a4,4,0,0,1,0-8H216A4,4,0,0,1,220,232Zm0-72v32a12,12,0,0,1-12,12H114.11a11.94,11.94,0,0,1-10.74-6.63l-58.11-116a12.07,12.07,0,0,1,0-10.74l22.12-44a12,12,0,0,1,16-5.42l33.78,14.27.23.11a12,12,0,0,1,5.37,16.1l-.06.1L108.4,78.26a4,4,0,0,0,0,3.53l31.78,64a4,4,0,0,0,3.57,2.2H208A12,12,0,0,1,220,160Zm-8,0a4,4,0,0,0-4-4H143.77A11.94,11.94,0,0,1,133,149.37l-31.78-64a12,12,0,0,1,0-10.72l.06-.11,14.27-26.47a4,4,0,0,0-1.71-5.27L80.13,28.53l-.24-.11A3.91,3.91,0,0,0,78.11,28a4,4,0,0,0-3.58,2.21l-22.12,44a4,4,0,0,0,0,3.57l58.11,116a4,4,0,0,0,3.58,2.21H208a4,4,0,0,0,4-4Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
