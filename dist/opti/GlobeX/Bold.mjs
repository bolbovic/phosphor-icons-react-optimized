var d = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var r = (a, m, e) => m in a ? d(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    A.call(m, e) && r(a, e, m[e]);
  if (l)
    for (var e of l(m))
      Z.call(m, e) && r(a, e, m[e]);
  return a;
};
var H = (a, m) => {
  var e = {};
  for (var t in a)
    A.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      m.indexOf(t) < 0 && Z.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const i = f((t, e) => {
  var o = t, { children: a } = o, m = H(o, ["children"]);
  return /* @__PURE__ */ c.createElement(h, p({ ref: e }, m), a, /* @__PURE__ */ c.createElement("path", { d: "M128,20a108,108,0,0,0,0,216,12,12,0,0,0,7.49-21.37h0c-.25-.2-17.55-14.39-27.9-42.63H128a12,12,0,0,0,0-24H101.48a135.88,135.88,0,0,1,0-40h53A133.77,133.77,0,0,1,156,128a12,12,0,0,0,24,0,159,159,0,0,0-1.25-20h30.82A83.49,83.49,0,0,1,212,128a12,12,0,0,0,24,0A108.12,108.12,0,0,0,128,20ZM97.79,49.64A140.82,140.82,0,0,0,82.29,84H56.48A84.46,84.46,0,0,1,97.79,49.64Zm0,156.72A84.46,84.46,0,0,1,56.48,172H82.29A140.82,140.82,0,0,0,97.79,206.36ZM77.25,148H46.43a83.52,83.52,0,0,1,0-40H77.25a160.63,160.63,0,0,0,0,40Zm30.34-64a116.61,116.61,0,0,1,10-20.77A107.75,107.75,0,0,1,128,49a113.2,113.2,0,0,1,20.39,35Zm66.12,0a140.82,140.82,0,0,0-15.5-34.36A84.46,84.46,0,0,1,199.52,84Zm50.78,92.49L209,192l15.52,15.51a12,12,0,0,1-17,17L192,209l-15.51,15.52a12,12,0,0,1-17-17L175,192l-15.52-15.51a12,12,0,0,1,17-17L192,175l15.51-15.52a12,12,0,0,1,17,17Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};