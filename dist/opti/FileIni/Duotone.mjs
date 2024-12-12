var Z = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      c.call(t, e) && p(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    A.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && c.call(a, m) && (e[m] = a[m]);
  return e;
};
import r, { forwardRef as i } from "react";
import v from "../../lib/OptiBase.mjs";
const d = i((m, e) => {
  var V = m, { children: a } = V, t = n(V, ["children"]);
  return /* @__PURE__ */ r.createElement(v, l({ ref: e }, t), a, /* @__PURE__ */ r.createElement("path", { d: "M208,88H152V32Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M48,152v56a8,8,0,0,1-16,0V152a8,8,0,0,1,16,0Zm72-8a8,8,0,0,0-8,8v31L86.51,147.35A8,8,0,0,0,72,152v56a8,8,0,0,0,16,0V177l25.49,35.69A8,8,0,0,0,120,216a7.91,7.91,0,0,0,2.44-.38A8,8,0,0,0,128,208V152A8,8,0,0,0,120,144Zm40,0a8,8,0,0,0-8,8v56a8,8,0,0,0,16,0V152A8,8,0,0,0,160,144Zm56-56V224a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
