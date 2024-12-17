var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var A = (a, l, e) => l in a ? c(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, d = (a, l) => {
  for (var e in l || (l = {}))
    m.call(l, e) && A(a, e, l[e]);
  if (o)
    for (var e of o(l))
      p.call(l, e) && A(a, e, l[e]);
  return a;
};
var M = (a, l) => {
  var e = {};
  for (var t in a)
    m.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import Z, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((t, e) => {
  var r = t, { children: a } = r, l = M(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(i, d({ ref: e }, l), a, /* @__PURE__ */ Z.createElement("path", { d: "M211.48,35.32l-130.25-23A20,20,0,0,0,58.05,28.54l-29.75,169a20,20,0,0,0,16.22,23.16l130.25,23h0a20.1,20.1,0,0,0,3.52.31A20,20,0,0,0,198,227.46l29.75-169A20,20,0,0,0,211.48,35.32ZM175,219.36,52.63,197.75,81,36.64,203.37,58.25ZM91.9,67a12,12,0,0,1,13.9-9.73L173,69.14A12,12,0,0,1,171,93a12.59,12.59,0,0,1-2.1-.18L101.63,80.9A12,12,0,0,1,91.9,67ZM85,106.39a12,12,0,0,1,13.91-9.73l67.22,11.88A12,12,0,0,1,164,132.35a12.5,12.5,0,0,1-2.1-.18L94.69,120.29A12,12,0,0,1,85,106.39ZM78,145.78a12,12,0,0,1,13.9-9.73L125.54,142a12,12,0,0,1-2.07,23.82,11.63,11.63,0,0,1-2.1-.19l-33.61-5.93A12,12,0,0,1,78,145.78Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
