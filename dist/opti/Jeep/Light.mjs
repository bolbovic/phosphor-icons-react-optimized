var v = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var o = (a, e, H) => e in a ? v(a, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : a[e] = H, h = (a, e) => {
  for (var H in e || (e = {}))
    V.call(e, H) && o(a, H, e[H]);
  if (m)
    for (var H of m(e))
      Z.call(e, H) && o(a, H, e[H]);
  return a;
};
var i = (a, e) => {
  var H = {};
  for (var t in a)
    V.call(a, t) && e.indexOf(t) < 0 && (H[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && Z.call(a, t) && (H[t] = a[t]);
  return H;
};
import p, { forwardRef as A } from "react";
import c from "../../lib/OptiBase.mjs";
const f = A((t, H) => {
  var r = t, { children: a } = r, e = i(r, ["children"]);
  return /* @__PURE__ */ p.createElement(c, h({ ref: H }, e), a, /* @__PURE__ */ p.createElement("path", { d: "M240,90H228.85l-9.63-44.93A14.06,14.06,0,0,0,205.53,34H50.47A14.06,14.06,0,0,0,36.78,45.07L27.15,90H16a6,6,0,0,0,0,12H26v98a14,14,0,0,0,14,14H64a14,14,0,0,0,14-14V174H178v26a14,14,0,0,0,14,14h24a14,14,0,0,0,14-14V102h10a6,6,0,0,0,0-12ZM48.51,47.58a2,2,0,0,1,2-1.58H205.53a2,2,0,0,1,2,1.58L216.58,90H39.42ZM66,200a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V174H66Zm150,2H192a2,2,0,0,1-2-2V174h28v26A2,2,0,0,1,216,202Zm2-40H150V128a6,6,0,0,0-12,0v34H118V128a6,6,0,0,0-12,0v34H38V102H218ZM58,132a10,10,0,1,1,10,10A10,10,0,0,1,58,132Zm120,0a10,10,0,1,1,10,10A10,10,0,0,1,178,132Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
