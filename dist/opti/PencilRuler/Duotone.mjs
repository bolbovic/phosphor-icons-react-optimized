var c = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    m.call(t, e) && h(a, e, t[e]);
  if (V)
    for (var e of V(t))
      Z.call(t, e) && h(a, e, t[e]);
  return a;
};
var M = (a, t) => {
  var e = {};
  for (var H in a)
    m.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && V)
    for (var H of V(a))
      t.indexOf(H) < 0 && Z.call(a, H) && (e[H] = a[H]);
  return e;
};
import o, { forwardRef as n } from "react";
import i from "../../lib/OptiBase.mjs";
const l = n((H, e) => {
  var r = H, { children: a } = r, t = M(r, ["children"]);
  return /* @__PURE__ */ o.createElement(i, p({ ref: e }, t), a, /* @__PURE__ */ o.createElement(
    "path",
    {
      d: "M40,184h64v24a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8ZM208,40H160a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V48A8,8,0,0,0,208,40Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ o.createElement("path", { d: "M208,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H160V176h24a8,8,0,0,0,0-16H160V136h24a8,8,0,0,0,0-16H160V96h24a8,8,0,0,0,0-16H160V48h48V208ZM77.66,26.34a8,8,0,0,0-11.32,0l-32,32A8,8,0,0,0,32,64V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V64a8,8,0,0,0-2.34-5.66ZM48,176V80H64v96ZM80,80H96v96H80ZM72,43.31,92.69,64H51.31ZM48,208V192H96v16Z" }));
});
l.displayName = "Duotone";
export {
  l as Duotone
};
