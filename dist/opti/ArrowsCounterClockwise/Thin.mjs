var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const H = l((r, e) => {
  var h = r, { children: a } = h, t = A(h, ["children"]);
  return /* @__PURE__ */ c.createElement(s, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M88,100H40a4,4,0,0,1-4-4V48a4,4,0,0,1,8,0V86.34L65.46,64.89A91.39,91.39,0,0,1,130,37.94h.51A91.43,91.43,0,0,1,194.8,64.13a4,4,0,0,1-5.6,5.72,83.44,83.44,0,0,0-58.68-23.91h-.47a83.52,83.52,0,0,0-58.94,24.6L49.66,92H88a4,4,0,0,1,0,8Zm128,56H168a4,4,0,0,0,0,8h38.34l-21.45,21.46A83.52,83.52,0,0,1,126,210.06h-.47A83.44,83.44,0,0,1,66.8,186.15a4,4,0,0,0-5.6,5.72,91.43,91.43,0,0,0,64.28,26.19H126a91.39,91.39,0,0,0,64.55-26.95L212,169.66V208a4,4,0,0,0,8,0V160A4,4,0,0,0,216,156Z" }));
});
H.displayName = "Thin";
export {
  H as Thin
};
