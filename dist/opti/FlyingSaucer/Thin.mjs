var n = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && A(a, e, t[e]);
  if (c)
    for (var e of c(t))
      i.call(t, e) && A(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && c)
    for (var r of c(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import Z, { forwardRef as M } from "react";
import f from "../../lib/OptiBase.mjs";
const h = M((r, e) => {
  var m = r, { children: a } = m, t = p(m, ["children"]);
  return /* @__PURE__ */ Z.createElement(f, l({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M179.79,214.73a4,4,0,0,1-2.53,5.06A3.92,3.92,0,0,1,176,220a4,4,0,0,1-3.79-2.73l-8-24a4,4,0,1,1,7.58-2.54ZM128,188a4,4,0,0,0-4,4v32a4,4,0,0,0,8,0V192A4,4,0,0,0,128,188Zm-38.74.2a4,4,0,0,0-5.05,2.53l-8,24a4,4,0,1,0,7.58,2.54l8-24A4,4,0,0,0,89.26,188.2ZM244,112c0,29.16-50.95,52-116,52S12,141.16,12,112c0-20.31,24.8-38.16,64.84-46.8a59.65,59.65,0,0,1,93.31-11.9,60.91,60.91,0,0,1,9.42,12C219.36,74,244,91.77,244,112ZM76,96.83v3a11.9,11.9,0,0,0,9.24,11.64A192,192,0,0,0,128,116a192,192,0,0,0,42.75-4.48A11.9,11.9,0,0,0,180,99.88V96a52,52,0,0,0-52.69-52C99,44.37,76,68.07,76,96.83ZM236,112c0-15-20.13-29.37-51.94-37.43A59.9,59.9,0,0,1,188,96v3.91a19.87,19.87,0,0,1-15.45,19.41A199.69,199.69,0,0,1,128,124a199.69,199.69,0,0,1-44.54-4.68A19.86,19.86,0,0,1,68,99.91h0V96.85a60.91,60.91,0,0,1,4.25-22.36C40.25,82.54,20,96.88,20,112c0,23.85,49.46,44,108,44S236,135.85,236,112Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
