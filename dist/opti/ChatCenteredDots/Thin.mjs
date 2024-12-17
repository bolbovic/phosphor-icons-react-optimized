var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (a, m, e) => m in a ? Z(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, n = (a, m) => {
  for (var e in m || (m = {}))
    p.call(m, e) && i(a, e, m[e]);
  if (r)
    for (var e of r(m))
      l.call(m, e) && i(a, e, m[e]);
  return a;
};
var A = (a, m) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && l.call(a, t) && (e[t] = a[t]);
  return e;
};
import H, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const h = c((t, e) => {
  var o = t, { children: a } = o, m = A(o, ["children"]);
  return /* @__PURE__ */ H.createElement(f, n({ ref: e }, m), a, /* @__PURE__ */ H.createElement("path", { d: "M136,120a8,8,0,1,1-8-8A8,8,0,0,1,136,120Zm-52-8a8,8,0,1,0,8,8A8,8,0,0,0,84,112Zm88,0a8,8,0,1,0,8,8A8,8,0,0,0,172,112Zm56-56V184a12,12,0,0,1-12,12H153.25L138.42,222a12,12,0,0,1-20.84,0L102.75,196H40a12,12,0,0,1-12-12V56A12,12,0,0,1,40,44H216A12,12,0,0,1,228,56Zm-8,0a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V184a4,4,0,0,0,4,4h65.07a4,4,0,0,1,3.47,2l16,28a4,4,0,0,0,6.94,0l16-28a4,4,0,0,1,3.47-2H216a4,4,0,0,0,4-4Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
