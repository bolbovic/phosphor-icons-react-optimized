var l = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && h(a, e, t[e]);
  if (o)
    for (var e of o(t))
      Z.call(t, e) && h(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var H in a)
    p.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && o)
    for (var H of o(a))
      t.indexOf(H) < 0 && Z.call(a, H) && (e[H] = a[H]);
  return e;
};
import m, { forwardRef as n } from "react";
import i from "../../lib/OptiBase.mjs";
const v = n((H, e) => {
  var r = H, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ m.createElement(i, V({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M224,96H32L42.65,46.32A8,8,0,0,1,50.47,40H205.53a8,8,0,0,1,7.82,6.32Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M240,88h-9.53l-9.29-43.35A16.08,16.08,0,0,0,205.53,32H50.47A16.08,16.08,0,0,0,34.82,44.65L25.53,88H16a8,8,0,0,0,0,16h8v96a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V176h96v24a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V104h8a8,8,0,0,0,0-16ZM50.47,48H205.53l8.57,40H41.9ZM64,200H40V176H64Zm128,0V176h24v24Zm24-40H152V128a8,8,0,0,0-16,0v32H120V128a8,8,0,0,0-16,0v32H40V104H216ZM56,132a12,12,0,1,1,12,12A12,12,0,0,1,56,132Zm120,0a12,12,0,1,1,12,12A12,12,0,0,1,176,132Z" }));
});
v.displayName = "Duotone";
export {
  v as Duotone
};
