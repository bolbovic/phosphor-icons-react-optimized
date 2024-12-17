var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (e, t, a) => t in e ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, H = (e, t) => {
  for (var a in t || (t = {}))
    L.call(t, a) && r(e, a, t[a]);
  if (m)
    for (var a of m(t))
      p.call(t, a) && r(e, a, t[a]);
  return e;
};
var M = (e, t) => {
  var a = {};
  for (var l in e)
    L.call(e, l) && t.indexOf(l) < 0 && (a[l] = e[l]);
  if (e != null && m)
    for (var l of m(e))
      t.indexOf(l) < 0 && p.call(e, l) && (a[l] = e[l]);
  return a;
};
import o, { forwardRef as n } from "react";
import A from "../../lib/OptiBase.mjs";
const i = n((l, a) => {
  var Z = l, { children: e } = Z, t = M(Z, ["children"]);
  return /* @__PURE__ */ o.createElement(A, H({ ref: a }, t), e, /* @__PURE__ */ o.createElement(
    "path",
    {
      d: "M24,152H88L55.12,206.8A7.91,7.91,0,0,1,52.38,204L25.05,156.15A8,8,0,0,1,24,152Zm144,0,32.88,54.8a7.91,7.91,0,0,0,2.74-2.83l27.32-47.82A8,8,0,0,0,232,152ZM100.43,32a8.06,8.06,0,0,0-3.84,1L128,85.33,159.41,33a8.07,8.07,0,0,0-3.85-1Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ o.createElement("path", { d: "M237.6,143.78,169.13,31.52A15.91,15.91,0,0,0,155.56,24H100.43a15.89,15.89,0,0,0-13.56,7.52l-.05.07L18.44,143.7a16,16,0,0,0-.33,16.42l27.32,47.82A16,16,0,0,0,59.32,216H196.67a16,16,0,0,0,13.89-8.06l27.32-47.82A15.91,15.91,0,0,0,237.6,143.78ZM219,144H172.52L137.33,85.33l22.75-37.92Zm-116.87,0L128,100.88,153.87,144Zm61.34,16,24,40H68.53l24-40ZM128,69.78,110.12,40l35.78-.05ZM95.91,47.41l22.76,37.92L83.47,144H37ZM36.54,160H73.87L54.72,191.92Zm164.74,31.93L182.12,160h37.41Z" }));
});
i.displayName = "Duotone";
export {
  i as Duotone
};
