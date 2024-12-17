var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const n = s((r, e) => {
  var l = r, { children: a } = l, t = V(l, ["children"]);
  return /* @__PURE__ */ c.createElement(d, H({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM112,88a64.07,64.07,0,0,1,64,64,8,8,0,0,1-16,0,48.05,48.05,0,0,0-48-48,8,8,0,0,1,0-16Zm88,104H80a8,8,0,0,1-8-8V104H56a8,8,0,0,1,0-16H72V72a8,8,0,0,1,16,0V176H200a8,8,0,0,1,0,16Z" }));
});
n.displayName = "Fill";
export {
  n as Fill
};
