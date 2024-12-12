var s = Object.defineProperty;
var a = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var o = (e, c, t) => c in e ? s(e, c, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[c] = t, i = (e, c) => {
  for (var t in c || (c = {}))
    A.call(c, t) && o(e, t, c[t]);
  if (a)
    for (var t of a(c))
      Z.call(c, t) && o(e, t, c[t]);
  return e;
};
var p = (e, c) => {
  var t = {};
  for (var m in e)
    A.call(e, m) && c.indexOf(m) < 0 && (t[m] = e[m]);
  if (e != null && a)
    for (var m of a(e))
      c.indexOf(m) < 0 && Z.call(e, m) && (t[m] = e[m]);
  return t;
};
import f, { forwardRef as C } from "react";
import M from "../../lib/OptiBase.mjs";
const d = C((m, t) => {
  var r = m, { children: e } = r, c = p(r, ["children"]);
  return /* @__PURE__ */ f.createElement(M, i({ ref: t }, c), e, /* @__PURE__ */ f.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm89.89,97.44c-31,22.37-53.66,15.36-77.93,3.75,21.43-14.75,42.27-33.21,41.51-71.54A90,90,0,0,1,217.89,123.44ZM169,47.89c3.84,38-13.53,54.13-35.71,69.34C131.22,91.29,125.67,64,92.06,45.5A89.88,89.88,0,0,1,169,47.89ZM79.14,52.45C114,68.15,119.23,91.23,121.32,118c-23.5-11.18-49.92-20-82.75-.17A90.12,90.12,0,0,1,79.14,52.45Zm-41,80.11c31.05-22.37,53.66-15.36,77.93-3.75C94.61,143.56,73.77,162,74.53,200.35A90,90,0,0,1,38.11,132.56ZM87,208.11c-3.84-38,13.53-54.13,35.71-69.34,2.06,25.94,7.61,53.24,41.22,71.73A89.88,89.88,0,0,1,87,208.11Zm89.85-4.56C142,187.85,136.77,164.77,134.68,138c13.36,6.36,27.67,12,43.56,12,12.06,0,25-3.23,39.19-11.79A90.15,90.15,0,0,1,176.86,203.55Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
