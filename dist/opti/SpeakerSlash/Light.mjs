var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      L.call(t, e) && o(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    A.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && L.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const H = f((m, e) => {
  var l = m, { children: a } = l, t = p(l, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, i({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M52.44,36A6,6,0,0,0,43.56,44L78,81.94l-.08.06H32A14,14,0,0,0,18,96v64a14,14,0,0,0,14,14H77.94l70.38,54.74A6,6,0,0,0,158,224V169.92L203.56,220a6,6,0,0,0,8.88-8.08ZM30,160V96a2,2,0,0,1,2-2H74v68H32A2,2,0,0,1,30,160Zm116,51.73L86,165.07V90.93l.11-.08L146,156.72Zm41.5-66.53a26,26,0,0,0,0-34.37,6,6,0,1,1,9-7.93,38,38,0,0,1,0,50.24,6,6,0,0,1-9-7.94ZM107.41,66.68a6,6,0,0,1,1.06-8.42l39.85-31A6,6,0,0,1,158,32v74.83a6,6,0,0,1-12,0V44.27L115.83,67.73A6,6,0,0,1,107.41,66.68ZM246,128a77.86,77.86,0,0,1-19.86,52,6,6,0,1,1-8.94-8,66,66,0,0,0,0-88,6,6,0,1,1,8.94-8A77.86,77.86,0,0,1,246,128Z" }));
});
H.displayName = "Light";
export {
  H as Light
};