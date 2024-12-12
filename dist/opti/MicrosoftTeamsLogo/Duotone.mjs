var n = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && p(a, e, t[e]);
  if (m)
    for (var e of m(t))
      Z.call(t, e) && p(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    A.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && Z.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as M } from "react";
import V from "../../lib/OptiBase.mjs";
const i = M((o, e) => {
  var H = o, { children: a } = H, t = c(H, ["children"]);
  return /* @__PURE__ */ r.createElement(V, h({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M144,80v96a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h96A8,8,0,0,1,144,80Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M80,152V112H72a8,8,0,0,1,0-16h32a8,8,0,0,1,0,16H96v40a8,8,0,0,1-16,0ZM232,92.74V152a40,40,0,0,1-36.63,39.85,64,64,0,0,1-118.7.15H40a16,16,0,0,1-16-16V80A16,16,0,0,1,40,64H96.81a40,40,0,0,1,73.31-28.85A32,32,0,0,1,211.69,80h7.57A12.76,12.76,0,0,1,232,92.74ZM175.6,50.4A39.89,39.89,0,0,1,168,80h16a16,16,0,1,0-8.4-29.6ZM113.38,64H136a16,16,0,0,1,15.07,10.68A24,24,0,1,0,113.38,64ZM40,176h96V80H40Zm144-8V96H152v80a16,16,0,0,1-16,16H94.44A48,48,0,0,0,184,168Zm32-72H200v72a62.76,62.76,0,0,1-.36,6.75A24,24,0,0,0,216,152Z" }));
});
i.displayName = "Duotone";
export {
  i as Duotone
};
