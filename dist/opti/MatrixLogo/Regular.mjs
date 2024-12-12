var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var p = (a, r, e) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, l = (a, r) => {
  for (var e in r || (r = {}))
    H.call(r, e) && p(a, e, r[e]);
  if (m)
    for (var e of m(r))
      V.call(r, e) && p(a, e, r[e]);
  return a;
};
var c = (a, r) => {
  var e = {};
  for (var t in a)
    H.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && V.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import R from "../../lib/OptiBase.mjs";
const d = s((t, e) => {
  var o = t, { children: a } = o, r = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(R, l({ ref: e }, r), a, /* @__PURE__ */ f.createElement("path", { d: "M72,216a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H64a8,8,0,0,1,0,16H48V208H64A8,8,0,0,1,72,216ZM216,32H192a8,8,0,0,0,0,16h16V208H192a8,8,0,0,0,0,16h24a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Zm-32,88a32,32,0,0,0-56-21.13,31.93,31.93,0,0,0-40.71-6.15A8,8,0,0,0,72,96v64a8,8,0,0,0,16,0V120a16,16,0,0,1,32,0v40a8,8,0,0,0,16,0V120a16,16,0,0,1,32,0v40a8,8,0,0,0,16,0Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
