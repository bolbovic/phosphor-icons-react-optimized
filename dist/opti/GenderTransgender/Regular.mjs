var i = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      f.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && f.call(a, r) && (e[r] = a[r]);
  return e;
};
import d, { forwardRef as L } from "react";
import R from "../../lib/OptiBase.mjs";
const n = L((r, e) => {
  var m = r, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ d.createElement(R, s({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M216,32H168a8,8,0,0,0,0,16h28.69L168,76.69,149.66,58.35a8,8,0,1,0-11.32,11.31L156.69,88l-15.76,15.76a71.94,71.94,0,1,0,11.32,11.31L168,99.33l18.34,18.34a8,8,0,0,0,11.32-11.31L179.31,88,208,59.32V88a8,8,0,0,0,16,0V40A8,8,0,0,0,216,32ZM135.6,199.63A56,56,0,1,1,152,160,56.08,56.08,0,0,1,135.6,199.63Z" }));
});
n.displayName = "Regular";
export {
  n as Regular,
  n as default
};
