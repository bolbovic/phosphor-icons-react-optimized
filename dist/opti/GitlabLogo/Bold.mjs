var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var r = (a, l, e) => l in a ? c(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, d = (a, l) => {
  for (var e in l || (l = {}))
    p.call(l, e) && r(a, e, l[e]);
  if (m)
    for (var e of m(l))
      L.call(l, e) && r(a, e, l[e]);
  return a;
};
var A = (a, l) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      l.indexOf(t) < 0 && L.call(a, t) && (e[t] = a[t]);
  return e;
};
import Z, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((t, e) => {
  var o = t, { children: a } = o, l = A(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(i, d({ ref: e }, l), a, /* @__PURE__ */ Z.createElement("path", { d: "M234,116.09,214.13,40a15.94,15.94,0,0,0-30.42-1.48L167,84H89L72.29,38.49A15.94,15.94,0,0,0,41.87,40L22,116.09a61.19,61.19,0,0,0,23.57,65.23l73.27,51.77a15.93,15.93,0,0,0,18.36,0l73.27-51.77A61.19,61.19,0,0,0,234,116.09ZM58.61,70.86l10.76,29.28A12,12,0,0,0,80.64,108h94.72a12,12,0,0,0,11.27-7.86l10.76-29.28,9.14,35L128,161.31,49.47,105.83ZM44,131.37,107.2,176l-13.79,9.74-34-24A36.86,36.86,0,0,1,44,131.37Zm84,78.82-13.79-9.75L128,190.7l13.79,9.74Zm68.6-48.47-34,24L148.8,176,212,131.37A36.86,36.86,0,0,1,196.6,161.72Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
