var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && H(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && H(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var o in a)
    V.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && p.call(a, o) && (e[o] = a[o]);
  return e;
};
import v, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const i = f((o, e) => {
  var m = o, { children: a } = m, t = l(m, ["children"]);
  return /* @__PURE__ */ v.createElement(h, d({ ref: e }, t), a, /* @__PURE__ */ v.createElement("path", { d: "M192,124a12,12,0,0,0,12-12V72a12,12,0,0,0-12-12H156V24a12,12,0,0,0-12-12H112a12,12,0,0,0-12,12A36,36,0,0,1,64,60,12,12,0,0,0,52,72v40a12,12,0,0,0,12,12H84v52a68.07,68.07,0,0,0,68,68h40a12,12,0,0,0,12-12V184a12,12,0,0,0-12-12H160a4,4,0,0,1-4-4V124Zm-32,72h20v24H152a44.05,44.05,0,0,1-44-44V112a12,12,0,0,0-12-12H76V82.79A60.18,60.18,0,0,0,122.79,36H132V72a12,12,0,0,0,12,12h36v16H144a12,12,0,0,0-12,12v56A28,28,0,0,0,160,196Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
