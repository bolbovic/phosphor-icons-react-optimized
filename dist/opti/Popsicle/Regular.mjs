var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (m)
    for (var e of m(t))
      V.call(t, e) && l(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && V.call(a, r) && (e[r] = a[r]);
  return e;
};
import v, { forwardRef as c } from "react";
import d from "../../lib/OptiBase.mjs";
const h = c((r, e) => {
  var o = r, { children: a } = o, t = s(o, ["children"]);
  return /* @__PURE__ */ v.createElement(d, f({ ref: e }, t), a, /* @__PURE__ */ v.createElement("path", { d: "M128,8A72.08,72.08,0,0,0,56,80v96a16,16,0,0,0,16,16h32v40a24,24,0,0,0,48,0V192h32a16,16,0,0,0,16-16V80A72.08,72.08,0,0,0,128,8Zm8,224a8,8,0,0,1-16,0V192h16Zm48-56H72V80a56,56,0,0,1,112,0v96ZM120,72v80a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Zm32,0v80a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Z" }));
});
h.displayName = "Regular";
export {
  h as Regular,
  h as default
};
