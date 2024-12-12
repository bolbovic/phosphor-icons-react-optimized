var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, a, l) => a in e ? f(e, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[a] = l, H = (e, a) => {
  for (var l in a || (a = {}))
    i.call(a, l) && o(e, l, a[l]);
  if (r)
    for (var l of r(a))
      p.call(a, l) && o(e, l, a[l]);
  return e;
};
var Z = (e, a) => {
  var l = {};
  for (var t in e)
    i.call(e, t) && a.indexOf(t) < 0 && (l[t] = e[t]);
  if (e != null && r)
    for (var t of r(e))
      a.indexOf(t) < 0 && p.call(e, t) && (l[t] = e[t]);
  return l;
};
import c, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const M = s((t, l) => {
  var m = t, { children: e } = m, a = Z(m, ["children"]);
  return /* @__PURE__ */ c.createElement(L, H({ ref: l }, a), e, /* @__PURE__ */ c.createElement("path", { d: "M237.6,143.78,169.13,31.52A15.91,15.91,0,0,0,155.56,24H100.43a15.89,15.89,0,0,0-13.56,7.52l-.05.07L18.44,143.7a16,16,0,0,0-.33,16.42l27.32,47.82A16,16,0,0,0,59.32,216H196.67a16,16,0,0,0,13.89-8.06l27.32-47.82A15.91,15.91,0,0,0,237.6,143.78ZM219,144H172.52L137.33,85.33l22.75-37.92ZM92.53,160h70.94l24,40H68.53Zm9.6-16L128,100.88,153.87,144ZM95.91,47.41l22.76,37.92L83.47,144H37Z" }));
});
M.displayName = "Fill";
export {
  M as Fill
};
