var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && A(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && A(a, e, t[e]);
  return a;
};
var M = (a, t) => {
  var e = {};
  for (var r in a)
    Z.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const L = l((r, e) => {
  var o = r, { children: a } = o, t = M(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm83.37,135.89a90,90,0,0,1-97.85,3.18L131.46,134H217.8A89.49,89.49,0,0,1,211.37,161.89ZM88.3,47.24a89.54,89.54,0,0,1,27.35-8.39A90,90,0,0,1,167.34,122H131.46ZM217.8,122H179.34A102.12,102.12,0,0,0,138.5,38.62,90.15,90.15,0,0,1,217.8,122ZM77.92,53.26,97.13,86.53a102.16,102.16,0,0,0-51.79,77.06A89.93,89.93,0,0,1,77.92,53.26ZM57,183.19a90,90,0,0,1,46.17-86.26L121.07,128,77.92,202.74A90.59,90.59,0,0,1,57,183.19ZM128,218a89.5,89.5,0,0,1-39.7-9.24l19.22-33.29a102.13,102.13,0,0,0,92.58,6.34A89.91,89.91,0,0,1,128,218Z" }));
});
L.displayName = "Light";
export {
  L as Light
};
