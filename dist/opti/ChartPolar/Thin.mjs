var c = Object.defineProperty;
var a = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var Z = (e, m, A) => m in e ? c(e, m, { enumerable: !0, configurable: !0, writable: !0, value: A }) : e[m] = A, p = (e, m) => {
  for (var A in m || (m = {}))
    o.call(m, A) && Z(e, A, m[A]);
  if (a)
    for (var A of a(m))
      i.call(m, A) && Z(e, A, m[A]);
  return e;
};
var h = (e, m) => {
  var A = {};
  for (var t in e)
    o.call(e, t) && m.indexOf(t) < 0 && (A[t] = e[t]);
  if (e != null && a)
    for (var t of a(e))
      m.indexOf(t) < 0 && i.call(e, t) && (A[t] = e[t]);
  return A;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const H = f((t, A) => {
  var r = t, { children: e } = r, m = h(r, ["children"]);
  return /* @__PURE__ */ n.createElement(s, p({ ref: A }, m), e, /* @__PURE__ */ n.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm91.91,96H187.85A60.07,60.07,0,0,0,132,68.15V36.09A92.13,92.13,0,0,1,219.91,124ZM124,124H76.17A52.05,52.05,0,0,1,124,76.17Zm0,8v47.83A52.05,52.05,0,0,1,76.17,132Zm8,0h47.83A52.05,52.05,0,0,1,132,179.83Zm0-8V76.17A52.05,52.05,0,0,1,179.83,124Zm-8-87.91V68.15A60.07,60.07,0,0,0,68.15,124H36.09A92.13,92.13,0,0,1,124,36.09ZM36.09,132H68.15A60.07,60.07,0,0,0,124,187.85v32.06A92.13,92.13,0,0,1,36.09,132ZM132,219.91V187.85A60.07,60.07,0,0,0,187.85,132h32.06A92.13,92.13,0,0,1,132,219.91Z" }));
});
H.displayName = "Thin";
export {
  H as Thin
};
