var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (m)
    for (var e of m(t))
      H.call(t, e) && l(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && H.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as d } from "react";
import i from "../../lib/OptiBase.mjs";
const R = d((r, e) => {
  var o = r, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ s.createElement(i, V({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M72,216a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H64a8,8,0,0,1,0,16H48V208H64A8,8,0,0,1,72,216ZM216,32H192a8,8,0,0,0,0,16h16V208H192a8,8,0,0,0,0,16h24a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Zm-32,88a32,32,0,0,0-56-21.13,31.93,31.93,0,0,0-40.71-6.15A8,8,0,0,0,72,96v64a8,8,0,0,0,16,0V120a16,16,0,0,1,32,0v40a8,8,0,0,0,16,0V120a16,16,0,0,1,32,0v40a8,8,0,0,0,16,0Z" }));
});
R.displayName = "Regular";
export {
  R as Regular,
  R as default
};
