var i = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var Z = (a, e, l) => e in a ? i(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, M = (a, e) => {
  for (var l in e || (e = {}))
    o.call(e, l) && Z(a, l, e[l]);
  if (t)
    for (var l of t(e))
      p.call(e, l) && Z(a, l, e[l]);
  return a;
};
var c = (a, e) => {
  var l = {};
  for (var r in a)
    o.call(a, r) && e.indexOf(r) < 0 && (l[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      e.indexOf(r) < 0 && p.call(a, r) && (l[r] = a[r]);
  return l;
};
import f, { forwardRef as s } from "react";
import R from "../../lib/OptiBase.mjs";
const d = s((r, l) => {
  var m = r, { children: a } = m, e = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(R, M({ ref: l }, e), a, /* @__PURE__ */ f.createElement("path", { d: "M122.34,109.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0,0-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40a8,8,0,0,0,0,11.32ZM128,35.31,156.69,64,128,92.69,99.31,64Zm5.66,111a8,8,0,0,0-11.32,0l-40,40a8,8,0,0,0,0,11.32l40,40a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0,0-11.32ZM128,220.69,99.31,192,128,163.31,156.69,192Zm109.66-98.35-40-40a8,8,0,0,0-11.32,0l-40,40a8,8,0,0,0,0,11.32l40,40a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,237.66,122.34ZM192,156.69,163.31,128,192,99.31,220.69,128Zm-82.34-34.35-40-40a8,8,0,0,0-11.32,0l-40,40a8,8,0,0,0,0,11.32l40,40a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,109.66,122.34ZM64,156.69,35.31,128,64,99.31,92.69,128Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
