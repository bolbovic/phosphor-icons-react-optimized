var A = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var h = (e, t, a) => t in e ? A(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, i = (e, t) => {
  for (var a in t || (t = {}))
    o.call(t, a) && h(e, a, t[a]);
  if (l)
    for (var a of l(t))
      c.call(t, a) && h(e, a, t[a]);
  return e;
};
var p = (e, t) => {
  var a = {};
  for (var m in e)
    o.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && l)
    for (var m of l(e))
      t.indexOf(m) < 0 && c.call(e, m) && (a[m] = e[m]);
  return a;
};
import Z, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((m, a) => {
  var r = m, { children: e } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, i({ ref: a }, t), e, /* @__PURE__ */ Z.createElement("path", { d: "M232,120A104.12,104.12,0,0,0,128,16h0A104.12,104.12,0,0,0,24,120a8,8,0,0,0,3.21,6.39h0L120,196v20h-8a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16h-8V196l92.8-69.6h0A8,8,0,0,0,232,120Zm-16.36-8H175.83c-1.54-37.95-13.91-62.43-25.11-77A88.2,88.2,0,0,1,215.64,112ZM154.4,128,128,175.53,101.6,128Zm-71.11,0,19.5,35.09L56,128Zm89.42,0H200l-46.79,35.09ZM105.28,35c-11.2,14.57-23.57,39.05-25.11,77H40.36A88.2,88.2,0,0,1,105.28,35Z" }));
});
d.displayName = "Fill";
export {
  d as Fill
};
