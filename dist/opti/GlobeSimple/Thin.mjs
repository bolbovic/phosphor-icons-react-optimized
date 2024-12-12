var A = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var r = (e, m, t) => m in e ? A(e, m, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[m] = t, i = (e, m) => {
  for (var t in m || (m = {}))
    o.call(m, t) && r(e, t, m[t]);
  if (c)
    for (var t of c(m))
      Z.call(m, t) && r(e, t, m[t]);
  return e;
};
var p = (e, m) => {
  var t = {};
  for (var a in e)
    o.call(e, a) && m.indexOf(a) < 0 && (t[a] = e[a]);
  if (e != null && c)
    for (var a of c(e))
      m.indexOf(a) < 0 && Z.call(e, a) && (t[a] = e[a]);
  return t;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const M = f((a, t) => {
  var h = a, { children: e } = h, m = p(h, ["children"]);
  return /* @__PURE__ */ n.createElement(s, i({ ref: t }, m), e, /* @__PURE__ */ n.createElement("path", { d: "M128,28h0A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm91.9,96h-48c-1.15-45.55-21.74-74.52-33.48-87.4A92.14,92.14,0,0,1,219.91,124ZM128,218.61c-8.32-8-34.57-37.13-35.93-86.61h71.86C162.57,181.48,136.32,210.61,128,218.61ZM92.07,124C93.43,74.52,119.68,45.39,128,37.39c8.32,8,34.57,37.13,35.93,86.61Zm25.47-87.4C105.8,49.48,85.21,78.45,84.06,124h-48A92.14,92.14,0,0,1,117.54,36.6ZM36.09,132h48c1.15,45.55,21.74,74.52,33.48,87.4A92.14,92.14,0,0,1,36.09,132Zm102.37,87.4c11.74-12.88,32.33-41.85,33.48-87.4h48A92.14,92.14,0,0,1,138.46,219.4Z" }));
});
M.displayName = "Thin";
export {
  M as Thin
};
