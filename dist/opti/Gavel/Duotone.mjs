var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (a, e, l) => e in a ? i(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, n = (a, e) => {
  for (var l in e || (e = {}))
    Z.call(e, l) && p(a, l, e[l]);
  if (o)
    for (var l of o(e))
      c.call(e, l) && p(a, l, e[l]);
  return a;
};
var M = (a, e) => {
  var l = {};
  for (var t in a)
    Z.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      e.indexOf(t) < 0 && c.call(a, t) && (l[t] = a[t]);
  return l;
};
import r, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const h = d((t, l) => {
  var m = t, { children: a } = m, e = M(m, ["children"]);
  return /* @__PURE__ */ r.createElement(f, n({ ref: l }, e), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M149.66,45.66l-64,64a8,8,0,0,1-11.32,0l-16-16a8,8,0,0,1,0-11.32l64-64a8,8,0,0,1,11.32,0l16,16A8,8,0,0,1,149.66,45.66Zm88,76.68-16-16a8,8,0,0,0-11.32,0l-64,64a8,8,0,0,0,0,11.32l16,16a8,8,0,0,0,11.32,0l64-64A8,8,0,0,0,237.66,122.34Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M243.32,116.69l-16-16a16,16,0,0,0-20.84-1.53L156.84,49.52a16,16,0,0,0-1.52-20.84l-16-16a16,16,0,0,0-22.63,0l-64,64a16,16,0,0,0,0,22.63l16,16a16,16,0,0,0,20.83,1.52L96.69,124,31.31,189.38A25,25,0,0,0,66.63,224.7L132,159.32l7.17,7.16a16,16,0,0,0,1.52,20.84l16,16a16,16,0,0,0,22.63,0l64-64A16,16,0,0,0,243.32,116.69ZM80,104,64,88l64-64,16,16ZM55.32,213.38a9,9,0,0,1-12.69,0,9,9,0,0,1,0-12.68L108,135.32,120.69,148ZM101,105.66,145.66,61,195,110.34,150.35,155ZM168,192l-16-16,4-4h0l56-56h0l4-4,16,16Z" }));
});
h.displayName = "Duotone";
export {
  h as Duotone
};
