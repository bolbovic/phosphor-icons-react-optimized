var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && V(a, e, t[e]);
  if (o)
    for (var e of o(t))
      Z.call(t, e) && V(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var H in a)
    p.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && o)
    for (var H of o(a))
      t.indexOf(H) < 0 && Z.call(a, H) && (e[H] = a[H]);
  return e;
};
import m, { forwardRef as M } from "react";
import d from "../../lib/OptiBase.mjs";
const f = M((H, e) => {
  var r = H, { children: a } = r, t = n(r, ["children"]);
  return /* @__PURE__ */ m.createElement(d, c({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M216,96V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H208A8,8,0,0,1,216,96Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM48,128H208v16H48Zm0,32H208v16H48ZM96,56a32,32,0,0,1,64,0V80H96ZM208,96v16H48V96Zm0,112H48V192H208v16Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
