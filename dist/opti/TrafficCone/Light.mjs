var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import L, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = f((r, e) => {
  var H = r, { children: a } = H, t = l(H, ["children"]);
  return /* @__PURE__ */ L.createElement(s, h({ ref: e }, t), a, /* @__PURE__ */ L.createElement("path", { d: "M232,210H212.27L151.54,35.4A14,14,0,0,0,138.31,26H117.69a14,14,0,0,0-13.23,9.4L43.73,210H24a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12ZM94,102h68l18.08,52H75.92Zm21.8-62.66A2,2,0,0,1,117.69,38h20.62a2,2,0,0,1,1.89,1.34L157.82,90H98.18ZM71.74,166H184.26l15.3,44H56.44Z" }));
});
Z.displayName = "Light";
export {
  Z as Light
};
