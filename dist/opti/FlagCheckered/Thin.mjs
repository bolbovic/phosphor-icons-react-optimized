var n = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var r = (a, e, c) => e in a ? n(a, e, { enumerable: !0, configurable: !0, writable: !0, value: c }) : a[e] = c, i = (a, e) => {
  for (var c in e || (e = {}))
    o.call(e, c) && r(a, c, e[c]);
  if (m)
    for (var c of m(e))
      Z.call(e, c) && r(a, c, e[c]);
  return a;
};
var p = (a, e) => {
  var c = {};
  for (var t in a)
    o.call(a, t) && e.indexOf(t) < 0 && (c[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && Z.call(a, t) && (c[t] = a[t]);
  return c;
};
import C, { forwardRef as v } from "react";
import f from "../../lib/OptiBase.mjs";
const s = v((t, c) => {
  var V = t, { children: a } = V, e = p(V, ["children"]);
  return /* @__PURE__ */ C.createElement(f, i({ ref: c }, e), a, /* @__PURE__ */ C.createElement("path", { d: "M225.66,52.44a4,4,0,0,0-4.28.61c-30,26-56,13.08-83.61-.56-28.7-14.2-58.38-28.88-92.39.56a4,4,0,0,0-1.38,3V224a4,4,0,0,0,8,0V177.87c29.41-24.39,55.08-11.69,82.23,1.74,28.7,14.19,58.38,28.88,92.39-.56a4,4,0,0,0,1.38-3v-120A4,4,0,0,0,225.66,52.44ZM220,64.32V114.2c-16.91,14-32.58,15.79-48,12.2V74.67C187.24,77.9,203.09,76.37,220,64.32Zm-56,8.23v51.54c-8.7-3-17.39-7.25-26.23-11.62-9.76-4.84-19.64-9.72-29.77-12.91V48c8.7,3,17.39,7.25,26.23,11.62C144,64.49,153.87,69.37,164,72.55ZM100,45.73V97.44c-15.24-3.23-31.09-1.69-48,10.37V57.93C68.91,43.9,84.58,42.15,100,45.73ZM52,167.78V117.9c16.91-14,32.58-15.79,48-12.2v51.72A64.48,64.48,0,0,0,86.64,156C75.52,156,64,159.2,52,167.78Zm56-8.23V108c8.71,3,17.39,7.25,26.23,11.62,9.76,4.83,19.64,9.71,29.77,12.89v51.54c-8.71-3-17.39-7.25-26.23-11.62C128,167.61,118.13,162.73,108,159.55Zm64,26.82V134.65a64.48,64.48,0,0,0,13.36,1.47c11.12,0,22.61-3.27,34.64-11.85v49.9C203.09,188.19,187.42,190,172,186.37Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};