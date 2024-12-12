var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (m)
    for (var e of m(t))
      f.call(t, e) && l(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && f.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as h } from "react";
import i from "../../lib/OptiBase.mjs";
const R = h((r, e) => {
  var o = r, { children: a } = o, t = Z(o, ["children"]);
  return /* @__PURE__ */ c.createElement(i, s({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M120,136V96a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,24a12,12,0,1,0,12,12A12,12,0,0,0,128,160ZM96,16h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16ZM200,56V224a24,24,0,0,1-24,24H80a24,24,0,0,1-24-24V56A24,24,0,0,1,80,32h96A24,24,0,0,1,200,56Zm-16,0a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8V224a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8Z" }));
});
R.displayName = "Regular";
export {
  R as Regular,
  R as default
};
