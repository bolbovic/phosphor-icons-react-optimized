var c = Object.defineProperty;
var a = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var Z = (e, A, t) => A in e ? c(e, A, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[A] = t, p = (e, A) => {
  for (var t in A || (A = {}))
    o.call(A, t) && Z(e, t, A[t]);
  if (a)
    for (var t of a(A))
      i.call(A, t) && Z(e, t, A[t]);
  return e;
};
var h = (e, A) => {
  var t = {};
  for (var m in e)
    o.call(e, m) && A.indexOf(m) < 0 && (t[m] = e[m]);
  if (e != null && a)
    for (var m of a(e))
      A.indexOf(m) < 0 && i.call(e, m) && (t[m] = e[m]);
  return t;
};
import M, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const H = f((m, t) => {
  var r = m, { children: e } = r, A = h(r, ["children"]);
  return /* @__PURE__ */ M.createElement(s, p({ ref: t }, A), e, /* @__PURE__ */ M.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm89.8,96H189.7A62.07,62.07,0,0,0,134,66.3V38.2A90.15,90.15,0,0,1,217.8,122ZM122,122H78.37A50.09,50.09,0,0,1,122,78.37Zm0,12v43.63A50.09,50.09,0,0,1,78.37,134Zm12,0h43.63A50.09,50.09,0,0,1,134,177.63Zm0-12V78.37A50.09,50.09,0,0,1,177.63,122ZM122,38.2V66.3A62.07,62.07,0,0,0,66.3,122H38.2A90.15,90.15,0,0,1,122,38.2ZM38.2,134H66.3A62.07,62.07,0,0,0,122,189.7v28.1A90.15,90.15,0,0,1,38.2,134ZM134,217.8V189.7A62.07,62.07,0,0,0,189.7,134h28.1A90.15,90.15,0,0,1,134,217.8Z" }));
});
H.displayName = "Light";
export {
  H as Light
};
