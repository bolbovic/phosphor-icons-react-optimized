var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? c(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, L = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && o(a, e, r[e]);
  if (m)
    for (var e of m(r))
      A.call(r, e) && o(a, e, r[e]);
  return a;
};
var Z = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && A.call(a, t) && (e[t] = a[t]);
  return e;
};
import M, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((t, e) => {
  var l = t, { children: a } = l, r = Z(l, ["children"]);
  return /* @__PURE__ */ M.createElement(i, L({ ref: e }, r), a, /* @__PURE__ */ M.createElement("path", { d: "M189.66,66.34a8,8,0,0,0-11.32,0L148.69,96H107.31L77.66,66.34A8,8,0,0,0,66.34,77.66L96,107.31v41.38L66.34,178.34a8,8,0,0,0,11.32,11.32L107.31,160h41.38l29.65,29.66a8,8,0,0,0,11.32-11.32L160,148.69V107.31l29.66-29.65A8,8,0,0,0,189.66,66.34ZM112,112h32v32H112Zm26.51-50.67a44,44,0,1,1,56.16,56.16A7.86,7.86,0,0,1,192,118a8,8,0,0,1-2.67-15.54,28,28,0,1,0-35.74-35.74,8,8,0,1,1-15.08-5.34ZM224,180a44,44,0,0,1-85.49,14.67,8,8,0,0,1,15.08-5.34,28,28,0,1,0,35.74-35.74,8,8,0,0,1,5.34-15.08A44.07,44.07,0,0,1,224,180ZM117.49,194.67a44,44,0,1,1-56.16-56.16,8,8,0,0,1,5.34,15.08,28,28,0,1,0,35.74,35.74,8,8,0,0,1,15.08,5.34ZM32,76a44,44,0,0,1,85.49-14.67,8,8,0,1,1-15.08,5.34,28,28,0,1,0-35.74,35.74A8,8,0,0,1,64,118a7.86,7.86,0,0,1-2.67-.46A44.07,44.07,0,0,1,32,76Z" }));
});
s.displayName = "Regular";
export {
  s as Regular
};
