var n = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && r(a, e, t[e]);
  if (m)
    for (var e of m(t))
      A.call(t, e) && r(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var H in a)
    p.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && m)
    for (var H of m(a))
      t.indexOf(H) < 0 && A.call(a, H) && (e[H] = a[H]);
  return e;
};
import o, { forwardRef as i } from "react";
import v from "../../lib/OptiBase.mjs";
const d = i((H, e) => {
  var V = H, { children: a } = V, t = c(V, ["children"]);
  return /* @__PURE__ */ o.createElement(v, Z({ ref: e }, t), a, /* @__PURE__ */ o.createElement(
    "path",
    {
      d: "M216,128v24a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V128a8,8,0,0,1,8-8H208A8,8,0,0,1,216,128Zm-8-80H48a8,8,0,0,0-8,8V80a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V56A8,8,0,0,0,208,48Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ o.createElement("path", { d: "M208,112H48a16,16,0,0,0-16,16v24a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V128A16,16,0,0,0,208,112Zm0,40H48V128H208v24Zm0-112H48A16,16,0,0,0,32,56V80A16,16,0,0,0,48,96H208a16,16,0,0,0,16-16V56A16,16,0,0,0,208,40Zm0,40H48V56H208V80ZM160,216a8,8,0,0,1-8,8H136v16a8,8,0,0,1-16,0V224H104a8,8,0,0,1,0-16h16V192a8,8,0,0,1,16,0v16h16A8,8,0,0,1,160,216Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
