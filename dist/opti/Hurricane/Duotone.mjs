var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && A(a, e, t[e]);
  if (m)
    for (var e of m(t))
      l.call(t, e) && A(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var o in a)
    c.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && l.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const f = s((o, e) => {
  var p = o, { children: a } = p, t = Z(p, ["children"]);
  return /* @__PURE__ */ r.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M148.62,50.68,160,8S48,32,48,128a80,80,0,0,0,59.38,77.32L96,248s112-24,112-120A80,80,0,0,0,148.62,50.68ZM128,152a24,24,0,1,1,24-24A24,24,0,0,1,128,152Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144Zm30.32-98.64,9.41-35.3A8,8,0,0,0,158.32.18,195.87,195.87,0,0,0,99.67,25.27C60.63,50.37,40,85.89,40,128a88.11,88.11,0,0,0,57.68,82.64l-9.41,35.3a8,8,0,0,0,9.41,9.88,195.87,195.87,0,0,0,58.65-25.09C195.37,205.63,216,170.11,216,128A88.1,88.1,0,0,0,158.32,45.36ZM148.06,217a184.14,184.14,0,0,1-40.68,19.37l7.73-29a8,8,0,0,0-5.67-9.79A72.06,72.06,0,0,1,56,128c0-36.77,17.48-66.72,51.94-89a184.14,184.14,0,0,1,40.68-19.37l-7.73,29a8,8,0,0,0,5.67,9.79A72.06,72.06,0,0,1,200,128C200,164.77,182.52,194.72,148.06,217Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
