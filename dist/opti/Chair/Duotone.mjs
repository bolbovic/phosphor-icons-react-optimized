var n = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && r(a, e, t[e]);
  if (o)
    for (var e of o(t))
      v.call(t, e) && r(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var H in a)
    p.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && o)
    for (var H of o(a))
      t.indexOf(H) < 0 && v.call(a, H) && (e[H] = a[H]);
  return e;
};
import m, { forwardRef as Z } from "react";
import i from "../../lib/OptiBase.mjs";
const d = Z((H, e) => {
  var V = H, { children: a } = V, t = h(V, ["children"]);
  return /* @__PURE__ */ m.createElement(i, c({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M56,88V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V88a8,8,0,0,1-8,8H64A8,8,0,0,1,56,88Zm152,56H48a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V152A8,8,0,0,0,208,144Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M208,136H176V104h16a16,16,0,0,0,16-16V40a16,16,0,0,0-16-16H64A16,16,0,0,0,48,40V88a16,16,0,0,0,16,16H80v32H48a16,16,0,0,0-16,16v16a16,16,0,0,0,16,16h8v40a8,8,0,0,0,16,0V184H184v40a8,8,0,0,0,16,0V184h8a16,16,0,0,0,16-16V152A16,16,0,0,0,208,136ZM64,40H192V88H64Zm32,64h64v32H96Zm112,64H48V152H208v16Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
