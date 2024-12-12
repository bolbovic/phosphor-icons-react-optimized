var s = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var c = (a, m, e) => m in a ? s(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, Z = (a, m) => {
  for (var e in m || (m = {}))
    p.call(m, e) && c(a, e, m[e]);
  if (t)
    for (var e of t(m))
      l.call(m, e) && c(a, e, m[e]);
  return a;
};
var f = (a, m) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && m.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      m.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import i, { forwardRef as H } from "react";
import R from "../../lib/OptiBase.mjs";
const d = H((r, e) => {
  var o = r, { children: a } = o, m = f(o, ["children"]);
  return /* @__PURE__ */ i.createElement(R, Z({ ref: e }, m), a, /* @__PURE__ */ i.createElement("path", { d: "M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,72h64a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm80,48H40a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16Zm128-40c0,36.52-50.28,62.08-52.42,63.16a8,8,0,0,1-7.16,0C186.28,206.08,136,180.52,136,144a32,32,0,0,1,56-21.14A32,32,0,0,1,248,144Zm-16,0a16,16,0,0,0-32,0,8,8,0,0,1-16,0,16,16,0,0,0-32,0c0,20.18,26.21,39.14,40,46.93C205.79,183.15,232,164.19,232,144Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
