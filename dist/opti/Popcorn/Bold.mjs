var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    L.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && m(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var l in a)
    L.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import Z, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((l, e) => {
  var r = l, { children: a } = r, t = A(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(i, d({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M232.28,71.32a12,12,0,0,0-7-3.25,48,48,0,0,0-55.19-31,48,48,0,0,0-84.24,0,48,48,0,0,0-55.19,31A12,12,0,0,0,20.32,82.75L50.87,212.58A19.92,19.92,0,0,0,70.34,228H185.66a19.92,19.92,0,0,0,19.47-15.42L235.68,82.75A12,12,0,0,0,232.28,71.32ZM76,60a23.68,23.68,0,0,1,11.23,2.79,12,12,0,0,0,17.35-8,24,24,0,0,1,46.84,0,12,12,0,0,0,17.35,8A23.68,23.68,0,0,1,180,60a24,24,0,0,1,21.78,13.87l-33.13,9.46L135.43,70.05a19.89,19.89,0,0,0-14.86,0L87.35,83.33,54.22,73.87A24,24,0,0,1,76,60Zm25.13,43.67L128,92.92l26.87,10.75L141.49,204h-27ZM48.36,97.16l28.78,8.22L90.29,204H73.5ZM182.5,204H165.71l13.15-98.62,28.78-8.22Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
