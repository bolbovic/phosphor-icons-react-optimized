var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
var o = (a, e, H) => e in a ? c(a, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : a[e] = H, p = (a, e) => {
  for (var H in e || (e = {}))
    Z.call(e, H) && o(a, H, e[H]);
  if (m)
    for (var H of m(e))
      r.call(e, H) && o(a, H, e[H]);
  return a;
};
var A = (a, e) => {
  var H = {};
  for (var t in a)
    Z.call(a, t) && e.indexOf(t) < 0 && (H[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && r.call(a, t) && (H[t] = a[t]);
  return H;
};
import V, { forwardRef as n } from "react";
import i from "../../lib/OptiBase.mjs";
const M = n((t, H) => {
  var h = t, { children: a } = h, e = A(h, ["children"]);
  return /* @__PURE__ */ V.createElement(i, p({ ref: H }, e), a, /* @__PURE__ */ V.createElement("path", { d: "M224,72V216H144V168H112v48H32V104H80V40h96V72Z", opacity: "0.2" }), /* @__PURE__ */ V.createElement("path", { d: "M240,208h-8V72a8,8,0,0,0-8-8H184V40a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8V96H32a8,8,0,0,0-8,8V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM40,112H80a8,8,0,0,0,8-8V48h80V72a8,8,0,0,0,8,8h40V208H152V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40H40Zm96,96H120V176h16ZM112,72a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H120A8,8,0,0,1,112,72Zm0,32a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H120A8,8,0,0,1,112,104Zm56,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,104ZM88,136a8,8,0,0,1-8,8H64a8,8,0,0,1,0-16H80A8,8,0,0,1,88,136Zm0,32a8,8,0,0,1-8,8H64a8,8,0,0,1,0-16H80A8,8,0,0,1,88,168Zm24-32a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H120A8,8,0,0,1,112,136Zm56,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,168Z" }));
});
M.displayName = "Duotone";
export {
  M as Duotone
};
