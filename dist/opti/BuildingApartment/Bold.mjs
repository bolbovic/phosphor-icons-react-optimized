var d = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var o = (a, e, H) => e in a ? d(a, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : a[e] = H, A = (a, e) => {
  for (var H in e || (e = {}))
    r.call(e, H) && o(a, H, e[H]);
  if (t)
    for (var H of t(e))
      Z.call(e, H) && o(a, H, e[H]);
  return a;
};
var p = (a, e) => {
  var H = {};
  for (var m in a)
    r.call(a, m) && e.indexOf(m) < 0 && (H[m] = a[m]);
  if (a != null && t)
    for (var m of t(a))
      e.indexOf(m) < 0 && Z.call(a, m) && (H[m] = a[m]);
  return H;
};
import V, { forwardRef as l } from "react";
import c from "../../lib/OptiBase.mjs";
const f = l((m, H) => {
  var h = m, { children: a } = h, e = p(h, ["children"]);
  return /* @__PURE__ */ V.createElement(c, A({ ref: H }, e), a, /* @__PURE__ */ V.createElement("path", { d: "M240,204h-4V76a12,12,0,0,0-12-12H188V40a12,12,0,0,0-12-12H80A12,12,0,0,0,68,40v60H32a12,12,0,0,0-12,12v92H16a12,12,0,0,0,0,24H240a12,12,0,0,0,0-24ZM44,124H80a12,12,0,0,0,12-12V52h72V76a12,12,0,0,0,12,12h36V204H148V176a4,4,0,0,0-4-4H112a4,4,0,0,0-4,4v28H44Zm64-48a12,12,0,0,1,12-12h16a12,12,0,0,1,0,24H120A12,12,0,0,1,108,76Zm0,36a12,12,0,0,1,12-12h16a12,12,0,0,1,0,24H120A12,12,0,0,1,108,112Zm52,0a12,12,0,0,1,12-12h16a12,12,0,0,1,0,24H172A12,12,0,0,1,160,112ZM96,148a12,12,0,0,1-12,12H68a12,12,0,0,1,0-24H84A12,12,0,0,1,96,148Zm12,0a12,12,0,0,1,12-12h16a12,12,0,0,1,0,24H120A12,12,0,0,1,108,148Zm52,0a12,12,0,0,1,12-12h16a12,12,0,0,1,0,24H172A12,12,0,0,1,160,148Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
