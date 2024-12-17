var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var i = (e, a, t) => a in e ? s(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, l = (e, a) => {
  for (var t in a || (a = {}))
    p.call(a, t) && i(e, t, a[t]);
  if (m)
    for (var t of m(a))
      A.call(a, t) && i(e, t, a[t]);
  return e;
};
var c = (e, a) => {
  var t = {};
  for (var r in e)
    p.call(e, r) && a.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      a.indexOf(r) < 0 && A.call(e, r) && (t[r] = e[r]);
  return t;
};
import f, { forwardRef as V } from "react";
import d from "../../lib/OptiBase.mjs";
const h = V((r, t) => {
  var o = r, { children: e } = o, a = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(d, l({ ref: t }, a), e, /* @__PURE__ */ f.createElement("path", { d: "M211.69,19.27a6,6,0,0,0-5.15-1.09l-128,32A6,6,0,0,0,74,56V170.11A34,34,0,1,0,86,196V60.68l116-29V138.11A34,34,0,1,0,214,164V24A6,6,0,0,0,211.69,19.27ZM52,218a22,22,0,1,1,22-22A22,22,0,0,1,52,218Zm128-32a22,22,0,1,1,22-22A22,22,0,0,1,180,186Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
