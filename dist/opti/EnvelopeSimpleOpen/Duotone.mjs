var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, i = (e, t) => {
  for (var a in t || (t = {}))
    c.call(t, a) && p(e, a, t[a]);
  if (o)
    for (var a of o(t))
      n.call(t, a) && p(e, a, t[a]);
  return e;
};
var d = (e, t) => {
  var a = {};
  for (var l in e)
    c.call(e, l) && t.indexOf(l) < 0 && (a[l] = e[l]);
  if (e != null && o)
    for (var l of o(e))
      t.indexOf(l) < 0 && n.call(e, l) && (a[l] = e[l]);
  return a;
};
import r, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const M = h((l, a) => {
  var m = l, { children: e } = m, t = d(m, ["children"]);
  return /* @__PURE__ */ r.createElement(s, i({ ref: a }, t), e, /* @__PURE__ */ r.createElement("path", { d: "M224,96l-78.55,56h-34.9L32,96l96-64Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M228.44,89.34l-96-64a8,8,0,0,0-8.88,0l-96,64A8,8,0,0,0,24,96V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V96A8,8,0,0,0,228.44,89.34ZM128,41.61l81.91,54.61-67,47.78H113.11l-67-47.78ZM40,200V111.53l65.9,47a8,8,0,0,0,4.65,1.49h34.9a8,8,0,0,0,4.65-1.49l65.9-47V200Z" }));
});
M.displayName = "Duotone";
export {
  M as Duotone
};
