var v = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, m, e) => m in a ? v(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, H = (a, m) => {
  for (var e in m || (m = {}))
    Z.call(m, e) && o(a, e, m[e]);
  if (t)
    for (var e of t(m))
      p.call(m, e) && o(a, e, m[e]);
  return a;
};
var V = (a, m) => {
  var e = {};
  for (var r in a)
    Z.call(a, r) && m.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      m.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import l, { forwardRef as A } from "react";
import c from "../../lib/OptiBase.mjs";
const f = A((r, e) => {
  var h = r, { children: a } = h, m = V(h, ["children"]);
  return /* @__PURE__ */ l.createElement(c, H({ ref: e }, m), a, /* @__PURE__ */ l.createElement("path", { d: "M160,80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H160a16,16,0,0,0,16-16V96A16,16,0,0,0,160,80Zm0,128H48V96H160ZM136,40a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H144A8,8,0,0,1,136,40Zm88,8v8a8,8,0,0,1-16,0V48h-8a8,8,0,0,1,0-16h8A16,16,0,0,1,224,48Zm0,48v16a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Zm0,56v8a16,16,0,0,1-16,16h-8a8,8,0,0,1,0-16h8v-8a8,8,0,0,1,16,0ZM80,56V48A16,16,0,0,1,96,32h8a8,8,0,0,1,0,16H96v8a8,8,0,0,1-16,0Z" }));
});
f.displayName = "Regular";
export {
  f as Regular
};
