var M = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var h = (a, e, H) => e in a ? M(a, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : a[e] = H, i = (a, e) => {
  for (var H in e || (e = {}))
    Z.call(e, H) && h(a, H, e[H]);
  if (m)
    for (var H of m(e))
      o.call(e, H) && h(a, H, e[H]);
  return a;
};
var p = (a, e) => {
  var H = {};
  for (var t in a)
    Z.call(a, t) && e.indexOf(t) < 0 && (H[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && o.call(a, t) && (H[t] = a[t]);
  return H;
};
import n, { forwardRef as V } from "react";
import c from "../../lib/OptiBase.mjs";
const f = V((t, H) => {
  var r = t, { children: a } = r, e = p(r, ["children"]);
  return /* @__PURE__ */ n.createElement(c, i({ ref: H }, e), a, /* @__PURE__ */ n.createElement("path", { d: "M240,108H226.32L197.78,58.05a12,12,0,0,0-10.42-6H68.64a12,12,0,0,0-10.42,6L29.68,108H16a4,4,0,0,0,0,8H28v84a12,12,0,0,0,12,12H64a12,12,0,0,0,12-12V180H180v20a12,12,0,0,0,12,12h24a12,12,0,0,0,12-12V116h12a4,4,0,0,0,0-8ZM65.17,62a4,4,0,0,1,3.47-2H187.36a4,4,0,0,1,3.47,2l26.28,46H38.89ZM68,200a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V180H68Zm148,4H192a4,4,0,0,1-4-4V180h32v20A4,4,0,0,1,216,204Zm4-32H36V116H220ZM60,144a4,4,0,0,1,4-4H80a4,4,0,0,1,0,8H64A4,4,0,0,1,60,144Zm112,0a4,4,0,0,1,4-4h16a4,4,0,0,1,0,8H176A4,4,0,0,1,172,144ZM100,24a4,4,0,0,1,4-4h48a4,4,0,0,1,0,8H104A4,4,0,0,1,100,24Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
