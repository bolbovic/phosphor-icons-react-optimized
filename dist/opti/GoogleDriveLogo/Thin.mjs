var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var Z = (e, t, a) => t in e ? h(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, p = (e, t) => {
  for (var a in t || (t = {}))
    o.call(t, a) && Z(e, a, t[a]);
  if (r)
    for (var a of r(t))
      i.call(t, a) && Z(e, a, t[a]);
  return e;
};
var H = (e, t) => {
  var a = {};
  for (var m in e)
    o.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && r)
    for (var m of r(e))
      t.indexOf(m) < 0 && i.call(e, m) && (a[m] = e[m]);
  return a;
};
import M, { forwardRef as n } from "react";
import L from "../../lib/OptiBase.mjs";
const c = n((m, a) => {
  var l = m, { children: e } = l, t = H(l, ["children"]);
  return /* @__PURE__ */ M.createElement(L, p({ ref: a }, t), e, /* @__PURE__ */ M.createElement("path", { d: "M234.19,145.86,165.74,33.64A11.94,11.94,0,0,0,155.56,28H100.43a11.93,11.93,0,0,0-10.17,5.64l0,0L21.83,145.82a12,12,0,0,0-.25,12.32L48.91,206A12,12,0,0,0,59.32,212H196.67A12,12,0,0,0,207.09,206l27.32-47.81A12,12,0,0,0,234.19,145.86ZM226.13,148H170.26l-37.6-62.67,27.39-45.65ZM95.06,148,128,93.11,160.93,148Zm70.67,8,28.8,48H61.47l28.79-48ZM128,77.56,103.06,36h49.87ZM95.94,39.68l27.39,45.65L85.74,148H29.87ZM29.58,156H80.94L54.63,199.85Zm171.79,43.85L175.06,156h51.36Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};
