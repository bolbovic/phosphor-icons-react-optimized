var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var o = (a, e, l) => e in a ? c(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, s = (a, e) => {
  for (var l in e || (e = {}))
    p.call(e, l) && o(a, l, e[l]);
  if (r)
    for (var l of r(e))
      f.call(e, l) && o(a, l, e[l]);
  return a;
};
var M = (a, e) => {
  var l = {};
  for (var t in a)
    p.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      e.indexOf(t) < 0 && f.call(a, t) && (l[t] = a[t]);
  return l;
};
import Z, { forwardRef as d } from "react";
import i from "../../lib/OptiBase.mjs";
const L = d((t, l) => {
  var m = t, { children: a } = m, e = M(m, ["children"]);
  return /* @__PURE__ */ Z.createElement(i, s({ ref: l }, e), a, /* @__PURE__ */ Z.createElement("path", { d: "M243.32,116.69l-16-16a16,16,0,0,0-20.84-1.53L156.84,49.52a16,16,0,0,0-1.52-20.84l-16-16a16,16,0,0,0-22.63,0l-64,64a16,16,0,0,0,0,22.63l16,16a16,16,0,0,0,20.83,1.52L96.69,124,31.31,189.38A25,25,0,0,0,66.63,224.7L132,159.32l7.17,7.16a16,16,0,0,0,1.52,20.84l16,16a16,16,0,0,0,22.63,0l64-64A16,16,0,0,0,243.32,116.69ZM80,104,64,88l64-64,16,16ZM55.32,213.38a9,9,0,0,1-12.69,0,9,9,0,0,1,0-12.68L108,135.32,120.69,148ZM101,105.66,145.66,61,195,110.34,150.35,155ZM168,192l-16-16,4-4h0l56-56h0l4-4,16,16Z" }));
});
L.displayName = "Regular";
export {
  L as Regular,
  L as default
};
