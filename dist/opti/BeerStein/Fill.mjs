var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var r in a)
    c.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import H, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const M = f((r, e) => {
  var l = r, { children: a } = l, t = V(l, ["children"]);
  return /* @__PURE__ */ H.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M216,88H200V72a40,40,0,0,0-40-40H148.82c-11.91-10.2-28-16-44.82-16C68.71,16,40,41.12,40,72V208a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16v-8h16a24,24,0,0,0,24-24V112A24,24,0,0,0,216,88ZM104,184a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0ZM57,64c4.46-18.24,23.85-32,47-32,13.87,0,27.06,5,36.21,13.78A8,8,0,0,0,145.74,48H160a24,24,0,0,1,22.62,16ZM224,176a8,8,0,0,1-8,8H200V104h16a8,8,0,0,1,8,8Z" }));
});
M.displayName = "Fill";
export {
  M as Fill
};
