var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, m, e) => m in a ? f(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, h = (a, m) => {
  for (var e in m || (m = {}))
    i.call(m, e) && c(a, e, m[e]);
  if (r)
    for (var e of r(m))
      p.call(m, e) && c(a, e, m[e]);
  return a;
};
var n = (a, m) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import Z, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const d = s((t, e) => {
  var o = t, { children: a } = o, m = n(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(H, h({ ref: e }, m), a, /* @__PURE__ */ Z.createElement("path", { d: "M36,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H40A4,4,0,0,1,36,64Zm4,68h64a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8Zm80,56H40a4,4,0,0,0,0,8h80a4,4,0,0,0,0-8Zm124-44c0,14.51-8.56,29-25.44,43.07a143.52,143.52,0,0,1-24.77,16.51,4,4,0,0,1-3.58,0,143.52,143.52,0,0,1-24.77-16.51C148.56,173,140,158.51,140,144a28,28,0,0,1,52-14.41A28,28,0,0,1,244,144Zm-8,0a20,20,0,0,0-40,0,4,4,0,0,1-8,0,20,20,0,0,0-40,0c0,25.8,35.54,46.83,44,51.47C200.46,190.83,236,169.8,236,144Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
