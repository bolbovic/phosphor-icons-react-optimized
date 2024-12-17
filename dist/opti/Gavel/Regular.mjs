var i = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, M = Object.prototype.propertyIsEnumerable;
var o = (a, e, l) => e in a ? i(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, Z = (a, e) => {
  for (var l in e || (e = {}))
    p.call(e, l) && o(a, l, e[l]);
  if (t)
    for (var l of t(e))
      M.call(e, l) && o(a, l, e[l]);
  return a;
};
var c = (a, e) => {
  var l = {};
  for (var r in a)
    p.call(a, r) && e.indexOf(r) < 0 && (l[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      e.indexOf(r) < 0 && M.call(a, r) && (l[r] = a[r]);
  return l;
};
import f, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const R = s((r, l) => {
  var m = r, { children: a } = m, e = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(L, Z({ ref: l }, e), a, /* @__PURE__ */ f.createElement("path", { d: "M243.32,116.69l-16-16a16,16,0,0,0-20.84-1.53L156.84,49.52a16,16,0,0,0-1.52-20.84l-16-16a16,16,0,0,0-22.63,0l-64,64a16,16,0,0,0,0,22.63l16,16a16,16,0,0,0,20.83,1.52L96.69,124,31.31,189.38A25,25,0,0,0,66.63,224.7L132,159.32l7.17,7.16a16,16,0,0,0,1.52,20.84l16,16a16,16,0,0,0,22.63,0l64-64A16,16,0,0,0,243.32,116.69ZM80,104,64,88l64-64,16,16ZM55.32,213.38a9,9,0,0,1-12.69,0,9,9,0,0,1,0-12.68L108,135.32,120.69,148ZM101,105.66,145.66,61,195,110.34,150.35,155ZM168,192l-16-16,4-4h0l56-56h0l4-4,16,16Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
