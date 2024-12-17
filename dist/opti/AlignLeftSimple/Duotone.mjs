var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    n.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      H.call(t, e) && c(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var o in a)
    n.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && H.call(a, o) && (e[o] = a[o]);
  return e;
};
import m, { forwardRef as f } from "react";
import l from "../../lib/OptiBase.mjs";
const s = f((o, e) => {
  var p = o, { children: a } = p, t = V(p, ["children"]);
  return /* @__PURE__ */ m.createElement(l, i({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M232,96v64a8,8,0,0,1-8,8H72a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H224A8,8,0,0,1,232,96Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M40,56V200a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0ZM240,96v64a16,16,0,0,1-16,16H72a16,16,0,0,1-16-16V96A16,16,0,0,1,72,80H224A16,16,0,0,1,240,96Zm-16,64V96H72v64H224Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
