var n = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && H(a, e, t[e]);
  if (m)
    for (var e of m(t))
      A.call(t, e) && H(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    Z.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && A.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as h } from "react";
import i from "../../lib/OptiBase.mjs";
const v = h((o, e) => {
  var p = o, { children: a } = p, t = c(p, ["children"]);
  return /* @__PURE__ */ r.createElement(i, V({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M208,80v96a24,24,0,0,1-24,24H72a24,24,0,0,1-24-24V80A24,24,0,0,1,72,56H184A24,24,0,0,1,208,80Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M100,124a12,12,0,1,1,12-12A12,12,0,0,1,100,124Zm56-24a12,12,0,1,0,12,12A12,12,0,0,0,156,100Zm-4.27,45.23a45,45,0,0,1-47.46,0,8,8,0,0,0-8.54,13.54,61,61,0,0,0,64.54,0,8,8,0,0,0-8.54-13.54ZM216,80v96a32.06,32.06,0,0,1-24,31v17a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V207a32.06,32.06,0,0,1-24-31V80A32,32,0,0,1,72,48H88V32a16,16,0,0,1,16-16h48a16,16,0,0,1,16,16V48h16A32,32,0,0,1,216,80ZM104,48h48V32H104Zm72,176V208H80v16ZM200,80a16,16,0,0,0-16-16H72A16,16,0,0,0,56,80v96a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16Z" }));
});
v.displayName = "Duotone";
export {
  v as Duotone
};
