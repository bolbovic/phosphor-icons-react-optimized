var f = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, l, a) => l in e ? f(e, l, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[l] = a, L = (e, l) => {
  for (var a in l || (l = {}))
    Z.call(l, a) && o(e, a, l[a]);
  if (t)
    for (var a of t(l))
      p.call(l, a) && o(e, a, l[a]);
  return e;
};
var M = (e, l) => {
  var a = {};
  for (var r in e)
    Z.call(e, r) && l.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && t)
    for (var r of t(e))
      l.indexOf(r) < 0 && p.call(e, r) && (a[r] = e[r]);
  return a;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const H = i((r, a) => {
  var m = r, { children: e } = m, l = M(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, L({ ref: a }, l), e, /* @__PURE__ */ c.createElement("path", { d: "M246,98.73l-56-64A8,8,0,0,0,184,32H72a8,8,0,0,0-6,2.73l-56,64a8,8,0,0,0,.17,10.73l112,120a8,8,0,0,0,11.7,0l112-120A8,8,0,0,0,246,98.73ZM222.37,96H180L144,48h36.37ZM74.58,112l30.13,75.33L34.41,112Zm89.6,0L128,202.46,91.82,112ZM96,96l32-42.67L160,96Zm85.42,16h40.17l-70.3,75.33ZM75.63,48H112L76,96H33.63Z" }));
});
H.displayName = "Regular";
export {
  H as Regular
};
