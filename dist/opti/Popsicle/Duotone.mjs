var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && V(a, e, t[e]);
  if (m)
    for (var e of m(t))
      h.call(t, e) && V(a, e, t[e]);
  return a;
};
var v = (a, t) => {
  var e = {};
  for (var o in a)
    c.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && h.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as i } from "react";
import d from "../../lib/OptiBase.mjs";
const f = i((o, e) => {
  var p = o, { children: a } = p, t = v(p, ["children"]);
  return /* @__PURE__ */ r.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M192,80v96a8,8,0,0,1-8,8H72a8,8,0,0,1-8-8V80a64,64,0,0,1,64-64h0A64,64,0,0,1,192,80Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M128,8A72.08,72.08,0,0,0,56,80v96a16,16,0,0,0,16,16h32v40a24,24,0,0,0,48,0V192h32a16,16,0,0,0,16-16V80A72.08,72.08,0,0,0,128,8Zm8,224a8,8,0,0,1-16,0V192h16Zm48-56H72V80a56,56,0,0,1,112,0v96ZM120,72v80a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Zm32,0v80a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
