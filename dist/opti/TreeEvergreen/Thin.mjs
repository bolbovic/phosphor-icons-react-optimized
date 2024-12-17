var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import c, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const d = s((l, e) => {
  var m = l, { children: a } = m, t = n(m, ["children"]);
  return /* @__PURE__ */ c.createElement(H, h({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M227.16,189.54l-51-65.54H208a4,4,0,0,0,3.17-6.44l-80-104a4,4,0,0,0-6.34,0l-80,104A4,4,0,0,0,48,124H79.82l-51,65.54A4,4,0,0,0,32,196h92v44a4,4,0,0,0,8,0V196h92a4,4,0,0,0,3.16-6.46ZM40.18,188l51-65.54A4,4,0,0,0,88,116H56.12L128,22.56,199.88,116H168a4,4,0,0,0-3.16,6.46l51,65.54Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
