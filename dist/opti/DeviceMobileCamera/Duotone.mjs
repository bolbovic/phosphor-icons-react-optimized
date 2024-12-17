var V = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    n.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      h.call(t, e) && c(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var o in a)
    n.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && h.call(a, o) && (e[o] = a[o]);
  return e;
};
import m, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const l = d((o, e) => {
  var p = o, { children: a } = p, t = A(p, ["children"]);
  return /* @__PURE__ */ m.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M192,40V216a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V40A16,16,0,0,1,80,24h96A16,16,0,0,1,192,40Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16Zm8,200a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8ZM140,60a12,12,0,1,1-12-12A12,12,0,0,1,140,60Z" }));
});
l.displayName = "Duotone";
export {
  l as Duotone
};
