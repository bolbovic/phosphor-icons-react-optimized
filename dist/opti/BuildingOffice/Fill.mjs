var V = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var l = (a, H, e) => H in a ? V(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, i = (a, H) => {
  for (var e in H || (H = {}))
    o.call(H, e) && l(a, e, H[e]);
  if (t)
    for (var e of t(H))
      Z.call(H, e) && l(a, e, H[e]);
  return a;
};
var p = (a, H) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && H.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && t)
    for (var m of t(a))
      H.indexOf(m) < 0 && Z.call(a, m) && (e[m] = a[m]);
  return e;
};
import h, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var r = m, { children: a } = r, H = p(r, ["children"]);
  return /* @__PURE__ */ h.createElement(f, i({ ref: e }, H), a, /* @__PURE__ */ h.createElement("path", { d: "M248,208H232V96a8,8,0,0,0,0-16H184V48a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16V208H24a8,8,0,0,0,0,16H248a8,8,0,0,0,0-16ZM80,72H96a8,8,0,0,1,0,16H80a8,8,0,0,1,0-16Zm-8,48a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,120Zm64,88H88V160h48Zm8-80H128a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm0-40H128a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm72,120H184V96h32Z" }));
});
s.displayName = "Fill";
export {
  s as Fill
};
