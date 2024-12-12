var p = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var r = (a, e, H) => e in a ? p(a, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : a[e] = H, A = (a, e) => {
  for (var H in e || (e = {}))
    Z.call(e, H) && r(a, H, e[H]);
  if (t)
    for (var H of t(e))
      V.call(e, H) && r(a, H, e[H]);
  return a;
};
var o = (a, e) => {
  var H = {};
  for (var m in a)
    Z.call(a, m) && e.indexOf(m) < 0 && (H[m] = a[m]);
  if (a != null && t)
    for (var m of t(a))
      e.indexOf(m) < 0 && V.call(a, m) && (H[m] = a[m]);
  return H;
};
import l, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const c = f((m, H) => {
  var h = m, { children: a } = h, e = o(h, ["children"]);
  return /* @__PURE__ */ l.createElement(s, A({ ref: H }, e), a, /* @__PURE__ */ l.createElement("path", { d: "M240,208h-8V72a8,8,0,0,0-8-8H184V40a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8V96H32a8,8,0,0,0-8,8V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM40,112H80a8,8,0,0,0,8-8V48h80V72a8,8,0,0,0,8,8h40V208H152V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40H40Zm96,96H120V176h16ZM112,72a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H120A8,8,0,0,1,112,72Zm0,32a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H120A8,8,0,0,1,112,104Zm56,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,104ZM88,136a8,8,0,0,1-8,8H64a8,8,0,0,1,0-16H80A8,8,0,0,1,88,136Zm0,32a8,8,0,0,1-8,8H64a8,8,0,0,1,0-16H80A8,8,0,0,1,88,168Zm24-32a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H120A8,8,0,0,1,112,136Zm56,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,168Z" }));
});
c.displayName = "Regular";
export {
  c as Regular,
  c as default
};
