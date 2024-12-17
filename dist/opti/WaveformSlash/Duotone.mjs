var i = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && p(a, e, t[e]);
  if (V)
    for (var e of V(t))
      c.call(t, e) && p(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var o in a)
    Z.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && V)
    for (var o of V(a))
      t.indexOf(o) < 0 && c.call(a, o) && (e[o] = a[o]);
  return e;
};
import m, { forwardRef as v } from "react";
import A from "../../lib/OptiBase.mjs";
const M = v((o, e) => {
  var r = o, { children: a } = r, t = n(r, ["children"]);
  return /* @__PURE__ */ m.createElement(A, l({ ref: e }, t), a, /* @__PURE__ */ m.createElement("path", { d: "M208,96v64H48V96Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M56,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0ZM53.92,34.62A8,8,0,1,0,42.08,45.38L80,87.09V224a8,8,0,0,0,16,0V104.69l24,26.4V192a8,8,0,0,0,16,0V148.69l66.08,72.69a8,8,0,1,0,11.84-10.76ZM88,44.43a8,8,0,0,0,8-8V32a8,8,0,0,0-16,0v4.43A8,8,0,0,0,88,44.43Zm40,44a8,8,0,0,0,8-8V64a8,8,0,0,0-16,0V80.43A8,8,0,0,0,128,88.43Zm40,44a8,8,0,0,0,8-8V96a8,8,0,0,0-16,0v28.43A8,8,0,0,0,168,132.43ZM208,72a8,8,0,0,0-8,8v88.43a8,8,0,0,0,16,0V80A8,8,0,0,0,208,72Z" }));
});
M.displayName = "Duotone";
export {
  M as Duotone
};
