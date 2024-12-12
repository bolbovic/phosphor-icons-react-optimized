var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, m, e) => m in a ? f(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    Z.call(m, e) && o(a, e, m[e]);
  if (r)
    for (var e of r(m))
      i.call(m, e) && o(a, e, m[e]);
  return a;
};
var n = (a, m) => {
  var e = {};
  for (var t in a)
    Z.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const d = h((t, e) => {
  var A = t, { children: a } = A, m = n(A, ["children"]);
  return /* @__PURE__ */ c.createElement(s, p({ ref: e }, m), a, /* @__PURE__ */ c.createElement("path", { d: "M84,196a8,8,0,1,1-8-8A8,8,0,0,1,84,196Zm32,8a8,8,0,1,0,8,8A8,8,0,0,0,116,204Zm48-16a8,8,0,1,0,8,8A8,8,0,0,0,164,188ZM68,228a8,8,0,1,0,8,8A8,8,0,0,0,68,228Zm88,0a8,8,0,1,0,8,8A8,8,0,0,0,156,228ZM228,92a72.08,72.08,0,0,1-72,72H76A48,48,0,1,1,87.51,69.39,72.08,72.08,0,0,1,228,92Zm-8,0A64.06,64.06,0,0,0,92,88.23a4,4,0,0,1-8-.46,71.63,71.63,0,0,1,1.42-10.65A40,40,0,1,0,76,156h80A64.07,64.07,0,0,0,220,92Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
