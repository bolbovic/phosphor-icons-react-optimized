var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var r = (a, l, e) => l in a ? i(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, Z = (a, l) => {
  for (var e in l || (l = {}))
    p.call(l, e) && r(a, e, l[e]);
  if (m)
    for (var e of m(l))
      d.call(l, e) && r(a, e, l[e]);
  return a;
};
var c = (a, l) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      l.indexOf(t) < 0 && d.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import n from "../../lib/OptiBase.mjs";
const A = s((t, e) => {
  var o = t, { children: a } = o, l = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(n, Z({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M232.49,215.52l-44-44a64,64,0,0,0,35.59-81,12,12,0,0,0-15.38-7.17l-35.61,13A64,64,0,0,0,90.59,15.89a12,12,0,0,0-7.17,15.38l13,35.61a64,64,0,0,0-80.49,82.55,12,12,0,0,0,15.38,7.17l35.61-13a63.94,63.94,0,0,0,82.55,80.49,12,12,0,0,0,7.17-15.38l-12.95-35.59a63.53,63.53,0,0,0,15.7,3.16l56.17,56.17a12,12,0,0,0,17-17ZM129.38,39.78a40,40,0,0,1,7.43,68L110.7,36.05A39.81,39.81,0,0,1,129.38,39.78ZM36.05,129.32a40,40,0,0,1,71.75-26.11Zm74.59,70.92a40,40,0,0,1-7.43-68L129.32,204A39.83,39.83,0,0,1,110.64,200.24Zm36.45-51.51a39.86,39.86,0,0,1-14.87-11.92L204,110.7a40,40,0,0,1-56.88,38Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
