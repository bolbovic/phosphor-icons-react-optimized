var f = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var Z = (a, m, e) => m in a ? f(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, v = (a, m) => {
  for (var e in m || (m = {}))
    H.call(m, e) && Z(a, e, m[e]);
  if (t)
    for (var e of t(m))
      o.call(m, e) && Z(a, e, m[e]);
  return a;
};
var l = (a, m) => {
  var e = {};
  for (var V in a)
    H.call(a, V) && m.indexOf(V) < 0 && (e[V] = a[V]);
  if (a != null && t)
    for (var V of t(a))
      m.indexOf(V) < 0 && o.call(a, V) && (e[V] = a[V]);
  return e;
};
import p, { forwardRef as s } from "react";
import c from "../../lib/OptiBase.mjs";
const d = s((V, e) => {
  var r = V, { children: a } = r, m = l(r, ["children"]);
  return /* @__PURE__ */ p.createElement(c, v({ ref: e }, m), a, /* @__PURE__ */ p.createElement("path", { d: "M240,208h-8V88a8,8,0,0,0-8-8H160a8,8,0,0,0-8,8v40H104V40a8,8,0,0,0-8-8H32a8,8,0,0,0-8,8V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM168,96h48V208H168Zm-16,48v64H104V144ZM40,48H88V208H40ZM72,72V88a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Zm0,48v16a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm0,48v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm48,16V168a8,8,0,0,1,16,0v16a8,8,0,0,1-16,0Zm64,0V168a8,8,0,0,1,16,0v16a8,8,0,0,1-16,0Zm0-48V120a8,8,0,0,1,16,0v16a8,8,0,0,1-16,0Z" }));
});
d.displayName = "Regular";
export {
  d as Regular,
  d as default
};
