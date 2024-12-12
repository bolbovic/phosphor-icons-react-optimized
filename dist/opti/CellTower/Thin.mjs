var c = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var M = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import Z, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((r, e) => {
  var m = r, { children: a } = m, t = M(m, ["children"]);
  return /* @__PURE__ */ Z.createElement(h, n({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M131.58,86.21a4,4,0,0,0-7.16,0l-72,144a4,4,0,0,0,7.16,3.58L74.47,204H181.53l14.89,29.79A4,4,0,0,0,200,236a4.12,4.12,0,0,0,1.79-.42,4,4,0,0,0,1.79-5.37ZM128,96.94,161.53,164H94.47ZM78.47,196l12-24h75.06l12,24ZM163.42,94.45A35.57,35.57,0,0,0,164,88a36,36,0,0,0-72,0,35.57,35.57,0,0,0,.58,6.45,4,4,0,0,1-7.88,1.43A45.18,45.18,0,0,1,84,88a44,44,0,0,1,88,0,45.18,45.18,0,0,1-.7,7.88,4,4,0,0,1-3.94,3.29,4.38,4.38,0,0,1-.71-.07A4,4,0,0,1,163.42,94.45ZM67.34,133.79a76,76,0,1,1,121.32,0,4,4,0,1,1-6.38-4.82,68,68,0,1,0-108.56,0,4,4,0,1,1-6.38,4.82Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
