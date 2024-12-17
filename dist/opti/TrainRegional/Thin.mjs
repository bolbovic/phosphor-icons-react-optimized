var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    L.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      h.call(t, e) && o(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    L.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && h.call(a, m) && (e[m] = a[m]);
  return e;
};
import H, { forwardRef as A } from "react";
import Z from "../../lib/OptiBase.mjs";
const c = A((m, e) => {
  var l = m, { children: a } = l, t = p(l, ["children"]);
  return /* @__PURE__ */ H.createElement(Z, i({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M219.86,119,197.47,36.84A12,12,0,0,0,185.89,28H70.11a12,12,0,0,0-11.58,8.84L36.14,119a3.94,3.94,0,0,0,0,2.1l22.39,82.11A12,12,0,0,0,70.11,212H88L68.8,237.6a4,4,0,1,0,6.4,4.8L98,212h60l22.8,30.4a4,4,0,0,0,6.4-4.8L168,212h17.89a12,12,0,0,0,11.58-8.84l22.39-82.11A3.94,3.94,0,0,0,219.86,119ZM66.25,39a4,4,0,0,1,3.86-3H185.89a4,4,0,0,1,3.86,3L211,116.84l-83,15.09L45,116.84Zm0,162.1-20.72-76L124,139.34V204H70.11A4,4,0,0,1,66.25,201.05Zm123.5,0a4,4,0,0,1-3.86,2.95H132V139.34l78.47-14.27ZM92,88a4,4,0,0,1,4-4h64a4,4,0,0,1,0,8H96A4,4,0,0,1,92,88Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};
