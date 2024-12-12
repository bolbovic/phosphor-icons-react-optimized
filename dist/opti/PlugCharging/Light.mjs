var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && l(a, e, t[e]);
  if (m)
    for (var e of m(t))
      V.call(t, e) && l(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && V.call(a, r) && (e[r] = a[r]);
  return e;
};
import p, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((r, e) => {
  var H = r, { children: a } = H, t = i(H, ["children"]);
  return /* @__PURE__ */ p.createElement(s, h({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M224,58H174V16a6,6,0,0,0-12,0V58H94V16a6,6,0,0,0-12,0V58H32.55A6.1,6.1,0,0,0,26,64a6,6,0,0,0,6,6H50v90a38,38,0,0,0,38,38h34v42a6,6,0,0,0,12,0V198h34a38,38,0,0,0,38-38V70h18a6,6,0,0,0,0-12ZM194,160a26,26,0,0,1-26,26H88a26,26,0,0,1-26-26V70H194Zm-86.93-28.58a6,6,0,0,1-.69-5.53l12-32a6,6,0,1,1,11.24,4.22l-9,23.89H144a6,6,0,0,1,5.62,8.11l-12,32a6,6,0,0,1-11.24-4.22l9-23.89H112A6,6,0,0,1,107.07,131.42Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
