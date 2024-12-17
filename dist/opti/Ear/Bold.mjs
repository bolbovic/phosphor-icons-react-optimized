var s = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && m(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var c in a)
    p.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && o)
    for (var c of o(a))
      t.indexOf(c) < 0 && d.call(a, c) && (e[c] = a[c]);
  return e;
};
import i, { forwardRef as C } from "react";
import n from "../../lib/OptiBase.mjs";
const B = C((c, e) => {
  var r = c, { children: a } = r, t = f(r, ["children"]);
  return /* @__PURE__ */ i.createElement(n, l({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M220,104a12,12,0,0,1-24,0,68,68,0,0,0-136,0c0,25,7.58,32.3,16.35,40.76S96,163.71,96,188a32,32,0,0,0,32,32c9,0,16.19-3.7,22.75-11.64a12,12,0,0,1,18.5,15.28C158.09,237.15,144.21,244,128,244a56.06,56.06,0,0,1-56-56c0-14.09-4.63-18.56-12.31-26C49.13,151.86,36,139.19,36,104a92,92,0,0,1,184,0Zm-40.13,53.61a12,12,0,0,0-16.4,4.38,4,4,0,0,1-7.47-2c0-7.61,3.65-12.86,9.6-20.8C172,130.65,180,120,180,104a52,52,0,0,0-104,0,12,12,0,0,0,24,0,28,28,0,0,1,56,0c0,7.61-3.65,12.86-9.6,20.8C140,133.35,132,144,132,160a28,28,0,0,0,52.25,14A12,12,0,0,0,179.87,157.61Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
