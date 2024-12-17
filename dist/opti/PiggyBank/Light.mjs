var L = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? L(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, o = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && A(a, e, t[e]);
  if (m)
    for (var e of m(t))
      l.call(t, e) && A(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var h in a)
    H.call(a, h) && t.indexOf(h) < 0 && (e[h] = a[h]);
  if (a != null && m)
    for (var h of m(a))
      t.indexOf(h) < 0 && l.call(a, h) && (e[h] = a[h]);
  return e;
};
import p, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((h, e) => {
  var r = h, { children: a } = r, t = i(r, ["children"]);
  return /* @__PURE__ */ p.createElement(f, o({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M190,116a10,10,0,1,1-10-10A10,10,0,0,1,190,116ZM152,66H112a6,6,0,0,0,0,12h40a6,6,0,0,0,0-12Zm94,46v32a22,22,0,0,1-22,22h-3.77l-16.68,46.71A14,14,0,0,1,190.36,222H177.64a14,14,0,0,1-13.19-9.29L162.06,206H101.94l-2.39,6.71A14,14,0,0,1,86.36,222H73.64a14,14,0,0,1-13.19-9.29L47.76,177.18a85.72,85.72,0,0,1-21.47-50.24A18,18,0,0,0,14,144a6,6,0,0,1-12,0,30,30,0,0,1,24.19-29.43A86.1,86.1,0,0,1,112,34H216a6,6,0,0,1,0,12H187.82a85.92,85.92,0,0,1,35.12,39.83c.6,1.38,1.16,2.77,1.68,4.18A22,22,0,0,1,246,112Zm-12,0a10,10,0,0,0-10-10h-3.66a6,6,0,0,1-5.73-4.2,71.4,71.4,0,0,0-2.68-7.19A74,74,0,0,0,144,46H112A74,74,0,0,0,57.44,170a5.81,5.81,0,0,1,1.22,2l13.09,36.64A2,2,0,0,0,73.64,210H86.36a2,2,0,0,0,1.89-1.33L92.06,198a6,6,0,0,1,5.65-4h68.58a6,6,0,0,1,5.65,4l3.81,10.69a2,2,0,0,0,1.89,1.33h12.72a2,2,0,0,0,1.89-1.33L210.35,158a6,6,0,0,1,5.65-4h8a10,10,0,0,0,10-10Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
