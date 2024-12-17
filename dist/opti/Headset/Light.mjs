var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var v = (a, t) => {
  var e = {};
  for (var r in a)
    H.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import A, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const V = f((r, e) => {
  var h = r, { children: a } = h, t = v(h, ["children"]);
  return /* @__PURE__ */ A.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M200.47,56.07A101.37,101.37,0,0,0,128.77,26H128A102,102,0,0,0,26,128v56a22,22,0,0,0,22,22H64a22,22,0,0,0,22-22V144a22,22,0,0,0-22-22H38.2A90,90,0,0,1,128,38h.68a89.71,89.71,0,0,1,89.13,84H192a22,22,0,0,0-22,22v40a22,22,0,0,0,22,22h26v2a26,26,0,0,1-26,26H136a6,6,0,0,0,0,12h56a38,38,0,0,0,38-38V128A101.44,101.44,0,0,0,200.47,56.07ZM64,134a10,10,0,0,1,10,10v40a10,10,0,0,1-10,10H48a10,10,0,0,1-10-10V134Zm118,50V144a10,10,0,0,1,10-10h26v60H192A10,10,0,0,1,182,184Z" }));
});
V.displayName = "Light";
export {
  V as Light
};
