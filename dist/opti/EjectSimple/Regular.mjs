var i = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    s.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    s.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import d, { forwardRef as A } from "react";
import R from "../../lib/OptiBase.mjs";
const n = A((r, e) => {
  var m = r, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ d.createElement(R, f({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M232,200a8,8,0,0,1-8,8H32a8,8,0,1,1,0-16H224A8,8,0,0,1,232,200ZM25.59,150.84a16,16,0,0,1,2-17.07L109.26,32.94a24.11,24.11,0,0,1,37.48,0l81.65,100.83A16.1,16.1,0,0,1,215.91,160H40.09A16,16,0,0,1,25.59,150.84ZM40,143.91s0,.09.08.11l175.83,0s.08-.09.08-.13L134.3,43a8.1,8.1,0,0,0-12.6,0L40,143.84A.28.28,0,0,0,40,143.91Z" }));
});
n.displayName = "Regular";
export {
  n as Regular,
  n as default
};
