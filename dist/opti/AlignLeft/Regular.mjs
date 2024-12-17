var f = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var p = (a, m, e) => m in a ? f(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, l = (a, m) => {
  for (var e in m || (m = {}))
    H.call(m, e) && p(a, e, m[e]);
  if (t)
    for (var e of t(m))
      V.call(m, e) && p(a, e, m[e]);
  return a;
};
var Z = (a, m) => {
  var e = {};
  for (var r in a)
    H.call(a, r) && m.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      m.indexOf(r) < 0 && V.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const R = i((r, e) => {
  var o = r, { children: a } = o, m = Z(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, l({ ref: e }, m), a, /* @__PURE__ */ c.createElement("path", { d: "M48,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0Zm16,64V64A16,16,0,0,1,80,48h96a16,16,0,0,1,16,16v40a16,16,0,0,1-16,16H80A16,16,0,0,1,64,104Zm16,0h96V64H80Zm152,48v40a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V152a16,16,0,0,1,16-16H216A16,16,0,0,1,232,152Zm-16,40V152H80v40H216Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
