var n = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && V(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && V(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    h.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import H, { forwardRef as A } from "react";
import i from "../../lib/OptiBase.mjs";
const d = A((m, e) => {
  var r = m, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ H.createElement(i, Z({ ref: e }, t), a, /* @__PURE__ */ H.createElement(
    "path",
    {
      d: "M240,48V208a8,8,0,0,1-8,8H152a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h80A8,8,0,0,1,240,48Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ H.createElement("path", { d: "M216,72a8,8,0,0,1-8,8H176a8,8,0,0,1,0-16h32A8,8,0,0,1,216,72Zm-8,24H176a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm40-48V208a16,16,0,0,1-16,16H152a16,16,0,0,1-16-16V192H96v16h16a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16H80V192H32A24,24,0,0,1,8,168V96A24,24,0,0,1,32,72H136V48a16,16,0,0,1,16-16h80A16,16,0,0,1,248,48ZM136,176V88H32a8,8,0,0,0-8,8v72a8,8,0,0,0,8,8Zm96,32V48H152V208h80Zm-40-40a12,12,0,1,0,12,12A12,12,0,0,0,192,168Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
