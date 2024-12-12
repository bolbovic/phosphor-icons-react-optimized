var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var Z = (a, m, e) => m in a ? f(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, l = (a, m) => {
  for (var e in m || (m = {}))
    i.call(m, e) && Z(a, e, m[e]);
  if (r)
    for (var e of r(m))
      p.call(m, e) && Z(a, e, m[e]);
  return a;
};
var n = (a, m) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const d = s((t, e) => {
  var o = t, { children: a } = o, m = n(o, ["children"]);
  return /* @__PURE__ */ c.createElement(A, l({ ref: e }, m), a, /* @__PURE__ */ c.createElement("path", { d: "M198.71,57.29A100,100,0,1,0,57.29,198.71,100,100,0,1,0,198.71,57.29ZM188,197.72a91.35,91.35,0,0,1-24,15v-115l24-24Zm-88-36.06,24-24V219.9a91.91,91.91,0,0,1-24-4.24Zm-8,51a91.69,91.69,0,0,1-26.15-16.89L92,169.66Zm40-83,24-24v110a91.76,91.76,0,0,1-24,4.24ZM36,128A92,92,0,0,1,190.16,60.19l-130,130A91.34,91.34,0,0,1,36,128Zm160,62V66A92,92,0,0,1,196,190Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
