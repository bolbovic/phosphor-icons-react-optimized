var f = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var r in a)
    h.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const L = s((r, e) => {
  var m = r, { children: a } = m, t = A(m, ["children"]);
  return /* @__PURE__ */ c.createElement(H, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M212,35.56a6,6,0,0,0-8.48.4l-5.49,6H128A85.93,85.93,0,0,0,65.9,187.4L43.56,212A6,6,0,0,0,52.44,220l22.33-24.57A85.52,85.52,0,0,0,128,214h72a6,6,0,0,0,0-12H128a73.65,73.65,0,0,1-45.14-15.42L130.65,134H200a6,6,0,0,0,0-12H141.56l70.88-78A6,6,0,0,0,212,35.56ZM74,178.5A73.74,73.74,0,0,1,54.26,134h60.18ZM54.26,122A74.09,74.09,0,0,1,128,54h59.16l-61.81,68Z" }));
});
L.displayName = "Light";
export {
  L as Light
};
