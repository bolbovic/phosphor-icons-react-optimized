var L = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var r = (a, e, H) => e in a ? L(a, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : a[e] = H, i = (a, e) => {
  for (var H in e || (e = {}))
    Z.call(e, H) && r(a, H, e[H]);
  if (m)
    for (var H of m(e))
      o.call(e, H) && r(a, H, e[H]);
  return a;
};
var l = (a, e) => {
  var H = {};
  for (var t in a)
    Z.call(a, t) && e.indexOf(t) < 0 && (H[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && o.call(a, t) && (H[t] = a[t]);
  return H;
};
import p, { forwardRef as M } from "react";
import V from "../../lib/OptiBase.mjs";
const c = M((t, H) => {
  var h = t, { children: a } = h, e = l(h, ["children"]);
  return /* @__PURE__ */ p.createElement(V, i({ ref: H }, e), a, /* @__PURE__ */ p.createElement("path", { d: "M240,106H227.48l-28-48.95a14,14,0,0,0-12.15-7h-23.3L151.58,18.8a13.93,13.93,0,0,0-13-8.8H117.42a13.93,13.93,0,0,0-13,8.8L91.94,50H68.64a14,14,0,0,0-12.15,7l-28,49H16a6,6,0,0,0,0,12H26v82a14,14,0,0,0,14,14H64a14,14,0,0,0,14-14V182H178v18a14,14,0,0,0,14,14h24a14,14,0,0,0,14-14V118h10a6,6,0,0,0,0-12ZM115.56,23.26A2,2,0,0,1,117.42,22h21.16a2,2,0,0,1,1.86,1.26L151.14,50H104.86ZM66.91,63a2,2,0,0,1,1.73-1H187.36a2,2,0,0,1,1.73,1l24.57,43H42.34ZM66,200a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V182H66Zm150,2H192a2,2,0,0,1-2-2V182h28v18A2,2,0,0,1,216,202Zm2-32H38V118H218ZM58,144a6,6,0,0,1,6-6H80a6,6,0,0,1,0,12H64A6,6,0,0,1,58,144Zm112,0a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H176A6,6,0,0,1,170,144Z" }));
});
c.displayName = "Light";
export {
  c as Light
};