var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, a, t) => a in e ? A(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, c = (e, a) => {
  for (var t in a || (a = {}))
    i.call(a, t) && o(e, t, a[t]);
  if (r)
    for (var t of r(a))
      p.call(a, t) && o(e, t, a[t]);
  return e;
};
var f = (e, a) => {
  var t = {};
  for (var l in e)
    i.call(e, l) && a.indexOf(l) < 0 && (t[l] = e[l]);
  if (e != null && r)
    for (var l of r(e))
      a.indexOf(l) < 0 && p.call(e, l) && (t[l] = e[l]);
  return t;
};
import s, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const V = d((l, t) => {
  var m = l, { children: e } = m, a = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(n, c({ ref: t }, a), e, /* @__PURE__ */ s.createElement("path", { d: "M212.92,17.69a8,8,0,0,0-6.86-1.45l-128,32A8,8,0,0,0,72,56V166.08A36,36,0,1,0,88,196V62.25l112-28v99.83A36,36,0,1,0,216,164V24A8,8,0,0,0,212.92,17.69Z" }));
});
V.displayName = "Fill";
export {
  V as Fill
};
