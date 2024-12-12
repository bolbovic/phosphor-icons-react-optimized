var M = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? M(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      c.call(t, e) && m(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var l in a)
    A.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && c.call(a, l) && (e[l] = a[l]);
  return e;
};
import d, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const i = f((l, e) => {
  var r = l, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ d.createElement(h, p({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M224.49,176.49,209,192l15.52,15.51a12,12,0,0,1-17,17L192,209l-15.51,15.52a12,12,0,0,1-17-17L175,192l-15.52-15.51a12,12,0,0,1,17-17L192,175l15.51-15.52a12,12,0,0,1,17,17ZM236,128a12,12,0,0,1-12,12H100.54c4.37,49.56,34.63,74.37,35,74.63h0A12,12,0,0,1,128,236,108,108,0,1,1,236,128ZM158.21,49.64A144.3,144.3,0,0,1,179.56,116h31.57A84.22,84.22,0,0,0,158.21,49.64ZM117.64,63.23A119.74,119.74,0,0,0,100.53,116h54.94c-3-33.9-18.09-56.22-27.45-67A107.75,107.75,0,0,0,117.64,63.23ZM44.87,116H76.44A144.3,144.3,0,0,1,97.79,49.64,84.22,84.22,0,0,0,44.87,116Zm31.57,24H44.87a84.22,84.22,0,0,0,52.92,66.36A144.3,144.3,0,0,1,76.44,140Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
