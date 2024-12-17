var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && V(a, e, t[e]);
  if (r)
    for (var e of r(t))
      n.call(t, e) && V(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var o in a)
    c.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && n.call(a, o) && (e[o] = a[o]);
  return e;
};
import m, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const l = f((o, e) => {
  var p = o, { children: a } = p, t = H(p, ["children"]);
  return /* @__PURE__ */ m.createElement(h, i({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M200,56V184a16,16,0,0,1-16,16H72a16,16,0,0,1-16-16V56Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M208,56V88a8,8,0,0,1-16,0V64H136V192h24a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16h24V64H64V88a8,8,0,0,1-16,0V56a8,8,0,0,1,8-8H200A8,8,0,0,1,208,56Z" }));
});
l.displayName = "Duotone";
export {
  l as Duotone
};
