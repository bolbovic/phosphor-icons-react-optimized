var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && r(a, e, t[e]);
  if (o)
    for (var e of o(t))
      Z.call(t, e) && r(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var l in a)
    p.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && Z.call(a, l) && (e[l] = a[l]);
  return e;
};
import c, { forwardRef as M } from "react";
import d from "../../lib/OptiBase.mjs";
const f = M((l, e) => {
  var m = l, { children: a } = m, t = A(m, ["children"]);
  return /* @__PURE__ */ c.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement(
    "path",
    {
      d: "M124.88,109.74,27.15,145.33a52,52,0,1,1,97.73-35.59Zm88-15.07-97.73,35.59a52,52,0,1,0,97.73-35.59Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ c.createElement("path", { d: "M229.66,218.34l-48.42-48.41c1.1-.33,2.19-.68,3.27-1.07A60,60,0,0,0,220.37,92a8,8,0,0,0-10.25-4.78l-44.2,16.08c.32-.62.64-1.24.93-1.88A60,60,0,0,0,92,19.65,8,8,0,0,0,87.18,29.9l16.08,44.2c-.62-.32-1.24-.64-1.88-.93a60,60,0,0,0-81.73,74.89,8,8,0,0,0,10.25,4.78l44.2-16.09c-.32.63-.64,1.25-.93,1.89a60,60,0,0,0,74.89,81.73,8,8,0,0,0,4.78-10.25l-16.09-44.2c.63.32,1.25.64,1.89.93a59.87,59.87,0,0,0,22.48,5.58l57.22,57.23a8,8,0,0,0,11.32-11.32ZM131.07,36.15A44,44,0,0,1,134.8,114L105.19,32.63A43.63,43.63,0,0,1,131.07,36.15ZM32.63,134.82A44,44,0,0,1,114,105.22ZM109,203.87a44,44,0,0,1-3.73-77.81l29.6,81.33A43.6,43.6,0,0,1,109,203.87Zm55.56-47.38h-.11a44.14,44.14,0,0,1-38.34-21.69l81.33-29.61a44.06,44.06,0,0,1-42.88,51.3Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};