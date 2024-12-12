var i = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      f.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && f.call(a, r) && (e[r] = a[r]);
  return e;
};
import d, { forwardRef as H } from "react";
import R from "../../lib/OptiBase.mjs";
const n = H((r, e) => {
  var m = r, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ d.createElement(R, s({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M232,208a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16H224A8,8,0,0,1,232,208ZM72,152a8,8,0,0,0,8-8V67.31l98.34,98.35a8,8,0,0,0,11.32-11.32L91.31,56H168a8,8,0,0,0,0-16H72a8,8,0,0,0-8,8v96A8,8,0,0,0,72,152Z" }));
});
n.displayName = "Regular";
export {
  n as Regular,
  n as default
};
