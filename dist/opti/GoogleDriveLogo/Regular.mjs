var c = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var Z = (e, l, a) => l in e ? c(e, l, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[l] = a, H = (e, l) => {
  for (var a in l || (l = {}))
    o.call(l, a) && Z(e, a, l[a]);
  if (t)
    for (var a of t(l))
      p.call(l, a) && Z(e, a, l[a]);
  return e;
};
var L = (e, l) => {
  var a = {};
  for (var r in e)
    o.call(e, r) && l.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && t)
    for (var r of t(e))
      l.indexOf(r) < 0 && p.call(e, r) && (a[r] = e[r]);
  return a;
};
import M, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((r, a) => {
  var m = r, { children: e } = m, l = L(m, ["children"]);
  return /* @__PURE__ */ M.createElement(i, H({ ref: a }, l), e, /* @__PURE__ */ M.createElement("path", { d: "M237.6,143.78,169.13,31.52A15.91,15.91,0,0,0,155.56,24H100.43a15.89,15.89,0,0,0-13.56,7.52l-.05.07L18.44,143.7a16,16,0,0,0-.33,16.42l27.32,47.82A16,16,0,0,0,59.32,216H196.67a16,16,0,0,0,13.89-8.06l27.32-47.82A15.91,15.91,0,0,0,237.6,143.78ZM219,144H172.52L137.33,85.33l22.75-37.92Zm-116.87,0L128,100.88,153.87,144Zm61.34,16,24,40H68.53l24-40ZM128,69.78,110.12,40l35.78-.05ZM95.91,47.41l22.76,37.92L83.47,144H37ZM36.54,160H73.87L54.72,191.92Zm164.74,31.93L182.12,160h37.41Z" }));
});
s.displayName = "Regular";
export {
  s as Regular
};