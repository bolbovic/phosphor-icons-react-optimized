var c = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var Z = (e, m, a) => m in e ? c(e, m, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[m] = a, p = (e, m) => {
  for (var a in m || (m = {}))
    o.call(m, a) && Z(e, a, m[a]);
  if (A)
    for (var a of A(m))
      i.call(m, a) && Z(e, a, m[a]);
  return e;
};
var h = (e, m) => {
  var a = {};
  for (var t in e)
    o.call(e, t) && m.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && A)
    for (var t of A(e))
      m.indexOf(t) < 0 && i.call(e, t) && (a[t] = e[t]);
  return a;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const M = f((t, a) => {
  var r = t, { children: e } = r, m = h(r, ["children"]);
  return /* @__PURE__ */ n.createElement(s, p({ ref: a }, m), e, /* @__PURE__ */ n.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28ZM60,66.07A91.22,91.22,0,0,1,83.9,124H36.09A91.7,91.7,0,0,1,60,66.07ZM132,124V36.09a91.63,91.63,0,0,1,58.32,24.3A99.24,99.24,0,0,0,164.09,124Zm-8,0H91.91A99.24,99.24,0,0,0,65.68,60.39,91.63,91.63,0,0,1,124,36.09Zm-40.1,8A91.22,91.22,0,0,1,60,189.93,91.7,91.7,0,0,1,36.09,132Zm8,0H124v87.91a91.63,91.63,0,0,1-58.32-24.3A99.24,99.24,0,0,0,91.91,132ZM132,132h32.09a99.24,99.24,0,0,0,26.23,63.61A91.63,91.63,0,0,1,132,219.91Zm40.1,0h47.81A91.7,91.7,0,0,1,196,189.93,91.22,91.22,0,0,1,172.1,132Zm0-8A91.22,91.22,0,0,1,196,66.07,91.7,91.7,0,0,1,219.91,124Z" }));
});
M.displayName = "Thin";
export {
  M as Thin
};
