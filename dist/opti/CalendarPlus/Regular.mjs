var c = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, V, e) => V in a ? c(a, V, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[V] = e, v = (a, V) => {
  for (var e in V || (V = {}))
    o.call(V, e) && m(a, e, V[e]);
  if (t)
    for (var e of t(V))
      p.call(V, e) && m(a, e, V[e]);
  return a;
};
var h = (a, V) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && V.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      V.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import l, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((r, e) => {
  var H = r, { children: a } = H, V = h(H, ["children"]);
  return /* @__PURE__ */ l.createElement(i, v({ ref: e }, V), a, /* @__PURE__ */ l.createElement("path", { d: "M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-48-56a8,8,0,0,1-8,8H136v16a8,8,0,0,1-16,0V160H104a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16A8,8,0,0,1,160,152Z" }));
});
s.displayName = "Regular";
export {
  s as Regular
};
