var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const n = s((l, e) => {
  var m = l, { children: a } = m, t = H(m, ["children"]);
  return /* @__PURE__ */ c.createElement(d, V({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM200,192H56a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0V92.69l32,32,34.34-34.35a8,8,0,0,1,11.32,0L176,124.69V104a8,8,0,0,1,16,0v40a8,8,0,0,1-8,8H144a8,8,0,0,1,0-16h20.69L136,107.31l-34.34,34.35a8,8,0,0,1-11.32,0L64,115.31V176H200a8,8,0,0,1,0,16Z" }));
});
n.displayName = "Fill";
export {
  n as Fill
};