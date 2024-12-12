var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? i(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, s = (a, l) => {
  for (var e in l || (l = {}))
    p.call(l, e) && o(a, e, l[e]);
  if (r)
    for (var e of r(l))
      f.call(l, e) && o(a, e, l[e]);
  return a;
};
var c = (a, l) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && f.call(a, t) && (e[t] = a[t]);
  return e;
};
import d, { forwardRef as L } from "react";
import R from "../../lib/OptiBase.mjs";
const n = L((t, e) => {
  var m = t, { children: a } = m, l = c(m, ["children"]);
  return /* @__PURE__ */ d.createElement(R, s({ ref: e }, l), a, /* @__PURE__ */ d.createElement("path", { d: "M245.66,58.34l-48-48a8,8,0,0,0-11.32,11.32L204.69,40l-71,71L99.31,76.68a16,16,0,0,0-22.62,0l-56,56A15.89,15.89,0,0,0,16,144v80a16,16,0,0,0,16,16h80a15.86,15.86,0,0,0,11.31-4.69l56-56a16,16,0,0,0,0-22.62L145,122.34l71-71,18.34,18.35a8,8,0,0,0,11.32-11.32ZM168,168l-56,56H32V144L88,88l34.34,34.34-40,40a8,8,0,0,0,11.32,11.32l40-40Z" }));
});
n.displayName = "Regular";
export {
  n as Regular,
  n as default
};
