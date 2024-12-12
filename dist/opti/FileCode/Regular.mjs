var i = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? i(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, Z = (a, l) => {
  for (var e in l || (l = {}))
    p.call(l, e) && o(a, e, l[e]);
  if (t)
    for (var e of t(l))
      V.call(l, e) && o(a, e, l[e]);
  return a;
};
var c = (a, l) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && l.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      l.indexOf(r) < 0 && V.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const R = s((r, e) => {
  var m = r, { children: a } = m, l = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(H, Z({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M181.66,146.34a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L164.69,152l-18.35-18.34a8,8,0,0,1,11.32-11.32Zm-72-24a8,8,0,0,0-11.32,0l-24,24a8,8,0,0,0,0,11.32l24,24a8,8,0,0,0,11.32-11.32L91.31,152l18.35-18.34A8,8,0,0,0,109.66,122.34ZM216,88V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31Zm40,136V96H152a8,8,0,0,1-8-8V40H56V216H200Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
