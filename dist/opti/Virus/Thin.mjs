var c = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var r = (a, l, e) => l in a ? c(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, p = (a, l) => {
  for (var e in l || (l = {}))
    o.call(l, e) && r(a, e, l[e]);
  if (t)
    for (var e of t(l))
      i.call(l, e) && r(a, e, l[e]);
  return a;
};
var Z = (a, l) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && l.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && t)
    for (var m of t(a))
      l.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const H = f((m, e) => {
  var A = m, { children: a } = A, l = Z(A, ["children"]);
  return /* @__PURE__ */ n.createElement(s, p({ ref: e }, l), a, /* @__PURE__ */ n.createElement("path", { d: "M132,108a24,24,0,1,0-24,24A24,24,0,0,0,132,108Zm-24,16a16,16,0,1,1,16-16A16,16,0,0,1,108,124Zm80,4a12,12,0,1,1-12-12A12,12,0,0,1,188,128Zm-48,48a12,12,0,1,1-12-12A12,12,0,0,1,140,176Zm100-52H219.91a91.64,91.64,0,0,0-24.12-58.13l15-15a4,4,0,1,0-5.66-5.66l-15,15A91.64,91.64,0,0,0,132,36.09V16a4,4,0,0,0-8,0V36.09A91.64,91.64,0,0,0,65.87,60.21l-15-15a4,4,0,0,0-5.66,5.66l15,15A91.64,91.64,0,0,0,36.09,124H16a4,4,0,0,0,0,8H36.09a91.64,91.64,0,0,0,24.12,58.13l-15,15a4,4,0,0,0,5.66,5.66l15-15A91.64,91.64,0,0,0,124,219.91V240a4,4,0,0,0,8,0V219.91a91.64,91.64,0,0,0,58.13-24.12l15,15a4,4,0,0,0,5.66-5.66l-15-15A91.64,91.64,0,0,0,219.91,132H240a4,4,0,0,0,0-8ZM128,212a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Z" }));
});
H.displayName = "Thin";
export {
  H as Thin
};
