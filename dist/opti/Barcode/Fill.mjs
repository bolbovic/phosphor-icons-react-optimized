var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var H = (a, m, e) => m in a ? c(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, o = (a, m) => {
  for (var e in m || (m = {}))
    Z.call(m, e) && H(a, e, m[e]);
  if (r)
    for (var e of r(m))
      l.call(m, e) && H(a, e, m[e]);
  return a;
};
var i = (a, m) => {
  var e = {};
  for (var t in a)
    Z.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && l.call(a, t) && (e[t] = a[t]);
  return e;
};
import p, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((t, e) => {
  var V = t, { children: a } = V, m = i(V, ["children"]);
  return /* @__PURE__ */ p.createElement(s, o({ ref: e }, m), a, /* @__PURE__ */ p.createElement("path", { d: "M224,40H32a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V48A8,8,0,0,0,224,40ZM40,64a8,8,0,0,1,8-8H80a8,8,0,0,1,0,16H56V96a8,8,0,0,1-16,0ZM80,200H48a8,8,0,0,1-8-8V160a8,8,0,0,1,16,0v24H80a8,8,0,0,1,0,16Zm24-48a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm24,8a8,8,0,0,1-8-8V104a8,8,0,0,1,16,0v48A8,8,0,0,1,160,160Zm56,32a8,8,0,0,1-8,8H176a8,8,0,0,1,0-16h24V160a8,8,0,0,1,16,0Zm0-96a8,8,0,0,1-16,0V72H176a8,8,0,0,1,0-16h32a8,8,0,0,1,8,8Z" }));
});
d.displayName = "Fill";
export {
  d as Fill
};
