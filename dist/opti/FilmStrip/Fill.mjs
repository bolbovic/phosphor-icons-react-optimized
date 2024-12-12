var p = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var r = (e, H, m) => H in e ? p(e, H, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[H] = m, l = (e, H) => {
  for (var m in H || (H = {}))
    Z.call(H, m) && r(e, m, H[m]);
  if (t)
    for (var m of t(H))
      h.call(H, m) && r(e, m, H[m]);
  return e;
};
var o = (e, H) => {
  var m = {};
  for (var a in e)
    Z.call(e, a) && H.indexOf(a) < 0 && (m[a] = e[a]);
  if (e != null && t)
    for (var a of t(e))
      H.indexOf(a) < 0 && h.call(e, a) && (m[a] = e[a]);
  return m;
};
import i, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((a, m) => {
  var V = a, { children: e } = V, H = o(V, ["children"]);
  return /* @__PURE__ */ i.createElement(f, l({ ref: m }, H), e, /* @__PURE__ */ i.createElement("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM184,56h32V72H184ZM72,200H40V184H72ZM72,72H40V56H72Zm48,128H88V184h32Zm0-128H88V56h32Zm48,128H136V184h32Zm0-128H136V56h32Zm48,128H184V184h32v16Z" }));
});
s.displayName = "Fill";
export {
  s as Fill
};
