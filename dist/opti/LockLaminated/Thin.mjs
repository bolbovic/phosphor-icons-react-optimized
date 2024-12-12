var M = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, H, e) => H in a ? M(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, p = (a, H) => {
  for (var e in H || (H = {}))
    V.call(H, e) && o(a, e, H[e]);
  if (r)
    for (var e of r(H))
      i.call(H, e) && o(a, e, H[e]);
  return a;
};
var Z = (a, H) => {
  var e = {};
  for (var t in a)
    V.call(a, t) && H.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      H.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import n, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((t, e) => {
  var m = t, { children: a } = m, H = Z(m, ["children"]);
  return /* @__PURE__ */ n.createElement(f, p({ ref: e }, H), a, /* @__PURE__ */ n.createElement("path", { d: "M208,84H172V56a44,44,0,0,0-88,0V84H48A12,12,0,0,0,36,96V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V96A12,12,0,0,0,208,84ZM44,124H212v24H44Zm0,32H212v24H44ZM92,56a36,36,0,0,1,72,0V84H92ZM48,92H208a4,4,0,0,1,4,4v20H44V96A4,4,0,0,1,48,92ZM208,212H48a4,4,0,0,1-4-4V188H212v20A4,4,0,0,1,208,212Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
