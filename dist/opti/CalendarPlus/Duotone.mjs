var v = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? v(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      c.call(t, e) && m(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var V in a)
    p.call(a, V) && t.indexOf(V) < 0 && (e[V] = a[V]);
  if (a != null && o)
    for (var V of o(a))
      t.indexOf(V) < 0 && c.call(a, V) && (e[V] = a[V]);
  return e;
};
import H, { forwardRef as i } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = i((V, e) => {
  var r = V, { children: a } = r, t = n(r, ["children"]);
  return /* @__PURE__ */ H.createElement(Z, h({ ref: e }, t), a, /* @__PURE__ */ H.createElement(
    "path",
    {
      d: "M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ H.createElement("path", { d: "M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-48-56a8,8,0,0,1-8,8H136v16a8,8,0,0,1-16,0V160H104a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16A8,8,0,0,1,160,152Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
