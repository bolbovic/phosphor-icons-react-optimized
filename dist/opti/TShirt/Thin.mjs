var c = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (H)
    for (var e of H(t))
      h.call(t, e) && m(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && H)
    for (var r of H(a))
      t.indexOf(r) < 0 && h.call(a, r) && (e[r] = a[r]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const M = f((r, e) => {
  var l = r, { children: a } = l, t = p(l, ["children"]);
  return /* @__PURE__ */ n.createElement(s, i({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M245.68,64.73,193.91,36.49h0A4,4,0,0,0,192,36H160a4,4,0,0,0-4,4,28,28,0,0,1-56,0,4,4,0,0,0-4-4H64a4,4,0,0,0-1.9.5h0L10.32,64.73a11.79,11.79,0,0,0-5,15.89l19.28,36.81a12.37,12.37,0,0,0,11,6.57H60v84a12,12,0,0,0,12,12H184a12,12,0,0,0,12-12V124h24.33a12.37,12.37,0,0,0,11-6.57l19.28-36.81A11.79,11.79,0,0,0,245.68,64.73ZM35.67,116a4.46,4.46,0,0,1-4-2.28L12.44,76.91a3.79,3.79,0,0,1,1.71-5.15L60,46.74V116ZM188,208a4,4,0,0,1-4,4H72a4,4,0,0,1-4-4V44H92.22a36,36,0,0,0,71.56,0H188ZM243.56,76.91l-19.27,36.81a4.46,4.46,0,0,1-4,2.28H196V46.74l45.85,25A3.79,3.79,0,0,1,243.56,76.91Z" }));
});
M.displayName = "Thin";
export {
  M as Thin
};
