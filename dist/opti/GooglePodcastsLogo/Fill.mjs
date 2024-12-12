var f = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var r = (a, e, m) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : a[e] = m, i = (a, e) => {
  for (var m in e || (e = {}))
    V.call(e, m) && r(a, m, e[m]);
  if (t)
    for (var m of t(e))
      o.call(e, m) && r(a, m, e[m]);
  return a;
};
var p = (a, e) => {
  var m = {};
  for (var l in a)
    V.call(a, l) && e.indexOf(l) < 0 && (m[l] = a[l]);
  if (a != null && t)
    for (var l of t(a))
      e.indexOf(l) < 0 && o.call(a, l) && (m[l] = a[l]);
  return m;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const n = s((l, m) => {
  var Z = l, { children: a } = Z, e = p(Z, ["children"]);
  return /* @__PURE__ */ c.createElement(d, i({ ref: m }, e), a, /* @__PURE__ */ c.createElement("path", { d: "M243.32,116.68l-104-104a16,16,0,0,0-22.64,0l-104,104a16,16,0,0,0,0,22.64l104,104a16,16,0,0,0,22.64,0l104-104A16,16,0,0,0,243.32,116.68ZM56,136a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm40,40a8,8,0,0,1-16,0V160a8,8,0,0,1,16,0Zm0-48a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Zm40,88a8,8,0,0,1-16,0V200a8,8,0,0,1,16,0Zm0-48a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Zm0-112a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0Zm40,120a8,8,0,0,1-16,0V128a8,8,0,0,1,16,0Zm0-80a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Zm40,40a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Z" }));
});
n.displayName = "Fill";
export {
  n as Fill
};
