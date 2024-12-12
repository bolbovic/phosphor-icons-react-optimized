var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
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
import H, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const V = l((r, e) => {
  var h = r, { children: a } = h, t = A(h, ["children"]);
  return /* @__PURE__ */ H.createElement(s, c({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M212.24,83.76l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40v88a6,6,0,0,0,12,0V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50V216a2,2,0,0,1-2,2H176a6,6,0,0,0,0,12h24a14,14,0,0,0,14-14V88A6,6,0,0,0,212.24,83.76ZM158,46.48,193.52,82H158ZM108,130a50,50,0,0,0-46.66,32H60a34,34,0,0,0,0,68h48a50,50,0,0,0,0-100Zm0,88H60a22,22,0,0,1-1.65-43.94c-.06.47-.1.93-.15,1.4a6,6,0,1,0,12,1.08A38.57,38.57,0,0,1,71.3,170a5.71,5.71,0,0,0,.24-.86A38,38,0,1,1,108,218Z" }));
});
V.displayName = "Light";
export {
  V as Light
};
