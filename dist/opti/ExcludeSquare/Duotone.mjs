var Z = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && r(a, e, t[e]);
  if (H)
    for (var e of H(t))
      c.call(t, e) && r(a, e, t[e]);
  return a;
};
var v = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && H)
    for (var o of H(a))
      t.indexOf(o) < 0 && c.call(a, o) && (e[o] = a[o]);
  return e;
};
import m, { forwardRef as i } from "react";
import d from "../../lib/OptiBase.mjs";
const f = i((o, e) => {
  var V = o, { children: a } = V, t = v(V, ["children"]);
  return /* @__PURE__ */ m.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ m.createElement("path", { d: "M96,96v64H40V40H160V96Zm64,0v64H96v56H216V96Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M216,88H168V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V160a8,8,0,0,0,8,8H88v48a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V96A8,8,0,0,0,216,88ZM48,152V48H152V88H96a8,8,0,0,0-8,8v56Zm104-48v48H104V104Zm56,104H104V168h56a8,8,0,0,0,8-8V104h40Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
