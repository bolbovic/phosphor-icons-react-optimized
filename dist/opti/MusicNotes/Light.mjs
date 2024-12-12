var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (e, a, t) => a in e ? f(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, A = (e, a) => {
  for (var t in a || (a = {}))
    l.call(a, t) && i(e, t, a[t]);
  if (m)
    for (var t of m(a))
      p.call(a, t) && i(e, t, a[t]);
  return e;
};
var V = (e, a) => {
  var t = {};
  for (var r in e)
    l.call(e, r) && a.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      a.indexOf(r) < 0 && p.call(e, r) && (t[r] = e[r]);
  return t;
};
import c, { forwardRef as s } from "react";
import M from "../../lib/OptiBase.mjs";
const Z = s((r, t) => {
  var o = r, { children: e } = o, a = V(o, ["children"]);
  return /* @__PURE__ */ c.createElement(M, A({ ref: t }, a), e, /* @__PURE__ */ c.createElement("path", { d: "M211.69,19.27a6,6,0,0,0-5.15-1.09l-128,32A6,6,0,0,0,74,56V170.11A34,34,0,1,0,86,196V108.68l116-29v58.43A34,34,0,1,0,214,164V24A6,6,0,0,0,211.69,19.27ZM52,218a22,22,0,1,1,22-22A22,22,0,0,1,52,218ZM86,96.32V60.68l116-29V67.32ZM180,186a22,22,0,1,1,22-22A22,22,0,0,1,180,186Z" }));
});
Z.displayName = "Light";
export {
  Z as Light
};
