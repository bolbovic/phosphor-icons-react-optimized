var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      n.call(t, e) && c(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var o in a)
    l.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && n.call(a, o) && (e[o] = a[o]);
  return e;
};
import m, { forwardRef as L } from "react";
import d from "../../lib/OptiBase.mjs";
const f = L((o, e) => {
  var p = o, { children: a } = p, t = i(p, ["children"]);
  return /* @__PURE__ */ m.createElement(d, s({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M215.92,152H40.08a8.1,8.1,0,0,1-6.26-13.2L115.48,38a16.1,16.1,0,0,1,25,0L222.18,138.8A8.1,8.1,0,0,1,215.92,152Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M232,200a8,8,0,0,1-8,8H32a8,8,0,1,1,0-16H224A8,8,0,0,1,232,200ZM25.59,150.84a16,16,0,0,1,2-17.07L109.26,32.94a24.11,24.11,0,0,1,37.48,0l81.65,100.83A16.1,16.1,0,0,1,215.91,160H40.09A16,16,0,0,1,25.59,150.84ZM40,143.91s0,.09.08.11l175.83,0s.08-.09.08-.13L134.3,43a8.1,8.1,0,0,0-12.6,0L40,143.84A.28.28,0,0,0,40,143.91Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};