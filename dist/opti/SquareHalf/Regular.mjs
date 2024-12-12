var c = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var o = (e, m, a) => m in e ? c(e, m, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[m] = a, p = (e, m) => {
  for (var a in m || (m = {}))
    H.call(m, a) && o(e, a, m[a]);
  if (t)
    for (var a of t(m))
      Z.call(m, a) && o(e, a, m[a]);
  return e;
};
var V = (e, m) => {
  var a = {};
  for (var r in e)
    H.call(e, r) && m.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && t)
    for (var r of t(e))
      m.indexOf(r) < 0 && Z.call(e, r) && (a[r] = e[r]);
  return a;
};
import l, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((r, a) => {
  var h = r, { children: e } = h, m = V(h, ["children"]);
  return /* @__PURE__ */ l.createElement(i, p({ ref: a }, m), e, /* @__PURE__ */ l.createElement("path", { d: "M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm-64,80h64v16H136Zm0-16V88h64v16Zm0,48h64v16H136Zm64-80H136V56h64ZM56,56h64V200H56ZM200,200H136V184h64v16Z" }));
});
s.displayName = "Regular";
export {
  s as Regular
};
