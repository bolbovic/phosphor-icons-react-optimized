var f = Object.defineProperty;
var a = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (e, m, l) => m in e ? f(e, m, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[m] = l, d = (e, m) => {
  for (var l in m || (m = {}))
    Z.call(m, l) && r(e, l, m[l]);
  if (a)
    for (var l of a(m))
      p.call(m, l) && r(e, l, m[l]);
  return e;
};
var A = (e, m) => {
  var l = {};
  for (var t in e)
    Z.call(e, t) && m.indexOf(t) < 0 && (l[t] = e[t]);
  if (e != null && a)
    for (var t of a(e))
      m.indexOf(t) < 0 && p.call(e, t) && (l[t] = e[t]);
  return l;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const H = i((t, l) => {
  var o = t, { children: e } = o, m = A(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: l }, m), e, /* @__PURE__ */ c.createElement("path", { d: "M243,89.83A19.94,19.94,0,0,0,224,76H165.85l-18.8-57.95A19.93,19.93,0,0,0,109,18L90.15,76H32A20,20,0,0,0,20.3,112.22l47.1,33.89-18.07,55.7A20,20,0,0,0,80.07,224.2L128,189.71l47.89,34.45a20,20,0,0,0,30.78-22.35l-18.07-55.7,47.15-33.92A20,20,0,0,0,243,89.83ZM128,37.11,140.62,76H115.38ZM44.42,100H82.36l-7.18,22.13Zm31.51,97.6,11.93-36.78,19.59,14.1Zm19.71-60.75,12-36.85h40.82l12,36.85L128,160.14Zm52.91,38.07,19.59-14.1,11.93,36.78Zm32.27-52.79L173.64,100h37.94Z" }));
});
H.displayName = "Bold";
export {
  H as Bold
};