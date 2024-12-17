var p = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var V = (a, e, H) => e in a ? p(a, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : a[e] = H, o = (a, e) => {
  for (var H in e || (e = {}))
    Z.call(e, H) && V(a, H, e[H]);
  if (m)
    for (var H of m(e))
      h.call(e, H) && V(a, H, e[H]);
  return a;
};
var A = (a, e) => {
  var H = {};
  for (var t in a)
    Z.call(a, t) && e.indexOf(t) < 0 && (H[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && h.call(a, t) && (H[t] = a[t]);
  return H;
};
import i, { forwardRef as n } from "react";
import M from "../../lib/OptiBase.mjs";
const c = n((t, H) => {
  var r = t, { children: a } = r, e = A(r, ["children"]);
  return /* @__PURE__ */ i.createElement(M, o({ ref: H }, e), a, /* @__PURE__ */ i.createElement("path", { d: "M251.71,118.51l-14-35A12,12,0,0,0,226.58,76H188V64a4,4,0,0,0-8,0V166.71A28.05,28.05,0,0,0,164.29,188H107.71a28,28,0,0,0-55.42,0H32a4,4,0,0,1-4-4V136a4,4,0,0,0-8,0v48a12,12,0,0,0,12,12H52.29a28,28,0,0,0,55.42,0h56.58a28,28,0,0,0,55.42,0H240a12,12,0,0,0,12-12V120A4,4,0,0,0,251.71,118.51ZM226.58,84a4,4,0,0,1,3.72,2.51L242.09,116H188V84ZM80,212a20,20,0,1,1,20-20A20,20,0,0,1,80,212Zm112,0a20,20,0,1,1,20-20A20,20,0,0,1,192,212Zm48-24H219.71A28,28,0,0,0,188,164.29V124h56v60A4,4,0,0,1,240,188ZM24,100a4,4,0,0,0,0,8H152a4,4,0,0,0,0-8H132V68h20a4,4,0,0,0,0-8H24a4,4,0,0,0,0,8H44v32Zm100,0H92V68h32ZM52,68H84v32H52Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};
