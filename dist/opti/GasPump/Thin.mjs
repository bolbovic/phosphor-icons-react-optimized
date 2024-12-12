var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var r in a)
    h.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import n, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const l = c((r, e) => {
  var V = r, { children: a } = V, t = H(V, ["children"]);
  return /* @__PURE__ */ n.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M238.14,72.49,218.83,53.17a4,4,0,0,0-5.66,5.66l19.32,19.31A12,12,0,0,1,236,86.63V168a12,12,0,0,1-24,0V128a20,20,0,0,0-20-20H172V56a20,20,0,0,0-20-20H72A20,20,0,0,0,52,56V212H32a4,4,0,0,0,0,8H192a4,4,0,0,0,0-8H172V116h20a12,12,0,0,1,12,12v40a20,20,0,0,0,40,0V86.63A19.85,19.85,0,0,0,238.14,72.49ZM60,212V56A12,12,0,0,1,72,44h80a12,12,0,0,1,12,12V212Zm80-100a4,4,0,0,1-4,4H88a4,4,0,0,1,0-8h48A4,4,0,0,1,140,112Z" }));
});
l.displayName = "Thin";
export {
  l as Thin
};
