var Z = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var m = (a, l, e) => l in a ? Z(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, i = (a, l) => {
  for (var e in l || (l = {}))
    o.call(l, e) && m(a, e, l[e]);
  if (t)
    for (var e of t(l))
      A.call(l, e) && m(a, e, l[e]);
  return a;
};
var p = (a, l) => {
  var e = {};
  for (var c in a)
    o.call(a, c) && l.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && t)
    for (var c of t(a))
      l.indexOf(c) < 0 && A.call(a, c) && (e[c] = a[c]);
  return e;
};
import M, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const L = f((c, e) => {
  var r = c, { children: a } = r, l = p(r, ["children"]);
  return /* @__PURE__ */ M.createElement(s, i({ ref: e }, l), a, /* @__PURE__ */ M.createElement("path", { d: "M247.94,79.21a8,8,0,0,0-4.36-6.37L197.29,49.7C191.54,39.24,177.21,32,160,32c-22.43,0-40,12.3-40,28a20.77,20.77,0,0,0,1.06,6.53l-19.52,9.76A53.69,53.69,0,0,0,80,72c-22.43,0-40,12.3-40,28a20.77,20.77,0,0,0,1.06,6.53L12.42,120.84A8,8,0,0,0,8,128v64a8,8,0,0,0,4.42,7.16l64,32a8,8,0,0,0,7.16,0l160-80A8,8,0,0,0,248,144V80A4.54,4.54,0,0,0,247.94,79.21ZM80,151.06,33.89,128,51,119.45c7.24,5.29,17.48,8.55,29,8.55,22.43,0,40-12.3,40-28a21.77,21.77,0,0,0-4.35-12.88L131,79.45c7.24,5.29,17.48,8.55,29,8.55,18.38,0,33.49-8.26,38.35-19.88L222.11,80ZM160,48c12.23,0,21.69,5,23.63,10.12,0,.09.07.18.11.28A5.25,5.25,0,0,1,184,60c0,5.66-10.26,12-24,12-9.66,0-17.6-3.14-21.46-7a6.92,6.92,0,0,0-.86-.93A6.66,6.66,0,0,1,136,60C136,54.34,146.26,48,160,48ZM80,88a37,37,0,0,1,17.13,3.87,7.52,7.52,0,0,0,1,.56c3.69,2.21,5.87,5,5.87,7.57,0,5.66-10.26,12-24,12-9.67,0-17.61-3.14-21.47-7a7.5,7.5,0,0,0-.84-.93A6.62,6.62,0,0,1,56,100C56,94.34,66.26,88,80,88ZM24,140.94l48,24v46.12l-48-24Z" }));
});
L.displayName = "Fill";
export {
  L as Fill
};