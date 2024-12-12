var l = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (A)
    for (var e of A(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && A)
    for (var r of A(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var m = r, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M136,204a8,8,0,1,1-8-8A8,8,0,0,1,136,204ZM51,37.31A4,4,0,0,0,45,42.69L64.72,64.34A167.64,167.64,0,0,0,21.46,90.09a4,4,0,1,0,5.08,6.19A159.4,159.4,0,0,1,70.47,70.66l29.64,32.61a120.12,120.12,0,0,0-46.6,22.64,4,4,0,0,0,5,6.27,112,112,0,0,1,47.85-22.07L142,149.37A72.6,72.6,0,0,0,128,148a71.49,71.49,0,0,0-42.36,13.77A4,4,0,0,0,88,169a4.07,4.07,0,0,0,2.36-.76,64,64,0,0,1,62.11-7.38L205,218.69a4,4,0,1,0,5.92-5.38ZM234.54,90.09A168.33,168.33,0,0,0,128,52a171.08,171.08,0,0,0-21.5,1.36,4,4,0,0,0,1,7.94A162.68,162.68,0,0,1,128,60,160.22,160.22,0,0,1,229.46,96.28a4,4,0,0,0,5.08-6.19Zm-37,42.09a4,4,0,1,0,5-6.27,120.17,120.17,0,0,0-50.06-23.42,4,4,0,1,0-1.62,7.83A112.18,112.18,0,0,1,197.52,132.18Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
