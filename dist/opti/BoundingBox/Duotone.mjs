var A = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
var v = (a, H, e) => H in a ? A(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, Z = (a, H) => {
  for (var e in H || (H = {}))
    m.call(H, e) && v(a, e, H[e]);
  if (t)
    for (var e of t(H))
      r.call(H, e) && v(a, e, H[e]);
  return a;
};
var p = (a, H) => {
  var e = {};
  for (var V in a)
    m.call(a, V) && H.indexOf(V) < 0 && (e[V] = a[V]);
  if (a != null && t)
    for (var V of t(a))
      H.indexOf(V) < 0 && r.call(a, V) && (e[V] = a[V]);
  return e;
};
import h, { forwardRef as M } from "react";
import c from "../../lib/OptiBase.mjs";
const n = M((V, e) => {
  var o = V, { children: a } = o, H = p(o, ["children"]);
  return /* @__PURE__ */ h.createElement(c, Z({ ref: e }, H), a, /* @__PURE__ */ h.createElement(
    "path",
    {
      d: "M216,48V80a8,8,0,0,1-8,8H176a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h32A8,8,0,0,1,216,48ZM80,40H48a8,8,0,0,0-8,8V80a8,8,0,0,0,8,8H80a8,8,0,0,0,8-8V48A8,8,0,0,0,80,40ZM208,168H176a8,8,0,0,0-8,8v32a8,8,0,0,0,8,8h32a8,8,0,0,0,8-8V176A8,8,0,0,0,208,168ZM80,168H48a8,8,0,0,0-8,8v32a8,8,0,0,0,8,8H80a8,8,0,0,0,8-8V176A8,8,0,0,0,80,168Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ h.createElement("path", { d: "M208,96a16,16,0,0,0,16-16V48a16,16,0,0,0-16-16H176a16,16,0,0,0-16,16v8H96V48A16,16,0,0,0,80,32H48A16,16,0,0,0,32,48V80A16,16,0,0,0,48,96h8v64H48a16,16,0,0,0-16,16v32a16,16,0,0,0,16,16H80a16,16,0,0,0,16-16v-8h64v8a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V176a16,16,0,0,0-16-16h-8V96ZM176,48h32V80H176ZM48,48H80V63.9a.51.51,0,0,0,0,.2V80H48ZM80,208H48V176H80v15.9a.51.51,0,0,0,0,.2V208Zm128,0H176V176h32Zm-24-48h-8a16,16,0,0,0-16,16v8H96v-8a16,16,0,0,0-16-16H72V96h8A16,16,0,0,0,96,80V72h64v8a16,16,0,0,0,16,16h8Z" }));
});
n.displayName = "Duotone";
export {
  n as Duotone
};
