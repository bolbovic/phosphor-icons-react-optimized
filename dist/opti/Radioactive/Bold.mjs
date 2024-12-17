var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      A.call(t, e) && m(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var l in a)
    p.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && A.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const n = s((l, e) => {
  var r = l, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, d({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M128,112a16,16,0,1,1-16,16A16,16,0,0,1,128,112ZM96,128a12,12,0,0,0-12-12H44.47a83.88,83.88,0,0,1,31.2-54.11L95.38,96a12,12,0,1,0,20.78-12l-22-38a20,20,0,0,0-28.87-6.34,107.85,107.85,0,0,0-45.26,78.4,20.22,20.22,0,0,0,5.21,15.43A20,20,0,0,0,40,140H84A12,12,0,0,0,96,128Zm139.92-9.94a107.81,107.81,0,0,0-45.26-78.39A20,20,0,0,0,161.79,46L139.84,84a12,12,0,0,0,20.78,12l19.71-34.13A83.88,83.88,0,0,1,211.53,116H172a12,12,0,0,0,0,24h44a20,20,0,0,0,14.71-6.51A20.22,20.22,0,0,0,235.92,118.06ZM160.4,160.11a12,12,0,0,0-20.79,12L159.19,206a84.33,84.33,0,0,1-62.38,0l19.58-33.91a12,12,0,0,0-20.79-12l-21.82,37.8a20,20,0,0,0,8.91,28.15,108.24,108.24,0,0,0,90.62,0,20,20,0,0,0,8.91-28.15Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
