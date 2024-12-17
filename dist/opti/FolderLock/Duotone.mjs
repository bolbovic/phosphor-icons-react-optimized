var n = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && h(a, e, t[e]);
  if (m)
    for (var e of m(t))
      V.call(t, e) && h(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && V.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as v } from "react";
import A from "../../lib/OptiBase.mjs";
const i = v((o, e) => {
  var H = o, { children: a } = H, t = c(H, ["children"]);
  return /* @__PURE__ */ r.createElement(A, Z({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M224,168v40H152V168ZM92.69,48H40a8,8,0,0,0-8,8V80h96L98.34,50.34A8,8,0,0,0,92.69,48Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M224,160h-8v-4a28,28,0,0,0-56,0v4h-8a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8V168A8,8,0,0,0,224,160Zm-48-4a12,12,0,0,1,24,0v4H176Zm40,44H160V176h56Zm0-128H131.31L104,44.69A15.86,15.86,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.4,15.4,0,0,0,39.38,216h73.18a8,8,0,0,0,0-16H40V88H216v16a8,8,0,0,0,16,0V88A16,16,0,0,0,216,72ZM92.69,56l16,16H40V56Z" }));
});
i.displayName = "Duotone";
export {
  i as Duotone
};
