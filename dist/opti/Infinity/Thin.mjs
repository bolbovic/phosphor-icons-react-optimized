var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const E = d((l, e) => {
  var m = l, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(h, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M244,128a52,52,0,0,1-88.77,36.77l-.17-.18L95,96.8a44,44,0,1,0,0,62.4l8.6-9.72a4,4,0,0,1,6,5.3l-8.68,9.81-.17.18a52,52,0,1,1,0-73.54l.17.18,60,67.79a44,44,0,1,0,0-62.4l-8.6,9.72a4,4,0,0,1-6-5.3l8.68-9.81.17-.18A52,52,0,0,1,244,128Z" }));
});
E.displayName = "Thin";
export {
  E as Thin
};
