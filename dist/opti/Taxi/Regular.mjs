var V = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var h = (a, e, H) => e in a ? V(a, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : a[e] = H, o = (a, e) => {
  for (var H in e || (e = {}))
    l.call(e, H) && h(a, H, e[H]);
  if (t)
    for (var H of t(e))
      Z.call(e, H) && h(a, H, e[H]);
  return a;
};
var p = (a, e) => {
  var H = {};
  for (var r in a)
    l.call(a, r) && e.indexOf(r) < 0 && (H[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      e.indexOf(r) < 0 && Z.call(a, r) && (H[r] = a[r]);
  return H;
};
import M, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((r, H) => {
  var m = r, { children: a } = m, e = p(m, ["children"]);
  return /* @__PURE__ */ M.createElement(f, o({ ref: H }, e), a, /* @__PURE__ */ M.createElement("path", { d: "M240,104H228.64L201.25,56.06A16,16,0,0,0,187.36,48H165.42l-12-29.94A15.93,15.93,0,0,0,138.58,8H117.42a15.93,15.93,0,0,0-14.86,10.06L90.58,48H68.64a16,16,0,0,0-13.89,8.06L27.36,104H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V184h96v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V120h8a8,8,0,0,0,0-16ZM117.42,24h21.16l9.6,24H107.82ZM68.64,64H187.36l22.85,40H45.79ZM64,200H40V184H64Zm128,0V184h24v16Zm24-32H40V120H216ZM56,144a8,8,0,0,1,8-8H80a8,8,0,0,1,0,16H64A8,8,0,0,1,56,144Zm112,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,144Z" }));
});
i.displayName = "Regular";
export {
  i as Regular
};
